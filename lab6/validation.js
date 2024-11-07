
function validateForm() {
    const name = document.getElementById('name').value;
    const namePattern = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+$/;
    if (!namePattern.test(name)) {
        alert("Поле 'Ім'я' повинно містити лише літери українського або англійського алфавіту.");
        return false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Поле 'Електронна пошта' має невірний формат.");
        return false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9+\-()\s]+$/;
    if (!phonePattern.test(phone)) {
        alert("Поле 'Телефон' повинно містити лише цифри, пробіли, '+', '-', '(', ')'.");
        return false;
    }

    return true;
}

function updateMessageLength() {
    const message = document.getElementById('message').value;
    document.getElementById('message-length').textContent = "Довжина повідомлення: " + message.length + " символів.";
}
