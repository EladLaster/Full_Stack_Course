//Exercise 1
class UniqueArray {
  constructor() {
    this.items = [];
    this.lookup = {};
  }
  add(item) {
    if (this.lookup[item] === undefined) {
      this.lookup[item] = this.items.length;
      this.items.push(item);
    }
  }
  exists(item) {
    return this.lookup[item] !== undefined;
  }
  showAll() {
    console.log(this.items);
  }
  get(index) {
    if (index >= 0 && index < this.items.length)
        return this.items[index];
    else 
        return -1;
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"

//Exercise 2
function isEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== 'object' || typeof b !== 'object' || a == null || b == null) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  for (let key of aKeys) {
    if (!b.hasOwnProperty(key) || !isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

class UniqueArray2 {
  constructor() {
    this.items = [];
  }

  add(item) {
    if (!this.exists(item)) {
      this.items.push(item);
    }
  }

  exists(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (isEqual(this.items[i], item)) {
        return true;
      }
    }
    return false;
  }

  showAll() {
    console.log(this.items);
  }

  get(index) {
    return this.items[index] !== undefined ? this.items[index] : -1;
  }
}

const uniqueStuff2 = new UniqueArray2();
uniqueStuff2.add("toy");
uniqueStuff2.showAll(); // prints ["toy"]
uniqueStuff2.add("toy");
uniqueStuff2.showAll(); // prints ["toy"]
console.log(uniqueStuff2.exists("toy")); // returns true
uniqueStuff2.add("poster");
uniqueStuff2.add("hydrogen");
console.log(uniqueStuff2.get(2)); // prints "hydrogen"
uniqueStuff2.add({x: 3, y: 5});
uniqueStuff2.add({x: 3, y: 5}); // its exist so not add this
uniqueStuff2.showAll();
