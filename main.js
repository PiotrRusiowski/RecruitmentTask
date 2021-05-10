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
