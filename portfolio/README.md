# Portfolio Monorepo

This repository contains a professional portfolio website (Next.js) and a companion mobile app (Expo React Native).

## Apps
- `apps/web`: Next.js 14 + Tailwind CSS + Framer Motion + React Three Fiber
- `apps/mobile`: Expo SDK 51 + React Navigation + Reanimated + Expo GL (3D cube)

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Expo CLI (`npm i -g expo`)

### Install dependencies
```bash
npm install
```

### Run the web app
```bash
npm run dev:web
```

### Run the mobile app
```bash
npm run dev:mobile
```

### Content
Update the resume content in:
- Web: `apps/web/content/resume.json`
- Mobile: `apps/mobile/content/resume.json`

Keep them in sync until we introduce a shared package or API.
