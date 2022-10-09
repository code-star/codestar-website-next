# Codestar blog

ssg with nextjs

## build

- set up a .env.local, use env.local.example as a template
- develop: `npm run dev` -> http://localhost:3000/codestar-website-next
- under github.com > settings > environment > environment secrets > add secret:
    - YOUTUBE_API_KEY
    - YOUTUBE_PLAYLIST_ID
- static build: `npx next build && npx next export`
- serve static build `serve -p 5000 out/`
