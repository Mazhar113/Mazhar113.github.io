// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// Projects
document.addEventListener("DOMContentLoaded", () => {
const projects = [
{
title: "AI Chatbot",
repo: "https://github.com/Mazhar113/AI-Chatbot"
},
{
title: "Data Cleaning Automation",
repo: "https://github.com/Mazhar113/Data-Cleaning"
},
{
title: "Edge AI Object Detection",
repo: "https://github.com/Mazhar113/EdgeAI-Detection"
}
];


const container = document.getElementById("projectContainer");
projects.forEach(p => {
const card = document.createElement("div");
card.className = "project-card";
card.innerHTML = `<h3>${p.title}</h3>`;
card.onclick = () => window.open(p.repo, "_blank");
container.appendChild(card);
});
});
