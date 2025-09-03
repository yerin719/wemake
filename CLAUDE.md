# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts React Router dev server with HMR at http://localhost:5173
- **Build**: `npm run build` - Creates production build
- **Type checking**: `npm run typecheck` - Runs React Router typegen and TypeScript compiler
- **Start production**: `npm run start` - Serves production build

## Database Commands

- **Generate migrations**: `npm run db:generate` - Generate Drizzle migrations from schema changes
- **Apply migrations**: `npm run db:migrate` - Apply pending migrations to database
- **Database studio**: `npm run db:studio` - Open Drizzle Studio for database inspection
- **Generate types**: `npm run db:typegen` - Generate TypeScript types from Supabase schema

## Project Architecture

This is a React Router v7 application with the following key architectural patterns:

### Tech Stack

- **Frontend**: React Router v7 (SSR enabled), React, TypeScript
- **Database**: PostgreSQL with Supabase, Drizzle ORM
- **Styling**: TailwindCSS, Shadcn UI, Radix UI components
- **Additional**: Luxon for dates, Recharts for data visualization

### Directory Structure

```
app/
├── common/           # Shared components and pages (navigation, home)
├── features/         # Feature-based modules
│   ├── auth/         # Authentication
│   ├── community/    # Community features
│   ├── ideas/        # Ideas management
│   ├── jobs/         # Job listings
│   ├── products/     # Product catalog and reviews
│   ├── teams/        # Team management
│   └── users/        # User profiles
├── hooks/            # Shared React hooks
├── lib/              # Utility functions
└── sql/              # Database schema, migrations, views, triggers
```

### Feature Module Pattern

Each feature follows a consistent structure:

- `components/` - Feature-specific React components
- `layouts/` - Layout components for the feature
- `pages/` - Route components (must export loader, action, meta)
- `schema.ts` - Drizzle database schema
- `queries.ts` - Database queries
- `constants.ts` - Feature constants

### React Router v7 Conventions

- **Route Types**: Import as `import type { Route } from "./+types/..."`
- **Data Loading**: Components receive `loaderData` and `actionData` via `Router.ComponentProps`
- **NO `useLoaderData` or `useActionData`** - Use component props instead
- **Loader**: `export function loader({ request }: Route.LoaderArgs)`
- **Action**: `export function action({ request }: Route.ActionArgs)`
- **Meta**: `export const meta: Route.MetaFunction`
- **Return plain objects** from loaders/actions (no `json()` wrapper)
- Use `data` response helper only when setting status codes

### Database Architecture

- **ORM**: Drizzle with PostgreSQL
- **Schema**: Distributed across feature modules (`app/features/**/schema.ts`)
- **Migrations**: Auto-generated in `app/sql/migrations/`
- **Views**: Custom SQL views in `app/sql/views/`
- **Triggers**: Database triggers in `app/sql/triggers/`

### UI Component Guidelines

- **Never import from Radix directly** - Always use Shadcn UI components
- **Never import from @remix-run** - Import from "react-router" instead
- Use Tailwind for styling with the established design system
- Components in `app/common/components/ui/` are shared UI components

### TypeScript Conventions

- Prefer `interface` over `type`
- Avoid enums, use maps instead
- Use functional components with TypeScript interfaces
- Descriptive variable names with auxiliary verbs (isLoading, hasError)
- Use "function" keyword for pure functions

### File Naming

- Directories: lowercase with dashes (e.g., `auth-wizard`)
- Components: kebab-case files, PascalCase exports
- Pages must be in `pages/` subdirectory of features
- Layouts must be in `layouts/` subdirectory of features

## Git Commit Rules

- **Do NOT include Claude Code attribution in commits**:
  ```
  🤖 Generated with [Claude Code](https://claude.ai/code)
  Co-Authored-By: Claude <noreply@anthropic.com>
  ```
- Keep commit messages focused on the actual changes made
- Use Korean for commit messages when appropriate
