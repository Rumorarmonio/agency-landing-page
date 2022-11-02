let navLinks = document.querySelectorAll(".menu__link"),
    productLinks = document.querySelectorAll(".product-category");

navLinks.forEach((elem) =>
    elem.addEventListener("click", function () {
        navLinks.forEach((elem) => elem.classList.remove("menu__link_active"));
        this.classList.add("menu__link_active");
    })
);

productLinks.forEach((elem) =>
    elem.addEventListener("click", function () {
        productLinks.forEach((elem) => elem.classList.remove("product-category_active"));
        this.classList.add("product-category_active");
    })
);