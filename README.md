# Daniel Oquelis - Portfolio Website

A modern, highly interactive portfolio website featuring a **macOS-style dock navigation** with glassmorphism design and smooth animations.

## Features

- **macOS-Style Dock Navigation**: Fixed bottom dock with icon magnification effects using Framer Motion
- **Smooth Scroll Navigation**: IntersectionObserver tracking active sections with hash-based URLs
- **Glassmorphism Design**: Modern glass effect with backdrop blur and orange (#FF8B4D) accents
- **Dark Theme**: Professional dark theme optimized for tech portfolio showcases
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Accessible**: ARIA labels, keyboard navigation, and respects prefers-reduced-motion
- **Performance Optimized**: React 19 with React Compiler for automatic memoization

## Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **Framer Motion** - Powerful animations and transitions
- **Lucide React** - Beautiful, consistent icons
- **Yarn PnP** - Fast, reliable package management

## Project Structure

```
src/
├── components/
│   ├── dock/              # macOS-style dock navigation
│   ├── sections/          # Page sections (Hero, About, Projects, Skills, Contact)
│   ├── shared/            # Reusable components (SectionWrapper, GlassCard, AnimatedText)
│   └── projects/          # Project-specific components (for future expansion)
├── hooks/                 # Custom React hooks
│   ├── useScrollSpy.ts    # Track active section
│   └── useDockMagnification.ts  # Calculate dock icon magnification
├── utils/                 # Utility functions
│   ├── constants.ts       # App constants
│   └── animations.ts      # Framer Motion variants
├── data/                  # Content data
│   ├── projects.ts
│   ├── skills.ts
│   └── content.ts
└── types/                 # TypeScript type definitions
```

## Getting Started

Install dependencies:

```bash
yarn install
```

Start development server:

```bash
yarn dev
```

Build for production:

```bash
yarn build
```

Preview production build:

```bash
yarn preview
```

## Code Quality

Run linting:

```bash
yarn lint
```

Format code:

```bash
yarn format
```

Check formatting:

```bash
yarn format:check
```

## Customization

### Colors

The primary orange color (#FF8B4D) can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#ff8b4d',  // Main brand color
    // ... other shades
  }
}
```

### Content

Update the following files to customize content:

- `src/data/projects.ts` - Your portfolio projects
- `src/data/skills.ts` - Your technical skills
- `src/data/content.ts` - Bio and text content

### Profile Image

Replace `src/assets/dani-profile.png` with your own profile image.

## Sections

1. **Hero** - Landing section with profile image and animated title
2. **About** - Personal bio and interests
3. **Projects** - Portfolio showcase (expandable for future features)
4. **Skills** - Technical skills organized by category
5. **Contact** - Contact form and social links

## Dock Navigation

The dock navigation features:

- Icon magnification based on mouse proximity
- Spring physics animations
- Active state indicators with orange glow
- Smooth scroll to sections
- Keyboard accessible
- Tooltips on hover

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

All rights reserved © 2026 Daniel Oquelis

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
