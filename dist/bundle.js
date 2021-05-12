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
const popupForm = document.querySelector(".popup__form");
const status = document.querySelector(".status");

const togglePopup = () => {
  popup.classList.toggle("showPopup");
};
toggleBtns.forEach((btn) => btn.addEventListener("click", togglePopup));

let data;

let arrayOfSizes;

const getData = () => {
  fetch("./xbox.json")
    .then((res) => res.json())
    .then((res) => (data = res))
    .then(() => console.log(data))
    .then(() => setData(data));
};

const setData = (data) => {
  console.log(data, "Data");
  sizesButtons.forEach((sizeBtn, index) => {
    arrayOfSizes = Object.values(data.sizes.items);

    sizeBtn.innerText = arrayOfSizes[index].name;
    status.innerText = arrayOfSizes[0].status;
    sizeBtn.addEventListener("click", () => changeRamOption(sizeBtn.innerText));
    productPrice.innerText = `${arrayOfSizes[0].price} zł`;
    console.log(arrayOfSizes);

    colorSelectOptions.forEach((option, index) => {
      const arrayOfVariants = Object.values(data.multiversions[0].items);
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
    });
  });
};

getData();

const changeRamOption = (typeOfRam) => {
  arrayOfSizes.forEach((item) => {
    if (item.name === typeOfRam) {
      productPrice.innerText = `${item.price} zł`;
      status.innerText = item.status;
    }
  });
};

const handleFormSubmit = (e) => {
  e.preventDefault();
};

popupForm.addEventListener("submit", handleFormSubmit);

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