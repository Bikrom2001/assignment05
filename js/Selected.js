
const cardArray = [];

function displayPlayerName() {
    const listContainer = document.getElementById('list-container');
    listContainer.innerText = '';
    for (let i = 0; i < cardArray.length; i++) {
        const index = cardArray[i];
        const liList = document.createElement('li');
        liList.innerText = index;
        listContainer.appendChild(liList);
        document.getElementById('selected-values').innerText = cardArray.length;
    }


}

function addCard(elemet) {
    const playerName = elemet.parentNode.parentNode.children[0].innerText;
    cardArray.push(playerName);
    if (cardArray.length > 5) {
        alert('You cannot select more than 5 players');
        return;
    }
    // displayPlayerName();
    disabled(elemet);
}


function disabled(elemet) {
    elemet.setAttribute('disabled', true);
    if (elemet.getAttribute('disabled')) {
        elemet.style.background = 'gray';
        elemet.style.color = 'white';
    }
    displayPlayerName();
}

