import { useReducer, useState } from "react";
import { ShoppingCartReduce } from "./shoppingCartReduce";

export function ShoppingCart() {
  // const [items, setItems] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [itemCount, setItemCount] = useState(0);

  const [state, dispatch] = useReducer(ShoppingCartReduce, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  const addItem = (product) => {
    // const newItems = [...items, { ...product, id: Date.now() }];
    // setItems(newItems);
    // setTotal(total + product.price);
    // setItemCount(itemCount + 1);
    dispatch({ type: "ADD", data: product });
    
  };

  const removeItem = (id) => {
    // const newItems = items.filter(item => item.id !== id);
    // const removedItem = items.find(item => item.id === id);
    // setItems(newItems);
    // setTotal(total - removedItem.price);
    // setItemCount(itemCount - 1);
    dispatch({ type: "REMOVE", data: id });
  };

  return (
    <div>
        {/* <h2>Shopping Cart ({itemCount} items) - Total: ${total}</h2> */}
       
       <h2>Shopping Cart ({state.itemCount} items) - Total: ${state.total}</h2>

      <button onClick={() => addItem({ name: "Laptop", price: 999 })}>Add Laptop</button>

<ul>
  {state.items.map(item => (
    <li key={item.id}>
      {item.name} - ${item.price}
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </li>
  ))}
</ul>

<button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>

    </div>
  );
}


