const quotes = [
    "Єдина межа наших досягнень завтра – це наші сумніви сьогодні. — Франклін Д. Рузвельт",
    "Успіх – це вміння рухатися від невдачі до невдачі, не втрачаючи ентузіазму. — Вінстон Черчилль",
    "Справжня сила не в тому, щоб ніколи не падати, а в тому, щоб щоразу вставати. — Нельсон Мандела",
    "Знання — це сила. — Френсіс Бекон",
    "Життя — це те, що відбувається з вами, поки ви будуєте плани. — Джон Леннон"
];

function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = randomQuote;
    } else {
        console.error("Елемент з id 'quote' не знайдено.");
    }
}

document.addEventListener("DOMContentLoaded", displayRandomQuote);
