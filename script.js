gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ScrollSmoother, SplitText);

const lataMenor = document.querySelectorAll(".latas img:nth-child(2)");

const slide = document.querySelectorAll(".slide");

const body = document.querySelector("body");

let contador = 0;

lataMenor.forEach((s) => {
  s.addEventListener("click", () => {
    lataMenor.forEach((slide) => {
      slide.style.pointerEvents = "none";

      setTimeout(() => {
        slide.style.pointerEvents = "auto";
      }, 1000);
    });

    if (contador == slide.length - 1) {
      contador = 0;
    } else {
      contador++;
    }
    const activeSlide = document.querySelector(".active");

    const classe = slide[contador].classList[1];
    console.log(classe);

    if (slide[contador].classList.contains("emmental")) {
      body.style.color = "#db8205";
    } else {
      body.style.color = "rgba(255,255,255, 0.9)";
    }
    activeSlide.classList.remove("active");

    slide[contador].classList.add("active");
  });
});
