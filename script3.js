// Додавання події натискання до вікна
window.addEventListener('click', function(event) {
    // Отримання елемента div з id "place"
    const placeDiv = document.getElementById('place');
    // Визначення чи клікнув користувач всередині div
    const clickedInside = placeDiv.contains(event.target);
    // Виведення результату у консоль
    console.log(clickedInside);
});
