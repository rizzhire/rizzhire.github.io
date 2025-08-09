# HireNET - Recruitment Platform

## Overview

HireNET is a modern recruitment platform designed to connect talent with opportunities across the Middle East and beyond. The application features a professional cream and yellow themed interface with smooth animations, built using React, Express.js, and PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 9, 2025)

### Complete Form Redesign with Professional Organization (August 9, 2025)
- **Perfect Form Structure**: Completely redesigned job application form with 3 clear sections
  - Resume Upload section with yellow icon and clean upload area
  - Personal Information section with blue user icon
  - Career Details section with purple briefcase icon
- **Clean Organization**: Removed all unnecessary descriptions and clutter for minimalist design
- **Professional Spacing**: Fixed all overlapping text and spacing issues with proper borders and gaps
- **Super Rounded Corners**: Implemented 40px border radius with anti-aliasing for smooth, clean edges
- **Fixed Dialog Issues**: Resolved form opening problems with proper state management
- **Enhanced Visual Design**: Clean white background with hardware acceleration for crisp rendering
- **Button Styling**: Submit button properly styled with theme yellow color
- **Mobile Optimization**: Form works perfectly across all device sizes

## Previous Changes (August 8, 2025)

### Complete Content Reorganization & Professional Industries Redesign (August 8, 2025)
- **Perfect Content Separation**:
  - Created dedicated `/industries` page with comprehensive industry details and statistics
  - Moved all "Industries We Serve" content from Services page to separate Industries page
  - Services page now focuses purely on 3 core services with detailed paragraph descriptions
  - Home page services section reverted to original clean design as requested
  - All blog content properly organized on `/blogs` page with full article functionality
- **Enhanced Services Page Structure**:
  - **Paragraph-Style Content**: Removed all bullet points and tick marks, replaced with detailed flowing paragraphs
  - **Professional Layout**: Each service now has comprehensive "Our Approach" section with detailed descriptions
  - **Expected Outcomes**: Highlighted results in styled callout boxes with measurable metrics
  - **Manpower Supply**: 60% faster hiring, 10,000+ talent pool, 95% retention rates
  - **Management Consultancy**: 40% efficiency improvement, 25% cost reduction, 6-month ROI
  - **Recruitment Services**: 97% placement success, 60% faster hiring, 15+ industry coverage
- **Professional Corporate Industries Page Redesign**:
  - **Removed All Metrics**: Eliminated basic statistics and numbers for cleaner corporate look
  - **Advanced Corporate Design**: Replaced basic icons with sophisticated gradient accent systems
  - **Professional Color Scheme**: Dark gradient backgrounds with premium accent colors
  - **Content Updates for Mass Recruitment Focus**:
    - Construction: Reduced to 100+ engineers in Vision 2030 projects
    - Healthcare: Reduced to 100+ medical professionals, removed telemedicine/international doctors
    - Hospitality: Removed event management expertise point
    - Completely removed IT & Technology section as requested
  - **Mature Corporate Styling**: Sleek cards with gradient accents, professional typography, sophisticated hover effects
  - **Enhanced Visual Design**: Added light background graphics including floating elements, geometric patterns, and subtle grid overlays
  - **Improved Typography**: Optimized font sizes for better readability while maintaining professional appearance
  - **Advanced Card Design**: Multi-layered accent effects, backdrop blur, enhanced shadows, and sophisticated hover animations
- **Navigation & User Experience**:
  - Updated navbar to properly route to new Industries page
  - Maintained "Countries We Serve" section on home page for geographic coverage
  - Clean separation of Services, Industries, and Blogs content
  - Professional blog system with individual article detail pages
- **Advanced Design & Mobile Optimization**:
  - Corporate-grade design system with premium gradient accents
  - Professional typography with tracking and weight variations
  - Touch-friendly interactions with sophisticated animation curves
  - Enterprise-level visual hierarchy and spacing systems
- **Complete Background Graphics Implementation (August 8, 2025)**:
  - Applied light background graphics across all website pages for visual consistency
  - Enhanced Hero, Services, Testimonials sections with floating circles and geometric patterns
  - Added subtle grid patterns, SVG elements, and gradient overlays to Services, About, and Blogs pages
  - Implemented sophisticated visual depth while maintaining clean, professional appearance
  - All background elements are subtle and non-intrusive, enhancing the overall design aesthetic

### Fixed Black Background Issue (August 7, 2025)
- Resolved critical display issue where homepage and about pages turned black
- Fixed body background to use cream color directly instead of CSS variables
- Fixed Values and Mission sections in About page to use inline styles
- Removed problematic gradient backgrounds that caused dark theme conflicts
- Restored all pages (home, about, contact) to proper cream and yellow theme
- Maintained visual enhancements while ensuring color stability

### Updated Contact Information (August 8, 2025)
- Changed from Dubai operations to Indian business locations
- **Main Office**: 6/7A, AJC Bose Road, Padatik Theatre, Kolkata-700017, West Bengal, INDIA
- **Branch Office**: 4th-floor Nevidita Road, Kidzee School, Siliguri 734003
- **Phone Numbers**: +91 333 508 5038, +91 9007906531
- **Email**: contact@hirenet.in
- **Business Hours**: Monday-Saturday 10:30 AM - 6PM, Sunday Closed

## Previous Changes (August 7, 2025)

### Updated Testimonials with HR Leaders
- Replaced testimonials with Middle East HR professionals: Fatima Almasi, Hamdaad Hakimi, Alaa Mahmoud
- Added authentic company profiles (Al Safwa Enterprises, Gulf Bridge Holdings, Meridian Business Solutions)  
- Implemented square photo containers with very rounded corners and professional headshots
- Fixed static file serving for attached_assets to properly display images
- Updated reviews to focus on recruitment services from employer perspective
- Enhanced section heading with centered alignment and gradient underline accent
- Applied sophisticated typography with emphasized keywords in description
- Corrected image sequence to match provided order: 1st review → 1st image, etc.

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