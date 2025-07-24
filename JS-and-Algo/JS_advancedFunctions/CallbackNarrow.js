//Exercise 1 - Callbacks
const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

function pushPull(func){
    func();
}

function pushPull(func){
    func();
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

//Exercise 2 - Callbacks
const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

function getTime(func){
  const timenow = new Date()
  func(timenow);
}

getTime(returnTime)

//Exercise 3 - Callbacks
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = function(data) {
  console.log(data);
};

displayData(console.error, logData, "I like to party")

//Exercise 4 - Arrow functions
const func = (a,b,c) => {return a+b+c};

console.log(func(1,2,3));

//Exercise 5 - Arrow functions
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

//Exercise 6 - Arrow functions
const commentOnWeather = temp => {
  console.log("It's " + determineWeather(temp))
}
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"





