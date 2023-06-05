
Welcome to Tipz Backend!

## Run Code in Terminal

To run individual challenges in your terminal:

1. Make sure you have node installed on your machine. To install Node, please follow instructions here: https://nodejs.org/en/download

2. CD into the tipz-backend repo:

```bash
cd tipz-backend
```

3. Install the following on your machine by copying and pasting the following into your terminal. Please replace `DATABASE_URL_FROM_ANGIE` with the one  provided:

```bash
npm install prisma --save-dev && \
npm install -D typescript ts-node @types/node && \
touch .env && \
echo 'DATABASE_URL="<DATABASE_URL_FROM_ANGIE>"' >> .env && \
npx prisma generate && \
npx prisma db seed
```

## Run Challenges as a React App Locally

First, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## React App & UI

The folder structure inclues the following:
- `pages/index.js`: all code visible in the landing page lives here
- `lib/*` : contains code for exported classes, variables, and functions
- `prisma/*`: contains all prisma database code, including schema, migrations, and seed information
- `styles/*`: contains styling elements for app
- `pages/api`: Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

