/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

const toggleBtns = document.querySelectorAll(".togglePopupBtn");
const sizesButtons = document.querySelectorAll(".btn--sizeBtn");
const colorSelectOptions = document.querySelectorAll("option");
const productPrice = document.querySelector(".popup__title--price");
const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");
const status = document.querySelector(".status");
const slider = document.querySelector(".slider__content");
const sliderArrowLeft = document.querySelector(".slider__arrow");
const sliderArrowRight = document.querySelector(".slider__arrow--right");
const productName = document.querySelector(".popup__title--name");
let data;
let arrayOfSizes;
let cart = [];

const togglePopup = () => {
  popup.classList.toggle("showPopup");
};
toggleBtns.forEach((btn) => btn.addEventListener("click", togglePopup));

const isLocalStorageSupported = window.localStorage; //

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
    console.log("array", arrayOfSizes);

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
  // bez name za to z buttonami
  console.log(e.target.colorSelect.value);

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


/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleParseError: Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)\n    at handleParseError (C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\webpack\\lib\\NormalModule.js:891:19)\n    at C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\webpack\\lib\\NormalModule.js:992:5\n    at processResult (C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\webpack\\lib\\NormalModule.js:718:11)\n    at C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\webpack\\lib\\NormalModule.js:778:5\n    at C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\loader-runner\\lib\\LoaderRunner.js:406:3\n    at iterateNormalLoaders (C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:10)\n    at Array.<anonymous> (C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\loader-runner\\lib\\LoaderRunner.js:223:4)\n    at runCallbacks (C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:27:15)\n    at C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:200:4\n    at C:\\Users\\Piotrek\\Desktop\\zad\\node_modules\\graceful-fs\\graceful-fs.js:123:16");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./styles/index.scss"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map