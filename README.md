# QuestHub — Routing & Application Architecture

React + Vite homework demonstrating React Router, nested routes, dynamic URLs, URL search parameters, API services, lazy loading and dashboard statistics.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` — Home
- `/about` — About
- `/items` — Product catalogue (search, category and rating filters, sorting, pagination)
- `/items/:id` — Product details fetched by ID
- `/dashboard` — API-derived statistics and breakdowns
- `/login` — Authentication placeholder
- `/quests` — Preserved original Quest Manager functionality
- `*` — Custom 404 page

## API

Products are loaded from DummyJSON (`https://dummyjson.com`). Requests are isolated in `src/services/service.js`. Search and filters are synchronized with URL query parameters using `useSearchParams`.

## Deployment

Deploy the repository on Vercel with the default Vite settings. For GitHub Pages, configure SPA fallback routing before deploying because BrowserRouter needs the host to serve `index.html` for direct route requests.
