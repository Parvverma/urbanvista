# Urbanvista — Frontend Prototype

This repository contains a small frontend prototype for an Urbanvista real-estate site (static HTML/CSS/JS). It includes pages for home, properties, login, EMI calculator and simple UI components.

## Quick preview
1. Open the project folder in VS Code or your editor.
2. Use the Live Server extension (or any static file server) to preview pages locally. Example using Python:

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Key pages
- `index.html` — Home / hero search / featured strips
- `properties.html` — Post property page with a property form
- `about.html` — About page
- `login.html` — Login UI
- `EMI_calculator.html` — EMI calculator with live charts

## Assets
- `assets/css/` — stylesheets (main `style.css`, page-specific CSS files)
- `assets/js/` — client-side scripts (e.g., `login.js`)
- `assets/images/` — images used across pages

## Development notes
- The project is intentionally simple and static. Many elements use inline styles in the HTML; consider moving those into CSS files for consistency.
- Responsive behavior is implemented with media queries in `assets/css/style.css` and page-specific CSS files.
- The EMI calculator uses Chart.js via CDN for interactive charts.

## Suggested next steps
- Add a small build tool (npm) and linting for styles.
- Replace inline styles with CSS classes and consolidate duplicated rules.
- Add a mobile navigation (hamburger) for small screens.
- Hook up form submissions to a backend or local JSON storage for demo data persistence.

## License
This is a working prototype; add a license file if you plan to publish or open-source it.

---
If you want, I can: add a Makefile or npm scripts to preview, implement a hamburger menu, or convert inline styles to CSS modules — tell me which and I'll implement it.
