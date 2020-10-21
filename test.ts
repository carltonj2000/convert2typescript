import {
  isACat,
  addNumbers,
  introduction,
  introducePerson,
  dumpObject,
  dumpStringOrNumber,
  isASubscriber,
  Person,
  getPersonName,
} from "./basic-types";

console.log(isACat("cat"));
console.log(isACat("dog"));
console.log("");

console.log(addNumbers(1, 2));
//console.log(addNumbers(1, "Jack"));
console.log("");

console.log(introduction("Jack"));
console.log("");

introducePerson("Molly");
console.log("");

console.log(dumpObject("object", {}));
console.log("");

console.log(dumpStringOrNumber("foo"));
console.log(dumpStringOrNumber(10));

const william: Person = {
  name: { firstName: "william", middleName: "j", lastName: "smith" },
  subscriber: true,
  coolness: 10,
};

const dave: Person = {
  name: { firstName: "dave", lastName: "jones" },
  subscriber: true,
  coolness: 10,
};

console.log(isASubscriber(william));
console.log(getPersonName(william));
console.log(getPersonName());
console.log(getPersonName(dave));

// const obj: any = {};
// console.log(obj.id);
// const obj2: unknown = {};
// console.log(obj2.id); // fails

type ThingWithID = {
  id: number;
};

function printsThingWithID(thing: unknown) {
  console.log((thing as ThingWithID).id);
}

printsThingWithID({ id: 1 });
