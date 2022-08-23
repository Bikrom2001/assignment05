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


// Player Expenses
document.getElementById('calculate-btn').addEventListener('click', function () {

    // const arrayNumbers = addCard();
    const select = document.getElementById('selected-values');
    const selectString = select.innerText;
    const newSelect = parseFloat(selectString);

    const newPerPlayer = getInputElementById('per-player-field');
    const totalPlayerExpenses = newPerPlayer * newSelect;
    const currentTotalExpensesAmount = getElementById('Expenses-amount', totalPlayerExpenses);

})


// Calculate Total
document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const managerField = getInputElementById('Manager-field');
    const coachField = getInputElementById('Coach-field');

    const expensesAmount = document.getElementById('Expenses-amount');
    const expensesAmountString = expensesAmount.innerText ;
    const currentExpensesAmount = parseFloat(expensesAmountString);
    
    const total = currentExpensesAmount + managerField + coachField ;
    getElementById('total-amount', total);
    
})







// button('ronaldo-select-btn')
// button('romos-select-btn')
// button('thiago-select-btn')
// button('Mbappé-select-btn')
// button('neymar-select-btn')
// button('lionel-select-btn')