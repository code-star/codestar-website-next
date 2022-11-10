[![test](https://github.com/code-star/codestar-website-next/actions/workflows/test.yml/badge.svg)](https://github.com/code-star/codestar-website-next/actions/workflows/test.yml)

[![prod](https://github.com/code-star/codestar-website-next/actions/workflows/prod.yml/badge.svg)](https://github.com/code-star/codestar-website-next/actions/workflows/prod.yml)

<img align=center src=https://cloud.githubusercontent.com/assets/4116708/12473911/e67fdd44-c016-11e5-9c21-5714e07549fe.png width=450 />

_Passionate programmers standing to make a change_

---

# Codestar blog

Note: uses static site generation with [NextJS](https://nextjs.org/). As a consequence, updated data from the APIs (tweets, publications, etc) will only be visible after rebuilding/redeploying.

## Developing

- set up a .env.local, use env.local.example as a template
- `npm i`
- `npm run dev`
- http://localhost:3000/codestar-website-next

## Building

- set up a .env.local, use env.local.example as a template
- `npm i`
- static build: `npx next build && npx next export`
- serve static build `serve -p 5000 out/`
- http://localhost:5000

## Deploying

Merges to the `main` branch are automatically deployed to the test environment at https://code-star.github.io/codestar-website-next/ by Github Actions. This is served on Github pages from the `gh-pages` branch on this repo.

Merges to the `production` branch are automatically deployed to the production environment at https://code-star.github.io by Github Actions. This is served on Github pages from the `main` branch on the https://github.com/code-star/code-star.github.io repo.

Settings for Github Actions:

- Under github.com > settings > security/secrets > actions > add new repository secret:
  - TWITTER_ACCESS_TOKEN
  - TWITTER_USER_NAME
  - YOUTUBE_API_KEY
  - YOUTUBE_PLAYLIST_ID
  - MASTODON_ACCESS_TOKEN
  - MASTODON_ID
- Also make sure a mapping exists for each key in test.yml and prod.yml
