const productGen = (data) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h3");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");

  wrapperEl.className = "product";
  titleEl.textContent = data.title;
  imgEl.src = data.thumbnail;
  imgEl.alt = data.title;
  textEl.className = "text";
  priceEl.textContent = data.price + "$";
  textEl.append(titleEl, priceEl);
  wrapperEl.append(imgEl, textEl);

  return wrapperEl;
};

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data.products.filter((prod) => prod.price < 50)));

const popupEl = () => {
  const wrapperEl = document.createElement("div");
  const textEl = document.createElement("p");
  const btnEl = document.createElement("button");
  const btnEl2 = document.createElement("button2");

  wrapperEl.className = "pop-up";
  textEl.textContent = "lorem impsum";
  btnEl.className = "popup-button";
  btnEl2.className = "popup-button2";
  btnEl.textContent = "Si";
  btnEl2.textContent = "No";

  wrapperEl.append(textEl, btnEl, btnEl2);
  return wrapperEl;
};

setTimeout(() => {
  const overlay = document.querySelector(".overlay");
  const popup = popupEl();
  document.body.append(popup);
  const buttonYes = document.querySelector(".popup-button");
  const buttonNo = document.querySelector(".popup-button2");

  buttonYes.addEventListener("click", () => {
    popup.remove();
    overlay.style.display = "none";
  });
  buttonNo.addEventListener("click", () => {
    window.open("https://www.google.it", "_blank");
  });
}, 3500);
