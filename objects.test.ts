import {
  introducePerson,
  Status,
  isFulltimeEmployee,
  personToString,
  getProfessions,
} from "./objects";

const carlton = {
  name: { first: "Carlton", last: "Joseph" },
  status: Status.FullTime,
  profession: "Engineer",
};

console.log(introducePerson());
console.log(introducePerson(carlton));
console.log(isFulltimeEmployee(carlton));
console.log(personToString(carlton));
console.log(getProfessions({ 1: carlton }));
