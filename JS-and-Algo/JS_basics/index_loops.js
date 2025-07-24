
//Exercise 1
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < names.length; i++) {
  people.push({
    name: names[i],
    age: ages[i]
  });
}
console.log(people);

//Exercise 2
for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

//Exercise 3
const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

let idToRemove = -1;
for (let i = 0; i < posts.length; i++) {
  if (posts[i].id === 2) {
    idToRemove = i;
    break;
  }
}
if (idToRemove !== -1) {
  posts.splice(idToRemove, 1);
}
console.log(posts);

//Exercise 4
const posts2 = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

let postIndex = -1;
for (let i = 0; i < posts2.length; i++) {
  if (posts2[i].id === 2) {
    postIndex = i;
    break;
  }
}
if (postIndex !== -1) {
  const comments = posts2[postIndex].comments;

  let commentIndex = -1;
  for (let j = 0; j < comments.length; j++) {
    if (comments[j].id === 3) {
      commentIndex = j;
      break;
    }
  }
  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1);
  }
}
for (const post of posts2) {
  console.log(post);
}

//Exercise 4
const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

const keys = Object.keys(dictionary); // ["A", "B", "C"]
for (let i = 0; i < keys.length; i++) {
  const letter = keys[i];
  console.log(`Words that begin with ${letter}:`);
  
  const words = dictionary[letter];
  for (let j = 0; j < words.length; j++) {
    console.log(`    ${words[j]}`);
  }
}
