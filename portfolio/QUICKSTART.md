# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites

Make sure you have installed:
- **Node.js** 18 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

## Step 1: Clone & Install

```bash
# Clone the repository
git clone https://github.com/gouravgouravgupta/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install
```

## Step 2: Run Development Server

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

## Step 3: Customize Your Content

### Update Personal Information

1. **Hero Section** - `components/Hero.tsx`
   - Name and title
   - Introduction text
   - Social media links

2. **About Section** - `components/About.tsx`
   - Your bio and description
   - Specializations

3. **Skills Section** - `components/Skills.tsx`
   - Add/remove technologies
   - Update skill levels

4. **Projects Section** - `components/Projects.tsx`
   - Add your projects
   - Update descriptions and links

5. **Contact Section** - `components/Contact.tsx`
   - Email address
   - Phone number
   - Location

### Update Metadata

Edit `app/layout.tsx`:
```tsx
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description',
  // ... more metadata
}
```

## Step 4: Customize Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
}
```

## Step 5: Deploy

### Quick Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts, and your site will be live! 🚀

## Mobile App (Optional)

```bash
# Navigate to mobile app
cd mobile-app

# Install dependencies
npm install

# Start Expo
npm start
```

Scan the QR code with Expo Go app to preview on your phone!

## 📝 Tips

- **Hot Reload**: Changes auto-refresh in development
- **3D Performance**: May be slower on older devices
- **Browser Support**: Works best on modern browsers
- **Mobile Testing**: Test on real devices for best results

## 🆘 Common Issues

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### 3D Elements Not Showing

- Check browser console for errors
- Ensure WebGL is enabled in browser
- Try a different browser

## 📚 Next Steps

- Read the full [README.md](README.md)
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment
- Customize colors and animations
- Add your own projects and content
- Set up analytics

## 🎨 Customization Ideas

- Change color scheme
- Add more sections (Blog, Testimonials, etc.)
- Integrate CMS (Contentful, Sanity)
- Add blog functionality
- Connect to backend API
- Add animations to more elements

## 💡 Pro Tips

1. **Test on Multiple Devices**: Use browser dev tools device emulation
2. **Optimize Images**: Use WebP format for better performance
3. **SEO**: Update meta tags in each section
4. **Accessibility**: Ensure good contrast and keyboard navigation
5. **Performance**: Run Lighthouse audit before deploying

---

**Need more help?** Check the full documentation or open an issue on GitHub!

**Ready to deploy?** Read the [DEPLOYMENT.md](DEPLOYMENT.md) guide.
