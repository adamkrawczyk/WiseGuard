# WiseGuard Website

A modern, production-ready website for WiseGuard - an IoT Asset Tracking & Anti-Theft Solution for Polish Construction sites.

## 🚀 Quick Start

```bash
cd website
npm install
npm start
```

Visit `http://localhost:3000` to view the site.

## 🌍 Multi-Language Support

The site supports English (default) and Polish:

```bash
# Development (one language at a time)
npm start              # English
npm start -- --locale pl  # Polish

# Testing both languages (with working language switcher)
npm run build
npm run serve         # Visit http://localhost:3000

# Note: Language switcher only works in production build,
# not in dev server. This is normal Docusaurus behavior!
```

- English: `http://localhost:3000`
- Polish: `http://localhost:3000/pl`

**⚠️ Important:** The language switcher in navbar only works in production build (`npm run serve`) or on Netlify, NOT in dev mode (`npm start`). This is expected Docusaurus behavior.

See `LANGUAGE_SWITCHING.md` for details.

## 📦 Production Build

```bash
npm run build    # Build for production
npm run serve    # Preview production build locally
```

## 🎨 Features

### Pages Implemented
- **Homepage** (`/`) - Hero section with animated typing, statistics, features grid, CTA
- **Solution** (`/solution`) - Detailed product description, architecture, features
- **Cost Calculator** (`/calculator`) - Interactive ROI calculator with real-time pricing
- **Contact** (`/contact`) - Contact form and company information
- **About** (`/about`) - Company mission and values
- **Documentation** (`/docs`) - Technical documentation (default Docusaurus docs)
- **Privacy Policy** (`/privacy`) - GDPR-compliant privacy policy
- **Terms of Service** (`/terms`) - Legal terms and conditions

### Key Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Animated hero section with typing effect
- ✅ Interactive cost calculator with ROI analysis
- ✅ Multilingual support (English & Polish)
- ✅ Modern gradient design with purple/blue theme
- ✅ Production-ready build
- ✅ Netlify deployment configuration

## 🎯 Brand Identity

### Logo
Shield with circuit pattern representing:
- **Shield**: Protection and security
- **Circuits**: IoT technology and connectivity
- **Colors**: Blue (#667eea) to Purple (#764ba2) gradient

### Color Scheme
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Accent (Alert): `#ff6b6b` (Red)
- Accent (Success): `#51cf66` (Green)

## 💰 Calculator Pricing Model

Current pricing (in PLN):
- BLE Tag: 60 PLN (hardware) + 5 PLN/month
- GPS Tracker: 500 PLN (hardware) + 20 PLN/month
- Gateway: 600 PLN per unit
- Platform Base Fee: 8000 PLN/month

Gateway requirements:
- Small sites (≤100m): 2 gateways
- Medium sites (≤200m): 3 gateways
- Large sites (>200m): 5 gateways

## 📚 Project Structure

```
website/
├── docs/                     # Documentation pages
├── i18n/pl/                 # Polish translations
├── src/
│   ├── components/          # Reusable components
│   ├── css/
│   │   └── custom.css      # Global styles
│   └── pages/              # Website pages
│       ├── index.tsx       # Homepage
│       ├── calculator.tsx  # Cost calculator
│       ├── solution.tsx    # Solution page
│       ├── contact.tsx     # Contact form
│       ├── about.tsx       # About page
│       ├── privacy.tsx     # Privacy policy
│       ├── terms.tsx       # Terms of service
│       └── *.module.css    # Page styles
├── static/
│   └── img/               # Images and assets
├── docusaurus.config.ts   # Main configuration
├── netlify.toml           # Netlify deployment config
└── package.json
```

## 🚀 Deployment on Netlify

### Option 1: Netlify UI (Recommended)

1. Push code to GitHub repository
2. Go to [Netlify](https://www.netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build/`
   - Base directory: `website/`
6. Deploy!

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd website
netlify deploy --prod
```

### Environment Variables
No environment variables required for basic deployment.

### Custom Domain
After deployment, configure custom domain in Netlify dashboard:
- Recommended: `wiseguard.pl` or `wiseguard.io`
- Netlify provides free HTTPS/SSL

## 📝 Content Updates

### Updating Statistics
Edit values in:
- `src/pages/index.tsx` (homepage stats)
- `src/pages/solution.tsx` (solution stats)
- `src/pages/calculator.tsx` (ROI calculations)

### Updating Pricing
Edit pricing constants in `src/pages/calculator.tsx`:
```typescript
const BLE_TAG_COST = 60;
const GPS_TRACKER_COST = 500;
const GATEWAY_COST = 600;
const MONTHLY_BLE_FEE = 5;
const MONTHLY_GPS_FEE = 20;
const MONTHLY_PLATFORM_FEE = 8000;
```

### Adding Polish Translations
Create corresponding files in `i18n/pl/docusaurus-plugin-content-pages/` for each page.

## 🎨 Customization

### Colors
Edit `src/css/custom.css` to change:
- Primary color
- Secondary color
- Dark mode colors
- Font families

## 🧪 Testing

### Pre-Deployment Checklist
- [x] All pages load without errors
- [x] Mobile responsive on all viewports
- [x] Calculator produces correct results
- [x] Forms validate properly
- [x] Navigation works (all links)
- [x] Polish translations present
- [x] Images optimized and loading
- [x] Build succeeds without warnings

### Browser Testing
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## 📊 Performance

Current Lighthouse scores target:
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

## 🔧 Development Commands

```bash
npm start              # Start dev server
npm run build         # Production build
npm run serve         # Preview production build
npm run clear         # Clear cache
npm run swizzle       # Customize Docusaurus components
npm run deploy        # Deploy to GitHub Pages (if configured)
```

## 🐛 Troubleshooting

### Build Fails
```bash
cd website
npm run clear
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Broken Links
Check `docusaurus.config.ts` and ensure all footer/navbar links exist.

### Translation Issues
Ensure files exist in both:
- `src/pages/` (English)
- `i18n/pl/docusaurus-plugin-content-pages/` (Polish)

## 📖 Documentation

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/)
- [Netlify Deploy Docs](https://docs.netlify.com/)

## 🤝 Contributing

See `../agents.md` for comprehensive development guide and architecture details.

## 📧 Support

For questions or issues:
- Email: info@wiseguard.pl

## 📄 License

Copyright © 2026 WiseGuard. All rights reserved.

---

**Built with** [Docusaurus](https://docusaurus.io/) **and** ❤️
