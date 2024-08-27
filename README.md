# Slider Light

![npm version](https://img.shields.io/npm/v/sliderlight.svg)
![license](https://img.shields.io/github/license/MoncyDev/slider-light)
![downloads](https://img.shields.io/npm/dm/sliderlight.svg)

Sliderlight is a light-weight and basic JavaScript slider library which enables developers to easily create sliders which has features like navigation, pagination, touch-slider, drag-slider, slidesPerView and more.

## Installation

You can install SliderLight using npm:

```bash
npm install sliderlight
```

Git Repository: https://github.com/MoncyDev/slider-light/

## Usage

```javascript
const slider = new sliderLight(container, SliderOptions); // All slider options are optional
```

Here’s a basic example of how to use Slider-Light:

```javascript
import SliderLight from "sliderlight";

const slider = new SliderLight(".slider-container", {
  //SliderOptions{}
  prevButton: ".prev-slider-light",
  nextButton: ".next-slider-light",
  autoplay: 3000,
  transition: 500,
  margin: 20,
  slidesPerView: 1,
  pagination: ".slider-light-pagination",
  breakpoints: {
    // window width is >= 400px
    400: {
      slidesPerView: 2,
      margin: 10,
    },
    // window width is >= 700px
    700: {
      slidesPerView: 3,
      margin: 20,
    },
    // window width is >= 1024px
    1024: {
      slidesPerView: 4,
      margin: 30,
    },
  },
});
```

### HTML :

```html
<div className="slider-container">
  <div className="slider-light">Slide 1</div>
  <div className="slider-light">Slide 2</div>
  <div className="slider-light">Slide 3</div>
  <div className="prev-slider-light"></div>
  <div className="next-slider-light"></div>
  <div className="slider-light-pagination"></div>
</div>
```

### Basic Css: (optional)

```css
.slider-light {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 30px;
  color: black;
  height: 300px;
}
.slider-container {
  width: 90%;
  margin: 20px auto;
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
