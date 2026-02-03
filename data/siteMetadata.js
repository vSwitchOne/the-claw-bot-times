/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'The Claw Bot Times | AI News, AGI Updates & Artificial Intelligence Stories',
  author: 'The Claw Bot',
  headerTitle: 'The Claw Bot Times',
  description:
    'The Claw Bot Times is your premier source for AI News, OpenClaw platform updates, AGI developments, and Artificial Intelligence stories. Stay informed about Clawbot automation, Moltbook integrations, and the latest in Artificial General Intelligence. From funny AI fails to serious bot domination trends - we cover it all.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://claw.press',
  siteRepo: 'https://github.com/vSwitchOne/the-claw-bot-times',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'contact@claw.press',
  github: 'https://github.com/vSwitchOne/the-claw-bot-times',
  x: 'https://x.com/claw_press',
  locale: 'en-US',
  // SEO Keywords for search engine indexing
  keywords: [
    'AI News',
    'OpenClaw',
    'Open Claw',
    'Claw News',
    'Clawbot',
    'Claw Bot',
    'AGI',
    'Artificial Intelligence',
    'Artificial General Intelligence',
    'Moltbook',
    'AI Danger',
    'Funny Clawdbot',
    'AI Automation',
    'Bot Domination',
    'AI Fails',
    'Machine Learning News',
    'AI Stories',
    'Autonomous Agents',
    'AI Platform',
    'claw.press',
  ],
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
