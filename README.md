This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Setup local env

create a file `env.local` in the root folder and copy the following content

```
NX_DAEMON=""
POSTGRES_DATABASE="postgres"
POSTGRES_HOST="localhost:5432"
POSTGRES_PASSWORD="postgres"
DATABASE_URL="postgres://postgres:postgres@localhost:5432/postgres?pgbouncer=true&connect_timeout=15"
POSTGRES_URL="postgres://postgres:postgres@localhost:5432/postgres"
POSTGRES_URL_NON_POOLING="postgres://postgres:postgres@localhost:5432/postgres"
POSTGRES_USER="postgres"
TURBO_REMOTE_ONLY=""
TURBO_RUN_SUMMARY=""
VERCEL="1"
VERCEL_ENV="development"
VERCEL_GIT_COMMIT_AUTHOR_LOGIN=""
VERCEL_GIT_COMMIT_AUTHOR_NAME=""
VERCEL_GIT_COMMIT_MESSAGE=""
VERCEL_GIT_COMMIT_REF=""
VERCEL_GIT_COMMIT_SHA=""
VERCEL_GIT_PREVIOUS_SHA=""
VERCEL_GIT_PROVIDER=""
VERCEL_GIT_PULL_REQUEST_ID=""
VERCEL_GIT_REPO_ID=""
VERCEL_GIT_REPO_OWNER=""
VERCEL_GIT_REPO_SLUG=""
VERCEL_URL=""

NEXT_PUBLIC_API_URL="http://localhost:3000/api"
NEXT_PUBLIC_JWT_SECRET="secret"
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
