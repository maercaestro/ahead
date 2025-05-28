# AHEAD - Abu Huzaifah's Engineering & AI Dashboard

A modern, personal portfolio website showcasing Abu Huzaifah's projects, achievements, and contact information.

![AHEAD Logo](public/logo-personal.png)

## Features

- Modern, responsive design built with React, Vite, and Tailwind CSS
- Single-page scroll layout with smooth navigation
- Sections for hero, about, projects, resume, and contact
- AI-themed branding with blue-green gradient color scheme
- Easily customizable components for future content updates

## Project Structure

- `src/components/` - Contains all the main sections of the website
- `src/assets/` - Contains images and other static assets
- `public/` - Contains publicly accessible files

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ahead
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

The build artifacts will be located in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Customization

- Update personal information in the respective component files
- Add your own projects to the ProjectsSection.jsx file
- Replace placeholder content with your actual resume details
- Update contact information in the ContactSection.jsx file

## License

All rights reserved. This codebase is the property of Abu Huzaifah and is not licensed for reuse.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
