const burgir = document.querySelector(".toggle_menu");
const headernav = document.querySelector("ul.header_nav");
burgir.addEventListener("click", () => {
    headernav.classList.toggle("open");
})