/* BURGERMENU */

// Finder knapperne og menuen i HTML
const burgerKnap = document.querySelector("#burger-knap");
const lukMenu = document.querySelector("#luk-menu");
const mobilMenu = document.querySelector("#mobil-menu");
const menuLinks = document.querySelectorAll(".mobil-links a");

// Åbner burgermenuen
burgerKnap.addEventListener("click", function () {
  mobilMenu.classList.add("aktiv");
  burgerKnap.setAttribute("aria-expanded", "true");
});

// Lukker burgermenuen
lukMenu.addEventListener("click", function () {
  mobilMenu.classList.remove("aktiv");
  burgerKnap.setAttribute("aria-expanded", "false");
});

// Lukker menuen når man klikker på et link
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobilMenu.classList.remove("aktiv");
    burgerKnap.setAttribute("aria-expanded", "false");
  });
});
