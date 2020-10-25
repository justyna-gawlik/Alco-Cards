let myArray = [
  "images/card1.jpg",
  "images/card2.jpg",
  "images/card3.jpg",
  "images/card4.jpg",
  "images/card5.jpg",
  "images/card6.jpg",
  "images/card7.jpg",
  "images/card8.jpg",
  "images/card9.jpg",
  "images/card10.jpg",
  "images/card11.jpg",
  "images/card12.jpg",
  "images/card13.jpg",
  "images/card14.jpg",
  "images/card15.jpg",
  "images/card16.jpg",
  "images/card17.jpg",
  "images/card18.jpg",
  "images/card19.jpg",
  "images/card20.jpg",
  "images/card21.jpg",
  "images/card22.jpg",
  "images/card23.jpg",
  "images/card24.jpg",
  "images/card25.jpg",
  "images/card26.jpg",
  "images/card27.jpg",
  "images/card28.jpg",
  "images/card29.jpg",
  "images/card30.jpg",
  "images/card31.jpg",
  "images/card32.jpg",
  "images/card33.jpg",
  "images/card34.jpg",
  "images/card35.jpg",
  "images/card36.jpg",
  "images/card37.jpg",
  "images/card38.jpg",
  "images/card39.jpg",
  "images/card40.jpg",
  "images/card41.jpg",
  "images/card42.jpg",
  "images/card43.jpg",
  "images/card44.jpg",
  "images/card45.jpg",
  "images/card46.jpg",
  "images/card47.jpg",
  "images/card48.jpg",
  "images/card49.jpg",
  "images/card50.jpg",
  "images/card51.jpg",
  "images/card52.jpg"
];

let usedImages = {};
let usedImagesCount = 0;
let enShowRule = document.getElementById("enShowRule");
let plShowRule = document.getElementById("plShowRule");
enShowRule.innerHTML = "Click 🃏 to start!";
plShowRule.innerHTML = "Kliknij 🃏 by rozpocząć!";
enShowRule.setAttribute("id", "en");
plShowRule.setAttribute("id", "pl");
let img = document.querySelector("img");

img.addEventListener("click", function displayImage() {
  img.classList.remove("pulse");

  let number = Math.floor(Math.random() * myArray.length);

  if (!usedImages[number]) {
    img.src = myArray[number];
    usedImages[number] = true;
    usedImagesCount++;

    setTimeout(function () {
      if (
        myArray[number] === "images/card1.jpg" ||
        myArray[number] === "images/card14.jpg" ||
        myArray[number] === "images/card27.jpg" ||
        myArray[number] === "images/card40.jpg"
      ) {
        enShowRule.innerText = "Whoever makes eye contact with you, drinks! 👀";
        plShowRule.innerText =
          "Nie można patrzeć Ci w oczy. Każdy kto to zrobi pije! 👀";
      } else if (
        myArray[number] === "images/card2.jpg" ||
        myArray[number] === "images/card15.jpg" ||
        myArray[number] === "images/card28.jpg" ||
        myArray[number] === "images/card41.jpg"
      ) {
        enShowRule.innerText = "You choose who drinks 🍺";
        plShowRule.innerText = "Wybierz osobę, która pije 🍺";
      } else if (
        myArray[number] === "images/card3.jpg" ||
        myArray[number] === "images/card16.jpg" ||
        myArray[number] === "images/card29.jpg" ||
        myArray[number] === "images/card42.jpg"
      ) {
        enShowRule.innerText =
          "Bottoms up! 🔥 Everyone start to drink with you. Drink as long as you can. Others can only stop once the person on their left does.";
        plShowRule.innerText =
          "Hejnał! Wszyscy zaczynacie pić w tym samym momencie. Pij jak najdłużej, inni mogą przestać dopiero gdy osoba po ich lewej przestanie.🔥";
      } else if (
        myArray[number] === "images/card4.jpg" ||
        myArray[number] === "images/card17.jpg" ||
        myArray[number] === "images/card30.jpg" ||
        myArray[number] === "images/card43.jpg"
      ) {
        enShowRule.innerText =
          "Hands up! ✋ The last person to put their hands up- drinks!";
        plShowRule.innerText = "Ręka do góry! ✋ Kto jest ostatni ten pije!";
      } else if (
        myArray[number] === "images/card5.jpg" ||
        myArray[number] === "images/card18.jpg" ||
        myArray[number] === "images/card31.jpg" ||
        myArray[number] === "images/card44.jpg"
      ) {
        enShowRule.innerText = "The person on the right is drinking 👉";
        plShowRule.innerText = "Osoba po prawej pije 👉";
      } else if (
        myArray[number] === "images/card6.jpg" ||
        myArray[number] === "images/card19.jpg" ||
        myArray[number] === "images/card32.jpg" ||
        myArray[number] === "images/card45.jpg"
      ) {
        enShowRule.innerText = "The person on the left is drinking 👈";
        plShowRule.innerText = "Osoba po lewej pije👈";
      } else if (
        myArray[number] === "images/card7.jpg" ||
        myArray[number] === "images/card20.jpg" ||
        myArray[number] === "images/card33.jpg" ||
        myArray[number] === "images/card46.jpg"
      ) {
        enShowRule.innerText =
          "Make up the drinking rule!💡 Whoever messes up - drinks!";
        plShowRule.innerText =
          "Ustalasz nową zasadę do picia💡 Dobrze się zastanów. Kto nie będzie jej przestrzegał ten pije!";
      } else if (
        myArray[number] === "images/card8.jpg" ||
        myArray[number] === "images/card21.jpg" ||
        myArray[number] === "images/card34.jpg" ||
        myArray[number] === "images/card47.jpg"
      ) {
        enShowRule.innerText =
          "Noone can answer your questions. Whoever answers you, drinks!☝️ ";
        plShowRule.innerText =
          "Nie można odpowiadać Ci na pytania! Każdy kto odpowie Ci na pytanie pije ☝️ ";
      } else if (
        myArray[number] === "images/card9.jpg" ||
        myArray[number] === "images/card22.jpg" ||
        myArray[number] === "images/card35.jpg" ||
        myArray[number] === "images/card48.jpg"
      ) {
        enShowRule.innerText =
          "Freeze! 🥶 Nobody move! Whoever makes a move - drinks.";
        plShowRule.innerText =
          "Freeze! 🥶 Gdy to powiesz, nikt nie może się ruszyć. Ktokolwiek się poruszy pije!";
      } else if (
        myArray[number] === "images/card10.jpg" ||
        myArray[number] === "images/card23.jpg" ||
        myArray[number] === "images/card36.jpg" ||
        myArray[number] === "images/card49.jpg"
      ) {
        enShowRule.innerText =
          "Cover your drink!  🖐️ ➕ 🥤 = 👌 Last person to do so, drinks!";
        plShowRule.innerText =
          "Kciuk! Zakryj butelkę ręką 🖐️ ➕ 🥤 = 👌 Kto jest ostatni ten pije!";
      } else if (
        myArray[number] === "images/card11.jpg" ||
        myArray[number] === "images/card24.jpg" ||
        myArray[number] === "images/card37.jpg" ||
        myArray[number] === "images/card50.jpg"
      ) {
        enShowRule.innerText =
          " Choose your drinking buddy! They drink whenever you do💕";
        plShowRule.innerText =
          "Wybierz partnera do picia, który będzie pił zawsze wtedy, kiedy Ty💕";
      } else if (
        myArray[number] === "images/card12.jpg" ||
        myArray[number] === "images/card25.jpg" ||
        myArray[number] === "images/card38.jpg" ||
        myArray[number] === "images/card51.jpg"
      ) {
        enShowRule.innerText = "Ladies drink!👸";
        plShowRule.innerText = "Panie piją!👸";
      } else if (
        myArray[number] === "images/card13.jpg" ||
        myArray[number] === "images/card26.jpg" ||
        myArray[number] === "images/card39.jpg" ||
        myArray[number] === "images/card52.jpg"
      ) {
        enShowRule.innerText = "Men drink!🤴";
        plShowRule.innerText = "Panowie piją!🤴";
      } else {
        console.log("error");
      }
    }, 200);
    void img.offsetWidth;
    img.classList.add("pulse");

    if (usedImagesCount === myArray.length) {
      alert("Do you want to play again? 🙈");
      usedImagesCount = 0;
      usedImages = {};
    }
  } else {
    displayImage();
  }
});

let polish = document.getElementById("pl_click"),
  english = document.getElementById("en_click"),
  pl_txt = document.querySelectorAll("#pl"),
  en_txt = document.querySelectorAll("#en"),
  ln_pl = pl_txt.length,
  ln_en = en_txt.length;

polish.addEventListener(
  "click",
  function () {
    language(polish, english);
  },
  false
);

english.addEventListener(
  "click",
  function () {
    language(english, polish);
  },
  false
);

function language(languageOn, languageOff) {
  if (!languageOn.classList.contains("current_lang")) {
    languageOn.classList.toggle("current_lang");
    languageOff.classList.toggle("current_lang");
  }
  if (languageOn.innerHTML === "Pl") {
    show(pl_txt, ln_pl);
    hide(en_txt, ln_en);
  } else if (languageOn.innerHTML === "En") {
    show(en_txt, ln_en);
    hide(pl_txt, ln_pl);
  }
}

function show(txt, ln) {
  for (let i = 0; i < ln; i++) {
    txt[i].style.display = "block";
  }
}

function hide(txt, ln) {
  for (let i = 0; i < ln; i++) {
    txt[i].style.display = "none";
  }
}

function init() {
  language(polish, english);
}
init();
