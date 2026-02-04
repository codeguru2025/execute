# Execute Group Website

## Overview

Execute Group is a corporate website for a Dubai-registered business enablement platform. The platform helps individuals and companies launch, move, and scale between Africa and the UAE through three core divisions: Technology & Growth, Events & Travel, and Execute Beverage. The website is designed with a premium, institutional aesthetic inspired by Apple, Tesla, and Stripe.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for smooth transitions and scroll animations
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **API Pattern**: RESTful endpoints under /api prefix
- **Development**: tsx for TypeScript execution, Vite middleware for HMR
- **Production**: esbuild bundling with selective dependency inlining

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Validation**: drizzle-zod for schema-to-Zod type generation
- **Current Storage**: In-memory storage (MemStorage class) with PostgreSQL schema ready
- **Database Migrations**: drizzle-kit for schema management

### Project Structure
```
├── client/src/          # React frontend
│   ├── components/      
│   │   ├── layout/      # Navbar, Footer, Layout wrapper
│   │   └── ui/          # shadcn/ui + AnimatedSection component
│   ├── pages/           
│   │   ├── Home.tsx           # Landing page with hero and pillar sections
│   │   ├── About.tsx          # Company story and mission
│   │   ├── Divisions.tsx      # Overview of all three divisions
│   │   ├── TechnologyGrowth.tsx  # Tech & Growth division details
│   │   ├── EventsTravel.tsx   # Events & Travel division details
│   │   ├── Beverage.tsx       # Execute Beverage division details
│   │   └── Contact.tsx        # Contact form with API integration
│   ├── hooks/           # Custom hooks (use-toast, use-seo)
│   └── lib/             # Utilities and query client
├── server/              # Express backend
│   ├── routes.ts        # API route definitions (POST /api/contact)
│   ├── storage.ts       # In-memory data storage
│   └── vite.ts          # Vite dev server integration
├── shared/              # Shared code (schema, types)
└── migrations/          # Drizzle database migrations
```

### Design System
- Dark theme with sage green accent (#8FAF9B / HSL 143 12% 62%)
- Inter font family
- Minimal, high-contrast design with subtle animations
- CSS variables for consistent theming across components

## External Dependencies

### Core Services
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Google Fonts**: Inter font family loaded via CDN

### Key NPM Packages
- **@tanstack/react-query**: Server state management
- **drizzle-orm + drizzle-kit**: Database ORM and migrations
- **framer-motion**: Animation library
- **zod**: Runtime type validation
- **connect-pg-simple**: PostgreSQL session store (available for auth)
- **express-session**: Session management (available for auth)

### Development Tools
- **Replit Plugins**: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner
- **TypeScript**: Strict mode with bundler module resolution