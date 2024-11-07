function startClock() {
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const timeStr = `${hours}%${minutes}%${seconds}`;
    
    const dateStr = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;

    document.getElementById("clock").textContent = `Час: ${timeStr}`;
    document.getElementById("calendar").textContent = `Дата: ${dateStr}`;
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Ділення на нуль!';
            break;
    }
    
    document.getElementById("result").textContent = result;
}
