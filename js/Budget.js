
document.getElementById('calculate-btn').addEventListener('click', function(){

    const perPlayerField = document.getElementById('per-player-field');
    const perPlayerFieldString = perPlayerField.value ;
    const newPerPlayer = parseFloat(perPlayerFieldString);
    perPlayerField.value = '';
    
    const totalPlayerExpenses = newPerPlayer * 5 ;
    
    const newTotalExpensesAmount = document.getElementById('Expenses-amount');
    newTotalExpensesAmount.innerText = totalPlayerExpenses ;
})