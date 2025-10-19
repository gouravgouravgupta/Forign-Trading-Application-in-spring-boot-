# Deployment Guide

This guide covers various deployment options for your portfolio website and mobile app.

## 🌐 Website Deployment

### Deploy on Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. **Push your code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

#### Custom Domain
- Go to your project settings
- Add your custom domain
- Update DNS records as instructed

### Deploy on Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop your `.next` folder
   - Or connect your Git repository for automatic deployments

### Deploy on GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "scripts": {
    "deploy": "next build && next export && gh-pages -d out"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

### Deploy on AWS Amplify

1. **Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
```

2. **Initialize Amplify**
```bash
amplify init
```

3. **Add hosting**
```bash
amplify add hosting
```

4. **Publish**
```bash
amplify publish
```

### Deploy with Docker

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **Build and run**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📱 Mobile App Deployment

### iOS App Store

1. **Build for iOS**
```bash
cd mobile-app
expo build:ios
```

2. **Submit to App Store**
   - Download the IPA file
   - Upload using Xcode or Transporter
   - Fill in App Store Connect details
   - Submit for review

### Google Play Store

1. **Build for Android**
```bash
cd mobile-app
expo build:android
```

2. **Submit to Play Store**
   - Download the APK/AAB file
   - Create a new app in Google Play Console
   - Upload the build
   - Fill in store listing details
   - Submit for review

### Expo Go

For testing and sharing:

1. **Publish to Expo**
```bash
expo publish
```

2. **Share the link**
   - Users can open the link in Expo Go app
   - Great for beta testing

## 🔧 Environment Variables

### For Production

Create `.env.production`:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_CONTACT_EMAIL=your_email
```

### Security Best Practices

- Never commit `.env` files to Git
- Use environment variables for sensitive data
- Enable HTTPS on your domain
- Set up CSP headers for security

## 🚀 Performance Optimization

### Before Deployment

1. **Optimize Images**
```bash
npm install sharp
```

2. **Analyze Bundle**
```bash
npm run build
npm run analyze
```

3. **Enable Compression**
   - Vercel/Netlify handle this automatically
   - For custom servers, enable gzip/brotli

### CDN Configuration

For static assets:
- Use Vercel's built-in CDN
- Or configure Cloudflare for your domain

## 📊 Analytics & Monitoring

### Add Google Analytics

Install package:
```bash
npm install @next/third-parties
```

Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

### Monitoring Services

- **Vercel Analytics**: Built-in for Vercel deployments
- **Sentry**: Error tracking
- **LogRocket**: Session replay

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Test on multiple devices/browsers
- [ ] Optimize images and assets
- [ ] Set up environment variables
- [ ] Configure custom domain
- [ ] Enable SSL/HTTPS
- [ ] Test contact form
- [ ] Add meta tags for SEO
- [ ] Set up analytics
- [ ] Create 404 page
- [ ] Test social media sharing
- [ ] Verify all external links
- [ ] Run Lighthouse audit
- [ ] Test loading speed

## 🆘 Troubleshooting

### Build Fails

1. Check Node.js version (18+)
2. Delete `node_modules` and `.next`
3. Run `npm install` again
4. Clear cache: `npm cache clean --force`

### 3D Elements Not Loading

- Ensure Three.js is properly installed
- Check browser console for errors
- Verify WebGL is supported

### Contact Form Issues

- Check email service configuration
- Verify environment variables
- Test with different email addresses

## 📚 Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Expo Deployment Guide](https://docs.expo.dev/distribution/introduction/)
- [React Native Deployment](https://reactnative.dev/docs/signed-apk-android)

---

**Need help?** Open an issue on GitHub or contact support.
