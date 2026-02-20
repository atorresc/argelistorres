# Argelis Torres - Professional Resume Website

Personal CV website with dark mode, optimized for shareability and search engines. Deployed automatically to GitHub Pages.

**Live site:** https://argelistorres.github.io/argelistorres/

## Project Structure

```
argelistorres/
├── index.html              # Main CV page
├── articulos.html          # LinkedIn articles index
├── styles/
│   └── main.css            # All styles (CSS variables, responsive, dark mode)
├── scripts/
│   └── main.js             # Dark mode toggle, smooth scroll, scroll animations
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions - auto deploy to GitHub Pages
├── og-image.png            # Preview image for social media (share via LinkedIn, Twitter, etc.)
├── package.json
└── README.md
```

## Features

- **Dark Mode** — Click the moon icon (☾) in the navigation to toggle. Preference is saved in local storage.
- **Modern Typography** — Using Google Fonts (Inter) for clean, professional appearance.
- **Responsive Design** — Mobile-friendly with CSS Grid and media queries for all devices.
- **Smooth Scroll** — Internal navigation links scroll smoothly to their sections.
- **Scroll Animations** — Sections fade in with staggered animations (100ms delay between each) as they enter the viewport.
- **Sticky Navigation** — Nav bar stays visible at the top while scrolling with frosted glass effect (backdrop-filter blur).
- **Visual Enhancements** — Gradient header, elevated cards with hover effects, smooth transitions throughout.
- **SEO Optimized** — Open Graph and Twitter Card tags for better visibility when shared on social media. JSON-LD schema for structured data.
- **Auto Deploy** — Push to `main` branch → GitHub Actions deploys automatically to GitHub Pages.

## Local Development

### Using live-server (recommended)

```bash
npm install
npm start
```

Opens a live-reload server on `http://localhost:8080`. Changes to HTML, CSS, or JS refresh automatically in the browser.

### Direct in browser

Simply open `index.html` directly in your web browser.

## Deploy to GitHub Pages

### One-time setup

1. Go to your repository Settings → Pages
2. Under "Source", select **"GitHub Actions"**
3. Save

### Deploy

Push to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages within 1-2 minutes.

The site will be available at: `https://argelistorres.github.io/argelistorres/`

## Social Media Preview

When you share the CV link on LinkedIn, Twitter, or other platforms, it will show:

- **Title:** "Argelis Torres - Technical Advisor & Dynamics 365 Expert"
- **Description:** 18+ years of IT expertise
- **Image:** `og-image.png` (must exist in the repo root for this to work)

To set up the preview image:
1. Add a professional photo or screenshot as `og-image.png` in the repository root
2. Push to main
3. Test with LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Variables, Grid, Flexbox, dark mode support
- **JavaScript (ES6)** — No framework, plain vanilla JS
- **GitHub Actions** — CI/CD for automatic deployment

## License

MIT
