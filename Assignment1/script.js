let items = [
    { name: "Books", quantity: 1, price: 7 },
    { name: "Juice", quantity: 1, price: 3 },
    { name: "Shoes", quantity: 1, price: 10 },
    { name: "Bananas", quantity: 1, price: 2 },
    { name: "Iron", quantity: 1, price: 7 }
];

function updateList() {
    let tableBody = document.getElementById("groceryList");
    tableBody.innerHTML = "";
    let total = 0;
    
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let itemTotal = item.quantity * item.price;
        total += itemTotal;
        
        let row = `<tr>
            <td>${i + 1}</td>
            <td>${item.name} <button onclick='removeItem(${i})'>Delete</button></td>
            <td><input class='quant' type='number' value='${item.quantity}' min='1' onchange='updateQuantity(${i}, this.value)'></td>
            <td>₹${item.price}</td>
            <td class='total_cost'>₹${itemTotal.toFixed(2)}</td>
        </tr>`;
        tableBody.innerHTML += row;
    }
    
    document.getElementById("totalCost").textContent = total.toFixed(2);
}

function addItem() {
    let name = document.getElementById("itemName").value;
    let quantity = document.getElementById("itemQuantity").value;
    let price = document.getElementById("itemPrice").value;
    
    if (name === "" || quantity <= 0 || price < 0) {
        alert("Please enter valid item details.");
        return;
    }
    
    items.push({ name, quantity: parseInt(quantity), price: parseFloat(price) });
    updateList();
}

function updateQuantity(index, newQuantity) {
    items[index].quantity = parseInt(newQuantity) || 1;
    updateList();
}

function removeItem(index) {
    items.splice(index, 1);
    updateList();
}

updateList();