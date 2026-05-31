// const navbar = document.querySelector(".navbar");
// const logo = document.querySelector(".logo");
// const log_icon = document.querySelector(".log_icon");
// const log_text = document.querySelector(".log_text");
// const mobile = document.querySelector(".mobile");
const mob_togl = document.querySelector("#mob_togl");
const nav_ul = document.querySelector("#nav_ul");
const nav_links = document.querySelectorAll(".nav_link:not(.contact)");

mob_togl.addEventListener("click", () => {
    mob_togl.classList.toggle("active");
    nav_ul.classList.toggle("active");
});

nav_links.forEach(link => {
    link.addEventListener("click", (e) => {

        e.preventDefault();

        //remove active class from all links
        nav_links.forEach(l => l.classList.remove("active"));

        // Add active class clicked link
        link.classList.add("active");

        // Close mobile menu if open
        if(nav_ul.classList.contains("active")) {
            mob_togl.classList.remove("active");
            nav_ul.classList.remove("active");
        }
    })
})