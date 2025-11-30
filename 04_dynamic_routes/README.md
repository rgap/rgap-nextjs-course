## Overview
`02_routing` demonstrates basic filesystem routing with the App Router. It contains a home page plus `/about` and `/profile` routes, each defined by their own `page.jsx` files to show how folders automatically become URLs.

## What You Practice
- Structuring `src/app` so every directory with a `page` file turns into a route.
- Creating sibling routes (`about`, `profile`) that share the same root `layout.js`.
- Using simple components and links to move between pages without additional config.

## How To Use It
Install dependencies and run `npm run dev`, then visit `/`, `/about`, and `/profile` to inspect how each file maps to a route. Try adding new directories under `src/app` or swapping the file extensions to TypeScript to reinforce how Next.js resolves files.
