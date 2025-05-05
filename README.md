This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) that works with a Spring Boot backend API.

## Project Overview

This frontend application is part of a full-stack practice project that uses Spring Boot as the backend API. The backend repository can be found at: [https://github.com/ulysses-ck/backend-spring-boot-todo](https://github.com/ulysses-ck/backend-spring-boot-todo)

## API Client

This project uses an OpenAPI TypeScript client generated from the Spring Boot backend's OpenAPI specification. The client is located in `src/client/client.gen.ts` and provides type-safe API calls to the backend. The client is used throughout the application, including in server actions like `src/server/actions/create-todo.action.ts`.

To regenerate the client when the backend API specification changes, run:

```bash
npm run openapi-ts
# or
yarn openapi-ts
```

This command uses the `openapi-ts` tool to generate TypeScript types and client code from the backend's OpenAPI specification, ensuring type safety and code consistency between the frontend and backend.

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
