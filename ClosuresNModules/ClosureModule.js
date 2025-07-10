export function StringFormatter(){
    function capitalizeFirst(string){
         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    function toSkewerCase(string){
        return string.replace(/ /g, "-");
    }
    return {capitalizeFirst,toSkewerCase};
}

export function Bank(){
    let balance = 500;
    function depositCash (money){
        balance+=money;
    }
    function checkBalance (){
        console.log(balance);
    }
    return { deposit: depositCash, showBalance: checkBalance };
}

export function SongsManager(){
    let list = {}
    const baseUrl = "https://www.youtube.com/watch?v=";

    function addSong(name,song){
        const id = song.split("v=")[1];
        list[name]=id;
    }
    function getSong(name){
        if(list[name]==undefined)
            console.log("this song name doesnt exist");
        else{
            console.log(baseUrl + list[name]);
            // console.log(list)
        }
    }
    return {addSong,getSong};
}

