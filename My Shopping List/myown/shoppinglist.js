const itemList = document.createElement('ul');
document.getElementById('listTable').appendChild(itemList);
itemList.style.listStyleType = 'square';

document.getElementById('add').addEventListener('click', addItem);
const userInput = document.getElementById('input');
const main = document.querySelector('main');

function addItem() {
    if (userInput.value !== '') {    
        const item = document.createElement('li');
        item.id = Math.floor(Math.random() * (500 - 1)) + 1;
        item.textContent = userInput.value;
        itemList.appendChild(item);
        userInput.value = "";
        document.getElementById('notif').remove();
    }
}

document.addEventListener('click', function (event) {
    let clickedElement = event.target;
    let elementId = document.getElementById(clickedElement.id);
    if (clickedElement.tagName === 'LI') {
        elementId.remove();
    }
});

document.getElementById('printButton').addEventListener('click', function () {
    window.print();
});
