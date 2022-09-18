"use strict";

let burgerBtn = document.querySelector(".bmenu_cont").firstElementChild;

let NavBar = document.querySelector("nav");

let contactBtn = document.querySelector(".cBtnContainer").firstElementChild;

let teamBtn = document.querySelector(
  ".tabs_cont_button_first"
).firstElementChild;
let familyBtn = document.querySelector(
  ".tabs_cont_button_second"
).firstElementChild;
let coupleBtn = document.querySelector(
  ".tabs_cont_button_third"
).firstElementChild;

let cardImgFirst = document.querySelector(".card_pic_first");

let cardImgSecond = document.querySelector(".card_pic_second");

let cardImgThird = document.querySelector(".card_pic_third");

let cardPlaceNameFirst = document.querySelector(".place_name1");

let cardPlaceNameSecond = document.querySelector(".place_name2");

let cardPlaceNameThird = document.querySelector(".place_name3");

let price1 = document.querySelector(".price1");
let price2 = document.querySelector(".price2");
let price3 = document.querySelector(".price3");

let day1 = document.querySelector(".days1");
let day2 = document.querySelector(".days2");
let day3 = document.querySelector(".days3");

let span_about_person1 = document.querySelector(".span_about_person1");
let span_about_person2 = document.querySelector(".span_about_person2");
let span_about_person3 = document.querySelector(".span_about_person3");

let burgerPanel = document.createElement("div");
let closeBMenuX = document.createElement("i");

let burgerMenuNav = NavBar.cloneNode(true);
let burgerMenuContactBtn = contactBtn.cloneNode(true);

closeBMenuX.setAttribute("class", "fa-solid fa-xmark");

teamBtn.addEventListener("click", function (e) {
  cardImgFirst.setAttribute(
    "src",
    "img/section_first/section_first_picture(1).png"
  );

  cardImgSecond.setAttribute(
    "src",
    "img/section_first/section_first_picture(2).png"
  );

  cardImgThird.setAttribute(
    "src",
    "img/section_first/section_first_picture(3).png"
  );

  cardPlaceNameFirst.innerText = "Loga Sea";
  price1.innerText = "700$";
  day1.innerText = "3 Days, 3 Nights";
  span_about_person1.innerText = "/Person";

  cardPlaceNameSecond.innerText = "Ansgar Scheffold";
  price2.innerText = "400$";
  day2.innerText = "4 Days, 3 Nights";
  span_about_person2.innerText = "/Person";

  cardPlaceNameThird.innerText = "Lona X";
  price3.innerText = "340$";
  day3.innerText = "7 Days, 6 Nights";
  span_about_person3.innerText = "/Person";
});

familyBtn.addEventListener("click", function (e) {
  cardImgFirst.setAttribute("src", "img/section_first/eiffel-tower.jpg");
  cardImgFirst.style.cssText = "border-radius: 50px;";

  cardImgSecond.setAttribute("src", "img/section_first/colosseum.jpg");
  cardImgSecond.style.cssText = "border-radius: 50px;";

  cardImgThird.setAttribute("src", "img/section_first/cuba.jpeg");
  cardImgThird.style.cssText = "border-radius: 50px;";

  cardPlaceNameFirst.innerText = "Paris";
  price1.innerText = "1650$";
  day1.innerText = "6 Days, 5 Nights";
  span_about_person1.innerText = "/Family";

  cardPlaceNameSecond.innerText = "Colosseum";
  price2.innerText = "1430$";
  day2.innerText = "4 Days, 4 Nights";
  span_about_person2.innerText = "/Family";

  cardPlaceNameThird.innerText = "Cuba";
  price3.innerText = "1800$";
  day3.innerText = "8 Days, 7 Nights";
  span_about_person3.innerText = "/Family";
});

coupleBtn.addEventListener("click", function (e) {
  cardImgFirst.setAttribute("src", "img/section_first/bigben.jpg");
  cardImgFirst.style.cssText = "border-radius: 50px;";

  cardImgSecond.setAttribute("src", "img/section_first/Greece.jpg");
  cardImgSecond.style.cssText = "border-radius: 50px;";

  cardImgThird.setAttribute("src", "img/section_first/rialto-bridge.jpg");
  cardImgThird.style.cssText = "border-radius: 50px;";

  cardPlaceNameFirst.innerText = "London";
  price1.innerText = "1500$";
  day1.innerText = "7 Days, 6 Nights";
  span_about_person1.innerText = "/Couple";

  cardPlaceNameSecond.innerText = "Greece";
  price2.innerText = "800$";
  day2.innerText = "5 Days, 3 Nights";
  span_about_person2.innerText = "/Couple";

  cardPlaceNameThird.innerText = "Rialto";
  price3.innerText = "500$";
  day3.innerText = "3 Days, 2 Nights";
  span_about_person3.innerText = "/Couple";
});

burgerBtn.addEventListener("click", function (e) {
  burgerPanel.classList.add("burger_panel");

  document.querySelector(".bmenu_panel_cont").appendChild(burgerPanel);

  burgerPanel.append(burgerMenuNav, burgerMenuContactBtn);

  e.target.remove();

  document.querySelector(".bmenu_cont").appendChild(closeBMenuX);

  closeBMenuX.addEventListener("click", function (e) {
    e.target.remove();
    document.querySelector(".bmenu_cont").appendChild(burgerBtn);
    burgerPanel.remove();
  });

  window.addEventListener("resize", function () {
    burgerPanel.remove();

    closeBMenuX.remove();
    document.querySelector(".bmenu_cont").appendChild(burgerBtn);
    burgerPanel.remove();
  });
});
