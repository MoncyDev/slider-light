import "./styles/slider.light.css";

export default class SliderLight {
  constructor(container, options = {}) {
    this.container = document.querySelector(container);
    this.slides = this.container.querySelectorAll(".slider-light");
    this.currentSlide = 0;
    this.options = options;
    this.effect = options.effect || "slide";

    this.init();
  }

  init() {
    this.container.style.overflow = "hidden";
    this.setupNavigation();
    this.applyEffect();
    this.updateSlides();
  }

  applyEffect() {
    this.slides.forEach((slide) => {
      slide.classList.add(`slider-${this.effect}-light`);
    });
    this.container.classList.add(
      `slider-${this.effect}`,
      `slider-light-container`
    );
  }
  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  setupNavigation() {
    if (this.options.prevButton && this.options.nextButton) {
      const prevButton = document.querySelector(this.options.prevButton);
      const nextButton = document.querySelector(this.options.nextButton);

      prevButton.addEventListener("click", () => this.prevSlide());
      nextButton.addEventListener("click", () => this.nextSlide());
    }
  }

  updateSlides() {
    this.slides.forEach((slide, index) => {
      slide.classList.remove(`slider-${this.effect}-light-active`);
      if (index === this.currentSlide) {
        slide.classList.add(`slider-${this.effect}-light-active`);
      } else {
        slide.classList.remove(`slider-${this.effect}-light-prev`);
        slide.classList.remove(`slider-${this.effect}-light-next`);
        if (
          index ===
          (this.currentSlide - 1 + this.slides.length) % this.slides.length
        ) {
          slide.classList.add(`slider-${this.effect}-light-prev`);
        } else if (index === (this.currentSlide + 1) % this.slides.length) {
          slide.classList.add(`slider-${this.effect}-light-next`);
        }
      }
    });
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlides();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlides();
  }
}
