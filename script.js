/* Main site JS
   - renders projects & blog posts
   - handles theme toggle persistence
   - handles contact form submission (Formspree by default)
   - cursor + tilt micro-interactions
*/

// --------- Data (customize) ----------
const projects = [
  { name: "SignLink", desc: "Gesture-recognition system with ESP32 glove & ML pipeline", url: "https://github.com/Mazhar113/SignLink" },
  { name: "wildlife-trap-ai", desc: "Edge-optimized YOLOv8 + TensorRT pipeline for wildlife detection", url: "https://github.com/Mazhar113/wildlife-trap-ai" },
  { name: "unified-bigdata-ml-platform", desc: "Streaming ingestion, feature-store and real-time scoring platform", url: "https://github.com/Mazhar113/unified-bigdata-ml-platform" },
  { name: "strategic-foundation-data-alignment", desc: "KPIs, synthetic datasets and dashboards for business analytics", url: "https://github.com/Mazhar113/strategic-foundation-data-alignment" }
];

const blogPosts = [
  { title: "Deploying Edge AI on Jetson", date: "2025-07-10", excerpt: "How we optimized YOLO models and used TensorRT to get real-time throughput on Jetson Xavier." },
  { title: "Feature Stores: Practical Guide", date: "2025-03-08", excerpt: "Design considerations for building a robust feature pipeline for ML at scale." },
];

// --------- Theme toggle ----------
const toggle = document.getElementById("themeToggle");
function setTheme(theme){
  if(theme === "light") document.documentElement.classList.add("light");
  else document.documentElement.classList.remove("light");
  localStorage.setItem("siteTheme", theme);
  toggle.textContent = theme === "light" ? "🌞" : "🌙";
}
const saved = localStorage.getItem("siteTheme") || "dark";
setTheme(saved);
toggle && toggle.addEventListener("click", () => {
  const cur = document.documentElement.classList.contains("light") ? "light" : "dark";
  setTheme(cur === "light" ? "dark" : "light");
});

// --------- render projects & blog ----------
function renderProjects(){
  const c = document.getElementById("projectContainer");
  c.innerHTML = "";
  projects.forEach(p => {
    const card = document.createElement("article");
    card.className = "project";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <p style="margin-top:12px;"><a class="btn" href="${p.url}" target="_blank" rel="noopener">View Code</a></p>
    `;
    c.appendChild(card);
  });
}
function renderBlog(){
  const b = document.getElementById("blogContainer");
  b.innerHTML = "";
  blogPosts.forEach(post => {
    const el = document.createElement("article");
    el.className = "project";
    el.innerHTML = `<h3>${post.title}</h3><p style="font-size:13px;color:var(--muted)">${post.date}</p><p>${post.excerpt}</p><p style="margin-top:10px;"><a href="#" class="btn ghost">Read more</a></p>`;
    b.appendChild(el);
  });
}
renderProjects();
renderBlog();

// --------- contact form submission (Formspree default) ----------
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
if(form){
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Sending...";
    // Use Formspree: replace action attribute with your endpoint, or change code to use another API.
    const endpoint = form.getAttribute("action");
    const data = new FormData(form);
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        status.textContent = "Message sent — thank you!";
        form.reset();
      } else {
        const json = await res.json();
        status.textContent = (json && json.error) ? json.error : "Failed to send — try email.";
      }
    } catch (err) {
      console.error(err);
      status.textContent = "Network error — try again or email me directly.";
    }
  });
}

// --------- small cursor effect ----------
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  if(cursor){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// --------- micro tilt effect for hero-card ----------
const tiltEl = document.querySelector("[data-tilt]");
if(tiltEl){
  tiltEl.addEventListener("mousemove", (e) => {
    const r = tiltEl.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * 6; // rotateX
    const ry = (px - 0.5) * -10; // rotateY
    tiltEl.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
  });
  tiltEl.addEventListener("mouseleave", () => tiltEl.style.transform = "");
}

// set copyright year
document.getElementById("year").textContent = new Date().getFullYear();
