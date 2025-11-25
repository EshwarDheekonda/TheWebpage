# Deployment Guide - Portfolio Website

## Step-by-Step Vercel Deployment

This guide will walk you through deploying your portfolio website to Vercel, the recommended platform for Next.js applications.

## Prerequisites

- ✅ GitHub repository created and code pushed
- ✅ Vercel account (we'll create one if needed)
- ✅ Domain name (optional, can use Vercel's free domain)

## Step 1: Create Vercel Account

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** in the top right
3. Choose **"Continue with GitHub"** (recommended - easiest integration)
4. Authorize Vercel to access your GitHub account
5. Complete the signup process

## Step 2: Import Your Project

1. After logging in, you'll see the Vercel dashboard
2. Click **"Add New..."** button (top right)
3. Select **"Project"**
4. You'll see a list of your GitHub repositories
5. Find **"TheWebpage"** repository
6. Click **"Import"** next to your repository

## Step 3: Configure Project Settings

Vercel will auto-detect Next.js, but verify these settings:

### Framework Preset
- Should show: **Next.js** (auto-detected)
- If not, select it from the dropdown

### Root Directory
- Leave as **`./`** (default)

### Build and Output Settings
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `.next` (auto-filled)
- **Install Command**: `npm install` (auto-filled)

### Environment Variables
- Currently, you don't need any environment variables
- EmailJS is configured client-side
- If you add server-side features later, add them here

## Step 4: Deploy

1. Review all settings
2. Click **"Deploy"** button
3. Wait for the build to complete (usually 1-3 minutes)
4. You'll see build logs in real-time
5. Once complete, you'll get a success message

## Step 5: Access Your Live Website

After deployment:

1. You'll see a **"Visit"** button or a URL like: `thewebpage.vercel.app`
2. Click it to see your live website
3. Your site is now live and accessible worldwide!

## Step 6: Update Placeholder Domains (Important!)

Now that you have your live URL, update the placeholder domains in your code:

### Files to Update:

1. **`app/sitemap.ts`** - Replace `https://yourdomain.com` with your Vercel URL
2. **`app/robots.ts`** - Replace `https://yourdomain.com` with your Vercel URL  
3. **`app/layout.tsx`** - Update Open Graph and Twitter card URLs

After updating:
- Commit the changes: `git add . && git commit -m "Update domain URLs"`
- Push to GitHub: `git push`
- Vercel will automatically redeploy with the new URLs

## Step 7: Custom Domain (Optional)

If you have a custom domain:

1. Go to your project in Vercel dashboard
2. Click **"Settings"** tab
3. Click **"Domains"** in the sidebar
4. Enter your domain name (e.g., `yourname.com`)
5. Follow Vercel's DNS configuration instructions
6. Add the DNS records to your domain registrar
7. Wait for DNS propagation (5-60 minutes)
8. SSL certificate is automatically provisioned by Vercel

## Step 8: Verify Deployment

Check these items:

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Contact section displays correctly
- [ ] Navigation works
- [ ] Mobile responsive design works
- [ ] Dark mode works
- [ ] No console errors

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request gets its own preview URL

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Common issues:
  - Missing dependencies (check package.json)
  - TypeScript errors (run `npm run build` locally first)
  - Environment variables missing (if using)

### Website Not Loading
- Check if deployment completed successfully
- Verify the URL is correct
- Check browser console for errors

### Images Not Loading
- Verify image paths are correct
- Check Next.js Image component configuration
- Ensure images are in `public/` directory

## Next Steps

1. **Set up EmailJS** (if you want contact form to work):
   - Follow EmailJS setup guide
   - Add environment variables in Vercel if needed

2. **Add Analytics** (optional):
   - Google Analytics
   - Vercel Analytics

3. **Monitor Performance**:
   - Use Vercel Analytics dashboard
   - Monitor page load times
   - Check error rates

## Support

- Vercel Documentation: [https://vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

