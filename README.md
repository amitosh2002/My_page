# Full Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features dark/light mode, dynamic project and work experience sections, and a secure admin panel for managing content.

## Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🔐 **Secure Admin Panel** - Encrypted route for managing projects and work experiences
- 💼 **Projects Section** - Showcase your work with featured projects
- 💼 **Work Experience Section** - Display your professional journey
- 🚀 **Fast & Optimized** - Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes
- **Forms**: React Hook Form + Zod validation
- **Encryption**: crypto-js

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
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

### Building for Production

```bash
npm run build
npm start
```

## Admin Panel

The admin panel allows you to manage your projects and work experiences.

### Accessing the Admin Panel

1. Navigate to `/admin` in your browser
2. On first visit, you'll be prompted to set an admin password
3. Use this password to log in on subsequent visits

### Features

- **Add Projects**: Create new project entries with title, description, technologies, links, and featured status
- **Edit Projects**: Update existing project information
- **Delete Projects**: Remove projects from your portfolio
- **Add Work Experience**: Add new work experience entries
- **Edit Work Experience**: Update existing work experience information
- **Delete Work Experience**: Remove work experience entries

### Managing Content

1. Log in to the admin panel at `/admin`
2. Navigate to either "Projects" or "Work Experience" tab
3. Click "Add New" to create entries
4. Click "Edit" on any item to modify it
5. Click the trash icon to delete items

## Customization

### Updating Personal Information

Edit the following files to customize your portfolio:

- **Hero Section**: `src/components/hero.tsx`
  - Update social media links (GitHub, LinkedIn, Email)
  - Modify skill badges
  - Change the headline and description

### Styling

The portfolio uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual component files

### Adding Default Content

Default projects and work experiences are defined in `src/lib/data-storage.ts`. You can modify the default data there, or use the admin panel to add content dynamically.

## Data Storage

Currently, data is stored in browser localStorage. This means:
- Data persists across sessions on the same browser
- Data is stored locally on the user's device
- Clearing browser data will remove the content

For production use, consider:
- Integrating with a database (MongoDB, PostgreSQL, etc.)
- Using a headless CMS (Contentful, Strapi, etc.)
- Setting up an API route to handle data persistence

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── admin/          # Admin panel routes
│   │   │   ├── page.tsx    # Login page
│   │   │   └── dashboard/  # Admin dashboard
│   │   ├── layout.tsx      # Root layout with theme provider
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── admin/          # Admin panel components
│   │   ├── hero.tsx        # Hero section
│   │   ├── navbar.tsx      # Navigation bar
│   │   ├── projects-section.tsx
│   │   ├── theme-toggle.tsx
│   │   └── work-section.tsx
│   ├── lib/
│   │   ├── crypto.ts       # Encryption utilities
│   │   ├── data-storage.ts # Data management
│   │   └── theme-provider.tsx
│   └── types/
│       └── index.ts        # TypeScript types
├── public/                 # Static assets
└── package.json
```

## Security Notes

- The admin password is hashed using SHA-256 and stored in localStorage
- In production, consider:
  - Moving authentication to a backend service
  - Using environment variables for secrets
  - Implementing proper session management
  - Adding rate limiting to the admin routes

## Skills Highlighted

This portfolio template highlights:
- **MERN Stack** (MongoDB, Express, React, Node.js)
- **Flutter** (Mobile Development)
- **Jira** (Project Management)
- **Notion** (Documentation & Collaboration)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on the repository or contact the developer.
