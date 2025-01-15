document.getElementById('buttonLink').addEventListener('click', function(e) {
    e.preventDefault();  // Останавливаем переход по ссылке

    const button = this.querySelector('button');
    
    // Убираем стандартное поведение и даём время на анимацию
    button.classList.add('clicked');  // Добавим временный класс, чтобы показать сообщение

    // Через 1 секунду (время анимации) разрешаем переход по ссылке
    setTimeout(() => {
        window.location.href = this.getAttribute('href');
    }, 3000);  // Задержка 1 секунда (1000 миллисекунд)
});