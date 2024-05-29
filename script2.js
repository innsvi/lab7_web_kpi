//ЗАВДАННЯ 3

document.getElementById('toggleBtn').addEventListener('click', function() {
    const passwordField = document.getElementById('passwordField');
    const toggleBtn = document.getElementById('toggleBtn');

    if (passwordField.type === 'text') {
 
        passwordField.type = 'password';
        toggleBtn.textContent = 'Показати';
    } else {
        passwordField.type = 'text';
        toggleBtn.textContent = 'Сховати';
    }
});
