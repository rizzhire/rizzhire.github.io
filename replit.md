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