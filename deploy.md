# Deployment Guide

## Local Development
```bash
npm install
npm run dev
```
Access at: http://localhost:3001

## Production Build
```bash
npm run build
npm run serve
```
Access at: http://localhost:3000

## Project Structure
- `src/components/` - React components
- `public/` - Static assets including the logo
- `dist/` - Production build output

## Key Features
- ✅ Production-optimized Vite build
- ✅ Code splitting (vendor, icons, main)
- ✅ SEO-optimized HTML meta tags
- ✅ Responsive design with Tailwind CSS
- ✅ Registration form with Basin integration
- ✅ Clean, professional UI
- ✅ No console.log statements in production
- ✅ Security vulnerabilities addressed

## Bundle Analysis
- Total bundle size: ~212KB (uncompressed)
- Gzipped: ~61KB
- Vendor chunk: 140KB (React, React-DOM)
- Icons chunk: 10KB (Lucide React)
- Main app: 38KB

## Performance
- Fast HMR in development
- Optimized production builds
- Lazy loading ready
- Modern ES6+ output
