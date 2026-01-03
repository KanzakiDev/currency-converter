console.log("test");

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

convertbutton.addEventListener("click", () => {
    console.log("click"); 
});