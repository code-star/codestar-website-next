# Codestar blog

ssg with nextjs

## build

- set up a .env.local, use env.local.example as a template
- develop: `npm run dev` -> http://localhost:3000/codestar-website-next
- under github.com > settings > security/secrets > actions > add new repository secret:
    - TWITTER_ACCESS_TOKEN
    - TWITTER_USER_NAME
    - YOUTUBE_API_KEY
    - YOUTUBE_PLAYLIST_ID
- static build: `npx next build && npx next export`
- serve static build `serve -p 5000 out/`
