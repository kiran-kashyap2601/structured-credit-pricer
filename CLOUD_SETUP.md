# Cloud development

This React/Vite project contains the private-credit assessment and educational simulation app. The application entry point is `src/App.jsx`.

## Environment

- Use Node.js 24 LTS and npm.
- Install locked dependencies with `npm ci`.
- Build with `npm run build`.
- Run static checks with `npm run lint`.
- Start a development preview with `npm run dev -- --host 0.0.0.0`.

In Codex, create a cloud environment using this repository, run the setup and build checks, then publish the environment. Start subsequent development tasks from that published environment. Publishing a development environment does not deploy a public website.

## Current scope

The app includes a real-company route and a separate case-based educational route. Preserve both during maintenance. A successful build verifies compilation, not financial-model correctness or complete user journeys. Runtime and quantitative validation are still required before production release.

The existing styling loads Tailwind from its CDN and fonts from Google Fonts. Preserve this setup for migration parity; revisit compiled styling as a separate production-readiness change. Document upload controls do not by themselves demonstrate that extraction works for all accepted formats.

Keep credentials, borrower financial statements and private product discussions out of this public repository. Track agreed implementation requirements in the development task before making product changes.
