// ! Select card image here
let imgBtn = document.getElementById("imgb");
console.log(imgBtn);
const windoSize = () => {
  if (window.outerWidth <= 768) {
    imgBtn.src = "./images/image-product-mobile.jpg";
  } else {
    imgBtn.src = "./images/image-product-desktop.jpg";
  }
};
windoSize();
