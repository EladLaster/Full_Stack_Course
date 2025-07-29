localStorage.clear();
function printLocalStorage() {
  if (localStorage.length === 0) {
    console.log("Local Storage is empty.");
  } else {
    console.log("Current localStorage contents:");
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`key: ${key} | value: ${value}`);
    }
  }
}

printLocalStorage();

localStorage.setItem("newKey", "newValue");
console.log("Added newKey:newValue");

printLocalStorage();

localStorage.removeItem("newKey");
console.log("Removed newKey");

printLocalStorage();

let userStorage = {
  darkMode: true,
  showSideNav: false,
  defaultResultCount: 9,
  latestMarks: {
      sectionA: 92,
      sectionB: 11
  },
  cart: [
      { id: 3112, count: 2 },
      { id: 812, count: 16 }
  ]
}

localStorage.setItem("userStorage", JSON.stringify(userStorage));

printLocalStorage();

let countOfSecond = JSON.parse(localStorage.getItem("userStorage"));
console.log(countOfSecond.cart[1].count);

localStorage.removeItem("userStorage");

printLocalStorage();

