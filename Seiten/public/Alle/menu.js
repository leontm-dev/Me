// Elemente
const menu = document.getElementById("menu");
const menuItem1 = document.getElementById("menu-item-1");
const menuItem2 = document.getElementById("menu-item-2");
const menuItem3 = document.getElementById("menu-item-3");
const menuItem4= document.getElementById("menu-item-4");
const menuItem5 = document.getElementById("menu-item-5");
const menuClose = document.getElementById("menu-close");
const menuButton = document.getElementById("menu-button");
const MAINURL = "http://localhost:2000";
// Funktionen
function openMenu() {
    menuButton.classList.add("hide");
    menu.classList.remove("hide");
    menuClose.classList.remove("hide");
    menuItem1.classList.remove("hide");
    menuItem2.classList.remove("hide");
    menuItem3.classList.remove("hide");
    menuItem4.classList.remove("hide");
    menuItem5.classList.remove("hide");
};
function closeMenu() {
    menuClose.classList.add("hide");
    menuItem1.classList.add("hide");
    menuItem2.classList.add("hide");
    menuItem3.classList.add("hide");
    menuItem4.classList.add("hide");
    menuItem5.classList.add("hide");
    menu.classList.add("out");
    menuButton.classList.remove("hide");
    setTimeout(() => {
        menu.classList.add("hide");
        menu.classList.remove("out");
    }, 2000)
};
function openMenuHome() {
    window.location.href = MAINURL;
};
function openMenuRegister() {
    window.location.href = `${MAINURL}/account/register`;
};
function openMenuGames() {
    window.location.href = `${MAINURL}/games`;
};
function openMenuImprint() {
    window.location.href = `${MAINURL}/imprint`;
};
function openMenuDatenschutz() {
    window.location.href = `${MAINURL}/datenschutz`;
};