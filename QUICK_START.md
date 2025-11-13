# Quick Start Guide - Kraft Venture

## Step-by-Step Instructions to Run the Project

### 1. Install Dependencies

First, navigate to the project root and install all required npm packages:

```bash
cd "c:\Users\Ravi\Desktop\Kraft Venture Project"
npm install
```

**Or if you're already in the project directory:**

```bash
npm install
```

This will install all dependencies listed in `package.json` including:

- React, React DOM
- Vite
- Tailwind CSS
- React Router
- React Query

### 2. Run the Development Server

Run from the project root:

```bash
npm run dev
```

This will start the Vite development server and automatically:

- Detect the configuration in `apps/web/vite.config.js`
- Use the app located in `apps/web/`
- Start the development server (usually on `http://localhost:5173`)
- Show the local URL in the terminal
- Enable hot module replacement (HMR) for instant updates
- Auto-open your browser (if configured)

### 3. Access the Application

Once the server is running, open your browser and navigate to:

- **Public routes:** `http://localhost:5173/`
- **Portal:** `http://localhost:5173/portal`
- **Admin:** `http://localhost:5173/admin`

## Available Commands

### Development

```bash
npm run dev          # Start development server
```

### Production

```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Code Quality

```bash
npm run lint         # Run ESLint to check code quality
```

## Troubleshooting

### Issue: "Cannot find module" errors

**Solution:** Make sure you've run `npm install` to install all dependencies.

### Issue: Port already in use

**Solution:** Vite will automatically try the next available port, or you can specify a port:

```bash
npm run dev -- --port 3000
```

## Project Structure Overview

```
apps/web/src/
├── app/              # Core app files (main.jsx, App.jsx, router.jsx)
├── features/         # Feature modules (auth, projects, tickets, etc.)
├── routes/           # Route components (public, portal, admin)
├── shared/           # Shared components, hooks, utilities
└── assets/           # Static assets
```

## Next Steps After Running

1. **Explore the routes:**

   - Visit `http://localhost:5173/` for the public home page
   - Visit `http://localhost:5173/portal` for the client portal
   - Visit `http://localhost:5173/admin` for the admin dashboard

2. **Start building features:**

   - Add components to `apps/web/src/features/`
   - Create routes in `apps/web/src/routes/`
   - Add shared UI components to `apps/web/src/shared/components/ui/`

3. **Backend integration (when ready):**
   - Authentication can be added to `PortalLayout` and `AdminLayout`
   - API integration can use React Query (already configured)
   - Backend folder structure is ready in `supabase/` for future use

## Need Help?

- Check the main `README.md` for detailed documentation
- Review `PROJECT_STRUCTURE.md` for folder organization
