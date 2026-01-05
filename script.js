let rates = {};

const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const convertButton = document.getElementById("convert");
const resultText = document.getElementById("result");

const input = document.getElementById("apiKey");

document.getElementById("saveKey").onclick = () => {
  const key = input.value.trim();

  if (!key.startsWith("fca_")) {
    alert("This does not look like a freecurrencyapi key");
    return;
  }

  localStorage.setItem("API_KEY", key);
  alert("API key saved");
  fetchRates();
};

async function fetchRates() {
    const apiKey = localStorage.getItem("API_KEY");
    
    if (!apiKey) {
        alert("Please save your API key first");
        return;
    }

    try {
        const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`);
        const data = await response.json();
        
        if (data.data) {
            rates = data.data;
            rates.USD = 1;
            resultText.textContent = "Exchange rates updated successfully!";
        } else {
            alert("Failed to fetch rates. Please check your API key.");
        }
    } catch (error) {
        alert("Error fetching exchange rates: " + error.message);
    }
}

convertButton.addEventListener("click", () => {
    convertFunc();
});

async function convertFunc() {
    const amountNumbers = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;
    
    if (isNaN(amountNumbers) || amountNumbers <= 0) {
        alert("Please enter a valid amount greater than zero.");
        return;
    }

    if (Object.keys(rates).length === 0) {
        await fetchRates();
        if (Object.keys(rates).length === 0) {
            return;
        }
    }
    
    if (!rates[from]) {
        alert(`Currency ${from} not found in rates. Available: ${Object.keys(rates).join(', ')}`);
        return;
    }
    
    if (!rates[to]) {
        alert(`Currency ${to} not found in rates. Available: ${Object.keys(rates).join(', ')}`);
        return;
    }
    
    const result = amountNumbers * rates[to] / rates[from];

    resultText.textContent = `Result: ${result.toFixed(2)} ${to}`;
}

if (localStorage.getItem("API_KEY")) {
    fetchRates();
} 