gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ScrollSmoother, SplitText);

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

const body = document.querySelector("body");
const spans = document.querySelector(".spans");

console.log(spans);

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

const criaSpan = () => {
  slides.forEach(() => {
    const span = document.createElement("span");
    span.classList.add("span");
    spans.appendChild(span);
  });
};

criaSpan();

let zIndex = 1;

const ativarSlide = (slide) => {
  zIndex++;

  slide.classList.add("active");
  slide.style.zIndex = zIndex;

  if (slide.classList.contains("emmental")) {
    body.style.color = "#db8205";
  } else {
    body.style.color = "rgba(255, 255, 255, 0.9)";
  }
};

lata1.addEventListener("click", () => {
  ativarSlide(saltEVinagar);

  gsap.to(".original .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".saltEVinagar .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    original.classList.remove("active");
  }, 1000);
});

lata2.addEventListener("click", () => {
  ativarSlide(hamECheese);

  gsap.to(".saltEVinagar .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".hamECheese .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    saltEVinagar.classList.remove("active");
  }, 1000);
});

lata3.addEventListener("click", () => {
  ativarSlide(paprika);

  gsap.to(".hamECheese .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".paprika .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    hamECheese.classList.remove("active");
  }, 1000);
});

lata4.addEventListener("click", () => {
  ativarSlide(cheeseEOnion);

  gsap.to(".paprika .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".cheeseEOnion .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    paprika.classList.remove("active");
  }, 1000);
});

lata6.addEventListener("click", () => {
  ativarSlide(hotESpicy);

  gsap.to(".cheeseEOnion .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".hotESpicy .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    cheeseEOnion.classList.remove("active");
  }, 1000);
});

lata7.addEventListener("click", () => {
  ativarSlide(saborJamon);

  gsap.to(".hotESpicy .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".saborJamon .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    hotESpicy.classList.remove("active");
  }, 1000);
});

lata8.addEventListener("click", () => {
  ativarSlide(emmental);

  gsap.to(".saborJamon .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".emmental .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    saborJamon.classList.remove("active");
  }, 1000);
});

lata9.addEventListener("click", () => {
  ativarSlide(sourCream);

  gsap.to(".emmental .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".sourCream .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    emmental.classList.remove("active");
  }, 1000);
});

lata10.addEventListener("click", () => {
  ativarSlide(bbqTexas);

  gsap.to(".sourCream .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".bbqTexas .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    sourCream.classList.remove("active");
  }, 1000);
});

lata5.addEventListener("click", () => {
  ativarSlide(original);

  gsap.to(".bbqTexas .saborBatata", {
    rotation: 130,
    duration: 1,
  });

  gsap.to(".original .saborBatata", {
    rotation: -30,
    duration: 1,
  });

  setTimeout(() => {
    bbqTexas.classList.remove("active");
  }, 1000);
});
