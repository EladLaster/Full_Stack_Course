function rollDice(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const random = Math.random(); // מספר בין 0 ל-1
            const dice = Math.floor(Math.random() * 6) + 1; // לצורך תצוגה
            if(random > 0.1)
                    resolve("🎲 succses : " + dice);
            else
                reject("💥 faild : " + dice);
        },500)
    })
}

rollDice()
  .then(result => console.log(result))
  .catch(error => console.error(error));




function oldAsyncFunction() {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        let num = Math.random();
    if (num > 0.5)
        resolve(num.toFixed(2), "Success");
    else{
        // console.log("the num is lower then 0.5 : " + num.toFixed(2));
        reject(new Error("Failed"));
    }
    }, 1000);
})}

oldAsyncFunction().then(result => {
    console.log("the result is :" + result);
}).catch(error => {
    console.log("the error is :" + error);
});