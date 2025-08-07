# UI_2

Glass dashboard UI built with React and Tailwind CSS.

## Features
- Modern "glass" visual style.
- Interactive charts with [Recharts](https://recharts.org/).
- 3D components powered by [three.js](https://threejs.org/) and @react-three/fiber.
- Smooth animations using [Framer Motion](https://www.framer.com/motion/).

## Getting started

### Prerequisites
- Node.js 16+
- npm

### Installation
```bash
npm install
```

### Development
Start the development server with hot reloading:
```bash
npm start
```

### Production build
Create an optimized production build:
```bash
npm run build
```

### Deployment
The project includes a GitHub Pages deployment script that publishes the `build` folder to
the `gh-pages` branch of [`gatdeguin/UI_2`](https://github.com/gatdeguin/UI_2) using an
explicit repository URL. This allows deployment even if no `origin` remote is configured.
```bash
npm run deploy
```

## Project structure
- `src/` - application source code.
- `public/` - static assets such as `index.html` and icons.
- `tailwind.config.js` - Tailwind CSS configuration.
- `postcss.config.js` - PostCSS setup.

## Contributing
Contributions, issues and feature requests are welcome.

## License
This project is provided as-is without an explicit license.
