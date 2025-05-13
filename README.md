# React + TypeScript + Vite + Tailwind CSS + DaisyUI Template

This template provides a minimal setup to get React working in Vite with HMR, some ESLint rules, Tailwind CSS, and DaisyUI.

Currently, two official Vite plugins are available for React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh (this template uses this one by default)

## Features

- [Vite](https://vitejs.dev/) for fast development and builds
- [React](https://reactjs.org/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [DaisyUI](https://daisyui.com/) component library for Tailwind CSS
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting (recommended setup)
- Hot Module Replacement (HMR) for a great development experience

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended, e.g., 18.x or 20.x)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Using as a template:**
    If you are on GitHub, you can click the "Use this template" button to create a new repository based on this template.

2. **Cloning (alternative):**
    If you prefer to clone the repository manually:

    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

    *(Replace `your-username/your-repository-name.git` with the actual URL if you've already pushed it somewhere)*

3. **Install dependencies:**
    Open your terminal in the project root and run:

    ```bash
    npm install
    ```

    or if you prefer Yarn:

    ```bash
    yarn install
    ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) (or the port indicated in your terminal) to view it in your browser. The page will reload when you make changes, and you will see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include hashes for cache busting.

### `npm run lint`

Lints the source code using ESLint to identify and report on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

### `npm run preview`

Serves the production build locally from the `dist` folder. This command is useful for verifying that the production build works correctly before deploying it.
