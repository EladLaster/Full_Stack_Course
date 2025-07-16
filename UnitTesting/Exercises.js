//should return true if n is even, false otherwise
function isEven(n) {
    if (typeof n !== 'number')
        return false;
    return n % 2 == 0 ? true : false
}

//should remove at least one element from the array `arr`
function removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
}

//should return a clean string without these symbols: "!", "#", ".", ",", "'"
function simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}
// should return {error: "Need at least one boolean"} : If there isn't booleans in the array
// should return true : If there are more trues than falses in the array
// Otherwise, it should return false
function validate(arr) {
    if (!Array.isArray(arr))
    return { error: "Need at least one boolean" };

  const bools = arr.filter(item => typeof item === 'boolean');

  if (bools.length === 0) {
    return { error: "Need at least one boolean" };
  }

  const truesCount = bools.filter(b => b === true).length;
  const falsesCount = bools.length - truesCount;

  return truesCount > falsesCount;
}


function add(x, y){
    let stuff = []
    stuff.push(x, y)
}



module.exports = {isEven, removeAtLeastOne, simplify, validate, add};


