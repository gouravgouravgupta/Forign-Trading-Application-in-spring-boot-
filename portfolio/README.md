# Gourav Gupta - Professional Portfolio

A stunning, modern portfolio website featuring 3D animations, smooth transitions, and a beautiful UI built with cutting-edge web technologies.

## 🚀 Features

- **3D Animations**: Interactive 3D elements using Three.js and React Three Fiber
- **Smooth Animations**: Elegant transitions with Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- **Professional UI**: Clean, modern design with Tailwind CSS
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Optimized for search engines

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

### 3D & Animations
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animation library

### Icons & UI
- **Lucide React** - Beautiful icon set
- **React Icons** - Additional icon library

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/gouravgouravgupta/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── 3D/
│   │   └── Scene3D.tsx     # 3D scene component
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Update content in components:**
   - Edit `components/Hero.tsx` for hero section
   - Edit `components/About.tsx` for about information
   - Edit `components/Skills.tsx` to add/modify skills
   - Edit `components/Projects.tsx` to showcase your projects
   - Edit `components/Contact.tsx` for contact information

2. **Update metadata:**
   - Edit `app/layout.tsx` for SEO metadata

3. **Update links:**
   - Update GitHub, LinkedIn, and other social links in `Hero.tsx` and `Footer.tsx`

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

## 📱 Mobile App (Coming Soon)

A React Native mobile application version of this portfolio is in development!

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy on Netlify

```bash
npm run build
```

Then drag and drop the `.next` folder to Netlify.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Gourav Gupta**

- GitHub: [@gouravgouravgupta](https://github.com/gouravgouravgupta)
- LinkedIn: [Gourav Gupta](https://linkedin.com/in/gouravgupta)
- Email: contact@gouravgupta.dev

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐️ Show your support

Give a ⭐️ if you like this project!

## 📸 Screenshots

### Desktop View
The portfolio features a stunning 3D animated hero section with smooth scrolling and elegant transitions.

### Mobile View
Fully responsive design that looks great on all devices.

---

**Built with ❤️ by Gourav Gupta**
