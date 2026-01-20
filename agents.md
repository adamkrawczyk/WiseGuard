# WiseGuard Website Development Guide for Codex Agent

## Project Overview
This is a production-ready Docusaurus-based website for WiseGuard - an IoT Asset Tracking & Anti-Theft Solution for Polish Construction sites. The website serves as both a pitch deck and a comprehensive information portal for potential customers.

## Technology Stack
- **Framework**: Docusaurus (TypeScript)
- **Styling**: CSS Modules + Custom CSS
- **Animation**: react-type-animation, framer-motion
- **Languages**: English (default) and Polish (i18n)
- **Deployment**: Netlify

## Project Structure
```
website/
├── docs/                          # Documentation pages
├── i18n/
│   └── pl/                       # Polish translations
│       ├── docusaurus-plugin-content-docs/
│       └── docusaurus-plugin-content-pages/
├── src/
│   ├── components/               # Reusable React components
│   ├── css/
│   │   └── custom.css           # Global styles
│   └── pages/                   # Main website pages
│       ├── index.tsx            # Homepage with hero, features, stats, CTA
│       ├── calculator.tsx       # Interactive cost calculator
│       ├── solution.tsx         # Detailed solution description
│       ├── contact.tsx          # Contact form
│       └── *.module.css         # Page-specific styles
├── static/
│   └── img/                     # Images and assets
├── docusaurus.config.ts         # Main configuration
├── sidebars.ts                  # Documentation sidebar
└── package.json

```

## Core Pages Implemented

### 1. Homepage (`/`)
- **Hero Section**: Animated typing effect with CTAs
- **Stats Section**: Key statistics about construction theft
- **Features Grid**: 6 key features with icons
- **CTA Section**: Call-to-action to calculator

### 2. Solution Page (`/solution`)
- Problem statement with statistics
- Hybrid architecture explanation (BLE + GPS)
- Key features list
- How it works (4-step process)
- CTA to calculator

### 3. Cost Calculator (`/calculator`)
- Interactive form with sliders
- Real-time cost calculation
- Breakdown of:
  - BLE tags cost
  - GPS trackers cost
  - Gateway infrastructure
  - Monthly/annual subscriptions
- ROI calculation
- Potential savings estimate
- CTA to contact page

### 4. Contact Page (`/contact`)
- Contact form
- Company information
- Business hours
- Email/phone details

## Brand Identity

### Logo Concept
**Symbol**: Shield with embedded circuit pattern
- Represents protection (shield) + technology (circuits)
- Colors: Primary blue/purple gradient
- Modern, clean, tech-forward aesthetic

### Color Scheme
```css
Primary: #667eea (Blue)
Secondary: #764ba2 (Purple)
Gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Accent: #ff6b6b (Red for alerts/problems)
Success: #51cf66 (Green for positive stats)
```

### Typography
- Headings: Bold, modern sans-serif
- Body: Clear, readable sans-serif
- Emphasis on hierarchy and scanability

## Key Features to Emphasize

1. **Daily Automated Audit** - Differentiator from competitors
2. **Real-Time Alerts** - Immediate theft detection
3. **Zone-Based Tracking** - Cost-effective solution
4. **Long Battery Life** - Practical for construction sites
5. **Comprehensive Reports** - Insurance/police documentation
6. **Manager-Friendly UI** - Simple, <10 min/day

## Content Strategy

### Problem-Solution Framework
1. **Problem**: Construction theft costs (74% firms affected, €1.5B losses)
2. **Solution**: Hybrid IoT tracking (BLE mass + GPS premium)
3. **Value**: Prevent theft, reduce delays, improve recovery
4. **Action**: Calculate costs, request demo

### Target Audience
- **Primary**: Construction site managers in Poland
- **Secondary**: Construction company owners, CFOs
- **Language**: Professional but accessible, not overly technical

## Technical Implementation Notes

### Internationalization (i18n)
- Default locale: English (`en`)
- Secondary locale: Polish (`pl`)
- Path: `https://wiseguard.netlify.app/pl/` for Polish
- All pages must have Polish translations in `i18n/pl/`

### Polish Translation Strategy
Create corresponding files in:
```
i18n/pl/docusaurus-plugin-content-pages/
├── index.tsx
├── calculator.tsx
├── solution.tsx
└── contact.tsx
```

### Animation Guidelines
- Use `react-type-animation` for hero text
- Keep animations subtle and professional
- Ensure animations don't impact performance
- Make animations optional/reducible for accessibility

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 996px
  - Desktop: > 996px
- Grid layouts with `grid-template-columns: repeat(auto-fit, minmax(...))`

## Calculator Logic

### Pricing Model (PLN)
```
BLE Tag: 40 PLN (hardware)
GPS Tracker: 400 PLN (hardware)
Gateway: 400 PLN (hardware)
Monthly BLE Fee: 2 PLN per tag
Monthly GPS Fee: 20 PLN per tracker
Platform Base Fee: 200 PLN per month
```

### Gateway Count by Site Size
- Small (≤100m): 2 gateways
- Medium (≤200m): 3 gateways
- Large (>200m): 5 gateways

### ROI Calculation
- Average theft loss: 15,000 PLN/year
- Prevention rate: 70%
- Potential savings: 10,500 PLN/year
- ROI: (Total first year cost) vs (Potential savings)

## Documentation Structure (`/docs`)

### Recommended Docs Pages
1. **Introduction** - What is WiseGuard
2. **Getting Started** - Pilot program details
3. **Hardware Guide** - BLE tags, GPS trackers, gateways
4. **Installation** - Step-by-step deployment
5. **User Guide** - Dashboard walkthrough
6. **Troubleshooting** - Common issues
7. **API Reference** - For integrations
8. **FAQ** - Frequently asked questions

## Deployment on Netlify

### Build Command
```bash
npm run build
```

### Publish Directory
```
build/
```

### Environment Variables
None required for basic deployment

### netlify.toml Configuration
```toml
[build]
  command = "npm run build"
  publish = "build/"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## SEO Optimization

### Meta Tags
- Title: "WiseGuard - IoT Asset Tracking for Construction Sites"
- Description: "Intelligent IoT asset tracking and anti-theft solution for Polish construction sites. Real-time monitoring, automated audits, and instant alerts."
- Keywords: construction, asset tracking, theft prevention, IoT, Poland, BLE, GPS

### Open Graph
- og:image: Social card with logo and tagline
- og:type: website
- og:locale: en_US, pl_PL

### Structured Data
Consider adding JSON-LD for:
- Organization
- Product
- Service

## Performance Targets
- Lighthouse Score: >90
- First Contentful Paint: <2s
- Time to Interactive: <3s
- Bundle size: <500KB (excluding images)

## Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratios >4.5:1
- Alt text for all images

## Content Updates

### Regular Updates Needed
1. **Statistics** - Update theft statistics annually
2. **Pricing** - Adjust calculator values as needed
3. **Case Studies** - Add after pilot programs
4. **Testimonials** - Include customer quotes
5. **Blog/News** - Optional content marketing

## Future Enhancements

### Phase 2 Features
1. **Live Demo** - Interactive product demo
2. **Video Content** - Explainer videos, tutorials
3. **Customer Portal** - Login for existing customers
4. **Blog** - Industry insights, case studies
5. **Comparison Tool** - vs. competitors
6. **Testimonials Section** - Customer success stories
7. **Integration Showcase** - Partner integrations

### Advanced Calculator Features
- Multi-site calculations
- Insurance premium reduction calculator
- Project delay cost calculator
- Custom scenarios

## Testing Checklist

### Before Deployment
- [ ] All pages load without errors
- [ ] Mobile responsive on all pages
- [ ] Forms submit successfully
- [ ] Calculator produces correct results
- [ ] Navigation works (all links)
- [ ] Polish translations complete
- [ ] Images optimized and loading
- [ ] SEO meta tags present
- [ ] Accessibility audit passed
- [ ] Performance audit passed

### Browser Compatibility
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Maintenance Guidelines

### Monthly Tasks
- Check for broken links
- Update statistics if new data available
- Review and respond to contact form submissions
- Monitor analytics for user behavior

### Quarterly Tasks
- Update documentation
- Refresh case studies/testimonials
- Review and update pricing
- Audit SEO performance
- Security updates for dependencies

## Support & Resources

### Documentation
- Docusaurus: https://docusaurus.io/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs

### Design Inspiration
- Construction tech websites
- SaaS landing pages
- IoT product pages

### Polish Language Resources
- Google Translate (review/edit)
- Native speaker review recommended
- Construction industry terminology

## Command Reference

### Development
```bash
npm start              # Start dev server
npm run start -- --locale pl  # Start with Polish
npm run build         # Production build
npm run serve         # Preview production build
npm run clear         # Clear cache
```

### Deployment
```bash
npm run build         # Build for production
netlify deploy --prod # Deploy to Netlify (if CLI installed)
```

## Contact Information
- Project: WiseGuard
- Target Market: Polish construction industry
- Website: https://wiseguard.netlify.app
- Support: info@wiseguard.pl

---

## Quick Start for Agents

To continue development:

1. **Run dev server**: `cd website && npm start`
2. **View site**: Open http://localhost:3000
3. **Edit pages**: Modify files in `src/pages/`
4. **Add translations**: Create files in `i18n/pl/`
5. **Build**: `npm run build` to test production build
6. **Deploy**: Connect to Netlify for automatic deployment

## Key Differentiators to Highlight

1. **Daily automated audit** (not in competing solutions)
2. **Zone-based tracking** (cost-effective alternative to GPS everything)
3. **Incident report generation** (for insurance/police)
4. **Manager-centric UX** (<10 min/day management)
5. **Hybrid architecture** (BLE + GPS, best of both)
6. **Polish market focus** (local support, language, regulations)

This guide should enable any agent to continue development, make updates, and deploy the WiseGuard website successfully.
