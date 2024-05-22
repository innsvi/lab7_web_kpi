// Додавання події натискання до кнопки "Приховати/Показати"
document.getElementById('toggleBtn').addEventListener('click', function() {
    const passwordField = document.getElementById('passwordField');
    const toggleBtn = document.getElementById('toggleBtn');

    if (passwordField.type === 'text') {
        // Зміна типу інпуту на password для приховування пароля
        passwordField.type = 'password';
        // Зміна тексту кнопки на "Показати"
        toggleBtn.textContent = 'Показати';
    } else {
        // Зміна типу інпуту на text для відображення пароля
        passwordField.type = 'text';
        // Зміна тексту кнопки на "Сховати"
        toggleBtn.textContent = 'Сховати';
    }
});
