export const isACat = (animal: string): boolean => animal === "cat";

export function addNumbers(a: number, b: number): number {
  return a + b;
}

export const introduction = (name: string): string => `Hello ${name}`;

export const introducePerson = (name: string): void =>
  console.log(introduction(name));

export const dumpObject = (type: string, obj: unknown): string =>
  `${type}:${JSON.stringify(obj)}`;

export const dumpStringOrNumber = (info: string | number): string =>
  `value ${info}`;

export type Person = {
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  subscriber: boolean;
  coolness: number;
};

export const getPersonName = (person?: Person) =>
  `${person?.name?.firstName ?? "First"} ${person?.name?.middleName ?? ""} ${
    person?.name?.lastName ?? "Last"
  }`;

export const isASubscriber = (person: Person) => person.subscriber;
