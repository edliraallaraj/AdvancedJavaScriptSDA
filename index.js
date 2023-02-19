// const students = [
//   {
//     id: 1,
//     fname: "Dienis",
//     age: 23,
//     cities: ["Tirane", "Vlore"],
//     isGreat: false,
//     languages: [
//       {
//         javascript: "good",
//         python: "very good",
//       },
//     ],
//   },
//   {
//     id: 2,
//     fname: "Flavio",
//     age: 23,
//     cities: ["Sarande", "Vlore"],
//     isGreat: true,
//     languages: [
//       {
//         javascript: "excellent",
//         python: "very good",
//       },
//     ],
//   },
//   {
//     id: 3,
//     fname: "Dafina",
//     age: 17,
//     cities: ["Kruje", "Vlore"],
//     isGreat: true,
//     languages: [
//       {
//         javascript: "good",
//         python: "excellent",
//       },
//     ],
//   },
//   {
//     id: 4,
//     fname: "Aleksander",
//     age: 25,
//     cities: ["Tirane", "Selanik"],
//     isGreat: false,
//     languages: [
//       {
//         javascript: "meeh",
//         python: "nice",
//       },
//     ],
//   },
//   {
//     id: 5,
//     fname: "Egla",
//     age: 26,
//     cities: ["Tirane", "Berat"],
//     isGreat: true,
//     languages: [
//       {
//         javascript: "quite good",
//         python: "not bad",
//       },
//     ],
//   }
// ];

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



// Access the fourth student's second language and give it a sentence like :
// Fourth student is ... and his second language is...
let fourthStudent= students[3]
fourthStudent.fName= students[3].fName
console.log(`Fourth student is ${fourthStudent.fName} and his knowledge on the second language is ${fourthStudent.languages.javaScript}`)

// Add another city on Flavio's cities
let flavio= students[1]
flavio.cities.push("Fier")
console.log(flavio.cities)

// Create a function that shows if Aleksander is great or not
function check(student){
  if (student.isGreat === true){
      console.log(true)
  } else{
      console.log(false)
  }
}
check(flavio)

////////// :D 