export function Landing({userName,items}){

    function hottest(){
        return items.find(user=>user.hottest===true);
    }

    const hottestItem = hottest();

    return (
        <div>welcome, {userName}. The hottest item is {hottestItem ? hottestItem.item +" for $"+hottestItem.price: "No hottest item found"} </div>
    )
}