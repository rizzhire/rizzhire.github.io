# HireNET - Recruitment Platform

## Overview

HireNET is a modern recruitment platform designed to connect talent with opportunities across the Middle East and beyond. The application features a professional cream and yellow themed interface with smooth animations, built using React, Express.js, and PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 7, 2025)

### Updated Testimonials with HR Leaders
- Replaced testimonials with Middle East HR professionals: Fatima Almasi, Hamdaad Hakimi, Alaa Mahmoud
- Added authentic company profiles (Al Safwa Enterprises, Gulf Bridge Holdings, Meridian Business Solutions)
- Implemented round photo containers with professional headshots
- Updated reviews to focus on recruitment services from employer perspective
- Enhanced testimonial cards with larger profile photos and modern rounded design

### Perfect Infinite Carousel Implementation (August 5, 2025)
- Achieved true infinite scrolling with seamless mathematical transitions
- Implemented JavaScript-based continuous auto-scroll without visible resets
- Enhanced manual scroll integration that works alongside auto-scroll
- Fixed all jerking and stopping issues with smooth position calculations
- Created airport conveyor belt-style continuous motion
- Updated Nayara Energy and UCC logos with colorful versions
- Optimized logo filters for better visibility while maintaining black & white theme
- Applied special brightness adjustments for Nayara Energy and Etisalat logos

### Enhanced Country Flags Section (August 7, 2025)
- Replaced all country flags with authentic flag images (Qatar, UAE, Saudi Arabia, Bahrain, Oman, Kuwait, Maldives)
- Enhanced flag containers with rounded-3xl styling for modern appearance
- Implemented responsive sizing: larger on desktop, appropriate for mobile
- Maintained single-row layout with proper spacing and hover effects

## Previous Changes (July 30, 2025)

### Enhanced Consultation Button Implementation
- Removed "Get Started Today" button completely
- Created sophisticated horizontal "i" shaped consultation button
- Implemented seamless dumbbell connection between pill and circle sections
- Added smooth curved bridge connector for perfect shape blending
- Applied water drop separation animation on hover
- Used website's yellow theme colors for consistency
- Perfect match to user's mockup design with professional appearance

### Professional Card Stacking Animation System (July 30, 2025)
- Implemented scroll-locked card stacking animation with frame-by-frame control
- Cards stack sequentially with scroll lock during animation sequence
- First card appears centered, subsequent cards stack with smooth transforms
- Uses requestAnimationFrame for smooth 60fps animations
- Mobile responsive with proper viewport handling
- Semi-transparent layering effect for visual depth
- Progress indicator shows current stacking state
- Reverse animation support for upward scrolling
- Professional timing with cubic-bezier easing curves

### Deployment System Implementation
- Added comprehensive deployment system with multiple methods
- Created `/deploy` route with beautiful deployment interface
- Built automatic deployment scripts (`deploy.sh`, `scripts/deploy.js`)
- Enhanced GitHub Actions workflow with manual triggering
- Added auto-deploy watcher for file changes
- Implemented fallback options for git authentication issues

### Git Restrictions Resolved & Deployment Ready (August 3, 2025)
- Root cause identified: Replit implements system-level git restrictions for security
- Professional service icons built and verified in deployment package
- Git sync errors permanently resolved through alternative deployment methods
- Multiple working deployment options: Replit Deploy tab, GitHub web interface, local git
- All deployment files ready with Users, TrendingUp, and UserCheck icons verified
- Comprehensive deployment guides created for guaranteed success

## System Architecture

The application follows a full-stack architecture with:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI components with shadcn/ui styling system
- **State Management**: TanStack Query for server state management
- **Animations**: CSS-based animations with support for GSAP/Framer Motion integration
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: TSX for TypeScript execution

### Database Architecture
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with Zod schema validation
- **Migration System**: Drizzle Kit for schema migrations
- **Connection**: @neondatabase/serverless driver for optimal performance

## Key Components

### Data Models
1. **Users**: Authentication and user management
2. **Jobs**: Job listings with company, location, salary, and type information
3. **Testimonials**: Client testimonials with ratings and company details
4. **Contacts**: Contact form submissions for lead generation

### API Endpoints
- `GET /api/jobs` - Retrieve all job listings
- `GET /api/testimonials` - Retrieve all testimonials
- `POST /api/contacts` - Create new contact submissions
- `GET /api/contacts` - Admin access to contact submissions

### Frontend Sections
- **Hero Section**: Main landing with call-to-action and statistics
- **Services**: Executive search, mass recruitment, and HR consulting
- **Partner Logos**: Trusted company partnerships
- **Countries**: Geographic service coverage
- **Job Listings**: Dynamic job opportunities with filtering
- **Testimonials**: Client success stories and ratings
- **Contact Form**: Lead generation and inquiries

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js routes handle business logic
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Type-safe data returns to React components
5. **UI Updates**: Components re-render with fresh data automatically

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL adapter

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Lucide React for consistent iconography
- Custom CSS variables for theming

### Development Tools
- Vite for fast development and building
- TypeScript for type safety
- ESBuild for production bundling
- PostCSS for CSS processing

### Database and Storage
- Neon Database (PostgreSQL) for data persistence
- Drizzle Kit for schema management
- Connect-pg-simple for session storage

## Deployment Strategy

### Development Environment
- Vite dev server for frontend hot reloading
- TSX for backend TypeScript execution
- Database migrations via Drizzle Kit
- Environment variables for database connection

### Production Build Process
1. Frontend assets built via Vite to `dist/public`
2. Backend bundled via ESBuild to `dist/index.js`
3. Static files served by Express in production
4. Database schema pushed via Drizzle Kit

### Environment Configuration
- `NODE_ENV` determines development vs production behavior
- `DATABASE_URL` required for PostgreSQL connection
- Replit-specific plugins for development environment integration

The application is designed for scalability with clear separation of concerns, type safety throughout the stack, and modern development practices for maintainable code.