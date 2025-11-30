## Overview
`03_nested_routes` extends the routing lesson by adding nested folders that illustrate segment composition. It includes routes like `/blog`, `/blog/first`, and `/blog/second`, along with root-level `/about` and `/profile` pages.

## What You Practice
- Organizing multiple levels of segments inside `src/app/blog/*` to show how nested folders map to nested URLs.
- Mixing JavaScript and TypeScript route files (the blog entries use `.tsx`) inside the same tree.
- Keeping shared UI in `layout.js` while letting each nested page control its own content.

## How To Use It
Start the dev server with `npm run dev` and click through the blog links to see how nested routes render. Experiment by adding deeper folders (e.g., `/blog/first/comments`) or introducing dynamic segments (`[slug]`) to reinforce how Next.js composes layouts for nested structures.
