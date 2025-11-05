# Manglara

## Quick start

Follow these steps to run the project locally.

1. Copy environment file

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and fill in the required environment variables. See `.env.example` for all keys — typical values include database connection strings, authentication secrets, and any third-party API keys your deployment requires.

3. Install dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

Notes
- Use the latest stable Node.js release (recommended). The project expects a modern Node version — if you see native-ESM or runtime errors, upgrade Node to the latest LTS or stable release.
- If you run into dependency or build issues, try removing `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production (if available)
- `npm start` — start the built app (if available)

See `package.json` for the exact scripts available.

## Troubleshooting

- If the app doesn't start, check `.env.local` for missing or malformed variables.
