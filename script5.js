// Функція для генерації випадкового кольору у форматі hex
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Додавання події натискання до кнопки "Change color"
document.querySelector('.change-color').addEventListener('click', function() {
    // Генерація випадкового кольору
    const randomColor = getRandomHexColor();
    // Зміна кольору фону body
    document.body.style.backgroundColor = randomColor;
    // Зміна текстового вмісту span.color
    document.querySelector('.color').textContent = randomColor;
});
