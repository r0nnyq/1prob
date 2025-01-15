const burgerMenu = document.getElementById("burgerMenu");
const navList = document.querySelector(".nav-list");

burgerMenu.addEventListener("click", function() {
    navList.classList.toggle("active"); 
});

document.addEventListener("click", function(event) {
    if (!navList.contains(event.target) && !burgerMenu.contains(event.target)) {
        navList.classList.remove("active");
    }
});