// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
// S'assurer que les liens sont clickables
// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.y + "px";
//   cursor.style.left = e.x + "px";

//   mouse1.style.top = e.y + "px";
//   mouse1.style.left = e.x + "px";

//   mouse2.style.top = e.y + "px";
//   mouse2.style.left = e.x + "px";
// });

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});
