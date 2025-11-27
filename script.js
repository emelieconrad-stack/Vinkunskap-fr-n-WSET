function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'Rätt') {
        result.textContent = "Rätt! Cabernet Sauvignon är en vanlig druva i rött vin.";
        result.style.color = 'green';
    } else {
        result.textContent = "Fel. Prova igen!";
        result.style.color = 'red';
    }
}
