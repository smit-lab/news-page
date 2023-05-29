// let openIcon = document.getElementById("open-nav"),
//   closeIcon = document.getElementById("close-nav"),
//   navContainer = document.getElementById("nav-container");
// let bodyN = document.getElementById("bodyM");

// openIcon.addEventListener("click", () => {
//   if (navContainer.classList.contains("visible")) {
//     navContainer.classList.remove("visible");
//   } else {
//     navContainer.classList.add("visible");
//     bodyN.classList.add("overlay-body");
//   }
// });

// closeIcon.addEventListener("click", () => {
//   if (navContainer.classList.contains) {
//     navContainer.classList.remove("visible");
//     bodyN.classList.remove("overlay-body");
//   }
// });

let clicked = document.addEventListener("click", (e) => {
  if (e.target.closest("#open-nav, #close-nav")) {
    let navContainer = document.getElementById("nav-container");
    navContainer.classList.toggle("visible");
  }
});

console.log("clicked");
