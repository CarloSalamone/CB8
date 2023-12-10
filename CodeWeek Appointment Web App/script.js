const createNav = () => {
  const navEl = document.createElement("nav");
  const ascepioEl = document.createElement("h1");
  const appNameEl = document.createElement("h1");
  const serchEl = document.createElement("h1");

  navEl.className = "main-nav";
  ascepioEl.textContent = "⚕️";
  appNameEl.textContent = "Appontment App";
  serchEl.textContent = "🔍";

  navEl.append(ascepioEl, appNameEl, serchEl);

  return navEl;
};

const createUncomplitedList = () => {
  const warperEl = document.createElement("ul");
  const titleEl = document.createElement("h3");

  warperEl.className = "list-uncomplited";
  titleEl.textContent = "Appuntamenti in attesa";

  warperEl.appendChild(titleEl);

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) =>
      data.map((data) => warperEl.appendChild(createUncomplitedItem(data)))
    );

  return warperEl;
};

const createUncomplitedItem = (data) => {
  const warperEl = document.createElement("li");
  const indexEl = document.createElement("p");
  const titleEl = document.createElement("p");
  const userIdEl = document.createElement("p");

  warperEl.className = "uncomplited-item";
  indexEl.textContent = data.id;
  titleEl.textContent = data.title;
  userIdEl.textContent = data.userId;

  warperEl.append(indexEl, titleEl, userIdEl);
  return warperEl;
};

const createComplitedList = () => {
  const warperEl = document.createElement("ul");
  const titleEl = document.createElement("h3");

  warperEl.className = "list-complited";
  titleEl.textContent = "Appuntamenti già conclusi";

  warperEl.appendChild(titleEl);

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) =>
      data.map((data) => warperEl.appendChild(createComplitedItem(data)))
    );

  return warperEl;
};

const createComplitedItem = (data) => {
  const warperEl = document.createElement("li");
  const indexEl = document.createElement("p");
  const titleEl = document.createElement("p");
  const userIdEl = document.createElement("p");

  warperEl.className = "complited-item";
  indexEl.textContent = data.id;
  titleEl.textContent = data.title;
  userIdEl.textContent = data.userId;

  warperEl.append(indexEl, titleEl, userIdEl);
  return warperEl;
};

const createButtons = () => {
  const warperEl = document.createElement("ul");
  const inputEl1 = document.createElement("input");
  const inputEl2 = document.createElement("input");

  warperEl.className = "input-buttons";
  inputEl1.placeholder = "Mostra solo i completati";
  inputEl2.placeholder = "Mostra tutti";

  warperEl.append(inputEl1, inputEl2);

  inputEl1.addEventListener("click", (e) => {
    rootEl.textContent = "";
    rootEl.append(navEl, buttonsEl, listComplitedEl);
  });

  inputEl2.addEventListener("click", (e) => {
    rootEl.textContent = "";
    rootEl.append(navEl, buttonsEl, listUncomplitedEl, listComplitedEl);
  });

  return warperEl;
};

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
const rootEl = document.querySelector("#root");
const navEl = createNav();
const buttonsEl = createButtons();
const listUncomplitedEl = createUncomplitedList();
const listComplitedEl = createComplitedList();

rootEl.append(navEl, buttonsEl, listUncomplitedEl, listComplitedEl);
