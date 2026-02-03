import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="grid gap-6">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            const featuredImage = images && images.length > 0 ? images[0] : null
            return (
              <li key={slug}>
                <article className="flex flex-col gap-4 rounded-xl bg-gray-50 p-4 shadow-md transition-shadow hover:shadow-lg md:flex-row dark:bg-gray-900/70 dark:shadow-gray-800/40">
                  {featuredImage && (
                    <Link href={`/news/${slug}`} className="shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={featuredImage}
                        alt={title}
                        className="h-48 w-full object-cover transition-transform hover:scale-105 md:h-40 md:w-56"
                      />
                    </Link>
                  )}
                  <div className="flex flex-1 flex-col justify-between space-y-2">
                    <div>
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm leading-6 font-medium text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <h2 className="mt-1 text-xl leading-7 font-bold tracking-tight">
                        <Link href={`/news/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h2>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                      {summary}
                    </p>
                    <div className="text-base leading-6 font-medium">
                      <Link
                        href={`/news/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/news"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
