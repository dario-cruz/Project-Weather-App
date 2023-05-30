/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/BrunoAce-Regular.ttf */ "./src/assets/fonts/BrunoAce-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/RobotoCondensed-Regular.ttf */ "./src/assets/fonts/RobotoCondensed-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/RobotoCondensed-Bold.ttf */ "./src/assets/fonts/RobotoCondensed-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/search-outline.svg */ "./src/assets/icons/search-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Style reset. */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Responsive Text */\r\nhtml {\r\n    font-size: calc(15px + 0.390625vh);\r\n}\r\n/* Default styling for p elems. */\r\np {\r\n    font-family: 'roboto', sans-serif;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n/* Set Transition smoothly */\r\nbody {\r\n    transition: background 1s ease-in-out;\r\n}\r\n\r\n/* Image background */\r\ndiv.background-image {\r\n    position: absolute;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n/* Custom Fonts */\r\n@font-face {\r\n    font-family: 'bruno';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n@font-face{\r\n    font-family: 'roboto';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n@font-face {\r\n    font-family: 'roboto-bold';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n\r\n/* Navigation elements */\r\ndiv.side-menu {\r\n    position: fixed;\r\n    top: 0;\r\n    left: -250px;\r\n    width: 250px;\r\n    height: 100%;\r\n    transition: all 0.3s ease;\r\n}\r\nul.menu-items > li > a {\r\n    text-decoration: none;\r\n}\r\nul.menu-items {\r\n    list-style: none;\r\n}\r\n\r\n/* Main App */\r\ndiv.main-app {\r\n    display: grid;\r\n    grid-template-rows: 1fr 3fr .5fr 1fr .8fr;\r\n    grid-template-columns: 1fr minmax(70%, 400px) 1fr;\r\n    grid-template-areas: \r\n    \"left top right\"\r\n    \"left mid right\"\r\n    \"left bottom right\"\r\n    \"left astro right\"\r\n    \"left search right\";\r\n    height: 100vh;\r\n}\r\ndiv.top-area {\r\n    grid-area: top;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\np.location {\r\n    font-family: 'roboto-bold' sans-serif;\r\n    font-size: 1.8rem;\r\n    font-weight: bolder;\r\n}\r\ndiv.temp-display {\r\n    grid-area: mid;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n}\r\ndiv.bottom-area {\r\n    grid-area: bottom;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\ndiv.search-bar {\r\n    grid-area: search;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\ndiv.location-display {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.date-display{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\ndiv.weather-status-display{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nh1.temperature{\r\n    font-family: 'bruno', sans-serif;\r\n    font-size: 15rem;\r\n    transform: scale(1);\r\n    transition: all 0.5s ease-in-out;\r\n    text-shadow:\r\n        -1px -1px 0 black,\r\n        1px -1px 0 black,\r\n        -1px 1px 0 black,\r\n        1px 1px 0 black;\r\n   \r\n    \r\n      \r\n}\r\nh1.temperature:hover {\r\n    animation: temp-animation;\r\n    animation-duration: 5s;\r\n    animation-delay: .5s;\r\n    animation-timing-function: ease-in-out;\r\n    animation-iteration-count: infinite;\r\n}\r\ndiv.feel-display {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.wind-humidity-display {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n/* Form styling. */\r\nform#weather-form { \r\n    border: 2px solid black;\r\n    border-radius: 20px;\r\n    padding: 2px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: flex;\r\n}\r\ninput#location-input{\r\n    border: none;\r\n    background: transparent;\r\n    margin: 0;\r\n    padding: 7px 8px;\r\n    font-size: 14px;\r\n}\r\ninput#location-input::placeholder {\r\n    color: #bbb;\r\n}\r\ninput#location-input:focus {\r\n    outline: none;\r\n}\r\nbutton#location-submit{\r\n    text-indent: -999px;\r\n    overflow: hidden;\r\n    width: 30px;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 1px solid transparent;\r\n    border-radius: inherit;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\r\n    cursor: pointer;\r\n    opacity: 0.7;\r\n}\r\nbutton#location-submit:hover {\r\n    opacity: 1;\r\n}\r\ndiv.geo-location {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 40px;\r\n    width: 40px;\r\n    border: 2px solid black;\r\n    background-color: lightgray;\r\n    border-radius: 5px;\r\n    margin-left: 5px;\r\n    cursor: pointer;\r\n}\r\ndiv.geo-location:hover {\r\n    background-color: gray;\r\n}\r\ndiv.geo-location > img {\r\n    height: 24px;\r\n    width: 24px;\r\n}\r\n\r\n/* Animations */\r\n@keyframes temp-animation {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n    50% {\r\n        transform: scale(0.9);\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n/* Astrological Elements */\r\ndiv.astro-info {\r\n    grid-area: astro;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    grid-template-rows: 50px 1fr;\r\n    grid-template-areas: \r\n    \"title title title title title\"\r\n    \"sunrise sunset moonphase moonrise moonset\";\r\n    display: grid;\r\n    gap: 1px;\r\n}\r\ndiv.astro-heading {\r\n    grid-area: title;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\np.astro-heading-text {\r\n    font-family: 'roboto-bold' sans-serif;\r\n}\r\ndiv.astro-moonphase, div.astro-moonrise, div.astro-moonset, div.astro-sunrise, div.astro-sunset {\r\n    background-color: black; \r\n    color: white;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\np.moonphase-text, p.moonrise-text, p.moonset-text, p.sunrise-text, p.sunset-text {\r\n    font-size: .7rem;\r\n    font-family: 'bruno';\r\n}\r\ndiv.astro-moonphase {\r\n    grid-area: moonphase;\r\n}\r\ndiv.astro-moonrise {\r\n    grid-area: moonrise;\r\n}e\r\ndiv.astro-moonset {\r\n    grid-area: moonset;\r\n}\r\ndiv.astro-sunrise {\r\n    grid-area: sunrise;\r\n}\r\ndiv.astro-sunset {\r\n    grid-area: sunset;\r\n}\r\nimg.astro-icon {\r\n    fill: rgb(255, 255, 255);\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n/* Weather related classes */\r\n.sunny-background {\r\n    background: #f12711;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n.rainy-background {\r\n    background: #bdc3c7;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n}\r\n.cloudy-background {\r\n    background: #0F2027;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n.overcast-background {\r\n    background: #3C3B3F;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #605C3C, #3C3B3F);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #605C3C, #3C3B3F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n.clear-background {\r\n    background: #1c92d2;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #f2fcfe, #1c92d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["/* Style reset. */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Responsive Text */\r\nhtml {\r\n    font-size: calc(15px + 0.390625vh);\r\n}\r\n/* Default styling for p elems. */\r\np {\r\n    font-family: 'roboto', sans-serif;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n/* Set Transition smoothly */\r\nbody {\r\n    transition: background 1s ease-in-out;\r\n}\r\n\r\n/* Image background */\r\ndiv.background-image {\r\n    position: absolute;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n/* Custom Fonts */\r\n@font-face {\r\n    font-family: 'bruno';\r\n    src: url('./assets/fonts/BrunoAce-Regular.ttf');\r\n}\r\n@font-face{\r\n    font-family: 'roboto';\r\n    src: url('./assets/fonts/RobotoCondensed-Regular.ttf');\r\n}\r\n@font-face {\r\n    font-family: 'roboto-bold';\r\n    src: url('./assets/fonts/RobotoCondensed-Bold.ttf');\r\n}\r\n\r\n\r\n/* Navigation elements */\r\ndiv.side-menu {\r\n    position: fixed;\r\n    top: 0;\r\n    left: -250px;\r\n    width: 250px;\r\n    height: 100%;\r\n    transition: all 0.3s ease;\r\n}\r\nul.menu-items > li > a {\r\n    text-decoration: none;\r\n}\r\nul.menu-items {\r\n    list-style: none;\r\n}\r\n\r\n/* Main App */\r\ndiv.main-app {\r\n    display: grid;\r\n    grid-template-rows: 1fr 3fr .5fr 1fr .8fr;\r\n    grid-template-columns: 1fr minmax(70%, 400px) 1fr;\r\n    grid-template-areas: \r\n    \"left top right\"\r\n    \"left mid right\"\r\n    \"left bottom right\"\r\n    \"left astro right\"\r\n    \"left search right\";\r\n    height: 100vh;\r\n}\r\ndiv.top-area {\r\n    grid-area: top;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\np.location {\r\n    font-family: 'roboto-bold' sans-serif;\r\n    font-size: 1.8rem;\r\n    font-weight: bolder;\r\n}\r\ndiv.temp-display {\r\n    grid-area: mid;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n}\r\ndiv.bottom-area {\r\n    grid-area: bottom;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\ndiv.search-bar {\r\n    grid-area: search;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\ndiv.location-display {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.date-display{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\ndiv.weather-status-display{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nh1.temperature{\r\n    font-family: 'bruno', sans-serif;\r\n    font-size: 15rem;\r\n    transform: scale(1);\r\n    transition: all 0.5s ease-in-out;\r\n    text-shadow:\r\n        -1px -1px 0 black,\r\n        1px -1px 0 black,\r\n        -1px 1px 0 black,\r\n        1px 1px 0 black;\r\n   \r\n    \r\n      \r\n}\r\nh1.temperature:hover {\r\n    animation: temp-animation;\r\n    animation-duration: 5s;\r\n    animation-delay: .5s;\r\n    animation-timing-function: ease-in-out;\r\n    animation-iteration-count: infinite;\r\n}\r\ndiv.feel-display {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\ndiv.wind-humidity-display {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n/* Form styling. */\r\nform#weather-form { \r\n    border: 2px solid black;\r\n    border-radius: 20px;\r\n    padding: 2px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: flex;\r\n}\r\ninput#location-input{\r\n    border: none;\r\n    background: transparent;\r\n    margin: 0;\r\n    padding: 7px 8px;\r\n    font-size: 14px;\r\n}\r\ninput#location-input::placeholder {\r\n    color: #bbb;\r\n}\r\ninput#location-input:focus {\r\n    outline: none;\r\n}\r\nbutton#location-submit{\r\n    text-indent: -999px;\r\n    overflow: hidden;\r\n    width: 30px;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 1px solid transparent;\r\n    border-radius: inherit;\r\n    background: transparent url(./assets/icons/search-outline.svg) no-repeat;\r\n    cursor: pointer;\r\n    opacity: 0.7;\r\n}\r\nbutton#location-submit:hover {\r\n    opacity: 1;\r\n}\r\ndiv.geo-location {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 40px;\r\n    width: 40px;\r\n    border: 2px solid black;\r\n    background-color: lightgray;\r\n    border-radius: 5px;\r\n    margin-left: 5px;\r\n    cursor: pointer;\r\n}\r\ndiv.geo-location:hover {\r\n    background-color: gray;\r\n}\r\ndiv.geo-location > img {\r\n    height: 24px;\r\n    width: 24px;\r\n}\r\n\r\n/* Animations */\r\n@keyframes temp-animation {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n    50% {\r\n        transform: scale(0.9);\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n/* Astrological Elements */\r\ndiv.astro-info {\r\n    grid-area: astro;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    grid-template-rows: 50px 1fr;\r\n    grid-template-areas: \r\n    \"title title title title title\"\r\n    \"sunrise sunset moonphase moonrise moonset\";\r\n    display: grid;\r\n    gap: 1px;\r\n}\r\ndiv.astro-heading {\r\n    grid-area: title;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\np.astro-heading-text {\r\n    font-family: 'roboto-bold' sans-serif;\r\n}\r\ndiv.astro-moonphase, div.astro-moonrise, div.astro-moonset, div.astro-sunrise, div.astro-sunset {\r\n    background-color: black; \r\n    color: white;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\np.moonphase-text, p.moonrise-text, p.moonset-text, p.sunrise-text, p.sunset-text {\r\n    font-size: .7rem;\r\n    font-family: 'bruno';\r\n}\r\ndiv.astro-moonphase {\r\n    grid-area: moonphase;\r\n}\r\ndiv.astro-moonrise {\r\n    grid-area: moonrise;\r\n}e\r\ndiv.astro-moonset {\r\n    grid-area: moonset;\r\n}\r\ndiv.astro-sunrise {\r\n    grid-area: sunrise;\r\n}\r\ndiv.astro-sunset {\r\n    grid-area: sunset;\r\n}\r\nimg.astro-icon {\r\n    fill: rgb(255, 255, 255);\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n/* Weather related classes */\r\n.sunny-background {\r\n    background: #f12711;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n.rainy-background {\r\n    background: #bdc3c7;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n}\r\n.cloudy-background {\r\n    background: #0F2027;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n.overcast-background {\r\n    background: #3C3B3F;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #605C3C, #3C3B3F);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #605C3C, #3C3B3F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n.clear-background {\r\n    background: #1c92d2;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #f2fcfe, #1c92d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helpers/getBackgroundImage.js":
/*!*******************************************!*\
  !*** ./src/helpers/getBackgroundImage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImages": () => (/* binding */ getImages),
/* harmony export */   "updateBackground": () => (/* binding */ updateBackground)
/* harmony export */ });
// Search for image based on term provided.
async function getImages(searchTerm) {
    const imageData = await imageSearch(searchTerm)
    const imageList =  [
        imageData.photos[0].src.large,
        imageData.photos[1].src.large,
        imageData.photos[2].src.large,
        imageData.photos[3].src.large,
        imageData.photos[4].src.large,
        imageData.photos[5].src.large,
        imageData.photos[6].src.large,
        imageData.photos[7].src.large,
        imageData.photos[8].src.large,
        imageData.photos[9].src.large,
        imageData.photos[10].src.large,
        imageData.photos[11].src.large,
        imageData.photos[12].src.large,
        imageData.photos[13].src.large,
        imageData.photos[14].src.large,
    ]

    let randomIndex = Math.floor(Math.random() * imageList.length)
    let randomImage = imageList[randomIndex]
    updateBackground(randomImage)
}

async function imageSearch(searchTerm) {
    // Fetch images from pexels api.
    const apiResponse = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
            Authorization: 'VhTnt4oP6hpy8kAUcQUkFSUNm4yiIqyZ2qNbY3Gzo8EwgU872H4PbcMX'
        }
    }, {mode : 'cors'})
    const imageData = await apiResponse.json()
    // Return the data.
    return imageData
}

function updateBackground(imgString) {
    const backgroundElement = document.querySelector('.background-image')
    // Update css prop for element.
    backgroundElement.style.backgroundImage = `url('${imgString}')`
    backgroundElement.style.backdropFilter = 'blur(5px)'
}

// Logic to steer image api in the right direction.
function weatherStatus(searchTerm) {
    switch (searchTerm) {
        case 'Partly Cloudy':
            getImages('clouds')
            break
        case 'Sunny':
            getImages('sunrise')
            break
        case 'Light Rain':
            getImages('rain')
            break
        case 'rain':
            getImages('rain')
            break
        case 'mist':
            getImages('fog')
            break
        case 'thunderstorm':
            getImages('thunder')
    }
}




/***/ }),

/***/ "./src/helpers/getLocation.js":
/*!************************************!*\
  !*** ./src/helpers/getLocation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserLocation": () => (/* binding */ getUserLocation)
/* harmony export */ });
// Get user location for checking local weather on startup.
async function getUserLocation() {
  return new Promise((resolve, reject) => {
      let longitude = '';
      let latitude = '';
      // Check if the browser supports geolocation
      if ("geolocation" in navigator) {
        // Get the user's location
        navigator.geolocation.getCurrentPosition(function(position) {
          // The user's location was successfully retrieved
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          
          // Process the raw string to a rounded number.
          latitude = parseInt(latitude);
          latitude = Math.floor(latitude);
  
          longitude = parseInt(longitude);
          longitude = Math.floor(longitude);
          
          const location = {
            latitude: latitude,
            longitude: longitude
          };
          resolve(location);
        }, function(error) {
          // An error occurred while retrieving the user's location
          console.log("Error getting location:", error);
          reject(error);
        });
      } else {
        // Geolocation is not supported by the browser
        console.log("Geolocation is not supported by this browser.");
        reject("Geolocation is not supported by this browser.");
      }
  });
}



/***/ }),

/***/ "./src/helpers/getWeatherData.js":
/*!***************************************!*\
  !*** ./src/helpers/getWeatherData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
// Get weather data with passed string.
async function getWeatherData(locationString) {
    // Call api and get promise.
    const apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=46584a9caf1f4b8887b153831231204&q=${locationString}`, {mode : 'cors'})
    // On promise retrieval, process to object.
    const weatherData = await apiResponse.json()
    console.log(weatherData)
    // Return object data. 
    return {
        region : `${weatherData.location.name}, ${weatherData.location.region}`,
        status : weatherData.current.condition.text,
        date : weatherData.location.localtime,
        tempF : Math.floor(weatherData.current.temp_f),
        tempC : Math.floor(weatherData.current.temp_c),
        realFeelF : Math.floor(weatherData.current.feelslike_f),
        realFeelC : Math.floor(weatherData.current.feelslike_C),
        windDir : weatherData.current.wind_dir,
        windMph : Math.floor(weatherData.current.wind_mph),
        windKph : Math.floor(weatherData.current.wind_kph),
        humidity : weatherData.current.humidity,
        moonphase : weatherData.forecast.forecastday[0].astro.moon_phase,
        moonrise : weatherData.forecast.forecastday[0].astro.moonrise,
        moonset : weatherData.forecast.forecastday[0].astro.moonset,
        sunrise : weatherData.forecast.forecastday[0].astro.sunrise,
        sunset : weatherData.forecast.forecastday[0].astro.sunset,
    }
}




/***/ }),

/***/ "./src/helpers/processLocation.js":
/*!****************************************!*\
  !*** ./src/helpers/processLocation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processLocation": () => (/* binding */ processLocation)
/* harmony export */ });
/* harmony import */ var _getLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocation */ "./src/helpers/getLocation.js");
/* harmony import */ var _getWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeatherData */ "./src/helpers/getWeatherData.js");
/* harmony import */ var _weatherToDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherToDom */ "./src/helpers/weatherToDom.js");




async function processLocation() {
    // Get the users current location.
    const locCoords = await (0,_getLocation__WEBPACK_IMPORTED_MODULE_0__.getUserLocation)()

    // Check the weather at the location.
    const locWeather = await (0,_getWeatherData__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(`${locCoords.latitude},${locCoords.longitude}`)
    
    ;(0,_weatherToDom__WEBPACK_IMPORTED_MODULE_2__.weatherToDom)(locWeather.region, locWeather.date, locWeather.status, locWeather.tempF, locWeather.realFeelF, locWeather.windMph, locWeather.humidity)
    ;(0,_weatherToDom__WEBPACK_IMPORTED_MODULE_2__.astroToDom)(locWeather.moonphase, locWeather.moonrise, locWeather.moonset, locWeather.sunrise, locWeather.sunset)
}



/***/ }),

/***/ "./src/helpers/updateTimeAndDate.js":
/*!******************************************!*\
  !*** ./src/helpers/updateTimeAndDate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "liveTimeUpdate": () => (/* binding */ liveTimeUpdate),
/* harmony export */   "updateTime": () => (/* binding */ updateTime)
/* harmony export */ });
function updateTime() {
    // Create a string that gets the current time.
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    // Create a string that gets the current date.
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const dateString = `${month}-${day}-${year}`;

    // Return a complete string with time and date.
    const finalString = `${dateString} ${timeString}`
    return finalString
}  


// Create function for live updating of time.
function liveTimeUpdate() {
    // Target element to update time.
    const dateElement = document.querySelector('p.date')
    // Run updateTime func and return string will be the innerText.
    dateElement.innerHTML = updateTime()
    // Call updateTime() every second to update the time and date
    // setInterval(updateTime, 1000)
}



/***/ }),

/***/ "./src/helpers/weatherToDom.js":
/*!*************************************!*\
  !*** ./src/helpers/weatherToDom.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "astroToDom": () => (/* binding */ astroToDom),
/* harmony export */   "weatherToDom": () => (/* binding */ weatherToDom)
/* harmony export */ });
// Weather elements to be updated. 
const locationText = document.querySelector('p.location')
const dateText = document.querySelector('p.date')
const statusText= document.querySelector('p.weather-status')
const tempText = document.querySelector('h1.temperature')
const realFeelText = document.querySelector('p.real-feel')
const windHumText = document.querySelector('p.wind-humidity')

// Astro elements to be updated.
const moonPhaseText = document.querySelector('p.moonphase-text')
const moonRiseText = document.querySelector('p.moonrise-text')
const moonSetText = document.querySelector('p.moonset-text')
const sunRiseText = document.querySelector('p.sunrise-text')
const sunSetText = document.querySelector('p.sunset-text')

// Update all of the dom elements that make up the app.
function weatherToDom(location, date, status, temp, realFeel, wind, humidity) {
    // Update all dom elements with weatherData.
    locationText.innerText = `${location}`
    // dateText.innerText = `${date}`
    statusText.innerText = `${status}`
    tempText.innerHTML = `${temp}&#176;`
    realFeelText.innerHTML = `Right now it feels like ${realFeel}&#176;`
    windHumText.innerText = `Wind Speed: ${wind}MPH Humidity: ${humidity}`
}

// Update dom elements related to astrological data.
function astroToDom(moonPhase, moonRise, moonSet, sunRise, sunSet) {
    // Update innerText/HTML
    moonPhaseText.innerHTML = `${moonPhase}`
    moonRiseText.innerHTML = `${moonRise}`
    moonSetText.innerHTML = `${moonSet}`
    sunRiseText.innerHTML = `${sunRise}`
    sunSetText.innerHTML = `${sunSet}`
}



/***/ }),

/***/ "./src/pageComponents/events.js":
/*!**************************************!*\
  !*** ./src/pageComponents/events.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocationEvent": () => (/* binding */ getLocationEvent),
/* harmony export */   "resetInput": () => (/* binding */ resetInput),
/* harmony export */   "weatherFormEvent": () => (/* binding */ weatherFormEvent),
/* harmony export */   "weatherObject": () => (/* binding */ weatherObject)
/* harmony export */ });
/* harmony import */ var _helpers_getBackgroundImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/getBackgroundImage */ "./src/helpers/getBackgroundImage.js");
/* harmony import */ var _helpers_getWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getWeatherData */ "./src/helpers/getWeatherData.js");
/* harmony import */ var _helpers_weatherToDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/weatherToDom */ "./src/helpers/weatherToDom.js");
/* harmony import */ var _helpers_processLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/processLocation */ "./src/helpers/processLocation.js");





// Hold weather data from searches.
let weatherObject = {}

const weatherFormEvent = (() => {
    // Form submit behavior.
    const weatherForm = document.querySelector('#weather-form')
    const weatherInput = document.querySelector('#location-input')
    
    weatherForm.addEventListener('submit', (e) => {
        // Stop refresh of the page
        e.preventDefault()
        ;(0,_helpers_getWeatherData__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(weatherInput.value)
            .then(result => {
                // Update Weather elements
                ;(0,_helpers_weatherToDom__WEBPACK_IMPORTED_MODULE_2__.weatherToDom)(result.region, result.date, result.status, result.tempF, result.realFeelF, result.windMph, result.humidity)
                // Update Astro elements
                ;(0,_helpers_weatherToDom__WEBPACK_IMPORTED_MODULE_2__.astroToDom)(result.moonphase, result.moonrise, result.moonset, result.sunrise, result.sunset)
                ;(0,_helpers_getBackgroundImage__WEBPACK_IMPORTED_MODULE_0__.getImages)(result.status)
            })
    })
})()

// Create a func that can be called on button click.
// Func should get the users location.
const getLocationEvent = (() => {
    const geoLocationDiv = document.querySelector('div.geo-location')
    geoLocationDiv.addEventListener('click', (e) => {
        e.preventDefault()
        ;(0,_helpers_processLocation__WEBPACK_IMPORTED_MODULE_3__.processLocation)()
    })
})()

// Create a func that adds and event so that when the user clicks the weather input,
// It resets the contents of the input element. 
const resetInput = (() => {
    const inputElement = document.querySelector('input#location-input')
    inputElement.addEventListener('click', () => {
        // Reset input field.
        inputElement.value = ''
    })
})()





/***/ }),

/***/ "./src/assets/fonts/BrunoAce-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/BrunoAce-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57d90f1b7b321c6768d4.ttf";

/***/ }),

/***/ "./src/assets/fonts/RobotoCondensed-Bold.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/RobotoCondensed-Bold.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff070ffd2fc570ae3b33.ttf";

/***/ }),

/***/ "./src/assets/fonts/RobotoCondensed-Regular.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/RobotoCondensed-Regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa72efe9609a87016b7b.ttf";

/***/ }),

/***/ "./src/assets/icons/search-outline.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/search-outline.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3a9b743b3bfe662b714.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _helpers_processLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/processLocation */ "./src/helpers/processLocation.js");
/* harmony import */ var _helpers_updateTimeAndDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/updateTimeAndDate */ "./src/helpers/updateTimeAndDate.js");
/* harmony import */ var _pageComponents_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageComponents/events */ "./src/pageComponents/events.js");



// Import all event funcs that are IFEE's


// Get the users location on startup.
(0,_helpers_processLocation__WEBPACK_IMPORTED_MODULE_1__.processLocation)()
// Update the time
;(0,_helpers_updateTimeAndDate__WEBPACK_IMPORTED_MODULE_2__.liveTimeUpdate)()
// Constantly update time to give "live" effect.
setInterval(_helpers_updateTimeAndDate__WEBPACK_IMPORTED_MODULE_2__.liveTimeUpdate, 1000)


// Define all elements needed. 
// Text elements. 
const locationText = document.querySelector('p.location')
const dateText = document.querySelector('p.date')
const statusText= document.querySelector('p.weather-status')
const tempText = document.querySelector('h1.tempurature')
const realFealText = document.querySelector('p.real-feal')
const windHumText = document.querySelector('p.wind-humidity')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ3VDO0FBQ0M7QUFDNUQ7QUFDd0Y7QUFDeEY7QUFDQTtBQUNBLHlFQUFlO0FBQ2Y7QUFDQSwyRUFBYztBQUNkO0FBQ0EsWUFBWSxzRUFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXJzL2dldEJhY2tncm91bmRJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2hlbHBlcnMvZ2V0TG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXJzL2dldFdlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaGVscGVycy9wcm9jZXNzTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXJzL3VwZGF0ZVRpbWVBbmREYXRlLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaGVscGVycy93ZWF0aGVyVG9Eb20uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9wYWdlQ29tcG9uZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CcnVub0FjZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL1JvYm90b0NvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL1JvYm90b0NvbmRlbnNlZC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL3NlYXJjaC1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFN0eWxlIHJlc2V0LiAqL1xcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc3BvbnNpdmUgVGV4dCAqL1xcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDAuMzkwNjI1dmgpO1xcclxcbn1cXHJcXG4vKiBEZWZhdWx0IHN0eWxpbmcgZm9yIHAgZWxlbXMuICovXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBUcmFuc2l0aW9uIHNtb290aGx5ICovXFxyXFxuYm9keSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8qIEltYWdlIGJhY2tncm91bmQgKi9cXHJcXG5kaXYuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi8qIEN1c3RvbSBGb250cyAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ2JydW5vJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNle1xcclxcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWJvbGQnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE5hdmlnYXRpb24gZWxlbWVudHMgKi9cXHJcXG5kaXYuc2lkZS1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IC0yNTBweDtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcbnVsLm1lbnUtaXRlbXMgPiBsaSA+IGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbnVsLm1lbnUtaXRlbXMge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIEFwcCAqL1xcclxcbmRpdi5tYWluLWFwcCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAuNWZyIDFmciAuOGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW5tYXgoNzAlLCA0MDBweCkgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcImxlZnQgdG9wIHJpZ2h0XFxcIlxcclxcbiAgICBcXFwibGVmdCBtaWQgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IGJvdHRvbSByaWdodFxcXCJcXHJcXG4gICAgXFxcImxlZnQgYXN0cm8gcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IHNlYXJjaCByaWdodFxcXCI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbmRpdi50b3AtYXJlYSB7XFxyXFxuICAgIGdyaWQtYXJlYTogdG9wO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxucC5sb2NhdGlvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWJvbGQnIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5kaXYudGVtcC1kaXNwbGF5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBtaWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuZGl2LmJvdHRvbS1hcmVhIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBib3R0b207XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5kaXYuc2VhcmNoLWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogc2VhcmNoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuZGl2LmxvY2F0aW9uLWRpc3BsYXkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuZGl2LmRhdGUtZGlzcGxheXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmRpdi53ZWF0aGVyLXN0YXR1cy1kaXNwbGF5e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuaDEudGVtcGVyYXR1cmV7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnYnJ1bm8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE1cmVtO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgICAtMXB4IC0xcHggMCBibGFjayxcXHJcXG4gICAgICAgIDFweCAtMXB4IDAgYmxhY2ssXFxyXFxuICAgICAgICAtMXB4IDFweCAwIGJsYWNrLFxcclxcbiAgICAgICAgMXB4IDFweCAwIGJsYWNrO1xcclxcbiAgIFxcclxcbiAgICBcXHJcXG4gICAgICBcXHJcXG59XFxyXFxuaDEudGVtcGVyYXR1cmU6aG92ZXIge1xcclxcbiAgICBhbmltYXRpb246IHRlbXAtYW5pbWF0aW9uO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IC41cztcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbn1cXHJcXG5kaXYuZmVlbC1kaXNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbmRpdi53aW5kLWh1bWlkaXR5LWRpc3BsYXkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogRm9ybSBzdHlsaW5nLiAqL1xcclxcbmZvcm0jd2VhdGhlci1mb3JtIHsgXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuaW5wdXQjbG9jYXRpb24taW5wdXR7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogN3B4IDhweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5pbnB1dCNsb2NhdGlvbi1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogI2JiYjtcXHJcXG59XFxyXFxuaW5wdXQjbG9jYXRpb24taW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5idXR0b24jbG9jYXRpb24tc3VibWl0e1xcclxcbiAgICB0ZXh0LWluZGVudDogLTk5OXB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5idXR0b24jbG9jYXRpb24tc3VibWl0OmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuZGl2Lmdlby1sb2NhdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuZGl2Lmdlby1sb2NhdGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcbmRpdi5nZW8tbG9jYXRpb24gPiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBbmltYXRpb25zICovXFxyXFxuQGtleWZyYW1lcyB0ZW1wLWFuaW1hdGlvbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQXN0cm9sb2dpY2FsIEVsZW1lbnRzICovXFxyXFxuZGl2LmFzdHJvLWluZm8ge1xcclxcbiAgICBncmlkLWFyZWE6IGFzdHJvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlXFxcIlxcclxcbiAgICBcXFwic3VucmlzZSBzdW5zZXQgbW9vbnBoYXNlIG1vb25yaXNlIG1vb25zZXRcXFwiO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG59XFxyXFxuZGl2LmFzdHJvLWhlYWRpbmcge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5wLmFzdHJvLWhlYWRpbmctdGV4dCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWJvbGQnIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmRpdi5hc3Ryby1tb29ucGhhc2UsIGRpdi5hc3Ryby1tb29ucmlzZSwgZGl2LmFzdHJvLW1vb25zZXQsIGRpdi5hc3Ryby1zdW5yaXNlLCBkaXYuYXN0cm8tc3Vuc2V0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbnAubW9vbnBoYXNlLXRleHQsIHAubW9vbnJpc2UtdGV4dCwgcC5tb29uc2V0LXRleHQsIHAuc3VucmlzZS10ZXh0LCBwLnN1bnNldC10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdicnVubyc7XFxyXFxufVxcclxcbmRpdi5hc3Ryby1tb29ucGhhc2Uge1xcclxcbiAgICBncmlkLWFyZWE6IG1vb25waGFzZTtcXHJcXG59XFxyXFxuZGl2LmFzdHJvLW1vb25yaXNlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBtb29ucmlzZTtcXHJcXG59ZVxcclxcbmRpdi5hc3Ryby1tb29uc2V0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBtb29uc2V0O1xcclxcbn1cXHJcXG5kaXYuYXN0cm8tc3VucmlzZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogc3VucmlzZTtcXHJcXG59XFxyXFxuZGl2LmFzdHJvLXN1bnNldCB7XFxyXFxuICAgIGdyaWQtYXJlYTogc3Vuc2V0O1xcclxcbn1cXHJcXG5pbWcuYXN0cm8taWNvbiB7XFxyXFxuICAgIGZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogV2VhdGhlciByZWxhdGVkIGNsYXNzZXMgKi9cXHJcXG4uc3VubnktYmFja2dyb3VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMTI3MTE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVhZjE5LCAjZjEyNzExKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y1YWYxOSwgI2YxMjcxMSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXHJcXG59XFxyXFxuLnJhaW55LWJhY2tncm91bmQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYmRjM2M3OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJjM2U1MCwgI2JkYzNjNyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyYzNlNTAsICNiZGMzYzcpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxyXFxuXFxyXFxufVxcclxcbi5jbG91ZHktYmFja2dyb3VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwRjIwMjc7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMkM1MzY0LCAjMjAzQTQzLCAjMEYyMDI3KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJDNTM2NCwgIzIwM0E0MywgIzBGMjAyNyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXHJcXG59XFxyXFxuLm92ZXJjYXN0LWJhY2tncm91bmQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM0MzQjNGOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzYwNUMzQywgIzNDM0IzRik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2MDVDM0MsICMzQzNCM0YpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxyXFxufVxcclxcbi5jbGVhci1iYWNrZ3JvdW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFjOTJkMjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMmZjZmUsICMxYzkyZDIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjJmY2ZlLCAjMWM5MmQyKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGtDQUFr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XCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFN0eWxlIHJlc2V0LiAqL1xcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc3BvbnNpdmUgVGV4dCAqL1xcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDAuMzkwNjI1dmgpO1xcclxcbn1cXHJcXG4vKiBEZWZhdWx0IHN0eWxpbmcgZm9yIHAgZWxlbXMuICovXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBUcmFuc2l0aW9uIHNtb290aGx5ICovXFxyXFxuYm9keSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8qIEltYWdlIGJhY2tncm91bmQgKi9cXHJcXG5kaXYuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi8qIEN1c3RvbSBGb250cyAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ2JydW5vJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0JydW5vQWNlLVJlZ3VsYXIudHRmJyk7XFxyXFxufVxcclxcbkBmb250LWZhY2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1JvYm90b0NvbmRlbnNlZC1SZWd1bGFyLnR0ZicpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tYm9sZCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9Sb2JvdG9Db25kZW5zZWQtQm9sZC50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTmF2aWdhdGlvbiBlbGVtZW50cyAqL1xcclxcbmRpdi5zaWRlLW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogLTI1MHB4O1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxudWwubWVudS1pdGVtcyA+IGxpID4gYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxudWwubWVudS1pdGVtcyB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gQXBwICovXFxyXFxuZGl2Lm1haW4tYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIC41ZnIgMWZyIC44ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCg3MCUsIDQwMHB4KSAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwibGVmdCB0b3AgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IG1pZCByaWdodFxcXCJcXHJcXG4gICAgXFxcImxlZnQgYm90dG9tIHJpZ2h0XFxcIlxcclxcbiAgICBcXFwibGVmdCBhc3RybyByaWdodFxcXCJcXHJcXG4gICAgXFxcImxlZnQgc2VhcmNoIHJpZ2h0XFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuZGl2LnRvcC1hcmVhIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0b3A7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5wLmxvY2F0aW9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tYm9sZCcgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcbmRpdi50ZW1wLWRpc3BsYXkge1xcclxcbiAgICBncmlkLWFyZWE6IG1pZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5kaXYuYm90dG9tLWFyZWEge1xcclxcbiAgICBncmlkLWFyZWE6IGJvdHRvbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcbmRpdi5zZWFyY2gtYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzZWFyY2g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5kaXYubG9jYXRpb24tZGlzcGxheSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5kaXYuZGF0ZS1kaXNwbGF5e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuZGl2LndlYXRoZXItc3RhdHVzLWRpc3BsYXl7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5oMS50ZW1wZXJhdHVyZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdicnVubycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVyZW07XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0ZXh0LXNoYWRvdzpcXHJcXG4gICAgICAgIC0xcHggLTFweCAwIGJsYWNrLFxcclxcbiAgICAgICAgMXB4IC0xcHggMCBibGFjayxcXHJcXG4gICAgICAgIC0xcHggMXB4IDAgYmxhY2ssXFxyXFxuICAgICAgICAxcHggMXB4IDAgYmxhY2s7XFxyXFxuICAgXFxyXFxuICAgIFxcclxcbiAgICAgIFxcclxcbn1cXHJcXG5oMS50ZW1wZXJhdHVyZTpob3ZlciB7XFxyXFxuICAgIGFuaW1hdGlvbjogdGVtcC1hbmltYXRpb247XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxufVxcclxcbmRpdi5mZWVsLWRpc3BsYXkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuZGl2LndpbmQtaHVtaWRpdHktZGlzcGxheSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGb3JtIHN0eWxpbmcuICovXFxyXFxuZm9ybSN3ZWF0aGVyLWZvcm0geyBcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5pbnB1dCNsb2NhdGlvbi1pbnB1dHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiA3cHggOHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcbmlucHV0I2xvY2F0aW9uLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjYmJiO1xcclxcbn1cXHJcXG5pbnB1dCNsb2NhdGlvbi1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmJ1dHRvbiNsb2NhdGlvbi1zdWJtaXR7XFxyXFxuICAgIHRleHQtaW5kZW50OiAtOTk5cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLi9hc3NldHMvaWNvbnMvc2VhcmNoLW91dGxpbmUuc3ZnKSBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5idXR0b24jbG9jYXRpb24tc3VibWl0OmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuZGl2Lmdlby1sb2NhdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuZGl2Lmdlby1sb2NhdGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcbmRpdi5nZW8tbG9jYXRpb24gPiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBbmltYXRpb25zICovXFxyXFxuQGtleWZyYW1lcyB0ZW1wLWFuaW1hdGlvbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQXN0cm9sb2dpY2FsIEVsZW1lbnRzICovXFxyXFxuZGl2LmFzdHJvLWluZm8ge1xcclxcbiAgICBncmlkLWFyZWE6IGFzdHJvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlXFxcIlxcclxcbiAgICBcXFwic3VucmlzZSBzdW5zZXQgbW9vbnBoYXNlIG1vb25yaXNlIG1vb25zZXRcXFwiO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG59XFxyXFxuZGl2LmFzdHJvLWhlYWRpbmcge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5wLmFzdHJvLWhlYWRpbmctdGV4dCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLWJvbGQnIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmRpdi5hc3Ryby1tb29ucGhhc2UsIGRpdi5hc3Ryby1tb29ucmlzZSwgZGl2LmFzdHJvLW1vb25zZXQsIGRpdi5hc3Ryby1zdW5yaXNlLCBkaXYuYXN0cm8tc3Vuc2V0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbnAubW9vbnBoYXNlLXRleHQsIHAubW9vbnJpc2UtdGV4dCwgcC5tb29uc2V0LXRleHQsIHAuc3VucmlzZS10ZXh0LCBwLnN1bnNldC10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdicnVubyc7XFxyXFxufVxcclxcbmRpdi5hc3Ryby1tb29ucGhhc2Uge1xcclxcbiAgICBncmlkLWFyZWE6IG1vb25waGFzZTtcXHJcXG59XFxyXFxuZGl2LmFzdHJvLW1vb25yaXNlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBtb29ucmlzZTtcXHJcXG59ZVxcclxcbmRpdi5hc3Ryby1tb29uc2V0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBtb29uc2V0O1xcclxcbn1cXHJcXG5kaXYuYXN0cm8tc3VucmlzZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogc3VucmlzZTtcXHJcXG59XFxyXFxuZGl2LmFzdHJvLXN1bnNldCB7XFxyXFxuICAgIGdyaWQtYXJlYTogc3Vuc2V0O1xcclxcbn1cXHJcXG5pbWcuYXN0cm8taWNvbiB7XFxyXFxuICAgIGZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogV2VhdGhlciByZWxhdGVkIGNsYXNzZXMgKi9cXHJcXG4uc3VubnktYmFja2dyb3VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMTI3MTE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVhZjE5LCAjZjEyNzExKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y1YWYxOSwgI2YxMjcxMSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXHJcXG59XFxyXFxuLnJhaW55LWJhY2tncm91bmQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYmRjM2M3OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJjM2U1MCwgI2JkYzNjNyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyYzNlNTAsICNiZGMzYzcpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxyXFxuXFxyXFxufVxcclxcbi5jbG91ZHktYmFja2dyb3VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwRjIwMjc7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMkM1MzY0LCAjMjAzQTQzLCAjMEYyMDI3KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJDNTM2NCwgIzIwM0E0MywgIzBGMjAyNyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXHJcXG59XFxyXFxuLm92ZXJjYXN0LWJhY2tncm91bmQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM0MzQjNGOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzYwNUMzQywgIzNDM0IzRik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2MDVDM0MsICMzQzNCM0YpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxyXFxufVxcclxcbi5jbGVhci1iYWNrZ3JvdW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFjOTJkMjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMmZjZmUsICMxYzkyZDIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjJmY2ZlLCAjMWM5MmQyKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFNlYXJjaCBmb3IgaW1hZ2UgYmFzZWQgb24gdGVybSBwcm92aWRlZC5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VzKHNlYXJjaFRlcm0pIHtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IGltYWdlU2VhcmNoKHNlYXJjaFRlcm0pXHJcbiAgICBjb25zdCBpbWFnZUxpc3QgPSAgW1xyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbMF0uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbMV0uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbMl0uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbM10uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbNF0uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbNV0uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbNl0uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbN10uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbOF0uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbOV0uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbMTBdLnNyYy5sYXJnZSxcclxuICAgICAgICBpbWFnZURhdGEucGhvdG9zWzExXS5zcmMubGFyZ2UsXHJcbiAgICAgICAgaW1hZ2VEYXRhLnBob3Rvc1sxMl0uc3JjLmxhcmdlLFxyXG4gICAgICAgIGltYWdlRGF0YS5waG90b3NbMTNdLnNyYy5sYXJnZSxcclxuICAgICAgICBpbWFnZURhdGEucGhvdG9zWzE0XS5zcmMubGFyZ2UsXHJcbiAgICBdXHJcblxyXG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1hZ2VMaXN0Lmxlbmd0aClcclxuICAgIGxldCByYW5kb21JbWFnZSA9IGltYWdlTGlzdFtyYW5kb21JbmRleF1cclxuICAgIHVwZGF0ZUJhY2tncm91bmQocmFuZG9tSW1hZ2UpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGltYWdlU2VhcmNoKHNlYXJjaFRlcm0pIHtcclxuICAgIC8vIEZldGNoIGltYWdlcyBmcm9tIHBleGVscyBhcGkuXHJcbiAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5wZXhlbHMuY29tL3YxL3NlYXJjaD9xdWVyeT0ke3NlYXJjaFRlcm19YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ1ZoVG50NG9QNmhweThrQVVjUVVrRlNVTm00eWlJcXlaMnFOYlkzR3pvOEV3Z1U4NzJINFBiY01YJ1xyXG4gICAgICAgIH1cclxuICAgIH0sIHttb2RlIDogJ2NvcnMnfSlcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKVxyXG4gICAgLy8gUmV0dXJuIHRoZSBkYXRhLlxyXG4gICAgcmV0dXJuIGltYWdlRGF0YVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKGltZ1N0cmluZykge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1pbWFnZScpXHJcbiAgICAvLyBVcGRhdGUgY3NzIHByb3AgZm9yIGVsZW1lbnQuXHJcbiAgICBiYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltZ1N0cmluZ30nKWBcclxuICAgIGJhY2tncm91bmRFbGVtZW50LnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gJ2JsdXIoNXB4KSdcclxufVxyXG5cclxuLy8gTG9naWMgdG8gc3RlZXIgaW1hZ2UgYXBpIGluIHRoZSByaWdodCBkaXJlY3Rpb24uXHJcbmZ1bmN0aW9uIHdlYXRoZXJTdGF0dXMoc2VhcmNoVGVybSkge1xyXG4gICAgc3dpdGNoIChzZWFyY2hUZXJtKSB7XHJcbiAgICAgICAgY2FzZSAnUGFydGx5IENsb3VkeSc6XHJcbiAgICAgICAgICAgIGdldEltYWdlcygnY2xvdWRzJylcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdTdW5ueSc6XHJcbiAgICAgICAgICAgIGdldEltYWdlcygnc3VucmlzZScpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnTGlnaHQgUmFpbic6XHJcbiAgICAgICAgICAgIGdldEltYWdlcygncmFpbicpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAncmFpbic6XHJcbiAgICAgICAgICAgIGdldEltYWdlcygncmFpbicpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbWlzdCc6XHJcbiAgICAgICAgICAgIGdldEltYWdlcygnZm9nJylcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICd0aHVuZGVyc3Rvcm0nOlxyXG4gICAgICAgICAgICBnZXRJbWFnZXMoJ3RodW5kZXInKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2dldEltYWdlcywgdXBkYXRlQmFja2dyb3VuZH1cclxuIiwiLy8gR2V0IHVzZXIgbG9jYXRpb24gZm9yIGNoZWNraW5nIGxvY2FsIHdlYXRoZXIgb24gc3RhcnR1cC5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckxvY2F0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBsb25naXR1ZGUgPSAnJztcclxuICAgICAgbGV0IGxhdGl0dWRlID0gJyc7XHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGdlb2xvY2F0aW9uXHJcbiAgICAgIGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSB1c2VyJ3MgbG9jYXRpb25cclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAvLyBUaGUgdXNlcidzIGxvY2F0aW9uIHdhcyBzdWNjZXNzZnVsbHkgcmV0cmlldmVkXHJcbiAgICAgICAgICBsYXRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgICAgIGxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHJhdyBzdHJpbmcgdG8gYSByb3VuZGVkIG51bWJlci5cclxuICAgICAgICAgIGxhdGl0dWRlID0gcGFyc2VJbnQobGF0aXR1ZGUpO1xyXG4gICAgICAgICAgbGF0aXR1ZGUgPSBNYXRoLmZsb29yKGxhdGl0dWRlKTtcclxuICBcclxuICAgICAgICAgIGxvbmdpdHVkZSA9IHBhcnNlSW50KGxvbmdpdHVkZSk7XHJcbiAgICAgICAgICBsb25naXR1ZGUgPSBNYXRoLmZsb29yKGxvbmdpdHVkZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICBsYXRpdHVkZTogbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogbG9uZ2l0dWRlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmVzb2x2ZShsb2NhdGlvbik7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgIC8vIEFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJldHJpZXZpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIGxvY2F0aW9uOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLlwiKTtcclxuICAgICAgICByZWplY3QoXCJHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci5cIik7XHJcbiAgICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtnZXRVc2VyTG9jYXRpb259IiwiLy8gR2V0IHdlYXRoZXIgZGF0YSB3aXRoIHBhc3NlZCBzdHJpbmcuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uU3RyaW5nKSB7XHJcbiAgICAvLyBDYWxsIGFwaSBhbmQgZ2V0IHByb21pc2UuXHJcbiAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT00NjU4NGE5Y2FmMWY0Yjg4ODdiMTUzODMxMjMxMjA0JnE9JHtsb2NhdGlvblN0cmluZ31gLCB7bW9kZSA6ICdjb3JzJ30pXHJcbiAgICAvLyBPbiBwcm9taXNlIHJldHJpZXZhbCwgcHJvY2VzcyB0byBvYmplY3QuXHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXHJcbiAgICAvLyBSZXR1cm4gb2JqZWN0IGRhdGEuIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWdpb24gOiBgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb259YCxcclxuICAgICAgICBzdGF0dXMgOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIGRhdGUgOiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXHJcbiAgICAgICAgdGVtcEYgOiBNYXRoLmZsb29yKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mKSxcclxuICAgICAgICB0ZW1wQyA6IE1hdGguZmxvb3Iod2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2MpLFxyXG4gICAgICAgIHJlYWxGZWVsRiA6IE1hdGguZmxvb3Iod2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZiksXHJcbiAgICAgICAgcmVhbEZlZWxDIDogTWF0aC5mbG9vcih3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9DKSxcclxuICAgICAgICB3aW5kRGlyIDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2RpcixcclxuICAgICAgICB3aW5kTXBoIDogTWF0aC5mbG9vcih3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoKSxcclxuICAgICAgICB3aW5kS3BoIDogTWF0aC5mbG9vcih3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoKSxcclxuICAgICAgICBodW1pZGl0eSA6IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHksXHJcbiAgICAgICAgbW9vbnBoYXNlIDogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZSxcclxuICAgICAgICBtb29ucmlzZSA6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25yaXNlLFxyXG4gICAgICAgIG1vb25zZXQgOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5tb29uc2V0LFxyXG4gICAgICAgIHN1bnJpc2UgOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlLFxyXG4gICAgICAgIHN1bnNldCA6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldCxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0V2VhdGhlckRhdGEgfVxyXG4iLCJpbXBvcnQgeyBnZXRVc2VyTG9jYXRpb24gfSBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2dldFdlYXRoZXJEYXRhXCI7XHJcbmltcG9ydCB7IHdlYXRoZXJUb0RvbSwgYXN0cm9Ub0RvbSB9IGZyb20gXCIuL3dlYXRoZXJUb0RvbVwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0xvY2F0aW9uKCkge1xyXG4gICAgLy8gR2V0IHRoZSB1c2VycyBjdXJyZW50IGxvY2F0aW9uLlxyXG4gICAgY29uc3QgbG9jQ29vcmRzID0gYXdhaXQgZ2V0VXNlckxvY2F0aW9uKClcclxuXHJcbiAgICAvLyBDaGVjayB0aGUgd2VhdGhlciBhdCB0aGUgbG9jYXRpb24uXHJcbiAgICBjb25zdCBsb2NXZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoYCR7bG9jQ29vcmRzLmxhdGl0dWRlfSwke2xvY0Nvb3Jkcy5sb25naXR1ZGV9YClcclxuICAgIFxyXG4gICAgd2VhdGhlclRvRG9tKGxvY1dlYXRoZXIucmVnaW9uLCBsb2NXZWF0aGVyLmRhdGUsIGxvY1dlYXRoZXIuc3RhdHVzLCBsb2NXZWF0aGVyLnRlbXBGLCBsb2NXZWF0aGVyLnJlYWxGZWVsRiwgbG9jV2VhdGhlci53aW5kTXBoLCBsb2NXZWF0aGVyLmh1bWlkaXR5KVxyXG4gICAgYXN0cm9Ub0RvbShsb2NXZWF0aGVyLm1vb25waGFzZSwgbG9jV2VhdGhlci5tb29ucmlzZSwgbG9jV2VhdGhlci5tb29uc2V0LCBsb2NXZWF0aGVyLnN1bnJpc2UsIGxvY1dlYXRoZXIuc3Vuc2V0KVxyXG59XHJcblxyXG5leHBvcnQge3Byb2Nlc3NMb2NhdGlvbn0iLCJmdW5jdGlvbiB1cGRhdGVUaW1lKCkge1xyXG4gICAgLy8gQ3JlYXRlIGEgc3RyaW5nIHRoYXQgZ2V0cyB0aGUgY3VycmVudCB0aW1lLlxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IG5vdy5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgdGltZVN0cmluZyA9IGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xyXG4gICAgLy8gQ3JlYXRlIGEgc3RyaW5nIHRoYXQgZ2V0cyB0aGUgY3VycmVudCBkYXRlLlxyXG4gICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBtb250aCA9IChub3cuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGNvbnN0IGRheSA9IG5vdy5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGAke21vbnRofS0ke2RheX0tJHt5ZWFyfWA7XHJcblxyXG4gICAgLy8gUmV0dXJuIGEgY29tcGxldGUgc3RyaW5nIHdpdGggdGltZSBhbmQgZGF0ZS5cclxuICAgIGNvbnN0IGZpbmFsU3RyaW5nID0gYCR7ZGF0ZVN0cmluZ30gJHt0aW1lU3RyaW5nfWBcclxuICAgIHJldHVybiBmaW5hbFN0cmluZ1xyXG59ICBcclxuXHJcblxyXG4vLyBDcmVhdGUgZnVuY3Rpb24gZm9yIGxpdmUgdXBkYXRpbmcgb2YgdGltZS5cclxuZnVuY3Rpb24gbGl2ZVRpbWVVcGRhdGUoKSB7XHJcbiAgICAvLyBUYXJnZXQgZWxlbWVudCB0byB1cGRhdGUgdGltZS5cclxuICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncC5kYXRlJylcclxuICAgIC8vIFJ1biB1cGRhdGVUaW1lIGZ1bmMgYW5kIHJldHVybiBzdHJpbmcgd2lsbCBiZSB0aGUgaW5uZXJUZXh0LlxyXG4gICAgZGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gdXBkYXRlVGltZSgpXHJcbiAgICAvLyBDYWxsIHVwZGF0ZVRpbWUoKSBldmVyeSBzZWNvbmQgdG8gdXBkYXRlIHRoZSB0aW1lIGFuZCBkYXRlXHJcbiAgICAvLyBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lLCAxMDAwKVxyXG59XHJcblxyXG5leHBvcnQge3VwZGF0ZVRpbWUsIGxpdmVUaW1lVXBkYXRlfSIsIi8vIFdlYXRoZXIgZWxlbWVudHMgdG8gYmUgdXBkYXRlZC4gXHJcbmNvbnN0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AubG9jYXRpb24nKVxyXG5jb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AuZGF0ZScpXHJcbmNvbnN0IHN0YXR1c1RleHQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Aud2VhdGhlci1zdGF0dXMnKVxyXG5jb25zdCB0ZW1wVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxLnRlbXBlcmF0dXJlJylcclxuY29uc3QgcmVhbEZlZWxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncC5yZWFsLWZlZWwnKVxyXG5jb25zdCB3aW5kSHVtVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Aud2luZC1odW1pZGl0eScpXHJcblxyXG4vLyBBc3RybyBlbGVtZW50cyB0byBiZSB1cGRhdGVkLlxyXG5jb25zdCBtb29uUGhhc2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncC5tb29ucGhhc2UtdGV4dCcpXHJcbmNvbnN0IG1vb25SaXNlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AubW9vbnJpc2UtdGV4dCcpXHJcbmNvbnN0IG1vb25TZXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncC5tb29uc2V0LXRleHQnKVxyXG5jb25zdCBzdW5SaXNlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Auc3VucmlzZS10ZXh0JylcclxuY29uc3Qgc3VuU2V0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Auc3Vuc2V0LXRleHQnKVxyXG5cclxuLy8gVXBkYXRlIGFsbCBvZiB0aGUgZG9tIGVsZW1lbnRzIHRoYXQgbWFrZSB1cCB0aGUgYXBwLlxyXG5mdW5jdGlvbiB3ZWF0aGVyVG9Eb20obG9jYXRpb24sIGRhdGUsIHN0YXR1cywgdGVtcCwgcmVhbEZlZWwsIHdpbmQsIGh1bWlkaXR5KSB7XHJcbiAgICAvLyBVcGRhdGUgYWxsIGRvbSBlbGVtZW50cyB3aXRoIHdlYXRoZXJEYXRhLlxyXG4gICAgbG9jYXRpb25UZXh0LmlubmVyVGV4dCA9IGAke2xvY2F0aW9ufWBcclxuICAgIC8vIGRhdGVUZXh0LmlubmVyVGV4dCA9IGAke2RhdGV9YFxyXG4gICAgc3RhdHVzVGV4dC5pbm5lclRleHQgPSBgJHtzdGF0dXN9YFxyXG4gICAgdGVtcFRleHQuaW5uZXJIVE1MID0gYCR7dGVtcH0mIzE3NjtgXHJcbiAgICByZWFsRmVlbFRleHQuaW5uZXJIVE1MID0gYFJpZ2h0IG5vdyBpdCBmZWVscyBsaWtlICR7cmVhbEZlZWx9JiMxNzY7YFxyXG4gICAgd2luZEh1bVRleHQuaW5uZXJUZXh0ID0gYFdpbmQgU3BlZWQ6ICR7d2luZH1NUEggSHVtaWRpdHk6ICR7aHVtaWRpdHl9YFxyXG59XHJcblxyXG4vLyBVcGRhdGUgZG9tIGVsZW1lbnRzIHJlbGF0ZWQgdG8gYXN0cm9sb2dpY2FsIGRhdGEuXHJcbmZ1bmN0aW9uIGFzdHJvVG9Eb20obW9vblBoYXNlLCBtb29uUmlzZSwgbW9vblNldCwgc3VuUmlzZSwgc3VuU2V0KSB7XHJcbiAgICAvLyBVcGRhdGUgaW5uZXJUZXh0L0hUTUxcclxuICAgIG1vb25QaGFzZVRleHQuaW5uZXJIVE1MID0gYCR7bW9vblBoYXNlfWBcclxuICAgIG1vb25SaXNlVGV4dC5pbm5lckhUTUwgPSBgJHttb29uUmlzZX1gXHJcbiAgICBtb29uU2V0VGV4dC5pbm5lckhUTUwgPSBgJHttb29uU2V0fWBcclxuICAgIHN1blJpc2VUZXh0LmlubmVySFRNTCA9IGAke3N1blJpc2V9YFxyXG4gICAgc3VuU2V0VGV4dC5pbm5lckhUTUwgPSBgJHtzdW5TZXR9YFxyXG59XHJcblxyXG5leHBvcnQge3dlYXRoZXJUb0RvbSwgYXN0cm9Ub0RvbX0iLCJpbXBvcnQgeyBnZXRJbWFnZXMgfSBmcm9tIFwiLi4vaGVscGVycy9nZXRCYWNrZ3JvdW5kSW1hZ2VcIlxyXG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuLi9oZWxwZXJzL2dldFdlYXRoZXJEYXRhXCJcclxuaW1wb3J0IHsgd2VhdGhlclRvRG9tLCBhc3Ryb1RvRG9tfSBmcm9tIFwiLi4vaGVscGVycy93ZWF0aGVyVG9Eb21cIlxyXG5pbXBvcnQgeyBwcm9jZXNzTG9jYXRpb24gfSBmcm9tIFwiLi4vaGVscGVycy9wcm9jZXNzTG9jYXRpb25cIlxyXG5cclxuLy8gSG9sZCB3ZWF0aGVyIGRhdGEgZnJvbSBzZWFyY2hlcy5cclxubGV0IHdlYXRoZXJPYmplY3QgPSB7fVxyXG5cclxuY29uc3Qgd2VhdGhlckZvcm1FdmVudCA9ICgoKSA9PiB7XHJcbiAgICAvLyBGb3JtIHN1Ym1pdCBiZWhhdmlvci5cclxuICAgIGNvbnN0IHdlYXRoZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItZm9ybScpXHJcbiAgICBjb25zdCB3ZWF0aGVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24taW5wdXQnKVxyXG4gICAgXHJcbiAgICB3ZWF0aGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vIFN0b3AgcmVmcmVzaCBvZiB0aGUgcGFnZVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGdldFdlYXRoZXJEYXRhKHdlYXRoZXJJbnB1dC52YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBXZWF0aGVyIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyVG9Eb20ocmVzdWx0LnJlZ2lvbiwgcmVzdWx0LmRhdGUsIHJlc3VsdC5zdGF0dXMsIHJlc3VsdC50ZW1wRiwgcmVzdWx0LnJlYWxGZWVsRiwgcmVzdWx0LndpbmRNcGgsIHJlc3VsdC5odW1pZGl0eSlcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBBc3RybyBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgYXN0cm9Ub0RvbShyZXN1bHQubW9vbnBoYXNlLCByZXN1bHQubW9vbnJpc2UsIHJlc3VsdC5tb29uc2V0LCByZXN1bHQuc3VucmlzZSwgcmVzdWx0LnN1bnNldClcclxuICAgICAgICAgICAgICAgIGdldEltYWdlcyhyZXN1bHQuc3RhdHVzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSlcclxufSkoKVxyXG5cclxuLy8gQ3JlYXRlIGEgZnVuYyB0aGF0IGNhbiBiZSBjYWxsZWQgb24gYnV0dG9uIGNsaWNrLlxyXG4vLyBGdW5jIHNob3VsZCBnZXQgdGhlIHVzZXJzIGxvY2F0aW9uLlxyXG5jb25zdCBnZXRMb2NhdGlvbkV2ZW50ID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGdlb0xvY2F0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lmdlby1sb2NhdGlvbicpXHJcbiAgICBnZW9Mb2NhdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcHJvY2Vzc0xvY2F0aW9uKClcclxuICAgIH0pXHJcbn0pKClcclxuXHJcbi8vIENyZWF0ZSBhIGZ1bmMgdGhhdCBhZGRzIGFuZCBldmVudCBzbyB0aGF0IHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSB3ZWF0aGVyIGlucHV0LFxyXG4vLyBJdCByZXNldHMgdGhlIGNvbnRlbnRzIG9mIHRoZSBpbnB1dCBlbGVtZW50LiBcclxuY29uc3QgcmVzZXRJbnB1dCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNsb2NhdGlvbi1pbnB1dCcpXHJcbiAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVzZXQgaW5wdXQgZmllbGQuXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gJydcclxuICAgIH0pXHJcbn0pKClcclxuXHJcblxyXG5leHBvcnQgeyB3ZWF0aGVyRm9ybUV2ZW50LCB3ZWF0aGVyT2JqZWN0LCBnZXRMb2NhdGlvbkV2ZW50LCByZXNldElucHV0IH1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xyXG5pbXBvcnQgeyBwcm9jZXNzTG9jYXRpb24gfSBmcm9tICcuL2hlbHBlcnMvcHJvY2Vzc0xvY2F0aW9uJ1xyXG5pbXBvcnQgeyBsaXZlVGltZVVwZGF0ZSB9IGZyb20gJy4vaGVscGVycy91cGRhdGVUaW1lQW5kRGF0ZSdcclxuLy8gSW1wb3J0IGFsbCBldmVudCBmdW5jcyB0aGF0IGFyZSBJRkVFJ3NcclxuaW1wb3J0IHsgZ2V0TG9jYXRpb25FdmVudCwgd2VhdGhlckZvcm1FdmVudCwgcmVzZXRJbnB1dCB9IGZyb20gJy4vcGFnZUNvbXBvbmVudHMvZXZlbnRzJ1xyXG5cclxuLy8gR2V0IHRoZSB1c2VycyBsb2NhdGlvbiBvbiBzdGFydHVwLlxyXG5wcm9jZXNzTG9jYXRpb24oKVxyXG4vLyBVcGRhdGUgdGhlIHRpbWVcclxubGl2ZVRpbWVVcGRhdGUoKVxyXG4vLyBDb25zdGFudGx5IHVwZGF0ZSB0aW1lIHRvIGdpdmUgXCJsaXZlXCIgZWZmZWN0LlxyXG5zZXRJbnRlcnZhbChsaXZlVGltZVVwZGF0ZSwgMTAwMClcclxuXHJcblxyXG4vLyBEZWZpbmUgYWxsIGVsZW1lbnRzIG5lZWRlZC4gXHJcbi8vIFRleHQgZWxlbWVudHMuIFxyXG5jb25zdCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLmxvY2F0aW9uJylcclxuY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLmRhdGUnKVxyXG5jb25zdCBzdGF0dXNUZXh0PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLndlYXRoZXItc3RhdHVzJylcclxuY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMS50ZW1wdXJhdHVyZScpXHJcbmNvbnN0IHJlYWxGZWFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AucmVhbC1mZWFsJylcclxuY29uc3Qgd2luZEh1bVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLndpbmQtaHVtaWRpdHknKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==