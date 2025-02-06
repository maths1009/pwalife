# PWA-Frontend 🚀

**Progressive Web App template with two main pages, built using modern web technologies and best practices for PWA development.**

## 🌟 Features

- 📱 Full PWA Support
  - Offline functionality
  - Install prompt
  - Service Worker
  - Cache management
- 🎨 Two Responsive Pages
- ⚡ Vite for development and building
- 🛣️ File-based Routing with Tanstack Router
- 🌈 TypeScript support
- 🎨 Tailwind CSS + SASS styling
- 📦 Modular architecture

## 🛠️ Tech Stack

- TypeScript >= 5.5.4
- React.js >= 18.3.1
- Vite for build and dev
- Tailwind CSS
- SASS (with PLUM support)
- Service Workers
- ESLint + Biome
- Jest/Bun for testing

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Development
bun run dev

# Production build
bun run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── routes/         # Main application pages
├── styles/        # Global styles and Tailwind config
├── utils/         # Helper functions
└── types/         # TypeScript definitions
```

## 📌 PWA Features

- **Offline Support**: Cache-first strategy for assets
- **Push Notifications**: User engagement features
- **Installation**: Custom install prompt
- **Background Sync**: Data synchronization when online

## 🧪 Testing

```bash
# Unit tests
bun run test:unit

# E2E tests
bun run test:e2e
```

## 📦 Building for Production

```bash
# Build
bun run build
```

## 📜 Scripts

- `dev`: Start development server
- `build`: Production build
- `preview`: Preview production build
- `test:unit`: Run unit tests
- `test:e2e`: Run E2E tests
- `biome:fix`: Run linter and formatter
- `pkg-upgrade`: Update dependencies
