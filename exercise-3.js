// function calculateAverageAge(persons) {
//   const av = persons.reduce((avg, per) => {
//     return Math.round((per.age + avg) / persons.length);
//   }, 0);
//   console.log(av);
// }
function calculateAverageAge(persons) {
  const av = persons.reduce((avg, per) => {
    return per.age + avg;
  }, 0);
  const result = Math.round(av / persons.length);
  console.log(result);
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
