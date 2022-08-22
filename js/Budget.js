function getInputElementById(InputElementId) {
    const perPlayerField = document.getElementById(InputElementId);
    const perPlayerFieldString = perPlayerField.value;
    const newPerPlayer = parseFloat(perPlayerFieldString);
    perPlayerField.value = '';
    return newPerPlayer;
}

function getElementById(elementId, value) {
    const newTotalExpensesAmount = document.getElementById(elementId);
    const newTotalExpensesAmountString = newTotalExpensesAmount.innerText;
    const newExpensesTotal = parseFloat(newTotalExpensesAmountString);
    newTotalExpensesAmount.innerText = value;
    return newExpensesTotal;
}



document.getElementById('calculate-btn').addEventListener('click', function () {

    const newPerPlayer = getInputElementById('per-player-field');
    const totalPlayerExpenses = newPerPlayer * 5;
    const currentTotalExpensesAmount = getElementById('Expenses-amount', totalPlayerExpenses);

})