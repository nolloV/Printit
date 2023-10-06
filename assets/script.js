const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
for (let i = 0; i < slides.length; i++) {
  console.log(i);
}

//Bullets Points//
function createDot() {
  let dots = document.querySelector(".dots");
  for (x = 0; x < slides.length; x++) {
    let divDot = document.createElement("div");
    if (x == 0) {
      divDot.classList.add("dot_selected");
    }
    divDot.classList.add("dot");
    dots.appendChild(divDot);
    console.log(x);
  }
}
createDot();

// Carousel //
let index = 0;
const img = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const selectedDot = document.querySelectorAll(".dots div");

function carousel(sens) {
  selectedDot[index].classList.remove("dot_selected");
  if (sens == 1) {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
  } else {
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
  }
  selectedDot[index].classList.add("dot_selected");
  img.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
}
//Arrows//
let arrowLeft = document.querySelector("#banner .arrow_left");
arrowLeft.addEventListener("click", () => {
  console.log("Vous avez cliqué sur le bouton gauche");
  carousel(-1);
});

let arrowRight = document.querySelector("#banner .arrow_right");
arrowRight.addEventListener("click", () => {
  console.log("Vous avez cliqué sur le bouton droit");
  carousel(1);
});
