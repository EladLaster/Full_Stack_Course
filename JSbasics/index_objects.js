//Exercise 1
p1 = {
    name: "Jill",
    age: 28,
    city: "maale adumim"
}
p2 = {
    name: "Robert",
    age: 28,
    city: "maale adumim"
}

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log("Jill wanted to date Robert");
  } else {
    console.log("Jill wanted to date Robert, but couldn't");
  }
}

//Exercise 2
const library = {
  books: [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
    { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling" },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling" },
    { title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling" },
    { title: "Harry Potter and the Order of the Phoenix", author: "J.K. Rowling" }
  ]
}
console.log(library)

//Exercise 3
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name1 = 'Bob'

if (reservations[name1]) {
  if (!reservations[name1].claimed) {
    console.log(`Welcome, ${name1}`);
    reservations[name1].claimed = true;
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  console.log("You have no reservation");
}

const name2 = 'Alice';

if (reservations[name2]) {
  if (!reservations[name2].claimed) {
    console.log(`Welcome, ${name2}`);
    reservations[name2].claimed = true;
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  reservations[name2] = { claimed: true };
  console.log(`Welcome, ${name2}, we've created a new reservation for you`);
}

const name3 = "TeD";

if (reservations[name3]) {
  if (!reservations[name3].claimed) {
    console.log(`Welcome, ${name3}`);
    reservations[name3].claimed = true;
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  reservations[name3] = { claimed: true };
  console.log(`Welcome, ${name3}, we've created a new reservation for you`);
}

//Exercise 4
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

// Helper variables
const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const radish = kitchen.fridge.items.find(item => item.name === "radish");
const radishExpiredDaysAgo = date - radish.expiryDate;
const fridgeRepairCost = kitchen.fridge.price / 2;

let message = `${kitchen.owner}'s ${radish.name} expired ${radishExpiredDaysAgo} day${radishExpiredDaysAgo !== 1 ? "s" : ""} ago. `;

if (fridgeWorks) {
    message += "Weird, considering her fridge works. ";
} else {
    message += "Probably because her fridge doesn't work. ";
}

if (hasOven) {
    message += "Luckily, she has an oven to cook the radish in.";
} else {
    message += "Too bad she doesn't have an oven to cook the radish in.";
}

if (!fridgeWorks) {
    message += ` And she'll have to pay ${fridgeRepairCost} to fix the fridge.`;
}

console.log(message);