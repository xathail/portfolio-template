# Modern Portfolio Template

A modern, responsive portfolio website template built with Astro, TypeScript, and CSS. Features a clean design with dark/light mode support, project showcases, and smooth animations.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/xathail/portfolio-template.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── public/              # Static assets (images, PDFs)
│   └── projects/        # Project-specific assets
├── src/
│   ├── assets/         # CSS and TypeScript assets
│   ├── components/     # Reusable Astro components
│   ├── data/          # Project and profile data
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   └── utils/         # Utility functions
├── astro.config.mjs    # Astro configuration
├── package.json        # Project dependencies
└── tsconfig.json      # TypeScript configuration
```

## Customisation

### Profile Information
Edit `src/data/profile.ts` to update:
- Contact information (name, email, social links)
- Hero section text (greeting, title, tagline)
- About section bio
- Experience history (roles, companies, achievements)
- Education history (degrees, schools, details)

### Projects
Edit `src/data/projects.ts` to:
- Add your own projects
- Include project images, links, and details
- Configure featured projects
- Add documentation and demos

### Styling
- Global styles are in `src/assets/`
- Component-specific styles are in their respective `.astro` files
- Theme variables can be modified in the CSS files

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎯 SEO optimised
- ⚡ Fast page loads with Astro
- 🖼️ Project gallery with modal view
- 📄 Project documentation support
- 💻 Clean, modern UI
- 🎨 Customisable styling
- 🔄 Smooth page transitions

## Development Notes

- Built with Astro for static site generation
- TypeScript for type safety
- Pure CSS for styling (no external UI libraries)
- CSS custom properties for theming
- Image optimisation handled by Astro

## Browser Support

The website is optimised for modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.