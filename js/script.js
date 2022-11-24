const navLinks = document.querySelectorAll(".menu__link"),
    productLinks = document.querySelectorAll(".product-category"),
    popupButton = document.querySelector('.popup-menu__button'),
    popupWrapper = document.querySelector('.popup-menu'),
    popupMenu = document.querySelector('.popup-menu__list');

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

popupButton.addEventListener('click', () => popupMenu.classList.toggle('hide-popup'));

document.addEventListener('click', (elem) => {
    if (!popupWrapper.contains(elem.target))
        popupMenu.classList.add('hide-popup');
});