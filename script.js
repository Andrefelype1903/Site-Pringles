const lata1 = document.querySelector(".lata1");
const lata2 = document.querySelector(".lata2");
const lata3 = document.querySelector(".lata3");
const lata4 = document.querySelector(".lata4");
const saltEVinagar = document.querySelector(" .slider .saltEVinagar");
const hamECheese = document.querySelector(".hamECheese");
const paprika = document.querySelector(".paprika");
const cheeseEOnion = document.querySelector(".cheeseEOnion");

const slides = document.querySelectorAll(".slide");

const ativarSlide = (slide) => {
  slide.classList.add("active");
};

lata1.addEventListener("click", () => {
  ativarSlide(saltEVinagar);
  setTimeout(() => {
    cheeseEOnion.classList.remove("active");
  }, 1000);
});

lata2.addEventListener("click", () => {
  ativarSlide(hamECheese);
  setTimeout(() => {
    saltEVinagar.classList.remove("active");
  }, 1000);
});

lata3.addEventListener("click", () => {
  ativarSlide(paprika);
  setTimeout(() => {
    hamECheese.classList.remove("active");
  }, 1000);
});

lata4.addEventListener("click", () => {
  ativarSlide(cheeseEOnion);
  setTimeout(() => {
    paprika.classList.remove("active");
  }, 1000);
});
