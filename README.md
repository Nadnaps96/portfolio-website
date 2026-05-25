# Spandan Ghosh — Professional Portfolio

A premium, production-ready, dark-mode-enabled responsive portfolio website built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed with a modern, text-only developer aesthetic emphasizing structural details, visual typography, and micro-animations.

---

## 🛠️ Tech Stack & Features

- **Framework:** Next.js (React 19, App Router)
- **Styling:** Tailwind CSS v4 (with native CSS variables configuration)
- **Language:** TypeScript (strictly typed data models)
- **Animations:** Framer Motion (staggered container layouts, viewport scroll-reveal)
- **Icons:** Lucide React (tree-shakeable icons)
- **Dark Mode:** `next-themes` (system theme detection, SSR hydration-safe)
- **Performance:** Optimized fonts via `next/font`, responsive grids, and semantic HTML5

---

## 📂 Project Structure

```
d:\Portfolio-website\
├── public/
│   └── favicon.ico               # Site favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx            # App wrapper, global font imports & ThemeProvider
│   │   ├── page.tsx              # Assembles all page sections (Single Page Layout)
│   │   └── globals.css           # Tailwind base + custom light/dark color mappings
│   ├── components/
│   │   ├── ThemeProvider.tsx     # SSR hydration-safe Theme Provider
│   │   ├── Header.tsx            # Sticky navigation with mobile hamburger drawer
│   │   ├── ThemeToggle.tsx       # Smooth rotation sun/moon toggle button
│   │   ├── SectionWrapper.tsx    # Motion container for viewport scroll animations
│   │   ├── Hero.tsx              # Splash landing with custom CSS ambient glow orbs
│   │   ├── About.tsx             # Interactive developer terminal mockup + bio info
│   │   ├── Experience.tsx        # Interactive work history tabbed switcher
│   │   ├── Projects.tsx          # Staggered project lists container
│   │   ├── ProjectCard.tsx       # Visual card representation of showcase projects
│   │   ├── Skills.tsx            # Stack categories lists
│   │   ├── Contact.tsx           # Contact direct linkage grid
│   │   └── Footer.tsx            # Copyright detail + back-to-top anchor
│   ├── data/
│   │   ├── personal.ts           # Spandan's bio details & contacts
│   │   ├── projects.ts           # Showcase project stats
│   │   └── skills.ts             # Skills grouped by category (Languages, Databases...)
│   ├── lib/
│   │   └── utils.ts              # cn() Tailwind merging helper
│   └── types/
│       └── index.ts              # TypeScript interfaces for structured data models
├── .env.example                  # Local environment configuration template
├── vercel.json                   # Vercel deployment specifications
├── tsconfig.json
├── package.json
└── README.md
```

---

## 💼 Work Experience

1. **UNSW (Oct 2025 - Present)**
   - *Role:* SDE-Backend Engineer | Sydney — Remote
   - *Application Link:* [Marevlo Application](https://marevlo.vercel.app)
   - *Description:* Developed Marevlo, a full-stack Dockerized web application on AWS EC2 with modular object-oriented design and end-to-end DevOps workflows.

2. **BetterMind Labs (July 2024 - Sep 2024)**
   - *Role:* Marketing & Strategies | USA — Remote
   - *Description:* Conducted market analyses and designed content strategies; redesigned chat file format and implemented backward search compatibility.

---

## 🚀 Projects Showcased

1. **IIITDM Alumni Connect (Sep - Oct 2024)**
   - *Description:* Alumni management platform for IIITDM Jabalpur featuring authentication, event coordination, content management, and role-based access control.
   - *Link:* [Alumni Connect Platform](https://alumni.iiitdmj.ac.in/)
   - *Tech:* Django, SQLite, Django ORM, Semantic UI, SonarLint.

2. **Library Management System (Dec 2024)**
   - *Description:* A fully functional role-based library management platform with clean modular architecture, blueprint routing, DAO patterns, and persistent MySQL database storage.
   - *Tech:* Python, Flask, MySQL, Jinja2, DAO Pattern, SQL, Git.

3. **StudyWise — Smart Study Scheduler (Sep - Dec 2023)**
   - *Description:* Smart study scheduler that builds customized daily schedules utilizing active recall and spaced repetition learning models.
   - *Tech:* Flask, SQLite, JavaScript, Jinja2, Algorithms.

---

## 💻 Getting Started Locally

### Prerequisites

Make sure you have [Node.js (v18+)](https://nodejs.org/) and `npm` installed.

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```
   *(Optionally edit `.env.local` to customize variables).*

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) on your browser to view the portfolio.

5. **Build the production bundle:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment to Vercel

The portfolio is fully optimized to run on Vercel's default subdomains.

1. Create a free account on [Vercel](https://vercel.com).
2. Connect your GitHub account and click **Import Project**.
3. Select your portfolio repository.
4. Keep the framework preset as **Next.js** (Vercel will auto-configure everything).
5. Click **Deploy**.
