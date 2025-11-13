# Kraft Venture

A professional, scalable React application built with Vite, Tailwind CSS, and React Router. Currently a static frontend, ready for backend integration.

## Project Structure

```
kraft-venture/
├── apps/
│   └── web/                    # Main web application
│       ├── src/
│       │   ├── features/       # Feature-based modules (auth, projects, tickets, billing, content)
│       │   ├── shared/         # Shared components, hooks, utilities, and styles
│       │   ├── routes/         # Route components organized by layout (public, portal, admin)
│       │   ├── assets/         # Static assets (images, icons, fonts)
│       │   └── __tests__/      # Test files
│       └── ...
│
└── supabase/                   # Backend configuration (for future use)
    ├── migrations/             # Database migrations
    ├── policies/               # Row Level Security (RLS) policies
    ├── functions/              # Edge Functions
    ├── seed/                   # Seed data
    └── storage/                # Storage bucket configurations
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **React Query** - Data fetching and caching (ready for API integration)
- **JavaScript** - Programming language

## Project Architecture

### Feature-First Approach

The project is organized by features rather than file types:

- `features/auth/` - Authentication
- `features/projects/` - Project management
- `features/tickets/` - Ticket/support system
- `features/billing/` - Billing and subscriptions
- `features/content/` - Content management

### Layouts

Three main layouts support different sections of the application:

- **RootLayout** - Public routes (marketing site)
- **PortalLayout** - Client portal (ready for authentication integration)
- **AdminLayout** - Admin dashboard (ready for authentication integration)

### Monorepo Structure

The project uses a monorepo-style structure, ready for future scaling to multiple apps (web, mobile, etc.).

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Backend Integration

The project is currently a static frontend. Backend integration can be added later:

- Authentication can be integrated into `PortalLayout` and `AdminLayout`
- API calls can be made using React Query (already configured)
- Backend folder structure is ready in `supabase/` for future use

## Future Scaling

The project structure is designed to scale to:

- Marketing website
- Client portal
- Admin dashboard
- Additional apps (mobile, etc.)

## License

Private - All rights reserved
