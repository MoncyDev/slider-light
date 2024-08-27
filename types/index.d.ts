declare module "sliderLight" {
  interface BreakpointOptions {
    slidesPerView?: number;
    margin?: number;
  }

  interface SliderOptions {
    prevButton?: string;
    nextButton?: string;
    effect?: string;
    transition?: number;
    autoplay?: number;
    margin?: number;
    slidesPerView?: number;
    pagination?: string;
    breakpoints?: {
      [width: number]: BreakpointOptions;
    };
  }

  class SliderLight {
    constructor(container: string, options?: SliderOptions);
    init(): void;
  }

  export default SliderLight;
}
