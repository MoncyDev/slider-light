# Slider Light

![npm version](https://img.shields.io/npm/v/slider-light.svg)
![license](https://img.shields.io/github/license/MoncyDev/slider-light)
![downloads](https://img.shields.io/npm/dm/slider-light.svg)

Slider-light is a light-weight and basic JavaScript slider library which enables developers to easily create sliders with basic effects and navigations.

## Installation

You can install Slider-Light using npm:

```bash
npm install slider-light
```

Git Repository: https://github.com/MoncyDev/slider-light/

## Usage

Here’s a basic example of how to use Slider-Light:

```javascript
import SliderLight from "slider-light";

const slider = new SliderLight(".slider-container", {
  prevButton: ".prev",
  nextButton: ".next",
  effect: "slide",
});
```

### HTML :

```html
<div className="slider-container">
  <div className="slider-light">Slide 1</div>
  <div className="slider-light">Slide 2</div>
  <div className="slider-light">Slide 3</div>
  <button className="prev">Prev</button>
  <button className="next">Next</button>
</div>
```

### Effects:

Available effects for the silders are as follows:

- slide
- fade
- flip

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
