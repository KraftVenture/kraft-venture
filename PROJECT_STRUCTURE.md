# Kraft Venture Project Structure

## Directory Tree

```
kraft-venture/
├── apps/
│   └── web/                              # Main web application
│       ├── index.html                    # HTML entry point
│       ├── vite.config.js                # Vite configuration
│       ├── tailwind.config.js            # Tailwind CSS configuration
│       ├── postcss.config.js             # PostCSS configuration
│       └── src/
│           ├── app/                      # Application core
│           │   ├── main.jsx              # React entrypoint
│           │   ├── App.jsx               # Main app shell with providers
│           │   ├── router.jsx            # Base routing setup
│           │   ├── providers/            # Context providers
│           │   │   ├── query-client.jsx  # React Query provider
│           │   │   ├── supabase-client.js # Supabase client provider
│           │   │   └── theme-provider.jsx # Theme (light/dark) provider
│           │   └── layout/               # Layout components
│           │       ├── RootLayout.jsx    # Layout for public pages
│           │       ├── PortalLayout.jsx  # Layout for client portal
│           │       └── AdminLayout.jsx   # Layout for admin panel
│           │
│           ├── features/                 # Feature-based modules
│           │   ├── auth/                 # Authentication feature
│           │   ├── projects/             # Projects feature
│           │   ├── tickets/              # Tickets feature
│           │   ├── billing/              # Billing feature
│           │   └── content/              # Content feature
│           │
│           ├── shared/                   # Shared resources
│           │   ├── components/
│           │   │   └── ui/               # Shared UI primitives (Button, Card, etc.)
│           │   ├── hooks/                # Reusable React hooks
│           │   ├── lib/                  # Utility functions
│           │   ├── api/                  # API client and utilities
│           │   └── styles/
│           │       └── globals.css       # Global styles
│           │
│           ├── routes/                   # Route components
│           │   ├── public/               # Public route components
│           │   │   └── HomePage.jsx      # Home page component
│           │   ├── portal/               # Portal route components
│           │   │   └── PortalDashboard.jsx # Portal dashboard
│           │   └── admin/                # Admin route components
│           │       └── AdminDashboard.jsx # Admin dashboard
│           │
│           ├── assets/                   # Static assets (images, icons, fonts)
│           └── __tests__/                # Test files
│
├── supabase/                             # Supabase backend
│   ├── migrations/                       # Database migrations
│   ├── policies/                         # Row Level Security policies
│   ├── functions/                        # Edge Functions
│   ├── seed/                             # Seed data
│   └── storage/                          # Storage bucket configurations
│
├── package.json                          # Project dependencies and scripts
├── .env.example                          # Environment variables template
├── .gitignore                           # Git ignore rules
└── README.md                             # Project documentation
```

## Folder Descriptions

### `apps/web/`
Main web application built with React, Vite, and Tailwind CSS.

### `apps/web/src/app/`
Application core containing:
- **Entry point**: `main.jsx` - React application entry
- **App shell**: `App.jsx` - Main app component with all providers
- **Router**: `router.jsx` - React Router configuration
- **Providers**: Context providers for React Query, Supabase, and Theme
- **Layouts**: Layout components for different app sections

### `apps/web/src/features/`
Feature-based modules following feature-first architecture:
- **auth/**: Authentication components, hooks, and utilities
- **projects/**: Project management components and logic
- **tickets/**: Ticket/support system components
- **billing/**: Billing and subscription management
- **content/**: Content management (for marketing site)

### `apps/web/src/shared/`
Shared resources used across the application:
- **components/ui/**: Reusable UI primitives (Button, Card, Input, etc.)
- **hooks/**: Custom React hooks
- **lib/**: Utility functions and helpers
- **api/**: API client configuration and utilities
- **styles/**: Global styles and Tailwind configuration

### `apps/web/src/routes/`
Route components organized by layout:
- **public/**: Public route components (marketing site)
- **portal/**: Portal route components (authenticated clients)
- **admin/**: Admin route components (administrators)

### `supabase/`
Supabase backend configuration:
- **migrations/**: Database migration files
- **policies/**: Row Level Security (RLS) policies
- **functions/**: Edge Functions (serverless functions)
- **seed/**: Seed data for development
- **storage/**: Storage bucket configurations

## Key Files

### Configuration Files
- `vite.config.js`: Vite build configuration with path aliases
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration for Tailwind
- `package.json`: Project dependencies and npm scripts

### Core Application Files
- `apps/web/src/app/main.jsx`: React application entry point
- `apps/web/src/app/App.jsx`: Main app component with providers
- `apps/web/src/app/router.jsx`: React Router configuration

### Provider Files
- `apps/web/src/app/providers/query-client.jsx`: React Query setup
- `apps/web/src/app/providers/supabase-client.js`: Supabase client initialization
- `apps/web/src/app/providers/theme-provider.jsx`: Theme management (light/dark mode)

### Layout Files
- `apps/web/src/app/layout/RootLayout.jsx`: Public pages layout
- `apps/web/src/app/layout/PortalLayout.jsx`: Client portal layout (with auth check)
- `apps/web/src/app/layout/AdminLayout.jsx`: Admin dashboard layout (with admin check)

## Path Aliases

The project uses path aliases configured in `vite.config.js`:
- `@/` → `src/`
- `@/app` → `src/app/`
- `@/features` → `src/features/`
- `@/shared` → `src/shared/`
- `@/routes` → `src/routes/`
- `@/assets` → `src/assets/`

## Environment Variables

Create a `.env` file in the root directory with:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Next Steps

1. Install dependencies: `npm install`
2. Set up environment variables in `.env`
3. Configure Supabase project and run migrations
4. Start development server: `npm run dev`
5. Begin building features in the `features/` directory

