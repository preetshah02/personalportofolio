# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed to impress recruiters and showcase professional skills with smooth animations and premium aesthetics.

## ✨ Features

### 🎨 Design & UX
- **Modern & Minimalist**: Clean design inspired by top developers like Brittany Chiang and Josh Comeau
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Smooth theme toggle with system preference detection
- **Premium Animations**: Scroll-triggered animations and smooth transitions
- **Interactive Elements**: Hover effects, magnetic buttons, and cursor glow

### 🛠 Technical Stack
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Professional animations and transitions
- **Next Themes**: Theme management
- **Lucide React**: Beautiful icons

### 📱 Sections
1. **Hero Section**: Dynamic role rotation with call-to-action
2. **About Me**: Personal story with interactive timeline
3. **Skills**: Interactive skill categories with animated progress bars
4. **Projects**: Filterable project showcase with hover effects
5. **Resume**: Professional resume download with highlights
6. **Contact**: Working contact form with validation
7. **Footer**: Social links and navigation

### 🎯 Performance & SEO
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Fast Loading**: Optimized images and code splitting
- **Accessible**: ARIA labels and keyboard navigation
- **Mobile-First**: Progressive enhancement approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Page sections
│   │   └── ui/             # Reusable UI components
│   ├── providers/          # Theme provider
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── public/                 # Static assets
│   ├── resume.pdf         # Your resume
│   └── favicon.ico        # Favicon
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Personal Information
1. Update personal details in `app/layout.tsx` (metadata)
2. Modify hero section content in `app/components/sections/hero.tsx`
3. Update about section timeline in `app/components/sections/about.tsx`
4. Add your projects in `app/components/sections/projects.tsx`
5. Replace resume.pdf in the `public/` folder

### Styling
- Customize colors in `tailwind.config.js`
- Modify animations in component files
- Update fonts in `app/globals.css`

### Content
- Skills: Update categories and levels in `skills.tsx`
- Projects: Add your actual projects with real links
- Contact: Update contact information and social links

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📈 Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Fonts**: Leverage Google Fonts with Next.js font optimization
3. **SEO**: Update metadata for better search rankings
4. **Analytics**: Add Google Analytics or similar

## 🎯 Customization Checklist

- [ ] Replace placeholder content with your information
- [ ] Update resume.pdf with your actual resume
- [ ] Modify project showcase with your real projects
- [ ] Update social media links
- [ ] Customize color scheme if desired
- [ ] Add your domain to metadata
- [ ] Test on multiple devices and browsers

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)
- **GitHub**: [https://github.com/your-username/portfolio-website](https://github.com/your-username/portfolio-website)

---

Made with ❤️ using Next.js and Tailwind CSS 