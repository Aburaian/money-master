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
    if (food < 0 || rent < 0 || clothes < 0) {
        foodAmount.value = ""
        rentAmount.value = ""
        clothesAmount.value = ""
        return alert('Please input valid amount of money in number format')
    }
    const total = food + rent + clothes;
    return total;
}

// updateBalance
function updateBalance(balance, amount) {
    const balanceAmount = balance - amount
    return balanceAmount;

}


// Calculate balance
function CalculateBalance() {
    const expenses = expensesBalance(parseFloat(foodAmount.value), parseFloat(rentAmount.value), parseFloat(clothesAmount.value));
    totalExpenses.innerText = expenses;
    const updateAmount = updateBalance(parseFloat(incomeAmount.value), parseFloat(totalExpenses.innerText));
    totalBalance.innerText = updateAmount;
    incomeAmount.value = "";
    foodAmount.value = "";
    rentAmount.value = "";
    clothesAmount.value = "";
}

function savingMoney() {
    const percentage = parseFloat(percentageAmount.value);
    const saving = (totalBalance.innerText * percentage) / 100;
    savingAmount.innerText = saving;
    const remaining = updateBalance(parseFloat(totalBalance.innerText), parseFloat(savingAmount.innerText));
    remainingBalance.innerText = remaining;
    // enoughAmountMassage(savingAmount.innerText, totalBalance.innerText)
    alertMassage(percentageAmount.value);
    percentageAmount.value = ""


}

/* // enough amount error massage
function enoughAmountMassage(availableAmount, availableBalance) {
    if (availableAmount > availableBalance) {
        return alert("You do not have sufficent amount")
    }
} */

/* // alert error massage
function alertMassage(inputAmount) {
    if (inputAmount < 0) {
        inputAmount.value = "";
        return alert('Please input valid amount of money in number format')

    }

} */