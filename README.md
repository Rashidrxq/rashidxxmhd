# Rashid — Premium Engineering & Digital Experiences

A high-end, cinematic creative portfolio built with **Next.js**, **Framer Motion**, and **Tailwind CSS**. Designed for visibility, speed, and tactile interaction. Inspired by the **fluid.glass** aesthetic.

![Portfolio Preview](https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop)

## ✨ Core Features

### 1. **Cinematic Hero Section**
- **3D Rotating Text:** Integrated 3D barrel rotation using `AnimatePresence` and `rotateX` transformations for dynamic headlines.
- **Abstract 3D Background:** High-contrast dark mode aesthetic with fluid gradients.

### 2. **Tactical Interaction**
- **Custom Liquid Cursor:** A global, hardware-accelerated circular cursor that hides the default pointer and expands/morphs on interactive elements.
- **Infinite Typography Marquee:** High-performance, GPU-accelerated massive scrolling banner.
- **Lenis Smooth Scroll:** Physical momentum-based scrolling for buttery smooth deceleration.

### 3. **Interactive Project Lists**
- **Hidden Asset Reveals:** Interactive typography list that unveils massive case study images on hover with 3D scale transforms.
- **Sticky Case Study Stack:** Premium scrolling section where project cards overlap and stack (Old Version).
- **Staggered Gallery:** A dedicated `/projects` archive page with a dynamic 2-column masonry grid.

### 4. **Invisible CMS (Admin Dashboard)**
- **Secret Gateway:** Hidden administrative gateway accessed via the floating navigation logo.
- **Local JSON DB:** Custom Node.js Server Action system that writes directly to a local JSON file, allowing you to add new projects without touching code.
- **Brutalist Secure Login:** Minimalist authentication UI with security-first styling.

### 5. **Motion Perception**
- **Curtain Wipe Transitions:** Cinematic black wipe page transitions between routes.
- **Scroll Reveal Architecture:** Intelligent viewport-aware staggered entrance animations for every major typography block.

---

## 🛠 Tech Stack

- **Frontend:** [Next.js (App Router)](https://nextjs.org/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Scrolling Physics:** [Lenis](https://lenis.studiofreight.com/)
- **State Management:** React Hooks
- **Data Persistence:** Local JSON (Node.js Server Actions)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is used to handle specific Lenis version overlaps with React 18/19).*

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Access the Admin CMS:**
   - Go to `http://localhost:3000`
   - Scroll to the bottom floating nav and click the **Pentagon Logo**.
   - Login with the secret security key (default is in `Hero.tsx`).

---

## 📂 Project Structure

- `/src/app` - App Router routes and Server Actions.
- `/src/components` - High-performance React components.
- `/src/data` - The `projects.json` local database.
- `/src/app/actions` - Server-side filesystem operations for the CMS.

---

## ⚖️ License
MIT License. Feel free to use this as a base for your own high-end creative portfolio.

---
**Building with vision.** — Rashid
