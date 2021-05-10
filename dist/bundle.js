/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
const toggleBtns = document.querySelectorAll(".togglePopupBtn");
const sizesButtons = document.querySelectorAll(".sizeBtn");
const colorSelectOptions = document.querySelectorAll("option");
const productPrice = document.querySelector(".productPrice");
const popup = document.querySelector(".popup");

const togglePopup = () => {
  popup.classList.toggle("showPopup");
};
toggleBtns.forEach((btn) => btn.addEventListener("click", togglePopup));

fetch("./xbox.json")
  .then((res) => res.json())
  .then((jsonData) => {
    sizesButtons.forEach((sizeBtn, index) => {
      const arrayOfSizes = Object.values(jsonData.sizes.items);

      sizeBtn.innerText = arrayOfSizes[index].name;
      productPrice.innerText = arrayOfSizes[0].price;
      console.log(arrayOfSizes);

      // arrayOfSizes.forEach((size) => {
      //   sizeBtn.innerText = size.name;
      // });
    });

    colorSelectOptions.forEach((option, index) => {
      const arrayOfVariants = Object.values(jsonData.multiversions[0].items);
      console.log(arrayOfVariants);

      const arrayOfColors = arrayOfVariants.map((variant, index) =>
        Object.values(variant.values)
      );
      console.log(arrayOfColors);

      const formattedColors = arrayOfColors.map((color, index) => {
        const newObj = { ...color[0] };
        return newObj;
      });

      console.log(formattedColors);

      option.innerText = formattedColors[index].name;

      // option.innerText = arrayOfVariants[index].n
    });
  });

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map