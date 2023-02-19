const students = [
  {
    id: 1,
    fName: "Dienis",
    age: 23,
    cities: ["Tirane", "Vlore"],
    isGreat: true,
    languages: {
      javaScript: "good",
      python: "very good",
    },
  },
  {
    id: 2,
    fName: "Flavio",
    age: 20,
    cities: ["Sarande", "Vlore"],
    isGreat: false,
    languages: {
      javaScript: "excellent",
      python: "very good",
    },
  },
  {
    id: 3,
    fName: "Dafina",
    age: 21,
    cities: ["Kruje", "Vlore"],
    isGreat: true,
    languages: {
      javaScript: "not good",
      python: "good",
    },
  },
  {
    id: 4,
    fName: "Aleksander",
    age: 24,
    cities: ["Sarande", "Vlore"],
    isGreat: false,
    languages: {
      javaScript: "meehhh",
      python: "nice",
    },
  },
  {
    id: 5,
    fName: "Egla",
    age: 26,
    cities: ["Tirane", "Berat"],
    isGreat: true,
    languages: {
      javaScript: "Quite good",
      python: "Not bad",
    },
  },
];

// Access the fourth student's Second language and
//  give it a sentence like "Fourth student is...
// and his second language is ...
// Add another city on Flavio's cities
// Create a function that shows if Aleksander is great, or not

console.log("testtt");

console.log(
  `Fourth student is ${students[3].fName} and his knowledge on the second language is ${students[3].languages.javaScript}`
);


console.log("Another change")
console.log("New change")