const rates = {
    EUR: 10,
    USD: 20,
    GBP: 25,
    UAH: 41,
    PLN: 11
};

const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const convertButton = document.getElementById("convert");
const resultText = document.getElementById("result");


convertButton.addEventListener("click", () => {
    convertFunc();
});

function convertFunc() {
    const amountNumbers = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;
    
    if (isNaN(amountNumbers) || amountNumbers <= 0) {
        alert("Please enter a valid amount greater than zero.");
        return;
    }
    const result = amountNumbers * rates[to] / rates[from];

    resultText.textContent = `Result: ${result.toFixed(2)} ${to}`;
} 