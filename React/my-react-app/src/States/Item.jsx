export function Item({userDisc,itemName,itemPrice,itemDisc}){
    return(
        <div>{itemName}: ${userDisc? (itemPrice * (1 - itemDisc)).toFixed(2) : itemPrice.toFixed(2)}</div>
    )
}