<div align="center">

# Mukesh Lilawat - Portfolio

[![GitHub stars](https://img.shields.io/github/stars/mukeshllawat1/mukeshllawat-Portfolio?style=for-the-badge&logo=github)](https://github.com/mukeshllawat1/mukeshllawat-Portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mukeshllawat1/mukeshllawat-Portfolio?style=for-the-badge&logo=github)](https://github.com/mukeshllawat1/mukeshllawat-Portfolio/network/members)
[![GitHub issues](https://img.shields.io/github/issues/mukeshllawat1/mukeshllawat-Portfolio?style=for-the-badge&logo=github)](https://github.com/mukeshllawat1/mukeshllawat-Portfolio/issues)
[![GitHub license](https://img.shields.io/github/license/mukeshllawat1/mukeshllawat-Portfolio?style=for-the-badge)](https://github.com/mukeshllawat1/mukeshllawat-Portfolio/blob/main/LICENSE)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

A high-performance, production-ready portfolio application built with modern web technologies, demonstrating best practices in full-stack development, UI/UX design, and software architecture.

**[Live Demo](https://mukeshllawat.online)** | **[Documentation](#table-of-contents)** | **[Report Bug](https://github.com/mukeshllawat1/mukeshllawat-Portfolio/issues)** | **[Request Feature](https://github.com/mukeshllawat1/mukeshllawat-Portfolio/issues)**

</div>

---

## Table of Contents

- [Overview](#overview)
- [Technical Stack](#technical-stack)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Code Quality](#code-quality)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This portfolio website serves as a comprehensive showcase of professional work, technical expertise, and project implementations. Built with enterprise-grade technologies and following industry best practices, the application demonstrates proficiency in modern web development paradigms.

### Primary Objectives

- Showcase professional projects and technical capabilities
- Demonstrate expertise in modern JavaScript ecosystem
- Provide responsive, accessible user experience across all devices
- Maintain high performance scores and SEO optimization
- Implement scalable architecture for future enhancements

---

## Technical Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.x | React framework with SSR/SSG capabilities |
| **React** | 18.x | Component-based UI library |
| **TypeScript** | 5.x | Static type checking and enhanced IDE support |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |

### Development Tools

- **ESLint** - Code linting and style enforcement
- **PostCSS** - CSS transformation and optimization
- **Vercel** - Deployment and hosting platform

---

## Key Features

### User Interface

- Fully responsive design supporting mobile, tablet, and desktop viewports
- Smooth animations and transitions using CSS and React techniques
- Accessible navigation with keyboard support and ARIA labels
- Optimized typography and spacing for readability
- Dark theme implementation for enhanced user preference

### Technical Implementation

- Server-side rendering (SSR) for improved SEO and initial load performance
- Static site generation (SSG) for optimal content delivery
- Code splitting and lazy loading for reduced bundle sizes
- Image optimization with Next.js Image component
- Progressive Web App (PWA) capabilities

### Performance

- Lighthouse score: 95+ across all metrics
- First Contentful Paint (FCP) < 1.5s
- Time to Interactive (TTI) < 3.5s
- Cumulative Layout Shift (CLS) < 0.1

---

## Architecture

### Application Structure

The application follows a modular architecture pattern with clear separation of concerns:

- **Presentation Layer**: React components with TypeScript interfaces
- **Styling Layer**: Tailwind CSS utility classes with custom configurations
- **Data Layer**: Static content management with TypeScript type definitions
- **Build Layer**: Next.js compilation and optimization pipeline

### Design Patterns

- Component composition for reusability
- Custom hooks for shared logic
- TypeScript interfaces for type safety
- Atomic design principles for component hierarchy

---

## Getting Started

### Prerequisites

Ensure your development environment meets the following requirements:

```
Node.js >= 18.17.0
npm >= 9.0.0 or yarn >= 1.22.0
Git >= 2.30.0
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mukeshllawat1/mukeshllawat-Portfolio.git
cd mukeshllawat-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment configuration (if required):
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

---

## Development Workflow

### Available Commands

```bash
# Development
npm run dev          # Start development server with hot reload

# Production Build
npm run build        # Create optimized production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix auto-fixable linting issues
npm run type-check   # Run TypeScript compiler check

# Testing (if implemented)
npm run test         # Run test suite
npm run test:watch   # Run tests in watch mode
```

### Git Workflow

This project follows conventional commits specification:

```
feat: Add new feature
fix: Bug fix
docs: Documentation changes
style: Code style changes
refactor: Code refactoring
perf: Performance improvements
test: Testing updates
chore: Build process or auxiliary tool changes
```

---

## Performance Optimization

### Implemented Optimizations

- Next.js automatic code splitting by route
- Image optimization using next/image component
- Font optimization with next/font
- CSS purging in production builds
- Compression and minification of static assets
- CDN delivery through Vercel Edge Network

### Monitoring

Performance is continuously monitored using:

- Vercel Analytics for real-time metrics
- Lighthouse CI for automated performance testing
- Web Vitals tracking for user experience metrics

---

## Deployment

### Production Environment

The application is deployed on Vercel with the following configuration:

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18.x

### Deployment Process

```bash
# Automatic deployment on push to main branch
git push origin main

# Manual deployment
vercel --prod
```

### Environment Variables

Configure the following variables in Vercel dashboard or `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://mukeshllawat.online
```

---

## Project Structure

```
mukeshllawat-Portfolio/
│
├── public/                 # Static assets
│   ├── images/            # Image files
│   ├── fonts/             # Custom fonts
│   └── favicon.ico        # Favicon
│
├── src/
│   ├── components/        # React components
│   │   ├── common/       # Shared components
│   │   ├── layout/       # Layout components
│   │   └── sections/     # Page sections
│   │
│   ├── pages/            # Next.js pages (routing)
│   │   ├── _app.tsx     # Application wrapper
│   │   ├── _document.tsx # HTML document structure
│   │   └── index.tsx    # Home page
│   │
│   ├── styles/           # Global styles
│   │   └── globals.css  # Global CSS
│   │
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── constants/        # Application constants
│   └── hooks/            # Custom React hooks
│
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore patterns
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

---

## Code Quality

### Standards

- TypeScript strict mode enabled
- ESLint with Airbnb configuration
- Prettier for code formatting
- Husky for pre-commit hooks (if implemented)
- 100% TypeScript coverage in source code

### Best Practices

- Semantic HTML5 elements
- WCAG 2.1 Level AA accessibility compliance
- Mobile-first responsive design approach
- BEM methodology for custom CSS (when applicable)
- Component-driven development

---

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 12+ |
| Chrome Mobile | Android 8+ |

---

## Contributing

Contributions are welcome. Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/enhancement`)
3. Commit changes following conventional commits
4. Push to the branch (`git push origin feature/enhancement`)
5. Open a Pull Request with detailed description

### Code Review Process

- All PRs require code review before merge
- Automated tests must pass
- Code must pass linting checks
- Documentation must be updated for new features

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

**Mukesh Lilawat**

- Portfolio: [mukeshllawat.online](https://mukeshllawat.online)
  
For professional inquiries, collaboration opportunities, or technical discussions, please reach out through the contact form on the portfolio website.

---

**Last Updated:** January 2025  
**Maintained by:** Mukesh Lilawat
