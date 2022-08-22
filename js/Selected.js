function getPlayerNameById(elementPlayerName) {
    const lionelMessiPlayer = document.getElementById(elementPlayerName);
    const lionelMessiPlayerName = lionelMessiPlayer.innerText;
    return lionelMessiPlayerName;
}

function setListItemsAdd(lionelMessiPlayerName) {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = lionelMessiPlayerName;
    listContainer.appendChild(li);
    return listContainer;
}

// Lionel Messi
document.getElementById('lionel-select-btn').addEventListener('click', function () {

    const lionelMessiPlayerName = getPlayerNameById('lionel-messi');
    const listContainer = setListItemsAdd(lionelMessiPlayerName);

    const selectButton = document.getElementById('lionel-select-btn');
    selectButton.setAttribute('disabled', true);
})



// Neymar Jr
