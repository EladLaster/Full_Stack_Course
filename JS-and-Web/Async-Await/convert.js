
//regular promise
function processOrder(orderId) {
  return fetch(`/api/orders/${orderId}`)
    .then((response) => response.json())
    .then((order) => {
      return fetch(`/api/inventory/${order.productId}`);
    })
    .then((response) => response.json())
    .then((inventory) => {
      if (inventory.stock > 0) {
        return { success: true, message: "Order processed" };
      } else {
        return { success: false, message: "Out of stock" };
      }
    });
}
//convert to async await
async function processOrder(orderId) {
  const getApi = await fetch (`/api/orders/${orderId}`);
  const order = await getApi.json();
  const productID = await fetch(`/api/inventory/${order.productId}`);
  const inventory = await productID.json();
  const stock = inventory.stock;

  if (stock > 0) {
        return { success: true, message: "Order processed" };
      } else {
        return { success: false, message: "Out of stock" };
      }
}