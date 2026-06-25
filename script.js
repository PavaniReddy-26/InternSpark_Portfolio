// === Projects data ===
const projects = [
  {
    title: "Reference Book Search Engine",
    desc: "Web app to search and find reference books quickly by concept or keywords with a clean, user-friendly interface.",
    tech: ["HTML","CSS","JavaScript","React.js"],
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    github: "https://github.com/PavaniReddy-26/Reference_Book_Finder",
    demo: "https://pavanireddy-e29586.netlify.app/"
  },
  {
    title: "AI Space Explorer Agent",
    desc: "AI-based agent that answers space-related queries, integrated with NASA APIs for daily images and Mars rover photos.",
    tech: ["Python","JavaScript","NASA API"],
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    github: "https://github.com/PavaniReddy-26/space_explorer",
    demo: "https://space-explorer-ebvd.onrender.com/"
  },
  {
    title: "Trinity — Rural Intelligence Platform",
    desc: "Bilingual (Telugu/English) platform for Telangana farmers with 3 modules: Krishi (Agri), Arogya (Health), and Government Schemes — powered by Claude Vision AI.",
    tech: ["HTML","CSS","JavaScript","Claude AI"],
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    github: "https://github.com/PavaniReddy-26/Trinity",
    demo: "https://pavanireddy-c7e1ed.netlify.app/"
  },
  {
    title: "MedSense AI — Medical Report Analysis",
    desc: "Automatically analyzes medical reports using OCR and Flask, providing simple explanations of complex medical terms and values.",
    tech: ["Python","Flask","OCR","HTML/CSS"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    github: "https://github.com/PavaniReddy-26/Medical_Report_Simulator",
  },
  {
    title: "Personal Portfolio v1",
    desc: "Responsive personal portfolio built with Tailwind CSS to showcase skills, projects, and achievements.",
    tech: ["HTML","CSS","JavaScript","Tailwind"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    github: "https://github.com/PavaniReddy-26/HorizonTechX_Personal-Portfolio",
    demo: "https://pavanireddy-26.github.io/HorizonTechX_Personal-Portfolio/"
  },
  {
    title: "Calculator Web Application",
    desc: "Responsive calculator with arithmetic operations, real-time calculations, clear/reset, and full keyboard input support.",
    tech: ["HTML","CSS","JavaScript"],
    img: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&q=80",
    github: "https://github.com/PavaniReddy-26/HorizonTechX_Simple-Calculator",
    demo: "https://pavanireddy-26.github.io/HorizonTechX_Simple-Calculator/"
  },
  {
    title: "JavaScript Music Player",
    desc: "Interactive music player with play/pause, next/previous, progress tracking, duration display, and volume controls.",
    tech: ["HTML","CSS","JavaScript"],
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    github: "https://github.com/PavaniReddy-26/HorizonTechX_Music-Player",
    demo: "https://pavanireddy-26.github.io/HorizonTechX_Music-Player/"
  },
  {
    title: "Mini Interactive Quiz App",
    desc: "Multiple-choice quiz featuring real-time answer checking, score calculation, and DOM-driven dynamic content.",
    tech: ["HTML","CSS","JavaScript","DOM"],
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
    github: "https://github.com/PavaniReddy-26/InternSpark_Quiz-app",
    demo: "https://pavanireddy-26.github.io/InternSpark_Quiz-app/"
  },
  {
    title: "Global Flavors — Recipe Finder",
    desc: "Premium recipe discovery platform with advanced search, country-based exploration, favorites, dark/light themes, and modal recipe views.",
    tech: ["HTML","CSS","JavaScript","API"],
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    github: "https://github.com/PavaniReddy-26/InternSpark_Recipe-Finder",
    demo: "https://pavanireddy-26.github.io/InternSpark_Recipe-Finder/"
  },
  {
    title: "Portfolio Website",
    desc: "Responsive personal portfolio showcasing projects, skills, education, and contact info with smooth navigation and downloadable resume.",
    tech: ["HTML","CSS","JavaScript"],
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
    github: "https://github.com/PavaniReddy-26",
  }
];

// === Render projects ===
const grid = document.getElementById("projects-grid");
grid.innerHTML = projects.map((p, i) => `
  <article class="project" style="transition-delay:${i*60}ms">
    <div class="project__img">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
    </div>
    <div class="project__body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project__tech">${p.tech.map(t=>`<span>${t}</span>`).join("")}</div>
      <div class="project__links">
        <a href="${p.github}" target="_blank" class="p-github">🐙 GitHub</a>
        ${p.demo
          ? `<a href="${p.demo}" target="_blank" class="p-demo">↗ Live Demo</a>`
          : `<a class="p-demo p-disabled" aria-disabled="true">Demo N/A</a>`}
      </div>
    </div>
  </article>
`).join("");

// === Scroll reveal ===
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll(".project").forEach(el => io.observe(el));

// === Mobile menu ===
const hamburger = document.getElementById("hamburger");
const links = document.querySelector(".nav__links");
hamburger.addEventListener("click", () => links.classList.toggle("open"));
links.addEventListener("click", e => { if(e.target.tagName === "A") links.classList.remove("open"); });

// === Year ===
document.getElementById("year").textContent = new Date().getFullYear();
