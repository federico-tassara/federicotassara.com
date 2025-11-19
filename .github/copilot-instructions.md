# Freedhome

## Purpose
- Help a coding agent (Copilot) understand this repository quickly and work efficiently on frontend tasks. Keep actions safe and minimize failed commands.

## About the project
Freedhome is an all-in-one vacation rental management platform designed for property owners and agencies 
who want to automate every step of their short-term rental business.
It centralizes listings, reservations, pricing, and guest communication.
With Freedhome, hosts can create property listings once and automatically distribute them across major 
booking platforms like Airbnb, Booking.com, Vrbo, and others. The system keeps calendars, prices, and 
availability perfectly synchronized across all channels to eliminate double bookings and manual work.

## Tech stack in use

- Frontend: React + Next.js + TypeScript + Tailwind CSS.
- Testing: Jest + React Testing Library for unit tests; Playwright or Cypress recommended for E2E with axe-core for accessibility.
- Tooling: ESLint, Prettier, TypeScript compiler (tsc). Node LTS (>=18) recommended.


## Coding guidelines (must follow)

- Always use TypeScript types; project should run with "strict" type checking. Avoid implicit any.
- Use semicolons in all JS/TS files.
- Run ESLint and Prettier; respect configured rules.
- Write unit tests for business logic and component behavior. Unit tests must pass before opening PRs.
- Write E2E tests for core user flows and include automated accessibility checks (axe-core).
- Do not commit secrets or env files. Use environment variables (NEXT_PUBLIC_* for client config).
