/* ==============================
   Mazhar Ali Portfolio - JS File (Clean Fixed Version)
   ============================== */

// ===== Skills with Icons =====
const skills = [
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "Machine Learning", icon: "fa-solid fa-brain" },
  { name: "Deep Learning", icon: "fa-solid fa-network-wired" },
  { name: "NLP", icon: "fa-solid fa-language" },
  { name: "Computer Vision", icon: "fa-solid fa-eye" },
  { name: "SQL", icon: "fa-solid fa-database" },
  { name: "Node.js", icon: "fa-brands fa-node" },
  { name: "HTML/CSS/JS", icon: "fa-solid fa-code" },
  { name: "OpenCV", icon: "fa-solid fa-camera" },
  { name: "APIs", icon: "fa-solid fa-plug" }
];

// Insert skill badges
const badgeContainer = document.querySelector('.badges');
skills.forEach(skill => {
  const badge = document.createElement('div');
  badge.classList.add('badge');
  badge.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
  badgeContainer.appendChild(badge);
});

// ===== Experience Section =====
const experiences = [
  {
    title: "IT Administrator",
    company: "ZKB Engineers & Constructors",
    duration: "08/2024 – Present | Karachi",
    description: "Managed systems, servers, and networks. Automated workflows and reduced downtime by 25%."
  },
  {
    title: "Web Programmer",
    company: "Thardeep Rural Development Program (NGO)",
    duration: "03/2023 – 07/2023",
    description: "Developed responsive websites using HTML, CSS, JS, PHP/React. Improved UX and optimized site speed by 30%."
  },
  {
    title: "Data Analyst",
    company: "Hyperlink Info System",
    duration: "10/2019 – 11/2020",
    description: "Delivered insights using SQL, Python & Excel. Automated dashboards improving decision-making by 35%."
  },
  {
    title: "Python Developer",
    company: "Blessing Institute of Paramedics",
    duration: "02/2019 – 08/2019 | Hyderabad",
    description: "Built Python apps, REST APIs, automation scripts. Reduced manual workload by 50+ hrs/month."
  }
];

const expContainer = document.getElementById('experience');
expContainer.innerHTML = '<h2><i class="fa-solid fa-briefcase"></i> Experience</h2>';

experiences.forEach(exp => {
  const card = document.createElement('div');
  card.classList.add('exp-card');
  card.innerHTML = `
    <h3>${exp.title} — ${exp.company}</h3>
    <span class="duration">${exp.duration}</span>
    <p>${exp.description}</p>
  `;
  expContainer.appendChild(card);
});

// ===== Projects Section =====
const projects = [
  {
    title: "AI Face Recognition System",
    desc: "Deep learning facial recognition using Python, TensorFlow & OpenCV.",
    link: "#"
  },
  {
    title: "Sales Dashboard (React + Node)",
    desc: "Interactive charts, analytics & REST API backend.",
    link: "#"
  },
  {
    title: "E-Commerce Website",
    desc: "Full-stack store with cart, checkout & admin panel.",
    link: "#"
  },
  {
    title: "NLP Chatbot",
    desc: "Intent-based chatbot using NLP + ML classification.",
    link: "#"
  }
];

const projectGrid = document.getElementById('projectGrid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.classList.add('project-card');
  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank" class="project-link">View Project</a>
  `;
  projectGrid.appendChild(card);
});

// ===== Theme Toggle =====
const themeBtn = document.getElementById('themeToggle');
let isLight = false;

themeBtn.addEventListener('click', () => {
  isLight = !isLight;
  document.body.classList.toggle('light-theme', isLight);

  themeBtn.innerHTML = isLight
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

// ===== Smooth Anchor Scroll =====
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

console.log("Portfolio Loaded Successfully ✔");
