export function ShoppingCartReduce(state,action){

    switch(action.type){
        case "ADD":
            const newItem = {...action.data, id: Date.now()};
            return {
                ...state,
                items: [...state.items, newItem],
                total: state.total + action.data.price,
                itemCount: state.itemCount + 1,
            };
        case "REMOVE":
            const filteredItems = state.items.filter(item => item.id !== action.data);
            return {
                ...state,
                items: filteredItems,
                total: filteredItems.reduce((sum, item) => sum + item.price, 0),
                itemCount: filteredItems.length,
            };


         case "CLEAR_CART":
            return { items: [], total: 0, itemCount: 0 };
        default:
            return state;
            
    }
}