// Получаем элементы
const burgerMenu = document.getElementById("burgerMenu");
const navList = document.querySelector(".nav-list");

// Добавляем обработчик клика на бургер-меню
burgerMenu.addEventListener("click", function() {
    navList.classList.toggle("active"); // Активируем/деактивируем меню
});

// Добавляем обработчик клика по пустому месту
document.addEventListener("click", function(event) {
    // Если клик был вне бургер-меню и меню, то скрываем меню
    if (!navList.contains(event.target) && !burgerMenu.contains(event.target)) {
        navList.classList.remove("active");
    }
});