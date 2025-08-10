import { Item } from "./Item";

export function Home({userDisc,items}) {
  return (
    <div>
        <h4>Store</h4>
      {items.map(i => (
        <Item key={i.item} userDisc={userDisc} itemName={i.item} itemPrice={i.price} itemDisc ={i.discount}/>
      ))}
    </div>
  );
}
