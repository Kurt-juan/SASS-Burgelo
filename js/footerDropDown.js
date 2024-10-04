const footerDrop = document.querySelectorAll(".footer_nav_item h4");
footerDrop.forEach((footer) => {
    footer.addEventListener(("click"),() => {
        footer.querySelector("i").classList.toggle("open");
        footer.nextElementSibling.classList.toggle("open");
    })
})