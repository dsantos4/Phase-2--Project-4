window.onload = function () {
    initShoppingList ();
};

function initShoppingList () {
    let form = document.getElementById(item-form);

    form.addEventListener("submit", (event) => {
         handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if(event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();
    formRef.reset()
    return false;
}

function addItemToshoppingList() {
    let itemname = document.getElementById("item-name")
    let itemAmount = document.getElementByID("item-amount")
    let id = getRandomInt(0, 1000000);
    let itemHtml = createListItemHTML(itemName.value, itemAmount.value, id);
    console.log("Item HTML: ", itemHtml);
    itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);
}

function setDeletbuttonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () =>{
        console.log("DeleteButton Works")
    });
}
function createListItemHTML(itemName, itemAmount) {
    return `<li id="item${id}">
               $ {Item Name} - ${itemAmount}
               <button type="button">Delete Item</button>
            </li>`;
}

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max- min)) + min; // The maximum
}

function removeListItem(Id) {
    let listItem = document.getElementById("Item"+id);
    listenItem.parentNode.removeChild(listitem);
}