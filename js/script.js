const incomeAmount = document.getElementById("income-amount");
const foodAmount = document.getElementById("food-amount");
const rentAmount = document.getElementById("rent-amount");
const clothesAmount = document.getElementById("clothes-amount");
const totalExpenses = document.getElementById("total-expenses");
const totalBalance = document.getElementById("total-balance");
const percentageAmount = document.getElementById("percentage-amount");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");


// expenses balance
function expensesBalance(food, rent, clothes) {
    if (isNaN(food) || isNaN(rent) || isNaN(clothes) || food < 0 || rent < 0 || clothes < 0) {
        return alert("Please input valid amount of money in positive number format")
    }
    const total = food + rent + clothes;
    return total;
}

// updateBalance
function updateBalance(balance, amount) {
    if (amount > balance) {
        return alert("You do not have sufficent amount")
    }
    const balanceAmount = balance - amount
    return balanceAmount;

}

// alert error massage
function alertMassage(inputAmount) {
    if (isNaN(inputAmount) || inputAmount < 0 || inputAmount === "") {
        return alert("Please input valid amount of money in positive number format")

    }
}

// Calculate balance
function CalculateBalance() {
    const expenses = expensesBalance(parseFloat(foodAmount.value), parseFloat(rentAmount.value), parseFloat(clothesAmount.value));
    totalExpenses.innerText = expenses;
    const updateAmount = updateBalance(parseFloat(incomeAmount.value), parseFloat(totalExpenses.innerText));
    totalBalance.innerText = updateAmount;
    alertMassage(incomeAmount.value);
}

// saving money
function savingMoney() {
    const percentage = parseFloat(percentageAmount.value);
    const saving = (incomeAmount.value * percentage) / 100;
    savingAmount.innerText = saving;
    const remaining = updateBalance(parseFloat(totalBalance.innerText), parseFloat(savingAmount.innerText));
    remainingBalance.innerText = remaining;
    alertMassage(percentageAmount.value);

}