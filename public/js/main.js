window.addEventListener("load", () => {
    const menuIcon = document.querySelectorAll(".menu-icon")[0];
    const menu = document.querySelectorAll(".menu")[0];
    const menuInp = document.querySelectorAll(".menu-btn")[0];
    const navLink = document.querySelectorAll(".menu li");

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("expanded");
    });
    
    navLink.forEach((link, key) => {
        link.addEventListener("click", () => {
            menuInp.checked = false;
            menu.classList.remove("expanded");
        });
    })
})