# AI Engineer Portfolio Website

A modern, professional portfolio website showcasing AI engineering expertise, built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and comprehensive sections for experience, skills, education, and certifications.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Email Service**: EmailJS (client-side)

## Features

- **Hero Section**: Animated value propositions and call-to-action buttons
- **About Me**: Professional summary, core competencies, and key achievements
- **Skills & Technologies**: Categorized technology stack with icons
- **Experience**: Timeline view of professional experience
- **Education**: Academic background and achievements
- **Certifications**: Expandable certification cards with links
- **Contact**: Contact information and social links
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Mode**: Full dark mode support
- **SEO Optimized**: Meta tags, Open Graph, structured data, and sitemap
- **Performance**: Optimized images, code splitting, and fast loading

## Project Structure

```
├── app/
│   ├── components/     # React components
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   ├── robots.ts      # Dynamic robots.txt
│   └── sitemap.ts     # Dynamic sitemap
├── lib/
│   └── utils.ts       # Utility functions
├── public/
│   └── images/        # Static images
├── types/
│   └── index.ts       # TypeScript type definitions
└── package.json       # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SelfWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Environment Variables (Optional)

If you plan to use EmailJS server-side, create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Currently, EmailJS is configured for client-side use, so environment variables are optional.

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and configure the build
4. Deploy with one click

Your site will be live at `yourproject.vercel.app`

### Other Platforms

- **Netlify**: Similar to Vercel, good Next.js support
- **AWS Amplify**: More control, requires AWS account
- **Self-hosted**: Requires Node.js server setup

## Customization

- Update personal information in component files
- Modify colors in `tailwind.config.ts`
- Add/remove sections in `app/page.tsx`
- Update metadata in `app/layout.tsx`
- Customize animations in component files

## License

This project is private and proprietary.

