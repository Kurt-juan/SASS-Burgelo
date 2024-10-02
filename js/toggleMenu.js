const burgir = document.querySelector(".toggle_menu");
const headernav = document.querySelector("ul.header_nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    headernav.classList.toggle("open");
})