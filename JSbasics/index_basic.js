//Exercise 1
let age = 20;
if(age>18)
    console.log("can vote");
else    
    console.log("can't vote");

//Exercise 2
let score = 85;
if(score>100 || score<0)
    console.log("Invalid score")
else if (score>=90 && score<=100)
    console.log("A");
else if (score>=80 && score<=89)
    console.log("B");
else if (score>=70 && score<=79)
    console.log("C");
else if (score>=60 && score<=69)
    console.log("D");
else   
    console.log("F");

//Exercise 3
let temperature = 20;
let weather = "sunny";

if (weather === "sunny") {
  if (temperature > 24) {
    console.log("Go to the beach");
  } else if (temperature >= 15 && temperature <= 24) {
    console.log("Go for a walk");
  } else {
    console.log("Stay inside and read");
  }
} else if (weather === "rainy") {
  console.log("Watch a movie indoors");
} else if (weather === "cloudy") {
  if (temperature > 21) {
    console.log("Go hiking");
  } else {
    console.log("Visit a museum");
  }
}

//Exercise 4
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if(usernameLength >= 5 && passwordLength >= 8 && userAge >= 13 )
    console.log("all success");
else {
    if(usernameLength < 5)
        console.log("usernameLength faild");
    if(passwordLength < 8)
        console.log("passwordLength faild");
    if(userAge < 13)
        console.log("userAge faild");
}

//Exercise 5
let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6;

let discount;

if (customerType === "vip") {
  discount = 0.20;
} else if (customerType === "premium") {
  discount = (dayOfWeek === 6 || dayOfWeek === 0) ? 0.15 : 0.10;
} else if (customerType === "regular") {
  if (purchaseAmount > 100) {
    discount = 0.10;
  } else if (purchaseAmount > 50) {
    discount = 0.05;
  } else {
    discount = 0;
  }
} else {
  discount = 0;
}
console.log(`Discount: ${discount * 100}%`);

//Exercise 6
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}




