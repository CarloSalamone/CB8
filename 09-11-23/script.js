const wrapperEl = document.createElement("div");
const textEl = document.createElement("div");
const hUnoEl = document.createElement("h1");
const parEl = document.createElement("p");
const btnEl = document.createElement("button");

wrapperEl.setAttribute("class", "hero");
hUnoEl.textContent = "Tuffati nel mare più limpido";
parEl.textContent = "Vieni a scoprire il mare piu sereno di sicilia";
btnEl.textContent = "Volo!";

textEl.append(hUnoEl, parEl, btnEl);
wrapperEl.append(textEl);
document.body.append(wrapperEl);

// Esercizio 2 (aggiungo il bottone)

btnEl.addEventListener("click", () => (wrapperEl.style.display = "none"));

// Esercizio Avanzato (chespero che mi sia riuscito)

const divDue = document.createElement("div");
divDue.setAttribute("class", "divDue");
document.body.append(divDue);

const imgWrapperEl = document.createElement("div");
imgWrapperEl.setAttribute("class", "gallery");

const galleryTitle = document.createElement("h2");
galleryTitle.setAttribute("class", "gallery-title");
galleryTitle.textContent = "Sezione Gallery";

divDue.append(galleryTitle, imgWrapperEl);

const imageGenerator = (idNum, imgUrl, altText) => {
  const generatedImage = document.createElement("img");
  generatedImage.setAttribute("id", idNum);
  generatedImage.setAttribute("src", imgUrl);
  generatedImage.setAttribute("alt", altText);
  generatedImage.setAttribute("class", "img-gallery");
  generatedImage.setAttribute("width", "250");
  generatedImage.setAttribute("height", "250");

  return generatedImage;
};

imgWrapperEl.append(
  imageGenerator(3, "https://picsum.photos/200/200?1", "Any image")
);

// Esercizio Avanzato Audaci (da cui ho preso molta ispirazione da internet)

const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/200/200?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/200/200?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/200/200?random=1",
    altText: "Immagine 10",
  },
];

imageList.forEach(function (image) {
  const generatedImage = imageGenerator(image.id, image.imgUrl, image.altText);
  imgWrapperEl.append(generatedImage);
});
