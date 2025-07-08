//Exercise 1
console.log(isEven(22));
console.log(isEven(31));

function isEven(num){
    return num%2==0;
}

//Exercise 2
let arr = [1,2,3,4,5,6];
PrintOddNum(arr);

function PrintOddNum(arr){
    newarr=[];
    for(let i=0;i<arr.length;i++){
        if(!isEven(arr[i]))
            newarr.push(arr[i])
    }
    console.log(newarr);
}

//Exercise 3
let arr2 = [1,2,3];
console.log(checkExists(arr2,2));
console.log(checkExists(arr2,5));

function checkExists(arr,num){
    for(let i = 0;i<arr2.length;i++){
        if(arr[i]==num)
            return true;
    }
    return false;
}

//Exercise 4
calculator = {
    add:function(a,b){ return a+b;},
    subtract:function(a,b){return a-b;}
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42

//Exercise 4
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

function increaseByNameLength (money,name){
    return money * name.length;
}
function makeRegal (name){
    return "His Royal Highness, " + name;
}

//Exercise 4
PrintArmstrongNum();

function PrintArmstrongNum (){
    newarr = [];
    for(let i = 100;i<=999;i++){
        if(IsArmstrong(i))
           newarr.push(i); 
    }
    console.log(newarr);
}
function IsArmstrong (num){
    let sum=0;
    let temp=num;
    while(temp>0){
        sum = sum + Math.pow(temp%10,3);
        temp = Math.floor(temp / 10);
    }
    return sum == num;
}