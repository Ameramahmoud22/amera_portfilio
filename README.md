# 🚀 Amera Elbassal — Personal Portfolio Website

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=netlify)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A fully responsive, dark-themed personal portfolio for Amera Elbassal — Backend Developer specializing in .NET Core & Django.**

🌐 **Live Site:** [portfolio](https://ameramahmoud22.github.io/amera_portfilio/)  
💼 **LinkedIn:** [amera-elbassal](https://www.linkedin.com/in/amera-elbassal-50b984272)  
🐙 **GitHub:** [Ameramahmoud22](https://github.com/Ameramahmoud22)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Sections](#-sections)
- [Projects Showcased](#-projects-showcased)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Contact](#-contact)

---

## 🌟 Overview

This is a **single-page portfolio website** built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no dependencies. It opens directly in any browser and deploys to any static hosting platform instantly.

Designed with a **dark theme** and **purple/teal gradient accents**, it presents Amera's backend development experience, projects, skills, and education in a clean, professional layout.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Dark Theme** | Deep dark background with purple & teal gradient accents |
| ⌨️ **Typewriter Effect** | Hero section cycles through 5 backend-focused role descriptions |
| 🖱️ **Cursor Glow** | Subtle radial glow that follows the mouse cursor |
| 📜 **Smooth Scroll** | All anchor links scroll smoothly with active nav highlighting |
| 📊 **Animated Skill Bars** | Proficiency bars animate into view on scroll via IntersectionObserver |
| 🕐 **Staggered Timeline** | Experience section fades in card-by-card as you scroll |
| 🃏 **3D Card Tilt** | Project cards tilt in 3D based on mouse position on hover |
| 🔢 **Stat Counters** | About section numbers count up from 0 on scroll |
| 📱 **Fully Responsive** | Breakpoints at 1100px, 900px, 640px, and 400px |
| 🍔 **Hamburger Menu** | Animated mobile navigation menu |
| 📝 **Contact Form** | Client-side validation with success/error feedback |
| 📄 **Printable Resume** | Separate `resume.html` page — print to PDF directly from browser |
| 🌐 **Page Load Animation** | Hero content staggers in on page load |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup, accessibility attributes
- **CSS3** — Custom properties, Grid, Flexbox, animations, `@keyframes`, `backdrop-filter`
- **Vanilla JavaScript (ES6+)** — IntersectionObserver, DOM manipulation, event handling
- **Google Fonts** — Inter + Fira Code
- **Font Awesome 6** — Icons throughout
- **No frameworks, no npm, no build step**

---

## 📁 Project Structure

```
amera Portfolio/
│
├── index.html        ← Main single-page portfolio
├── resume.html       ← Printable / PDF-downloadable resume
├── style.css         ← All styles (dark theme, animations, responsive)
├── script.js         ← All interactivity and animations
└── README.md         ← This file
```

### File Sizes

| File | Size | Purpose |
|---|---|---|
| `index.html` | ~34 KB | Full portfolio page |
| `resume.html` | ~22 KB | Printable resume |
| `style.css` | ~34 KB | Complete stylesheet |
| `script.js` | ~10 KB | All JS interactions |

---

## 📑 Sections

### 1. 🏠 Hero
- Animated gradient background with floating blobs and grid overlay
- Typewriter effect cycling through backend roles
- Floating code card (`.cs` syntax highlighted snippet)
- CTA buttons: View Projects, Get In Touch, Resume
- Social links: Email, GitHub, LinkedIn, Phone

### 2. 👩‍💻 About
- Personal bio and background
- Animated stat counters: Projects, Students Mentored, Companies, Years Experience
- Info card with spinning avatar ring

### 3. 🔧 Skills
- 4 categorized skill cards: Backend, Languages, Database, Tools & Concepts
- Animated proficiency bars: ASP.NET Core, Django, SQL, EF Core, REST API Design

### 4. 💼 Experience (Timeline)
- 6 entries with staggered scroll animation
- Azzrk (Full-time, Dec 2025 – Aug 2026)
- Al-Banna & Al-Benaa (Part-time)
- CAT Reloaded — Backend Mentor & Supervisor
- Route Academy Trainee
- ITI Summer Training
- Zewail City AI Trainee

### 5. 🚀 Projects
- 7 project cards with 3D hover tilt
- Featured card + AI/RAG variant with distinct styling
- Direct GitHub links per project

### 6. 🎓 Education
- Mansoura University — BSc Computer Science
- Grade: **Very Good with Honour**
- Currently applying for **Master's Degree**

### 7. 📬 Contact
- Contact info cards (email, phone, location)
- Social buttons (GitHub, LinkedIn)
- Contact form with client-side validation

---

## 🚀 Projects Showcased

| Project | Tech | Description |
|---|---|---|
| **Nexus Backend** | ASP.NET Core, JWT, Stripe, SignalR | Secure RESTful API with payments & real-time leaderboard |
| **Climate Codex** | ASP.NET Core, Python, ML API | CH₄ emissions visualization with tile-based maps |
| **Al-Banna & Al-Benaa** | ASP.NET Core MVC, EF Core | Customer & services management system |
| **Discussion Board** | Django, Bootstrap | MVT discussion system with full auth |
| **Madaar RAG** | Django, LangChain, FAISS, HuggingFace | 100% local RAG chat app with PDF upload & WebSockets |
| **Employees Attendance** | ASP.NET Core MVC, EF Core | Employee attendance tracking system |
| **Educational Platform** | ASP.NET MVC, EF Core | Student/course/department management CRUD |

---

## 🏁 Getting Started

No installation or build step needed.

### Run locally

**Option 1 — Double click**
```
Open index.html directly in any browser
```

**Option 2 — Python local server**
```bash
python -m http.server 3000 --directory "path/to/amera Portfolio"
# then open http://localhost:3000
```

**Option 3 — VS Code / Kiro Live Server**
```
Right-click index.html → Open with Live Server
# auto-reloads on every file save
```

---

## 🌍 Deployment

The site is deployed on **Netlify** via drag & drop (no CI/CD required).

**To redeploy after changes:**
1. Go to [app.netlify.com](https://app.netlify.com)
2. Open the `portfolioamera` project → **Deploys** tab
3. Drag the updated `amera Portfolio` folder into the drop zone
4. Wait ~30 seconds for **Published** status

**Live URL:**
```
https://portfolioamera.netlify.app
```

**To generate the PDF resume:**
1. Open `resume.html` in the browser
2. Click **"Download / Print PDF"**
3. In the browser print dialog → **Save as PDF**

---

## 🎨 Customization

All design tokens are CSS custom properties at the top of `style.css`:

```css
:root {
  --bg:          #0a0a0f;      /* Main background */
  --purple:      #7c3aed;      /* Primary accent */
  --teal:        #06b6d4;      /* Secondary accent */
  --gradient:    linear-gradient(135deg, var(--purple), var(--teal));
  --font:        'Inter', sans-serif;
  --mono:        'Fira Code', monospace;
}
```

**To change colors:** edit `--purple` and `--teal` in `:root`.  
**To add a project:** copy any `.project-card` block in `index.html` and update the content.  
**To update social links:** search for `Ameramahmoud22` or `amera-elbassal` in both HTML files.

---

## 📬 Contact

**Amera Elbassal**  
📧 [ameraelbassal552005@gmail.com](mailto:ameraelbassal552005@gmail.com)  
📞 +01550914683  
📍 Gharbia, Egypt  
💼 [LinkedIn](https://www.linkedin.com/in/amera-elbassal-50b984272)  
🐙 [GitHub](https://github.com/Ameramahmoud22)  

---

<div align="center">

Built with 💜 by **Amera Elbassal** · 2025

</div>
