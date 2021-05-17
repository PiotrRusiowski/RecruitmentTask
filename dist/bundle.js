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
const sizesButtons = document.querySelectorAll(".btn--sizeBtn");
const colorSelectOptions = document.querySelectorAll("option");
const productPrice = document.querySelector(".popup__title--price");
const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");
const status = document.querySelector(".productStatus");
const slider = document.querySelector(".slider__content");
const sliderArrowLeft = document.querySelector(".slider__arrow");
const sliderArrowRight = document.querySelector(".slider__arrow--right");
const productName = document.querySelector(".popup__title--name");
const statusIcon = document.querySelector(".status__icon");

let data;
let arrayOfSizes;
let cart = [];

const togglePopup = () => {
  popup.classList.toggle("showPopup");
};
toggleBtns.forEach((btn) => btn.addEventListener("click", togglePopup));

const isLocalStorageSupported = window.localStorage;

const getData = () => {
  fetch("./xbox.json")
    .then((res) => res.json())
    .then((res) => (data = res))
    .then(() => setData(data))
    .then(() => localStorage.setItem("data", JSON.stringify(data)));
};

const setData = (data) => {
  productName.innerText = data.product.name;
  sizesButtons.forEach((sizeBtn, index) => {
    arrayOfSizes = Object.values(data.sizes.items);

    sizeBtn.value = arrayOfSizes[index].name;

    status.innerText = arrayOfSizes[0].status;

    sizeBtn.addEventListener("click", () => changeRamOption(sizeBtn.value));
    productPrice.innerText = `${arrayOfSizes[0].price} zł`;

    colorSelectOptions.forEach((option, index) => {
      const arrayOfVariants = Object.values(data.multiversions[0].items);

      const arrayOfColors = arrayOfVariants.map((variant, index) =>
        Object.values(variant.values)
      );

      const formattedColors = arrayOfColors.map((color, index) => {
        const newObj = { ...color[0] };
        return newObj;
      });

      option.innerText = formattedColors[index].name;
      option.value = formattedColors[index].name;
    });
  });
};

const changeRamOption = (typeOfRam) => {
  arrayOfSizes.forEach((item) => {
    if (item.name === typeOfRam) {
      productPrice.innerText = `${item.price} zł`;
      status.innerText = item.status;

      if (item.status === "Produkt dostępny") {
        statusIcon.src = "./assets/icons/ok.svg";
        statusIcon.alt = "aproved";
      } else {
        statusIcon.src = "./assets/icons/close (-1.svg";
        statusIcon.alt = "x";
      }

      sizesButtons.forEach((button) => {
        if (button.name === typeOfRam) {
          button.classList.add("btn--active");
        } else {
          button.classList.remove("btn--active");
        }
      });
    }
  });
};

try {
  const cachedData = localStorage.getItem("data");
  const data = JSON.parse(cachedData);

  if (data) {
    setData(data);
  } else {
    throw new Error("NO_CACHE");
  }
} catch (e) {
  getData();
}

const handleFormSubmit = (e) => {
  e.preventDefault();

  const activeBtn = document.querySelector(".btn--active");

  const productToAddToCart = {
    name: productName.innerText,
    typeOfRam: activeBtn.value,
    color: e.target.colorSelect.value,
  };

  cart = [...cart, productToAddToCart];
  alert("Product added to the cart!, Check console for details :) ");
  console.log(cart);
};

const onNextClick = () => {
  const imgWidth = slider.offsetWidth;
  slider.scrollLeft += imgWidth;
};

const onPreviousClick = () => {
  const imgWidth = slider.offsetWidth;
  slider.scrollLeft -= imgWidth;
};

sliderArrowLeft.addEventListener("click", onNextClick);
sliderArrowRight.addEventListener("click", onPreviousClick);
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