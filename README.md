# Portfolio - Vite + React + TypeScript

A modern portfolio website built with React, TypeScript, and Vite, featuring a dark navy theme and smooth animations.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## ⚠️ Troubleshooting

### Error: `Cannot find module @rollup/rollup-linux-x64-gnu`
If you see this error, it means the dependencies were installed on Windows (PowerShell/CMD) but you are trying to run the project in Linux (WSL).

**To fix this, run the following command in your terminal:**

```bash
rm -rf node_modules package-lock.json && npm install && npm run dev
```

This will reinstall the correct dependencies for your current operating system.
