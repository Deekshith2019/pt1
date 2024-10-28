// Check for a new order in localStorage when the page loads
function checkForNewOrder() {
    const newOrder = localStorage.getItem("newOrder");

    if (newOrder) {
        const order = JSON.parse(newOrder);
        const orderInfoDiv = document.getElementById("order-info");

        orderInfoDiv.innerHTML = `
            <p><strong>Order ID:</strong> ${order.orderId}</p>
            <p><strong>Restaurant:</strong> ${order.restaurant}</p>
            <p><strong>Items:</strong> ${order.items.join(", ")}</p>
            <p><strong>Delivery Address:</strong> ${order.address}</p>
        `;

        // Clear notification once loaded
        localStorage.removeItem("newOrder");
    } else {
        document.getElementById("order-info").innerHTML = "<p>No new orders</p>";
    }
}

// Accept or Decline actions
document.getElementById("accept-btn").addEventListener("click", function() {
    updateOrderStatus("accepted");
});

document.getElementById("decline-btn").addEventListener("click", function() {
    updateOrderStatus("declined");
});

function updateOrderStatus(status) {
    const statusMessage = document.getElementById("status-message");

    if (status === "accepted") {
        statusMessage.textContent = "You have accepted the order!";
        statusMessage.style.color = "#28a745";
    } else {
        statusMessage.textContent = "You have declined the order.";
        statusMessage.style.color = "#dc3545";
    }

    console.log(`Order status updated to: ${status}`);
}

// Check for new orders on page load
checkForNewOrder();
