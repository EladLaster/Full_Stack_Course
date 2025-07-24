//Exercise 1
// let meatArr = ["beef","chicken","rabbit"]
// let vegetableArr = ["carrots","potatoes","lettuce"]
let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

meatArr = [...meatArr, vegetableArr[0]];
vegetableArr = vegetableArr.slice(1);

console.log(meatArr);
console.log(vegetableArr);

//Exercise 2
// var fullPiece = [id: 101, name: 'Ofri',country: 'Israel']
var firstPiece = { id: 101, name: 'Ofri' }
var seoncdPiece = { country: 'Israel'}

var fullPiece = {...firstPiece,...seoncdPiece}

console.log(fullPiece);



