const menu = document.getElementById("menu");
const list_menu = document.getElementById("liste_menu")
menu.addEventListener("click", function() {
    if (menu.classList.contains("close")) {
        menu.classList.remove("close");
        menu.classList.add("open");
        list_menu.classList.add("close");
    } else {
        menu.classList.remove("open");
        menu.classList.add("close");
        list_menu.classList.remove("close");
    }
})