// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");
btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});
content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});

// Aide
// Priorités en CSS : id > classe > baliseHtml
