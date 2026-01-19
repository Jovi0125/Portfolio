# Viray Portfolio

A professional, minimalist personal portfolio website built with React.js.

## Features

- ✨ Clean, modern, minimalist design
- 🎨 Black, white, and gray color palette
- 📱 Fully responsive (desktop, tablet, mobile)
- 🧭 Smooth scroll navigation
- 🎬 Subtle fade and slide animations
- ♿ Accessibility-friendly practices
- 📝 Semantic HTML structure

## Project Structure

```
viray-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   └── index.js
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.css
│   │   │   └── index.js
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   ├── About.css
│   │   │   └── index.js
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.css
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectCard.css
│   │   │   └── index.js
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   ├── Experience.css
│   │   │   └── index.js
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   ├── Contact.css
│   │   │   └── index.js
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       ├── Footer.css
│   │       └── index.js
│   ├── styles/
│   │   ├── index.css      # Global styles & CSS variables
│   │   └── App.css        # App-wide & reusable styles
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/viray-portfolio.git
cd viray-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Personal Information

Update the following files with your information:

- **Hero.jsx** - Name, title, and tagline
- **About.jsx** - Bio and skills
- **Projects.jsx** - Your projects
- **Experience.jsx** - Work experience and education
- **Contact.jsx** - Email and social links
- **Footer.jsx** - Social links and copyright

### Colors

All colors are defined as CSS variables in `src/styles/index.css`:

```css
:root {
  --color-black: #000000;
  --color-white: #ffffff;
  --color-gray-900: #0a0a0a;
  --color-gray-800: #171717;
  /* ... more shades */
}
```

### Typography

The portfolio uses the Inter font from Google Fonts. To change fonts:

1. Update the Google Fonts link in `public/index.html`
2. Update `--font-family` in `src/styles/index.css`

## Technologies Used

- React 18
- CSS3 with CSS Variables
- Google Fonts (Inter)
- SVG Icons (no external icon library)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with React & ☕
