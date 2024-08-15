declare module "slider-light" {
  interface SliderOptions {
    prevButton?: string;
    nextButton?: string;
    effect?: string;
  }

  class SliderLight {
    constructor(container: string, options?: SliderOptions);
    init(): void;
    prevSlide(): void;
    nextSlide(): void;
    showSlide(index: number): void;
    setupNavigation(): void;
  }

  export default SliderLight;
}
