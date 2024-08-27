import "./styles/slider.light.css";

export default class SliderLight {
  constructor(container, options = {}) {
    this.container = document.querySelector(container);
    this.slides = this.container.querySelectorAll(".slider-light");
    this.wrapper = document.createElement("div");
    this.options = options;
    this.effect = options.effect || "slide";
    this.transition = options.transition || 300;
    this.prevButton = document.querySelector(options.prevButton) || null;
    this.nextButton = document.querySelector(options.nextButton) || null;
    this.pagination = document.querySelector(options.pagination) || null;
    this.startX, this.currentX, (this.isDragging = false);
    this.currentSlide = 0;
    this.prevValue = 0;
    this.sliderWidth = 0;
    this.currentSize = 0;
    this.currentTranslate = 0;
    this.currentPos = 0;
    this.prevPos = 0;
    this.margin = options.margin || 0;
    this.autoplayInterval = null;
    this.lastSlide = this.slides.length - 1;
    this.slidesPerView = this.options.slidesPerView || 1;
    this.slidesPV = 1;
    this.init();
  }

  init() {
    this.wrapSlider();
    this.setupNavigation();

    this.updateSlides();
    this.AutoPlay();
    this.reSize();
    this.container.classList.add(
      `slider-${this.effect}`,
      `slider-light-container`
    );

    this.wrapper.addEventListener("touchstart", this.handleTouchStart);
    this.wrapper.addEventListener("touchmove", this.handleTouchMove);
    this.wrapper.addEventListener("touchend", this.handleTouchEnd);

    this.wrapper.addEventListener("mousedown", this.handleMouseStart);
    this.wrapper.addEventListener("mousemove", this.handleMouseMove);
    this.wrapper.addEventListener("mouseup", this.handleMouseEnd);
    this.wrapper.addEventListener("mouseleave", this.handleMouseEnd);
  }

  wrapSlider() {
    if (!this.container.getAttribute("data-wrapped")) {
      this.wrapper.classList.add("wrap-slider-light");
      if (this.slides.length > 0) {
        this.container.appendChild(this.wrapper);

        this.slides.forEach((slide) => {
          this.wrapper.appendChild(slide);
        });
        this.container.setAttribute("data-wrapped", "true");
      }
    }
  }

  sliderInitialize() {
    this.CheckBreakpoint();

    if (this.options.slidesPerView) {
      this.sliderWidth =
        this.container.offsetWidth / this.slidesPerView -
        (this.margin - this.margin / this.slidesPerView);
    } else {
      this.sliderWidth = this.container.offsetWidth;
    }
    this.currentSize = this.sliderWidth + this.margin;
    this.slidesPV = this.options.slidesPerView || 1;
  }

  updateSlides() {
    this.sliderInitialize();
    this.changeSlides();
    if (this.options.slidesPerView) {
      this.lastSlide = this.slides.length - this.slidesPerView;
    }
    if (this.currentSlide > this.lastSlide) this.currentSlide = this.lastSlide;

    this.slides.forEach((slide, index) => {
      slide.style.width = this.sliderWidth + "px";
      slide.style.marginRight = this.margin + "px";
      slide.classList.remove(`slider-${this.effect}-light-active`);
      slide.classList.remove(`slider-${this.effect}-light-prev`);
      slide.classList.remove(`slider-${this.effect}-light-next`);
      if (index === this.currentSlide) {
        slide.classList.add(`slider-${this.effect}-light-active`);
      } else {
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
    if (this.prevButton && this.nextButton) {
      if (this.currentSlide === 0) {
        this.prevButton.classList.add("slider-light-button-disabled");
      } else {
        this.prevButton.classList.remove("slider-light-button-disabled");
      }
      if (this.currentSlide === this.lastSlide) {
        this.nextButton.classList.add("slider-light-button-disabled");
      } else {
        this.nextButton.classList.remove("slider-light-button-disabled");
      }
    }

    this.initPagination();
  }

  changeSlides() {
    const currentXPos = this.currentSize * this.currentSlide;
    this.currentTranslate = -currentXPos;
    if (this.effect === "slide") {
      this.wrapper.style.transition = `${this.transition}ms`;
      this.wrapper.style.transform = `translate3d(-${currentXPos}px,0,0)`;
    }
  }

  setupNavigation() {
    if (this.prevButton && this.nextButton) {
      this.prevButton.addEventListener("click", (e) => this.prevSlide(e));
      this.nextButton.addEventListener("click", (e) => this.nextSlide(e));
    }
  }

  initPagination() {
    const checkPage =
      this.container.querySelector(this.options.pagination) || null;
    if (checkPage) {
      this.container.appendChild(this.pagination);
    }
    if (this.pagination) {
      if (this.lastSlide > 0) {
        const pageClass = "slider-light-pagination";
        if (!this.pagination.classList.contains(pageClass)) {
          this.pagination.classList.add(pageClass);
        }
        for (let i = 0; i < this.lastSlide + 1; i++) {
          this.setupPagination(i);
          if (i === this.lastSlide) {
            this.pagination.setAttribute("data-dots", this.lastSlide + 1);
          }
        }
        this.pagination.querySelectorAll("span").forEach((span, index) => {
          span.addEventListener("click", () => {
            this.currentSlide = index;
            this.updateSlides();
          });
          if (this.currentSlide <= this.lastSlide) {
            span.classList.remove("active-page");
            if (this.currentSlide === index) span.classList.add("active-page");
          }
        });
      }
    }
  }

  setupPagination() {
    if (!this.pagination.getAttribute("data-dots")) {
      if (this.pagination) {
        const dots = document.createElement("span");
        this.pagination.appendChild(dots);
      }
    }
  }

  prevSlide(e) {
    if (this.currentSlide === 0) return;
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;

    this.updateSlides();
    this.restartAutoplay();
    e.preventDefault();
  }

  nextSlide(e) {
    this.currentSlide = (this.currentSlide + 1) % (this.lastSlide + 1);
    this.updateSlides();
    this.restartAutoplay();
    e.preventDefault();
  }

  DragEnd() {
    const moveBy = this.sliderWidth / 1.5;
    this.slides.forEach((slide, index) => {
      const slidePos = slide.getBoundingClientRect();
      const parentRect = this.container.getBoundingClientRect();
      const xPosition = slidePos.left - parentRect.left;
      if (index === 0) {
        if (xPosition > 0) {
          this.currentSlide = 0;
        }
      }
      if (xPosition < moveBy) {
        if (index <= this.lastSlide) this.currentSlide = index;
      }
    });
    if (this.prevValue !== this.currentSlide) {
      this.updateSlides();
      this.prevValue = this.currentSlide;
    } else {
      const currentXPos = this.currentSize * this.currentSlide;
      this.wrapper.style.transition = `${this.transition}ms`;
      this.wrapper.style.transform = `translate3d(-${currentXPos}px,0,0)`;
    }
  }

  handleMouseStart = (e) => {
    this.stopAutoplay();
    this.wrapper.style.transition = "0s";
    this.startX = e.pageX;
    this.isDragging = true;
    e.preventDefault();
  };

  handleMouseMove = (e) => {
    if (!this.isDragging) return;
    this.currentX = e.pageX;
    const deltaX = this.currentX - this.startX;
    const translateValue = this.currentTranslate + deltaX;
    this.wrapper.style.transform = `translate3d(${translateValue}px,0,0)`;
    e.preventDefault();
    this.stopAutoplay();
  };
  handleMouseEnd = () => {
    this.isDragging = false;
    this.DragEnd();
  };

  handleTouchStart = (e) => {
    this.startX = e.touches[0].pageX;
    this.isDragging = true;
    this.wrapper.style.transition = "0s";
    e.preventDefault();
    this.stopAutoplay();
  };

  handleTouchMove = (e) => {
    if (!this.isDragging) return;
    this.currentX = e.touches[0].pageX;
    const deltaX = this.currentX - this.startX;
    const translateValue = this.currentTranslate + deltaX;
    this.wrapper.style.transform = `translate3d(${translateValue}px,0,0)`;
    e.preventDefault();
    this.stopAutoplay();
  };

  handleTouchEnd = () => {
    this.isDragging = false;
    this.DragEnd();
  };

  CheckBreakpoint() {
    if (this.options.breakpoints) {
      let isBreakpointMatched = false;

      for (const [breakpoint, settings] of Object.entries(
        this.options.breakpoints
      )) {
        const windowWidth = window.innerWidth;
        if (windowWidth > breakpoint) {
          if (settings.slidesPerView)
            this.slidesPerView = settings.slidesPerView;
          if (settings.margin) this.margin = settings.margin;
          isBreakpointMatched = true;
        } else {
          break;
        }
      }
      if (this.slidesPV !== this.slidesPerView) {
        if (this.pagination) {
          while (this.pagination.hasChildNodes()) {
            this.pagination.removeChild(this.pagination.firstChild);
          }
          this.pagination.removeAttribute("data-dots");
        }
        this.slidePV = this.slidesPerView;
      }
      if (!isBreakpointMatched) {
        this.margin = this.options.margin || 0;
        this.slidesPerView = this.options.slidesPerView || 1;
      }
    }
  }
  AutoPlay() {
    if (this.options.autoplay) {
      this.autoplayInterval = setInterval(() => {
        if (this.currentSlide === this.lastSlide) {
          this.currentSlide = 0;
        } else {
          this.currentSlide++;
        }
        this.updateSlides();
      }, this.options.autoplay);
    }
  }
  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }
  restartAutoplay() {
    this.stopAutoplay();
    setTimeout(() => {
      this.AutoPlay();
    }, 500);
  }
  reSize() {
    window.addEventListener("resize", () => {
      this.updateSlides();
    });
  }
}
