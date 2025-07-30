  // זה המודל ופה בניתי את הפונקציות שבעזרתם אני עושה קריאות לAPIs
  // הוספתי לחלק השני של המטלה את הפוקנציות ששומרות ומביאות דפים מהלוקל סטוראז' עם save, load
  // בהמשך - נבנה גם פונקצייה שמוחקת דף מהלוקל סטוראז' עםdelete
  // המודל שולח בחזרה את המידע שהוצאנו
  
  
  export async function fetchUsers() {
    const response = await fetch("https://randomuser.me/api/?results=7&inc=name,location,picture");
    if (!response.ok) 
        throw new Error("Network response was not ok");
    const data = await response.json();
    return data.results;
  }

  export async function fetchQuote() {
    const response = await fetch("https://api.kanye.rest");
    if (!response.ok) 
        throw new Error("Network response was not ok");
    const data = await response.json();
    return data.quote;
  }

  export async function fetchPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomId);
    if (!response.ok) 
        throw new Error("Network response was not ok");
    return await response.json();
  }

  export async function fetchBacon() {
    const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text");
    if (!response.ok) 
        throw new Error("Network response was not ok");
    return await response.text();
  }

  export function saveUser(userData) {
    let saved = JSON.parse(localStorage.getItem("users")) || {};
    saved[userData.id] = userData;
    localStorage.setItem("users", JSON.stringify(saved));
  }

  export function loadUser(id) {
    let saved = JSON.parse(localStorage.getItem("users")) || {};
    return saved[id] || null;
  }

//   export function deleteUser(id) {
//   let saved = JSON.parse(localStorage.getItem("users")) || {};
//   if (saved[id]) {
//     delete saved[id];
//     localStorage.setItem("users", JSON.stringify(saved));
//   }
// }

  export function getAllUsers() {
    return JSON.parse(localStorage.getItem("users")) || {};
  }

