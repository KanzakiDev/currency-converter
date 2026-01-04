const rates = {
    EUR: 10,
    USD: 20,
    GBP: 25,
    UAN: 41,
    PLN: 11
};

const amountimput = document.getElementById("amount");
const fromselect = document.getElementById("from");
const fromto = document.getElementById("to");
const convertbutton = document.getElementById("convert");
const resultText = document.getElementById("result");


convertbutton.addEventListener("click", () => {
    convertfunc();
});

function convertfunc() {
    const amountnumbres = parseFloat(amountimput.value);
    const from = fromselect.value;
    const to = fromto.value;
    
    if (isNaN(amountnumbres) || amountnumbres <= 0) {
        alert("Please enter a valid amount greater than zero.");
        return;
    }
    result = amount * rates[to] / rates[from];

    resultText.textContent = `Result: ${result.toFixed(2)} ${to}`;
}