  // זה הקונטרולר ופה עשיתי את החיבור בין התצוגה למודל שיגרום לתוכנית לרוץ
  // הקונטורלר יריץ את התוכנית בעזרת הכפתור generateButton
  // הקונטורלר יפתח את האנשי קשר בעזרת הכפתור contactsButton

import { fetchUsers, fetchQuote, fetchPokemon, fetchBacon } from './model.js';
import { renderUsers, renderQuote, renderPokemon, renderBacon, clearAll } from './view.js';

const contactsButton = document.getElementById("contactsButton");
const contacts = document.getElementById("myContacts");
const generateButton = document.getElementById("generateUser");


async function loadAll() {
  try {
    clearAll();
    const users = await fetchUsers();
    const quote = await fetchQuote();
    const pokemon = await fetchPokemon();
    const bacon = await fetchBacon();

    renderUsers(users);
    renderQuote(quote);
    renderPokemon(pokemon);
    renderBacon(bacon);

  } catch (error) {
    console.error(error);
    alert("An error occurred while loading data, please try again later.");
    }
}

loadAll();

generateButton.addEventListener("click", () => {
  loadAll();
});

contactsButton.addEventListener("click", () => {
  contacts.classList.toggle("active");

  if (contacts.classList.contains("active")) {
    contactsButton.textContent = "Contacts ▲";
  } else {
    contactsButton.textContent = "Contacts ▼";
  }
});


