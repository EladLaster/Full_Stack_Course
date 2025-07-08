// Exercise 1
const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]


const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}
const getAge = function(age) {
    if (age < 21)
        return "Underage";
    else if (age > 55)
        return "a 55+";
    else
        return age.toString() + " year old";
}

const capitalizeProfession = function(profession) {
    let words = profession.split(" ");
//     let sentence = "";
//     for(let i = 0;i<words.length;i++)
//         sentence = sentence + capitalize(words[i]) + " ";
//    return sentence;
    let capitalizedWords = words.map(function(word){
        return capitalize(word);
    });
    return capitalizedWords.join(" ")+ " ";
}

const capitalizeCountryAndCity = function(country,city) {
    return "from " + capitalize(city) + ", " + capitalize(country) + ". ";
}

const capitalizeCatchphrase = function(name,catchphrase) {
    return name + " loves to say \"" + capitalize(catchphrase) + "\".";
}


const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
  summary += capitalizeProfession(person.profession) //call function for profession
  summary += capitalizeCountryAndCity(person.country,person.city) //call function for country + city
  summary += capitalizeCatchphrase(capitalize(person.name),person.catchphrase) //call function for catchphrase
  return summary
}

console.log(getSummary(people_info[0]))
// "Guido is an Underage Bungalow Builder from Sydurn, Canaland. Guido loves to say "What a piece of wood!"."
console.log(getSummary(people_info[1]))
// "Petra is 31 year old Jet Plane Mechanic from Bostork, Greenmark. Petra loves to say "That's my engine, bub"."
console.log(getSummary(people_info[2]))
// "Damian is a 55+ Nursery Assistant from Bekyo, Zimbia. Damian loves to say "With great responsibility comes great power"."

// Exercise 2
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

function cleanText(sentence) {
    let cleaned = sentence.toLowerCase();
    for (let char of specialChars) {
        cleaned = cleaned.split(char).join("");
    }
    return cleaned.split(" ");
}

function addToCounter(word) {
    if (wordCounts[word]) {
        wordCounts[word] += 1;
    } else {
        wordCounts[word] = 1;
    }
}

function countWords(sentence) {
    const words = cleanText(sentence);
    for (let word of words) {
        if (word.trim() !== "") {
            addToCounter(word);
        }
    }
}

countWords(story);
console.log(wordCounts);







