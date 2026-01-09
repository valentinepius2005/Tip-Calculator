const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const roundingSelect = document.getElementById("rounding");

const tipValue = document.getElementById("tipValue");
const tipAmount = document.getElementById("tipAmount");
const totalBill = document.getElementById("totalBill");
const perPerson = document.getElementById("perPerson");

function formatCurrency(value) {
    return `₹${value.toFixed(2)}`;
}

function roundAmount(value, roundTo) {
    if (roundTo === 0) return value;
    return Math.ceil(value / roundTo) * roundTo;
}

function calculate() {
    const bill = Number(billInput.value);
    const tipPercent = Number(tipInput.value);
    const people = Math.max(Number(peopleInput.value), 1);
    const rounding = Number(roundingSelect.value);

    tipValue.textContent = `${tipPercent}%`;

    if (bill <= 0) {
        tipAmount.textContent = "₹0.00";
        totalBill.textContent = "₹0.00";
        perPerson.textContent = "₹0.00";
        return;
    }

    const tip = bill * (tipPercent / 100);
    const total = bill + tip;
    const perHead = roundAmount(total / people, rounding);

    tipAmount.textContent = formatCurrency(tip);
    totalBill.textContent = formatCurrency(total);
    perPerson.textContent = formatCurrency(perHead);
}

billInput.addEventListener("input", calculate);
tipInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);
roundingSelect.addEventListener("change", calculate);

calculate();
