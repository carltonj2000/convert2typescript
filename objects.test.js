const {
  introducePerson,
  FullTime,
  isFulltimeEmployee,
  personToString,
  getProfessions,
} = require("./objects");

const carlton = {
  name: { first: "Carlton", last: "Joseph" },
  status: FullTime,
  profession: "Engineer",
};

console.log(introducePerson(carlton));
console.log(isFulltimeEmployee(carlton));
console.log(personToString(carlton));
console.log(getProfessions({ 1: carlton }));
