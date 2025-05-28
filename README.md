# PQI Quiz Web App

This is an interactive play quotient index quiz built with **React** and styled using **CSS Modules**. The app features animated progress, reusable UI components, and clean transitions across pages. It’s built with **Vite** for a fast development experience and optimized production build.

## 🚀 Tech Stack

[Live site](https://quiz.theschoolofplay.org)

## 🧠 Features

- Interactive multi-page quiz flow (Intro → Questions → Result)
- Clean, responsive UI with reusable components
- Local storage support to persist user data
- Shareable result modal with QR code
- Custom fonts and SVG-based styling
- Deployment-ready (GitHub Pages with `CNAME` support)

## 🚀 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [ESLint](https://eslint.org/) (with custom config)

## 📁 Project Structure

```
src/
│
├── assets/               # Static assets (SVGs, images, fonts)
│   ├── background/       # Background patterns
│   ├── backgroundIcons/
│   ├── fonts/            # Custom fonts
│   └── icons/            # UI icons
│
├── components/           # Reusable UI components
│
├── pages/                # Top-level app views (Intro, Questions, Result, etc.)
│
├── styles/               # CSS Module styles for components and pages
│
├── tools/                # Utilities and custom hooks
│   ├── bestWorstCopy.js
│   ├── questions.js
│   └── useLocalStorageUser.js
│
├── App.jsx               # App entry point
├── App.css               # Global styles
├── index.css             # Base CSS
├── main.jsx              # React DOM entry point
```

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy Production Build

```bash
npm run deploy
```

## Editing Questions

The question text lives in

```
./src/tools/questions.js
```

You can edit the question text in this file and deploy the changes directly.

## 🌐 Deployment

This app is configured for deployment via GitHub Pages. The `public/CNAME` file should contain the custom domain. Adjust Vite’s `base` in `vite.config.js` if needed.

## 🛠️ Linting

Run ESLint using:

```bash
npm run lint
```

To fix issues automatically:

```bash
npm run lint:fix
```

## 🧾 License

This project is licensed under the [MIT License](LICENSE).
