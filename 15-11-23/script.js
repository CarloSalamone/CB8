const roboProdGen = (roboData) => {
  try {
    const wrapperEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const textEl = document.createElement("div");
    const priceEl = document.createElement("p");
    const nameEl = document.createElement("h4");

    wrapperEl.className = "robo";
    imgEl.src = roboData.imageUrl;
    imgEl.alt = roboData.roboName;
    textEl.className = "text";
    priceEl.textContent = roboData.price + "$";
    nameEl.textContent = roboData.roboName;
    textEl.append(priceEl, nameEl);
    wrapperEl.append(textEl, imgEl);

    return wrapperEl;
  } catch (error) {
    console.error("Errore", error);
    return null;
  }
};

const recommendedSection = document.createElement("section");
recommendedSection.className = "recommended";

const headingEl = document.createElement("h3");
headingEl.textContent = "Adotta un cucciolo!";
recommendedSection.appendChild(headingEl);

const roboListDiv = document.createElement("div");
roboListDiv.className = "robo-list";
recommendedSection.appendChild(roboListDiv);

const roboDiv = document.createElement("div");
roboDiv.className = "robo";
roboListDiv.appendChild(roboDiv);

const roboDiv = document.createElement("img");
imgEl.src = "http://placekutten.com/300/300";
imgEl.alt = "mici";
roboDiv.appendChild(imgEl);

const textDiv = document.createElement("div");
textDiv.className = "text";
roboDiv.appendChild;
const priceEl = document.createElement("p");
priceEl.textContent = "9$";
textDiv.appendChild(priceEl);

const nameEl = document.createElement("h4");
nameEl.textContent = "Mici";
textDiv.appendChild(nameEl);

const mockData = [
  {
    id: 1,
    roboName: "bob",
    price: 1,
    imageUrl: "http://placekitten.com/290/290",
  },
  {
    id: 2,
    roboName: "bib",
    price: 1,
    imageUrl: "http://placekitten.com/g/250/250",
  },
  {
    id: 3,
    roboName: "bub",
    price: 1,
    imageUrl: "https://placedog.net/300/300",
  },

  {
    id: 4,
    roboName: "beb",
    price: 1,
    imageUrl: "https://placedog.net/280/280",
  },
];

const roboListEl = document.querySelector(".robo-list");

// document.body.append(roboProdGen(mockData[2]));
mockData.map((robo) => roboListEl.appendChild(roboProdGen(robo)));

const recommended = documenti.querySelector("recommended");
for (i = 0; i <= mockData.length; i++) {
  recommended.innerhtml += (
    <div class="card">
      <img src="${mockData[i].image}" />
      <h3>
        <span class="card_roboName-number">01.</span>${mockData[i].roboName}
      </h3>
      <button>
        <ion-icon name="add-circle-outline"></ion-icon>
      </button>
    </div>
  );
}
