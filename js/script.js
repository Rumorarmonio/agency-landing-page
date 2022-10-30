let navLinks = document.querySelectorAll(".nav_link");

navLinks.forEach((elem) =>
    elem.addEventListener("click", function () {
        navLinks.forEach((elem) => elem.classList.remove("nav_active"));
        this.classList.add("nav_active");
    })
);