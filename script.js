const lata1 = document.querySelector(".lata1");
const lata2 = document.querySelector(".lata2");
const lata3 = document.querySelector(".lata3");
const lata4 = document.querySelector(".lata4");
const lata6 = document.querySelector(".lata6");
const lata7 = document.querySelector(".lata7");
const lata8 = document.querySelector(".lata8");
const lata9 = document.querySelector(".lata9");
const lata10 = document.querySelector(".lata10");
const lata5 = document.querySelector(".lata5");

const saltEVinagar = document.querySelector(" .slider .saltEVinagar");
const hamECheese = document.querySelector(".hamECheese");
const paprika = document.querySelector(".paprika");
const cheeseEOnion = document.querySelector(".cheeseEOnion");
const hotESpicy = document.querySelector(".hotESpicy");
const saborJamon = document.querySelector(".saborJamon");
const emmental = document.querySelector(".emmental");
const sourCream = document.querySelector(".sourCream");
const bbqTexas = document.querySelector(".bbqTexas");
const original = document.querySelector(".original");

const slides = document.querySelectorAll(".slide");

let zIndex = 1;

const ativarSlide = (slide) => {
  zIndex++;
  slide.classList.add("active");
  slide.style.zIndex = zIndex;
};

lata1.addEventListener("click", () => {
  ativarSlide(saltEVinagar);

  setTimeout(() => {
    original.classList.remove("active");
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

lata6.addEventListener("click", () => {
  ativarSlide(hotESpicy);
  setTimeout(() => {
    cheeseEOnion.classList.remove("active");
  }, 1000);
});

lata7.addEventListener("click", () => {
  ativarSlide(saborJamon);
  setTimeout(() => {
    hotESpicy.classList.remove("active");
  }, 1000);
});

lata8.addEventListener("click", () => {
  ativarSlide(emmental);
  setTimeout(() => {
    saborJamon.classList.remove("active");
  }, 1000);
});

lata9.addEventListener("click", () => {
  ativarSlide(sourCream);
  setTimeout(() => {
    emmental.classList.remove("active");
  }, 1000);
});

lata10.addEventListener("click", () => {
  ativarSlide(bbqTexas);
  setTimeout(() => {
    sourCream.classList.remove("active");
  }, 1000);
});

lata5.addEventListener("click", () => {
  ativarSlide(original);
  setTimeout(() => {
    bbqTexas.classList.remove("active");
  }, 1000);
});
