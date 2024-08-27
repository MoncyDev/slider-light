/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SliderLight"] = factory();
	else
		root["SliderLight"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sliderlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderlight */ \"./src/sliderlight.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sliderlight__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://SliderLight/./src/index.js?");

/***/ }),

/***/ "./src/sliderlight.js":
/*!****************************!*\
  !*** ./src/sliderlight.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SliderLight)\n/* harmony export */ });\n/* harmony import */ var _styles_slider_light_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/slider.light.css */ \"./src/styles/slider.light.css\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar SliderLight = /*#__PURE__*/function () {\n  function SliderLight(container) {\n    var _this = this;\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    _classCallCheck(this, SliderLight);\n    _defineProperty(this, \"handleMouseStart\", function (e) {\n      _this.stopAutoplay();\n      _this.wrapper.style.transition = \"0s\";\n      _this.startX = e.pageX;\n      _this.isDragging = true;\n      e.preventDefault();\n    });\n    _defineProperty(this, \"handleMouseMove\", function (e) {\n      if (!_this.isDragging) return;\n      _this.currentX = e.pageX;\n      var deltaX = _this.currentX - _this.startX;\n      var translateValue = _this.currentTranslate + deltaX;\n      _this.wrapper.style.transform = \"translate3d(\".concat(translateValue, \"px,0,0)\");\n      e.preventDefault();\n      _this.stopAutoplay();\n    });\n    _defineProperty(this, \"handleMouseEnd\", function () {\n      _this.isDragging = false;\n      _this.DragEnd();\n    });\n    _defineProperty(this, \"handleTouchStart\", function (e) {\n      _this.startX = e.touches[0].pageX;\n      _this.isDragging = true;\n      _this.wrapper.style.transition = \"0s\";\n      e.preventDefault();\n      _this.stopAutoplay();\n    });\n    _defineProperty(this, \"handleTouchMove\", function (e) {\n      if (!_this.isDragging) return;\n      _this.currentX = e.touches[0].pageX;\n      var deltaX = _this.currentX - _this.startX;\n      var translateValue = _this.currentTranslate + deltaX;\n      _this.wrapper.style.transform = \"translate3d(\".concat(translateValue, \"px,0,0)\");\n      e.preventDefault();\n      _this.stopAutoplay();\n    });\n    _defineProperty(this, \"handleTouchEnd\", function () {\n      _this.isDragging = false;\n      _this.DragEnd();\n    });\n    this.container = document.querySelector(container);\n    this.slides = this.container.querySelectorAll(\".slider-light\");\n    this.wrapper = document.createElement(\"div\");\n    this.options = options;\n    this.effect = options.effect || \"slide\";\n    this.transition = options.transition || 300;\n    this.prevButton = document.querySelector(options.prevButton) || null;\n    this.nextButton = document.querySelector(options.nextButton) || null;\n    this.pagination = document.querySelector(options.pagination) || null;\n    this.startX, this.currentX, this.isDragging = false;\n    this.currentSlide = 0;\n    this.prevValue = 0;\n    this.sliderWidth = 0;\n    this.currentSize = 0;\n    this.currentTranslate = 0;\n    this.currentPos = 0;\n    this.prevPos = 0;\n    this.margin = options.margin || 0;\n    this.autoplayInterval = null;\n    this.lastSlide = this.slides.length - 1;\n    this.slidesPerView = this.options.slidesPerView || 1;\n    this.slidesPV = 1;\n    this.init();\n  }\n  return _createClass(SliderLight, [{\n    key: \"init\",\n    value: function init() {\n      this.wrapSlider();\n      this.setupNavigation();\n      this.updateSlides();\n      this.AutoPlay();\n      this.reSize();\n      this.container.classList.add(\"slider-\".concat(this.effect), \"slider-light-container\");\n      this.wrapper.addEventListener(\"touchstart\", this.handleTouchStart);\n      this.wrapper.addEventListener(\"touchmove\", this.handleTouchMove);\n      this.wrapper.addEventListener(\"touchend\", this.handleTouchEnd);\n      this.wrapper.addEventListener(\"mousedown\", this.handleMouseStart);\n      this.wrapper.addEventListener(\"mousemove\", this.handleMouseMove);\n      this.wrapper.addEventListener(\"mouseup\", this.handleMouseEnd);\n      this.wrapper.addEventListener(\"mouseleave\", this.handleMouseEnd);\n    }\n  }, {\n    key: \"wrapSlider\",\n    value: function wrapSlider() {\n      var _this2 = this;\n      if (!this.container.getAttribute(\"data-wrapped\")) {\n        this.wrapper.classList.add(\"wrap-slider-light\");\n        if (this.slides.length > 0) {\n          this.container.appendChild(this.wrapper);\n          this.slides.forEach(function (slide) {\n            _this2.wrapper.appendChild(slide);\n          });\n          this.container.setAttribute(\"data-wrapped\", \"true\");\n        }\n      }\n    }\n  }, {\n    key: \"sliderInitialize\",\n    value: function sliderInitialize() {\n      this.CheckBreakpoint();\n      if (this.options.slidesPerView) {\n        this.sliderWidth = this.container.offsetWidth / this.slidesPerView - (this.margin - this.margin / this.slidesPerView);\n      } else {\n        this.sliderWidth = this.container.offsetWidth;\n      }\n      this.currentSize = this.sliderWidth + this.margin;\n      this.slidesPV = this.options.slidesPerView || 1;\n    }\n  }, {\n    key: \"updateSlides\",\n    value: function updateSlides() {\n      var _this3 = this;\n      this.sliderInitialize();\n      this.changeSlides();\n      if (this.options.slidesPerView) {\n        this.lastSlide = this.slides.length - this.slidesPerView;\n      }\n      if (this.currentSlide > this.lastSlide) this.currentSlide = this.lastSlide;\n      this.slides.forEach(function (slide, index) {\n        slide.style.width = _this3.sliderWidth + \"px\";\n        slide.style.marginRight = _this3.margin + \"px\";\n        slide.classList.remove(\"slider-\".concat(_this3.effect, \"-light-active\"));\n        slide.classList.remove(\"slider-\".concat(_this3.effect, \"-light-prev\"));\n        slide.classList.remove(\"slider-\".concat(_this3.effect, \"-light-next\"));\n        if (index === _this3.currentSlide) {\n          slide.classList.add(\"slider-\".concat(_this3.effect, \"-light-active\"));\n        } else {\n          if (index === (_this3.currentSlide - 1 + _this3.slides.length) % _this3.slides.length) {\n            slide.classList.add(\"slider-\".concat(_this3.effect, \"-light-prev\"));\n          } else if (index === (_this3.currentSlide + 1) % _this3.slides.length) {\n            slide.classList.add(\"slider-\".concat(_this3.effect, \"-light-next\"));\n          }\n        }\n      });\n      if (this.prevButton && this.nextButton) {\n        if (this.currentSlide === 0) {\n          this.prevButton.classList.add(\"slider-light-button-disabled\");\n        } else {\n          this.prevButton.classList.remove(\"slider-light-button-disabled\");\n        }\n        if (this.currentSlide === this.lastSlide) {\n          this.nextButton.classList.add(\"slider-light-button-disabled\");\n        } else {\n          this.nextButton.classList.remove(\"slider-light-button-disabled\");\n        }\n      }\n      this.initPagination();\n    }\n  }, {\n    key: \"changeSlides\",\n    value: function changeSlides() {\n      var currentXPos = this.currentSize * this.currentSlide;\n      this.currentTranslate = -currentXPos;\n      if (this.effect === \"slide\") {\n        this.wrapper.style.transition = \"\".concat(this.transition, \"ms\");\n        this.wrapper.style.transform = \"translate3d(-\".concat(currentXPos, \"px,0,0)\");\n      }\n    }\n  }, {\n    key: \"setupNavigation\",\n    value: function setupNavigation() {\n      var _this4 = this;\n      if (this.prevButton && this.nextButton) {\n        this.prevButton.addEventListener(\"click\", function (e) {\n          return _this4.prevSlide(e);\n        });\n        this.nextButton.addEventListener(\"click\", function (e) {\n          return _this4.nextSlide(e);\n        });\n      }\n    }\n  }, {\n    key: \"initPagination\",\n    value: function initPagination() {\n      var _this5 = this;\n      var checkPage = this.container.querySelector(this.options.pagination) || null;\n      if (checkPage) {\n        this.container.appendChild(this.pagination);\n      }\n      if (this.pagination) {\n        if (this.lastSlide > 0) {\n          var pageClass = \"slider-light-pagination\";\n          if (!this.pagination.classList.contains(pageClass)) {\n            this.pagination.classList.add(pageClass);\n          }\n          for (var i = 0; i < this.lastSlide + 1; i++) {\n            this.setupPagination(i);\n            if (i === this.lastSlide) {\n              this.pagination.setAttribute(\"data-dots\", this.lastSlide + 1);\n            }\n          }\n          this.pagination.querySelectorAll(\"span\").forEach(function (span, index) {\n            span.addEventListener(\"click\", function () {\n              _this5.currentSlide = index;\n              _this5.updateSlides();\n            });\n            if (_this5.currentSlide <= _this5.lastSlide) {\n              span.classList.remove(\"active-page\");\n              if (_this5.currentSlide === index) span.classList.add(\"active-page\");\n            }\n          });\n        }\n      }\n    }\n  }, {\n    key: \"setupPagination\",\n    value: function setupPagination() {\n      if (!this.pagination.getAttribute(\"data-dots\")) {\n        if (this.pagination) {\n          var dots = document.createElement(\"span\");\n          this.pagination.appendChild(dots);\n        }\n      }\n    }\n  }, {\n    key: \"prevSlide\",\n    value: function prevSlide(e) {\n      if (this.currentSlide === 0) return;\n      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;\n      this.updateSlides();\n      this.restartAutoplay();\n      e.preventDefault();\n    }\n  }, {\n    key: \"nextSlide\",\n    value: function nextSlide(e) {\n      this.currentSlide = (this.currentSlide + 1) % (this.lastSlide + 1);\n      this.updateSlides();\n      this.restartAutoplay();\n      e.preventDefault();\n    }\n  }, {\n    key: \"DragEnd\",\n    value: function DragEnd() {\n      var _this6 = this;\n      var moveBy = this.sliderWidth / 1.5;\n      this.slides.forEach(function (slide, index) {\n        var slidePos = slide.getBoundingClientRect();\n        var parentRect = _this6.container.getBoundingClientRect();\n        var xPosition = slidePos.left - parentRect.left;\n        if (index === 0) {\n          if (xPosition > 0) {\n            _this6.currentSlide = 0;\n          }\n        }\n        if (xPosition < moveBy) {\n          if (index <= _this6.lastSlide) _this6.currentSlide = index;\n        }\n      });\n      if (this.prevValue !== this.currentSlide) {\n        this.updateSlides();\n        this.prevValue = this.currentSlide;\n      } else {\n        var currentXPos = this.currentSize * this.currentSlide;\n        this.wrapper.style.transition = \"\".concat(this.transition, \"ms\");\n        this.wrapper.style.transform = \"translate3d(-\".concat(currentXPos, \"px,0,0)\");\n      }\n    }\n  }, {\n    key: \"CheckBreakpoint\",\n    value: function CheckBreakpoint() {\n      if (this.options.breakpoints) {\n        var isBreakpointMatched = false;\n        for (var _i = 0, _Object$entries = Object.entries(this.options.breakpoints); _i < _Object$entries.length; _i++) {\n          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n            breakpoint = _Object$entries$_i[0],\n            settings = _Object$entries$_i[1];\n          var windowWidth = window.innerWidth;\n          if (windowWidth > breakpoint) {\n            if (settings.slidesPerView) this.slidesPerView = settings.slidesPerView;\n            if (settings.margin) this.margin = settings.margin;\n            isBreakpointMatched = true;\n          } else {\n            break;\n          }\n        }\n        if (this.slidesPV !== this.slidesPerView) {\n          if (this.pagination) {\n            while (this.pagination.hasChildNodes()) {\n              this.pagination.removeChild(this.pagination.firstChild);\n            }\n            this.pagination.removeAttribute(\"data-dots\");\n          }\n          this.slidePV = this.slidesPerView;\n        }\n        if (!isBreakpointMatched) {\n          this.margin = this.options.margin || 0;\n          this.slidesPerView = this.options.slidesPerView || 1;\n        }\n      }\n    }\n  }, {\n    key: \"AutoPlay\",\n    value: function AutoPlay() {\n      var _this7 = this;\n      if (this.options.autoplay) {\n        this.autoplayInterval = setInterval(function () {\n          if (_this7.currentSlide === _this7.lastSlide) {\n            _this7.currentSlide = 0;\n          } else {\n            _this7.currentSlide++;\n          }\n          _this7.updateSlides();\n        }, this.options.autoplay);\n      }\n    }\n  }, {\n    key: \"stopAutoplay\",\n    value: function stopAutoplay() {\n      clearInterval(this.autoplayInterval);\n    }\n  }, {\n    key: \"restartAutoplay\",\n    value: function restartAutoplay() {\n      var _this8 = this;\n      this.stopAutoplay();\n      setTimeout(function () {\n        _this8.AutoPlay();\n      }, 500);\n    }\n  }, {\n    key: \"reSize\",\n    value: function reSize() {\n      var _this9 = this;\n      window.addEventListener(\"resize\", function () {\n        _this9.updateSlides();\n      });\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://SliderLight/./src/sliderlight.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/slider.light.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/slider.light.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.slider-container {\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.wrap-slider-light {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: content-box;\r\n  z-index: 1;\r\n  transition-property: transform;\r\n  will-change: transform;\r\n}\r\n.slider-light {\r\n  flex-shrink: 0;\r\n  transition-property: transform;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  display: block;\r\n}\r\n/*------------------------FLIP_SLIDER-------------------------*/\r\n\r\n.slider-flip {\r\n  perspective: 1000px;\r\n}\r\n\r\n.slider-flip-light {\r\n  transition: transform 0.5s ease-in-out;\r\n  transform-style: preserve-3d;\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.slider-flip-light-active {\r\n  transform: rotateY(0);\r\n  display: block;\r\n  opacity: 1;\r\n  z-index: 2;\r\n}\r\n\r\n.slider-flip-light-next {\r\n  transform: rotateY(-180deg);\r\n  display: block;\r\n  opacity: 0;\r\n  z-index: 0;\r\n}\r\n\r\n.slider-flip-light-prev {\r\n  transform: rotateY(180deg);\r\n  display: block;\r\n  opacity: 0;\r\n  z-index: 0;\r\n}\r\n\r\n/*------------------------FADE_SLIDER-------------------------*/\r\n\r\n.slider-fade {\r\n  position: relative;\r\n}\r\n\r\n.slider-fade-light {\r\n  position: absolute;\r\n  opacity: 0;\r\n  transition: opacity 0.5s ease-in-out;\r\n}\r\n\r\n.slider-fade-light-active {\r\n  opacity: 1;\r\n}\r\n\r\n/* ------------------------Nav Buttons ------------------------ */\r\n\r\n.prev-slider-light {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 20px;\r\n  width: 20px;\r\n  height: 20px;\r\n  transform: translateY(-50%) rotate(-45deg);\r\n  z-index: 7;\r\n  cursor: pointer;\r\n  border-top: 3px solid #0481f7;\r\n  border-left: 3px solid #0481f7;\r\n}\r\n.next-slider-light {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  width: 20px;\r\n  height: 20px;\r\n  transform: translateY(-50%) rotate(45deg);\r\n  z-index: 7;\r\n  cursor: pointer;\r\n  border-top: 3px solid #0481f7;\r\n  border-right: 3px solid #0481f7;\r\n}\r\n.slider-light-button-disabled {\r\n  opacity: 0.33;\r\n  pointer-events: none;\r\n  cursor: initial;\r\n}\r\n/* ------------------------ Pagination ------------------------ */\r\n\r\n.slider-light-pagination {\r\n  display: flex;\r\n  margin: auto;\r\n  height: 30px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.slider-light-pagination span {\r\n  display: block;\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: #c7c7c7;\r\n  border-radius: 50%;\r\n  margin: 0px 5px;\r\n  cursor: pointer;\r\n}\r\n.slider-light-pagination span.active-page {\r\n  background-color: #0481f7;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://SliderLight/./src/styles/slider.light.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://SliderLight/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://SliderLight/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/slider.light.css":
/*!*************************************!*\
  !*** ./src/styles/slider.light.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_slider_light_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./slider.light.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/slider.light.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_slider_light_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_slider_light_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_slider_light_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_slider_light_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://SliderLight/./src/styles/slider.light.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://SliderLight/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://SliderLight/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://SliderLight/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://SliderLight/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://SliderLight/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://SliderLight/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});