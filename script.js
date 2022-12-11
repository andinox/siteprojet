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


const arrowl = document.getElementById("arrowl");
const arrowr = document.getElementById("arrowr");
arrowl.addEventListener("click", function() {
    if (arrowr.classList.contains("none")) {
        arrowr.classList.remove("none")
    }
    all_slide = document.querySelectorAll(".slide");
    let buffer;
    all_slide.forEach(element => {
        if (element.classList.contains("slided") && buffer !=  null) {
            element.classList.remove("slided");
            element.classList.add("right");
            buffer.classList.add("slided");
            buffer.classList.remove("left");
            buffer.classList.remove("right");
            buffer = null;
        }
        buffer = element;
    });

    one = document.querySelector(".one");
    if (one.classList.contains("slided")) {
        arrowl.classList.add("none");
    }
})

arrowr.addEventListener("click", function() {
    if (arrowl.classList.contains("none")) {
        arrowl.classList.remove("none")
    }
    all_slide = document.querySelectorAll(".slide");
    let buffer;
    all_slide.forEach(element => {
        if (buffer == 1) {
            element.classList.add("slided")
            element.classList.remove("left");
            element.classList.remove("right");
            buffer = null;
        }
        if (element.classList.contains("slided") && buffer === undefined) {
            element.classList.remove("slided");
            element.classList.add("left");
            buffer = 1;
        }
    });

    five = document.querySelector(".five");
    if (five.classList.contains("slided")) {
        arrowr.classList.add("none");
    }
})



window.onload = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const connected = urlParams.get('connected')
    if (connected == null) {
        location.href = "?connected=false"
    } else if (connected == 'true') {
        document.getElementsByClassName("connexion")[0].classList.remove("child_none");
    }
}

