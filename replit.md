# HireNET - Recruitment Platform

## Overview
HireNET is a modern recruitment platform connecting talent with opportunities, primarily across the Middle East. It features a professional cream and yellow themed interface, focusing on key capabilities such as job listings, company services (executive search, mass recruitment, HR consulting), and a robust contact system. The project aims to provide a seamless and visually appealing experience for both job seekers and employers, leveraging modern web technologies for scalability and maintainability.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The application employs a full-stack architecture built with React, Express.js, and PostgreSQL.

### Frontend Architecture
- **Framework**: React 18 with TypeScript.
- **Routing**: Wouter for client-side routing.
- **Styling**: Tailwind CSS with custom CSS variables, complemented by Radix UI components and shadcn/ui.
- **State Management**: TanStack Query for server state.
- **Animations**: CSS-based animations, with support for GSAP/Framer Motion.
- **Build Tool**: Vite.
- **UI/UX Decisions**: Professional cream and yellow theme, smooth animations, super rounded corners (40px border radius) for elements, clean organization of forms into logical sections, professional spacing, and enhanced visual design with subtle background graphics (floating elements, geometric patterns, grid overlays). Emphasis on sophisticated typography and responsive design for all devices.

### Backend Architecture
- **Runtime**: Node.js with Express.js.
- **Language**: TypeScript (ES modules, TSX for execution).
- **API Design**: RESTful API endpoints.
- **Database ORM**: Drizzle ORM for type-safe operations.
- **Session Management**: Express sessions with PostgreSQL storage.

### Database Architecture
- **Database**: PostgreSQL (configured for Neon Database).
- **ORM**: Drizzle ORM with Zod schema validation.
- **Migration System**: Drizzle Kit.
- **Connection**: @neondatabase/serverless driver.

### Core System Features
- **Data Models**: Users, Jobs, Testimonials, Contacts.
- **API Endpoints**: CRUD operations for jobs, testimonials, and contacts.
- **Key Frontend Sections**: Hero, Services, Partner Logos, Countries, Job Listings, Testimonials, Contact Form.
- **Data Flow**: Client requests via TanStack Query -> Express.js handles logic -> Drizzle ORM interacts with PostgreSQL -> Type-safe data returned to React components -> UI updates.

## External Dependencies

### Core Framework Dependencies
- React (React, React DOM)
- Express.js
- Drizzle ORM

### UI and Styling
- Tailwind CSS
- Radix UI
- Lucide React

### Development Tools
- Vite
- TypeScript
- ESBuild
- PostCSS

### Database and Storage
- Neon Database (PostgreSQL)
- Drizzle Kit
- Connect-pg-simple

## Recent Changes (August 9, 2025)

### Why Choose HireNET Section Redesign - Masonry Layout (August 9, 2025)
- **Uneven Masonry Design**: Completely redesigned "Why Choose HireNET" tiles to match Contact Us page layout
- **Smart Grid Layout**: Left side large card for main feature, right side 3-card grid (2x2 with full-width top card)
- **Proportional Sizing**: Different icon sizes (20x20, 16x16, 14x14) and text sizes for visual hierarchy
- **Content Preservation**: Maintained all original content while enhancing visual presentation
- **Professional Consistency**: Matches Contact page design pattern for unified user experience

### Navigation Improvement - For Employers Button Redirect (August 9, 2025)
- **Simplified Navigation**: Changed "For Employers" button to redirect to home page instead of separate employers page
- **Route Cleanup**: Removed unused `/employers` route and EmployersPage component
- **Code Optimization**: Cleaned up unnecessary navigation functions and imports
- **User Experience**: Button now takes users back to main landing page for better flow

### Hero Section Animation Enhancement (August 10, 2025)
- **Sophisticated Scroll Animations**: Added scroll-triggered animations to hero section content
- **Gold Standard Timing**: Used Contact section animation specs (1.2s duration, cubic-bezier easing)
- **Elegant Transitions**: Applied smooth opacity, translate-y, and scale transforms
- **Staggered Appearance**: Sequential animation delays (0ms, 200ms, 400ms) for heading, description, and button
- **Navigation-Triggered**: Animations activate when navigating from Job Seeker page via "For Employer" button
- **Professional Quality**: Subtle but attractive animations that avoid cheap appearance

### Schedule Consultation Button Refinement (August 10, 2025)
- **Water Drop Hover Effect**: Preserved original smooth water drop separation animation on hover
- **Clean Design**: Removed all shadow effects for minimal, professional appearance
- **Original Positioning**: Maintained exact button positioning and connection behavior
- **Hover Timing**: Kept 500ms transition duration for smooth water drop detachment
- **Visual Polish**: Eliminated black glow while preserving all functional hover animations

### Services Page Animation Enhancement (August 10, 2025)
- **Sophisticated Scroll Animations**: Implemented gold standard timing across all Services page sections
- **Page Load Animations**: Added smooth entrance effects when navigating to the page
- **Staggered Service Cards**: Applied 300ms delays between service card animations for elegant sequencing
- **Hero Section Enhancement**: Added smooth fade-up animations with professional cubic-bezier easing
- **CTA Section Animations**: Implemented coordinated scroll-triggered animations for call-to-action content
- **Content Preservation**: Maintained all original service content, graphics, and background elements while adding animations
- **Banner Optimization**: Reduced excessive padding from pt-32/pb-20 to pt-24/pb-12, optimized heading and text sizes for compact layout