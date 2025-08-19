# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint with Next.js TypeScript configuration

### Installation
```bash
git clone https://github.com/username/portfolio.git
cd portfolio
npm install
npm run dev
```

## Project Architecture

### Framework & Technology Stack
- **Next.js 15.4.6** with App Router (React 19.1.0)
- **TypeScript** with strict configuration
- **Tailwind CSS v4** with PostCSS and custom theme system
- **Animation Libraries**: GSAP, Framer Motion, custom magicui components
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Theme System**: next-themes with dark/light mode support

### File Structure Overview
```
app/
├── layout.tsx          # Root layout with fonts, theme provider, side navbar
├── page.tsx           # Main homepage assembling all sections
├── globals.css        # Global styles, Tailwind config, theme variables
├── favicon.ico
└── resposive/         # Responsive testing page

components/
├── (main)/            # Main page sections
│   ├── hero.tsx       # Hero section with GSAP animations, stickers
│   ├── about.tsx      # About section with text reveal
│   ├── project.tsx    # Projects showcase
│   └── contact.tsx    # Contact section
├── magicui/           # Custom UI animation components
│   ├── text-reveal.tsx
│   ├── word-rotate.tsx
│   ├── smooth-cursor.tsx
│   ├── scroll-progress.tsx
│   ├── confetti.tsx
│   └── dock.tsx
├── ui/                # Shadcn/ui components and custom UI
│   ├── theme-provider.tsx
│   ├── StickerPeel.tsx
│   ├── Lanyard.tsx    # Discord status integration
│   └── button.tsx
└── side-navbar.tsx    # Fixed side navigation with theme toggle
```

### Key Architectural Patterns

#### Component Organization
- **Main components** in `components/(main)/` represent page sections
- **UI components** follow shadcn/ui patterns with component variants
- **Magic UI components** provide reusable animation primitives
- Custom sticker and interactive elements with GSAP-powered animations

#### Styling Architecture
- **Tailwind CSS v4** with inline custom theme configuration
- **CSS Custom Properties** for theme variables (oklch color space)
- **Font System**: Raleway for headings, Montserrat for body text, Geist Mono for code
- **Responsive Design**: Mobile-first with tablet/desktop breakpoints
- **Dark Mode**: System-based theme switching with next-themes

#### Animation System
- **GSAP ScrollTrigger** for scroll-based animations and pinning
- **Framer Motion** for component transitions
- **Custom cursor** disabled on mobile devices
- **Interactive stickers** with responsive positioning based on screen size

#### Performance Considerations
- Uses **Turbopack** for faster development builds
- Image optimization with Next.js Image component
- **Client-side rendering** for interactive components with "use client" directive
- Conditional rendering for responsive elements

### Component Dependencies
- Hero section depends on GSAP ScrollTrigger, WordRotate, PhotoCircle, StickerPeel
- Theme system integrated throughout with next-themes provider
- Side navbar provides app-wide navigation and theme toggle
- Text animations use custom reveal and rotation components

### Development Notes
- Custom cursor is globally disabled (`* { cursor: none !important }`)
- Sticker positioning uses responsive state management with window resize listeners  
- GSAP animations require proper cleanup in useEffect returns
- Theme provider must wrap all components in layout.tsx
- Uses Tailwind's new v4 syntax with `@import "tailwindcss"`

### External Integrations  
- **Discord Lanyard API** for real-time status display
- **Canvas Confetti** for interactive celebrations
- **Simple Icons** for technology stack display
- **Lucide React** for consistent iconography

## Important Implementation Details

### Responsive Design Strategy
The project uses a comprehensive responsive approach:
- Mobile (≤768px): Simplified layouts, stickers positioned vertically
- Tablet (769-1024px): Intermediate layouts with adjusted sticker positions
- Desktop (1025-1440px): Full layout with side positioning
- Large Desktop (>1440px): Optimized for larger screens

### Animation Performance
- GSAP ScrollTrigger properly cleaned up to prevent memory leaks
- Animations are conditionally rendered based on screen size
- Smooth cursor only enabled on desktop devices
- All interactive elements properly handle resize events

### Theme Implementation
Uses oklch color space for better color management across light and dark themes, with comprehensive CSS custom properties system integrated with Tailwind CSS v4.
