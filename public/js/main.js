window.addEventListener("load", () => {
    const menuIcon = document.querySelectorAll(".menu-icon")[0];
    const menu = document.querySelectorAll(".menu")[0];

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("expanded");
    })
})