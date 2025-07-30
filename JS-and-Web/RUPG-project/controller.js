  // זה הקונטרולר ופה עשיתי את החיבור בין התצוגה למודל שיגרום לתוכנית לרוץ
  // הקונטורלר יריץ את התוכנית בעזרת הכפתור generateButton
  // הקונטורלר יפתח את האנשי קשר בעזרת הכפתור contactsButton
  // הקונטורלר ישמור את הדף בעזרת הכפתור saveButton
  // הקונטורלר יטען את הדף ששמרנו בעזרת הכפתור loadButton


import { fetchUsers, fetchQuote, fetchPokemon, fetchBacon, saveUser, loadUser, getAllUsers} from './model.js';
import { renderUsers, renderQuote, renderPokemon, renderBacon, clearAll, updateSavedUsersDropdown  } from './view.js';

const contactsButton = document.getElementById("contactsButton");
const contacts = document.getElementById("myContacts");
const generateButton = document.getElementById("generateUser");
const saveButton = document.getElementById("saveUser");
const loadButton = document.getElementById("loadUser");
const dropdown = document.getElementById("savedUsers");




let lastUsers = null;
let lastQuote = null;
let lastPokemon = null;
let lastBacon = null;
let isLoadedUser = false; 

async function loadAll() {
  try {
    clearAll();
    const users = await fetchUsers();
    const quote = await fetchQuote();
    const pokemon = await fetchPokemon();
    const bacon = await fetchBacon();

    lastUsers = users;
    lastQuote = quote;
    lastPokemon = pokemon;
    lastBacon = bacon;

    renderUsers(users);
    renderQuote(quote);
    renderPokemon(pokemon);
    renderBacon(bacon);

    isLoadedUser = false;
    saveButton.disabled = false;

  } catch (error) {
    console.error(error);
    alert("An error occurred while loading data, please try again later.");
  }
}

contactsButton.addEventListener("click", () => {
  contacts.classList.toggle("active");

  if (contacts.classList.contains("active")) {
    contactsButton.textContent = "Contacts ▲";
  } else {
    contactsButton.textContent = "Contacts ▼";
  }
});

saveButton.addEventListener("click", () => {
    if (isLoadedUser) 
        return;

        const currentUser = {
            id: Date.now(),
            profileName: document.querySelector("#myProfile h2")?.textContent || "Unknown",
            users: lastUsers,
            quote: lastQuote,
            pokemon: lastPokemon,
            bacon: lastBacon
        };
        saveUser(currentUser);
        updateSavedUsersDropdown(getAllUsers());
    });

loadButton.addEventListener("click", () => {

  const selectedId = dropdown.value;
  const user = loadUser(selectedId);
    
  if (user && Array.isArray(user.users) && user.users.length > 0) {
    clearAll();
    renderUsers(user.users);
    renderQuote(user.quote);
    renderPokemon(user.pokemon);
    renderBacon(user.bacon);

    isLoadedUser = true;
    saveButton.disabled = true;
  }
  else {
    alert("No valid data found for the selected user.");
  }
});

generateButton.addEventListener("click", () => {
  loadAll();
});

loadAll();