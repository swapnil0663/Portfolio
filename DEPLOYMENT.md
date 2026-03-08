# Deployment Guide - GitHub Pages

## Quick Deploy to GitHub Pages

### Step 1: Update vite.config.js

If deploying to `https://<username>.github.io/<repo>/`, update `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your repo name
})
```

If deploying to `https://<username>.github.io/`, use:

```javascript
base: '/',
```

### Step 2: Build the Project

```bash
npm run build
```

### Step 3: Deploy Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 4: Enable GitHub Pages

1. Go to your GitHub repository
2. Settings → Pages
3. Source: GitHub Actions
4. Push your code to trigger deployment

### Alternative: Manual Deploy with gh-pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## Deploy to Vercel (Easiest Option)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy!

## Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Done!

---

Choose the deployment method that works best for you!
