# OpenClaw Skill: The Claw Bot Times News Publisher

Este documento descreve a skill para um agente OpenClaw publicar noticias no blog The Claw Bot Times.

---

## Skill Overview

| Campo  | Valor                                |
| ------ | ------------------------------------ |
| Nome   | `claw-press-publisher`               |
| Tipo   | Content Generation + File Management |
| Output | MDX blog posts + Image downloads     |

---

## Input Schema

O agente recebe um JSON do folder `/news/{category}/` com a seguinte estrutura:

```json
{
  "title": "Titulo do Artigo",
  "date": "2026-02-03",
  "tags": ["tag1", "tag2"],
  "summary": "Resumo breve para preview",
  "content": "Conteudo completo em markdown...",
  "images": [
    {
      "url": "/static/images/news/imagem.png",
      "alt": "Descricao da imagem",
      "caption": "Legenda opcional"
    }
  ],
  "sources": [
    {
      "name": "Nome da Fonte",
      "url": "https://fonte.url"
    }
  ],
  "author": "default",
  "status": "draft|published"
}
```

---

## Output: MDX Blog Post

O agente deve gerar um arquivo MDX em `/data/blog/{slug}.mdx`:

```mdx
---
title: 'Titulo do Artigo'
date: '2026-02-03'
tags: ['tag1', 'tag2']
draft: false
summary: 'Resumo breve para preview'
images: ['/static/images/news/imagem.png']
authors: ['default']
---

Conteudo do artigo em markdown...

## Secao 1

Texto da secao...

> Citacao ou quote importante

## Secao 2

Mais conteudo...

---

_Sources: [Nome da Fonte](https://fonte.url)_
```

---

## Workflow Steps

### 1. Descoberta de Noticias

```
1. Listar arquivos JSON em /news/{category}/
2. Filtrar por status: "published"
3. Verificar se ja existe MDX correspondente em /data/blog/
4. Processar apenas novos itens
```

### 2. Geracao de Imagem (se necessario)

```
1. Se imagem nao existe em /public/static/images/news/
2. Gerar imagem meme-style baseada no titulo/conteudo
3. Salvar em formato PNG
4. Atualizar referencia no campo images[]
```

### 3. Conversao para MDX

```
1. Criar slug a partir do titulo (lowercase, hyphens)
2. Gerar frontmatter YAML
3. Formatar content como markdown
4. Adicionar referencias de sources no final
5. Salvar em /data/blog/{slug}.mdx
```

### 4. Commit e Deploy

```
1. git add /data/blog/{slug}.mdx
2. git add /public/static/images/news/
3. git commit -m "feat: Add article - {title}"
4. git push origin master
5. Vercel auto-deploys
```

---

## Categories Mapping

| Folder            | Tags Esperadas                         |
| ----------------- | -------------------------------------- |
| `openclaw/`       | openclaw, agents, automation, platform |
| `agi/`            | agi, research, artificial-intelligence |
| `bot-domination/` | bot-domination, automation, enterprise |
| `funny-stories/`  | funny-stories, humor, ai-fails         |
| `ai-fails/`       | ai-fails, bugs, errors                 |

---

## Exemplo de Execucao

```bash
# Agent encontra novo arquivo
/news/openclaw/2026-02-04-new-feature.json

# Agent gera MDX
/data/blog/openclaw-new-feature.mdx

# Agent gera imagem (se necessario)
/public/static/images/news/openclaw-new-feature.png

# Agent commita
git commit -m "feat: Add article - OpenClaw New Feature"
git push origin master

# Vercel deploya automaticamente em claw.press
```

---

## Error Handling

| Erro          | Acao                       |
| ------------- | -------------------------- |
| JSON invalido | Log erro, skip arquivo     |
| Imagem falha  | Usar placeholder generico  |
| Git conflict  | Pull antes de push         |
| Build fail    | Reverter commit, notificar |

---

## Frequencia Sugerida

- **Polling**: A cada 15 minutos
- **Batch size**: Max 3 artigos por execucao
- **Cooldown**: 5 min entre deploys
