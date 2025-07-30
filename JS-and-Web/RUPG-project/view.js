  // זה התצוגה ופה בניתי בעזרת המידע שקיבלנו מהמודל את הHTML
  // התצוגה דוחפת את המידע (המשוכתב) למסך
  
  const profile = document.getElementById("myProfile");
  const contacts = document.getElementById("myContacts");
  const quote = document.getElementById("myQuote");
  const pokemon = document.getElementById("myPokemon");
  const about = document.getElementById("aboutMe");

  export function clearAll() {
    profile.innerHTML = "";
    contacts.innerHTML = "";
    quote.innerHTML = "";
    pokemon.innerHTML = "";
    about.innerHTML = "";
  }

  export function renderUsers(users) {

    // פרופיל ראשי
    const user = users[0];
    const divPro = document.createElement("div");
    divPro.classList.add("user-card");

    const picture = document.createElement("img");
    picture.src = user.picture.large;

    const infoDiv = document.createElement("div");
    const Fullname = document.createElement("h2");
    const Fulllocation = document.createElement("h3");

    Fullname.textContent = user.name.first + " " + user.name.last;
    Fulllocation.textContent = user.location.city + ", " + user.location.state;

    infoDiv.appendChild(Fullname);
    infoDiv.appendChild(Fulllocation);
    divPro.appendChild(picture);
    divPro.appendChild(infoDiv);

    profile.appendChild(divPro);

    // אנשי קשר
    const divCon = document.createElement("div");
    divCon.classList.add("contacts-card");

    users.slice(1).forEach((user) => {
      const FullnameCon = document.createElement("h3");
      FullnameCon.textContent = user.name.first + " " + user.name.last;
      divCon.appendChild(FullnameCon);
    });

    contacts.appendChild(divCon);
  }

  export function renderQuote(quoteText) {

    const song = document.createElement("p");
    song.classList.add("fancy-quote");
    song.innerHTML = 'Favorite quote:<br>"' + quoteText + '"<br> -Kanye West';
    quote.appendChild(song);
  }

  export function renderPokemon(data) {

    const pokDiv = document.createElement("div");
    pokDiv.classList.add("pokemon-card");

    const img = document.createElement("img");
    img.src = data.sprites.front_default;

    const name = document.createElement("h2");
    name.textContent = "Favorite Pokemon: " + data.name;

    const hr = document.createElement("hr");
    hr.classList.add("custom-hr");

    pokDiv.appendChild(img);
    pokDiv.appendChild(name);

    pokemon.appendChild(pokDiv);
    pokemon.appendChild(hr);
  }

  export function renderBacon(text) {
    
    const title = document.createElement("h3");
    title.textContent = "About Me";
    title.classList.add("about-title");

    const desc = document.createElement("p");
    desc.textContent = text.replace(/\n+/g, " ");
    desc.classList.add("about-text");

    about.appendChild(title);
    about.appendChild(desc);
  }


