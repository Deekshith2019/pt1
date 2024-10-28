// Define available orders
const availableOrders = [
    
    { orderId: "12", restaurant: "Pizza Palace", items: ["Margherita Pizza", "Garlic Bread"], address: "123 Street, City" },
    { orderId: "13", restaurant: "Burger House", items: ["Double Cheeseburger", "Fries"], address: "456 Avenue, City" },
    { orderId: "14", restaurant: "Sushi Spot", items: ["Salmon Sushi", "Miso Soup"], address: "789 Boulevard, City" }
]
    


// Function to display orders
function displayOrders() {
    const orderList = document.getElementById("order-list");
    availableOrders.forEach(order => {
        const listItem = document.createElement("li");
        listItem.textContent = `${order.restaurant}: ${order.items.join(", ")}`;
        listItem.classList.add("order-item");  // Add the order-item class

        // Attach click event to each order item
        listItem.addEventListener("click", () => placeOrder(order));
        orderList.appendChild(listItem);
    });
}

// Function to place an order and notify the delivery agent
function placeOrder(order) {
    // Update order status message
    document.getElementById("order-status-message").textContent = `Order placed at ${order.restaurant}. Notifying delivery agent...`;
    
    // Store selected order in localStorage
    setTimeout(() => {
        localStorage.setItem("newOrder", JSON.stringify(order));
        alert("Delivery agent notified!");
    }, 1000);  // 1 second delay for demonstration
}

// Display the available orders when the page loads
displayOrders();
