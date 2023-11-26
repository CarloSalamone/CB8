const cE = (type) => document.createElement(type);

// --> 1st Card array
const firstArrayCards = [
  {
    id: 1,
    source: "./Media/1st_block_cards/gift_box.svg",
    alt: "gift_box",
    title: "Gift Boxes",
    className: "cards_gen_container",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, eveniet minus doloribus similique repudiandae optio!",
  },
  {
    id: 2,
    source: "./Media/1st_block_cards/home_kids.svg",
    alt: "home_kids",
    title: "Home With Kids",
    className: "cards_gen_container",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, eveniet minus doloribus similique repudiandae optio!",
  },
  {
    id: 3,
    source: "./Media/1st_block_cards/flower.svg",
    alt: "flower",
    title: "Plants & Flowers",
    className: "cards_gen_container",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, eveniet minus doloribus similique repudiandae optio!",
  },
];
// <-- 1st Card array

// --> 2nd Card array
const secondArrayCards = [
  {
    id: 1,
    source: "./Media/2nd_block_cards/gift1.jpg",
    imgClass: "blog_image",
    alt: "logistics",
    title: "Everyone Should Join Their Gifting Party For Better Experience",
    className: "cards_gen_container",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, eveniet minus doloribus similique repudiandae optio!",
    btnReadMore: "Read More",
    btnReadMoreClass: "btn_read_more",
  },
  {
    id: 2,
    source: "./Media/2nd_block_cards/gift2.jpg",
    imgClass: "blog_image",
    alt: "packaging",
    title: "We Made A Record On Last Year's Giftin Party",
    className: "cards_gen_container",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, eveniet minus doloribus similique repudiandae optio!",
    btnReadMore: "Read More",
    btnReadMoreClass: "btn_read_more",
  },
  {
    id: 3,
    source: "./Media/2nd_block_cards/gift3.jpg",
    imgClass: "blog_image",
    alt: "deliver",
    title: "Everyone Should Join Their Gifting Party For Better Experience",
    className: "cards_gen_container",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, eveniet minus doloribus similique repudiandae optio!",
    btnReadMore: "Read More",
    btnReadMoreClass: "btn_read_more",
  },
];
// <-- 2nd Card array

// --> 1st Cards Generator
const cardsGen = (data) => {
  const cardWrapper = cE("div");
  const cardImg = cE("img");
  const cardTitle = cE("h4");
  const cardDescr = cE("p");
  cardWrapper.className = data.className;
  cardImg.src = data.source;
  cardImg.alt = data.alt;
  cardTitle.textContent = data.title;
  cardDescr.textContent = data.description;

  cardWrapper.append(cardImg, cardTitle, cardDescr);

  return cardWrapper;
};

// --> 2nd Cards Generator
const secondCardsGen = (data) => {
  const cardWrapper = cE("div");
  const cardImg = cE("img");
  const cardTitle = cE("h4");
  const cardDescr = cE("p");
  const btnReadMore = cE("button");
  cardWrapper.className = data.className;
  cardImg.className = data.imgClass;
  cardImg.src = data.source;
  cardImg.alt = data.alt;
  cardTitle.textContent = data.title;
  cardDescr.textContent = data.description;
  btnReadMore.className = data.btnReadMoreClass;
  btnReadMore.textContent = data.btnReadMore;

  cardWrapper.append(cardImg, cardTitle, cardDescr, btnReadMore);

  return cardWrapper;
};

// --> Navigation Bar Section Element Creation
const navBarContainer = cE("nav"); //// -------------------------------------------------------------> Body Append 1
const logoWrapper = cE("div");
const logoButton = cE("button");
const logo = cE("img");
const pageDirect = cE("div");
const homeBtn = cE("button");
const aboutBtn = cE("button");
const shopBtn = cE("button");
const pagesBtn = cE("button");
const contactBtn = cE("button");
const signUp = cE("div");
const signUpBtn = cE("button");
const orderNowBtn = cE("button");
// <-- END Navigation Bar Section Element Creation

// --> Hero Section Element Creation
const heroContainer = cE("div"); //// -------------------------------------------------------------> Body Append 2
const heroDescrWrapper = cE("div");
const heroTitle = cE("h1");
const heroDescr = cE("p");
const heroBtn = cE("button");
const heroImg = cE("img");
// <-- END Hero Section Element Creation

// --> 1st Block 3 Cards Section Element Creation
const firstTitleCardsSection = cE("div"); //// -------------------------------------------------------------> Body Append 3
const firstCardsTitle = cE("h2");
const firstCardsDescr = cE("p");
const firstCardsContainer = cE("div"); //// -------------------------------------------------------------> Body Append 4
// <-- END 1st Block 3 Cards Section Element Creation

// --> 1st Small hero section Element Creation
const fisrtSmallHeroContainer = cE("div"); //// -------------------------------------------------------------> Body Append 5
const fisrtSmallheroImg = cE("img");
const fisrtSmallheroDescrWrapper = cE("div");
const fisrtSmallheroTitle = cE("h1");
const fisrtSmallheroDescr = cE("p");
const fisrtSmallheroDescrTwo = cE("p");
const fisrtSmallheroBtn = cE("button");
// <-- END 1st Small hero section Element Creation

// --> Banner
const bannerContainer = cE("div"); //// -------------------------------------------------------------> Body Append 6
const bannerTitle = cE("h2");
// <-- END Banner

// --> 2nd Small Hero section Element Creation
const secondSmallHeroContainer = cE("div"); //// -------------------------------------------------------------> Body Append 7
const secondSmallheroDescrWrapper = cE("div");
const secondSmallheroTitle = cE("h1");
const secondSmallheroDescr = cE("p");
const secondSmallheroDescrTwo = cE("p");
const secondSmallheroBtn = cE("button");
const secondSmallheroImg = cE("img");
// <-- END 2nd Small Hero section Element Creation

// --> 2nd Block 3 Cards Section Element Creation
const secondTitleCardsSection = cE("div"); //// -------------------------------------------------------------> Body Append 8
const secondCardsTitle = cE("h2");
const secondCardsDescr = cE("p");
const secondCardsContainer = cE("div"); //// -------------------------------------------------------------> Body Append 9
// <-- END 2nd Block 3 Cards Section Element Creation

// --> Contact Us Form creation (trying to do everything in a single function)
const contactUsForm = () => {
  const container = cE("div");

  const infoContainer = cE("div");
  const title = cE("h2");
  const description = cE("p");

  const formContainer = cE("div");
  const firstName = cE("input");
  const lastName = cE("input");
  const email = cE("input");
  const subject = cE("input");
  const yourMessage = cE("input");
  const formBtn = cE("button");

  container.className = "form_container container";
  infoContainer.className = "form_info";
  title.textContent = "Contact Us";
  description.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde fuga accusantium, asperiores cum, commodi quo quae officiis libero quod esse consequuntur non hic tempora!";

  formContainer.className = "form_entry_wrapper";
  firstName.className = "first_name";
  firstName.type = "text";
  firstName.value = " First Name";

  lastName.className = "last_name";
  lastName.type = "text";
  lastName.value = " Last Name";

  email.className = "email";
  email.type = "text";
  email.value = " Email";

  subject.className = "subject";
  subject.type = "text";
  subject.value = " Subject";

  yourMessage.className = "your_message";
  yourMessage.type = "text";
  yourMessage.value = " Your Message...";

  formBtn.className = "form_btn";
  formBtn.textContent = "Submit";

  infoContainer.append(title, description);
  formContainer.append(
    firstName,
    lastName,
    email,
    subject,
    yourMessage,
    formBtn
  );

  container.append(infoContainer, formContainer);

  return container;
}; //// -------------------------------------------------------------> Body Append 10

// --> Footer Section
const footerGen = () => {
  const container = cE("div");

  const trademarkContainer = cE("div");
  const trademarkTitle = cE("h4");
  const trademarkDescr = cE("p");

  const companyContainer = cE("div");
  const companyTitle = cE("h4");
  const blog = cE("a");
  const aboutUs = cE("a");
  const download = cE("a");
  const hiring = cE("a");

  const partnerContainer = cE("div");
  const partnerTitle = cE("h4");
  const gifting = cE("a");
  const corpo = cE("a");
  const press = cE("a");

  const helpContainer = cE("div");
  const helpTitle = cE("h4");
  const contUs = cE("a");
  const ship = cE("a");
  const faq = cE("a");

  const newsLetterContainer = cE("div");
  const newsLetterTitle = cE("h4");
  const newsDescr = cE("p");
  const email = cE("input");

  container.className = "footer_section container";
  trademarkContainer.className = "trademark";
  trademarkTitle.textContent = "Gifty";
  trademarkDescr.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit officia dicta eaque non temporibus illum?";

  companyContainer.className = "company";
  companyTitle.textContent = "Company";
  blog.href = "/";
  aboutUs.href = "/";
  download.href = "/";
  hiring.href = "/";
  blog.textContent = "Blog";
  aboutUs.textContent = "About Us";
  download.textContent = "Download";
  hiring.textContent = "We're Hiring";

  partnerContainer.className = "partner";
  partnerTitle.textContent = "Partner";
  gifting.href = "/";
  corpo.href = "/";
  press.href = "/";
  gifting.textContent = "Sell On Gifting";
  corpo.textContent = "Corporate Gifting";
  press.textContent = "Press";

  helpContainer.className = "help";
  helpTitle.textContent = "Help";
  contUs.href = "/";
  contUs.textContent = "Contact Us";
  ship.href = "/";
  ship.textContent = "Shiping + Returns";
  faq.href = "/";
  faq.textContent = "FAQ";

  newsLetterContainer.className = "newsLetter";
  newsLetterTitle.textContent = "News Letter";
  newsDescr.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing.";
  email.type = "text";
  email.value = "Your Email...";

  trademarkContainer.append(trademarkTitle, trademarkDescr);
  companyContainer.append(companyTitle, blog, aboutUs, download, hiring);
  partnerContainer.append(partnerTitle, gifting, corpo, press);
  helpContainer.append(helpTitle, contUs, ship, faq);
  newsLetterContainer.append(newsLetterTitle, newsDescr, email);

  container.append(
    trademarkContainer,
    partnerContainer,
    helpContainer,
    newsLetterContainer
  );

  return container;
}; //// -------------------------------------------------------------> Body Append 11

// --> Navigation Bar Section classing and texting
navBarContainer.className = "nav_bar_container container";
logoWrapper.className = "logo_wrapper";
logoButton.className = "logo_button";
logo.src = "./Media/logo.svg";
logo.alt = "logo";
pageDirect.className = "page_direct";
homeBtn.textContent = "Home";
aboutBtn.textContent = "About";
shopBtn.textContent = "Shop";
pagesBtn.textContent = "Pages";
contactBtn.textContent = "Contact";
signUp.className = "sign_up";
signUpBtn.textContent = "Sign Up";
orderNowBtn.className = "order_now_button";
orderNowBtn.textContent = "Order Now";
// <-- END Navigation Bar Section classing and texting

// --> Hero Section classing and texting
heroContainer.className = "hero_container container";
heroDescrWrapper.className = "hero_descr_wrapper";
heroTitle.className = "main_title";
heroTitle.textContent = "Thoughtful Gifting Made Easy";
heroDescr.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rem.";
heroBtn.textContent = "Get Started";
heroImg.className = "hero_img";
heroImg.src = "./Media/hero_img.svg";
heroImg.alt = "hero";
// <-- END Hero Section classing and texting

// --> 1st Block 3 Cards Section classing and texting
firstTitleCardsSection.className = "title_cards_section";
firstCardsTitle.textContent = "Thoughtful Gifting Made Easy";
firstCardsDescr.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo eveniet eaque.";
firstCardsContainer.className = "cards_container container";
// <-- END 1st Block 3 Cards Section classing and texting

// --> 1st Small Hero Section classing and texting
fisrtSmallHeroContainer.className = "small_hero_container container";
fisrtSmallheroDescrWrapper.className = "hero_descr_wrapper";
fisrtSmallheroTitle.textContent = "Corporate Gifting";
fisrtSmallheroDescr.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut corporis quisquam dolorum tempore facere. Veritatis eveniet molestias necessitatibus sed!";
fisrtSmallheroDescrTwo.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, atque? Minima, numquam.";
fisrtSmallheroBtn.textContent = "Read More";
fisrtSmallheroImg.className = "hero_img";
fisrtSmallheroImg.src = "./Media/corpo_gifting.svg";
fisrtSmallheroImg.alt = "corporate";
// <-- END 1st Small Hero Section classing and texting

// --> Banner classing and texting
bannerContainer.className = "banner_container";
bannerTitle.textContent = "We're trusted by clients";
// <-- END Banner classing and texting

// --> 2nd Small Hero Section classing and texting
secondSmallHeroContainer.className = "small_hero_container container";
secondSmallheroDescrWrapper.className = "hero_descr_wrapper";
secondSmallheroTitle.textContent = "Personal Gifting";
secondSmallheroDescr.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut corporis quisquam dolorum tempore facere. Veritatis eveniet molestias necessitatibus sed!";
secondSmallheroDescrTwo.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, atque? Minima, numquam.";
secondSmallheroBtn.textContent = "Learn More";
secondSmallheroImg.className = "hero_img";
secondSmallheroImg.src = "./Media/personal_gifting.svg";
secondSmallheroImg.alt = "personal";
// <-- END 2nd Small Hero Section classing and texting

// --> 2nd Block 3 Cards Section classing and texting
secondTitleCardsSection.className = "title_cards_section";
secondCardsTitle.textContent = "Thoughtful Gifting Made Easy";
secondCardsDescr.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo eveniet eaque.";
secondCardsContainer.className = "cards_container container";
// <-- END 2nd Block 3 Cards Section classing and texting

// --> Navigation Bar Section appending (parent is navBarContainer)
navBarContainer.append(logoWrapper);
logoWrapper.append(logoButton);
logoButton.append(logo);
navBarContainer.append(pageDirect);
pageDirect.append(homeBtn, aboutBtn, shopBtn, pagesBtn, contactBtn);
navBarContainer.append(signUp);
signUp.append(signUpBtn, orderNowBtn);
document.body.append(navBarContainer);
// <-- END Navigation Bar Section appending

// --> Hero Section appending (parent is heroContainer)
heroDescrWrapper.append(heroTitle, heroDescr, heroBtn);
heroContainer.append(heroDescrWrapper, heroImg);
document.body.append(heroContainer);
// <-- END Hero Section appending

// --> 1st Block 3 Cards Section appending
firstTitleCardsSection.append(firstCardsTitle, firstCardsDescr);
document.body.append(firstTitleCardsSection);
document.body.append(firstCardsContainer);
firstArrayCards.forEach((cardData) => {
  const generatedCard = cardsGen(cardData);
  firstCardsContainer.append(generatedCard);
});
// <-- END 1st Block 3 Cards Section appending

// --> 1st Small Hero Section appending
fisrtSmallheroDescrWrapper.append(
  fisrtSmallheroTitle,
  fisrtSmallheroDescr,
  fisrtSmallheroDescr,
  fisrtSmallheroBtn
);
fisrtSmallHeroContainer.append(fisrtSmallheroImg, fisrtSmallheroDescrWrapper);
document.body.append(fisrtSmallHeroContainer);
// <-- END 1st Small Hero Section appending

// --> Banner appending
bannerContainer.append(bannerTitle);
document.body.append(bannerContainer);
// <-- END Banner appending

// --> 2nd Small Hero Section appending
secondSmallheroDescrWrapper.append(
  secondSmallheroTitle,
  secondSmallheroDescr,
  secondSmallheroDescr,
  secondSmallheroBtn
);
secondSmallHeroContainer.append(
  secondSmallheroDescrWrapper,
  secondSmallheroImg
);
document.body.append(secondSmallHeroContainer);
// <-- END 2nd Small Hero Section appending

// --> 2nd Block 3 Cards Section appending
secondTitleCardsSection.append(secondCardsTitle, secondCardsDescr);
document.body.append(secondTitleCardsSection);
document.body.append(secondCardsContainer);
secondArrayCards.forEach((cardData) => {
  const generatedCard = secondCardsGen(cardData);
  secondCardsContainer.append(generatedCard);
});
// <-- END 2nd Block 3 Cards Section appending

// --> 2nd Block 3 Cards Section appending
document.body.append(contactUsForm());
document.body.append(footerGen());
