# aspfilm.com

The Anaconda Street Productions website. React + TanStack Start, served by a
Cloudflare Worker. Everything lives in `app/`.

## Cloudflare (Workers Builds, connected to this repo)

- Root directory: `app`
- Build command: `bun install && bun run build`
- Deploy command: `npx wrangler deploy`
- Variables and secrets (Worker > Settings):
  - `RESEND_API_KEY` (secret): sends contact-form requests to production@aspfilm.com
  - optional `INQUIRY_TO`, `INQUIRY_FROM`

Every push to `main` rebuilds and publishes the site.

## Local

```
cd app
bun install
bun run build
npx wrangler dev
```
