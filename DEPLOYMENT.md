
# Deployment Guide

## Recommended Hosting: Vercel

### 1. Prepare for Deployment

1. Ensure all environment variables are configured
2. Test the application locally
3. Commit all changes to GitHub

### 2. Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure build settings:
   - Build Command: `cd app && yarn build`
   - Output Directory: `app/.next`
   - Install Command: `cd app && yarn install`

### 3. Domain Configuration

1. Purchase a professional domain (recommended: [your-name]-medical-content.com)
2. Configure DNS in Vercel
3. Set up SSL certificate (automatic with Vercel)

### 4. Email Setup

1. Set up Google Workspace with your domain
2. Configure professional email addresses:
   - contact@yourdomain.com
   - info@yourdomain.com
   - [yourname]@yourdomain.com

### 5. Database Setup

1. Set up PostgreSQL database (recommended: Vercel Postgres or Supabase)
2. Run database migrations
3. Configure connection string in environment variables

## Alternative Hosting Options

- **Netlify**: Similar setup to Vercel
- **Railway**: Good for full-stack applications
- **DigitalOcean App Platform**: More control over infrastructure

## Environment Variables for Production

Make sure to set these in your hosting platform:
- `DATABASE_URL`
- `NEXTAUTH_URL` (your production domain)
- `NEXTAUTH_SECRET`
- `EMAIL_SERVER_*` (for contact forms)
- Any other API keys you're using

## Post-Deployment Checklist

- [ ] Test all pages and functionality
- [ ] Verify contact form works
- [ ] Check portfolio samples load correctly
- [ ] Test mobile responsiveness
- [ ] Set up analytics (Google Analytics)
- [ ] Configure monitoring (Vercel Analytics)
- [ ] Set up backup strategy for content
