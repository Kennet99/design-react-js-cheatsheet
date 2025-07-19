# Deployment Guide

This guide will help you deploy your React JS Cheatsheet to various free hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/react-js-cheatsheet.git
   git push -u origin main
   ```

2. **Deploy automatically**
   ```bash
   npm run deploy
   ```

3. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/react-js-cheatsheet/`

### Option 2: Netlify (Free)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to the deploy area
   - Or connect your GitHub repository for automatic deployments

3. **Your site will be live at:**
   `https://your-site-name.netlify.app`

### Option 3: Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Your site will be live at:**
   `https://your-project-name.vercel.app`

## 🔧 Manual Deployment

If you prefer to deploy manually:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to any web hosting service:
   - AWS S3
   - Google Cloud Storage
   - Any traditional web hosting
   - Your own server

## 📝 Custom Domain (Optional)

After deploying, you can add a custom domain:

1. **GitHub Pages**: Go to repository settings → Pages → Custom domain
2. **Netlify**: Go to site settings → Domain management
3. **Vercel**: Go to project settings → Domains

## 🛠️ Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for syntax errors in your code
- Ensure Node.js version is 14 or higher

### Deployment Issues
- For GitHub Pages: Make sure the repository is public
- For Netlify: Check the build settings and output directory
- For Vercel: Ensure the project structure is correct

### 404 Errors
- Make sure the base path in `vite.config.js` matches your deployment path
- For GitHub Pages: The base should be `/react-js-cheatsheet/`
- For other platforms: You can remove the base path

## 📊 Analytics (Optional)

Add analytics to track usage:

### Google Analytics
Add this to your `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
If using Vercel, analytics are included automatically.

## 🔄 Continuous Deployment

Set up automatic deployments:

1. **GitHub Actions** (for GitHub Pages)
2. **Netlify** (connect your GitHub repo)
3. **Vercel** (connect your GitHub repo)

This way, every time you push changes to your repository, your site will automatically update.

## 📱 Performance Optimization

After deployment, you can optimize performance:

1. **Enable compression** on your hosting platform
2. **Set up caching headers**
3. **Use a CDN** if available
4. **Optimize images** and assets

---

**Your cheatsheet is now live and ready to help UX designers learn React! 🎉** 