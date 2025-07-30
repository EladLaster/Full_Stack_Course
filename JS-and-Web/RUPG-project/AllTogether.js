// זה הקובץ הראשוני שבניתי עם כל החלקים ביחד:
// AllTogether.js
//
// MVC ואז הפרדתי אותו ל3 קבצים שונים לפי:
// model.js, view.js, controller.

const profile = document.getElementById("myProfile");
const contactsToggle = document.getElementById("contactsToggle");
const contacts = document.getElementById("myContacts");
const quote = document.getElementById("myQuote");
const pokemon = document.getElementById("myPokemon");
const about = document.getElementById("aboutMe");
const myBtn = document.getElementById("generateUser");

async function loadUsers() {
  profile.innerHTML = "";
  contacts.innerHTML = "";
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=7&inc=name,location,picture"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const users = data.results;

    //profile
    const user = users[0];
    const divPro = document.createElement("div");
    divPro.classList.add("user-card");
    const divCon = document.createElement("div");
    divCon.classList.add("contacts-card");

    const picture = document.createElement("img");
    const infoDiv = document.createElement("div");
    const Fullname = document.createElement("h2");
    const Fulllocation = document.createElement("h3");

    picture.src = user.picture.large;
    Fullname.textContent = user.name.first + " " + user.name.last;
    Fulllocation.textContent = user.location.city + ", " + user.location.state;

    divPro.appendChild(picture);
    infoDiv.appendChild(Fullname);
    infoDiv.appendChild(Fulllocation);
    divPro.appendChild(infoDiv);
    profile.appendChild(divPro);

    //contacts
    divCon.innerHTML = "<h2>Contacts</h2>";
    users.slice(1).forEach((user) => {
      const FullnameCon = document.createElement("h3");
      FullnameCon.textContent = user.name.first + " " + user.name.last;
      divCon.appendChild(FullnameCon);
    });
    contacts.appendChild(divCon);
  } catch (err) {
    console.error("error is :" + err);
  }
}

async function loadSongs() {
  quote.innerHTML = "";
  try {
    const response = await fetch("https://api.kanye.rest");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const song = document.createElement("p");
    song.classList.add("fancy-quote");
    song.innerHTML = 'Favorite quote:<br>"' + data.quote + '"<br> -Kanye West';
    quote.appendChild(song);

  } catch (err) {
    console.error("error is :" + err);
  }
}

async function loadPokemon() {
  pokemon.innerHTML = "";
  try {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomId);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const pokDiv = document.createElement("div");
    pokDiv.classList.add("pokemon-card");

    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    
    const name = document.createElement("h2");
    name.textContent = "Favorite Pokemon: " + data.name ;

    const hr = document.createElement("hr"); 
    hr.classList.add("custom-hr"); 

    pokDiv.appendChild(img);
    pokDiv.appendChild(name);
    pokemon.appendChild(pokDiv);
    pokemon.appendChild(hr);    

  } catch (err) {
    console.error("error is :" + err);
  }
}

async function loadBacon() {
  about.innerHTML = "";
  try{
    const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text");
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    const text = await response.text();

    const title = document.createElement("h3");
    title.textContent = "About Me";
    title.classList.add("about-title");

    const desc = document.createElement("p");
    desc.textContent = text.replace(/\n+/g, " ");
    desc.classList.add("about-text");

    about.appendChild(title);
    about.appendChild(desc);

  }
  catch(err){
    console.error("error is :" + err);
  }
}

  loadUsers();
  loadSongs();
  loadPokemon();
  loadBacon();

    
myBtn.addEventListener("click", () => {
  loadUsers();
  loadSongs();
  loadPokemon();
  loadBacon();
})

contactsToggle.addEventListener("click", () => {
  if (contacts.style.display === "none" || contacts.style.display === "") {
    contacts.style.display = "block";
    contactsToggle.textContent = "Contacts ▲";
  } else {
    contacts.style.display = "none";
    contactsToggle.textContent = "Contacts ▼";
  }
});
