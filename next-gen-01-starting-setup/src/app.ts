// const userName = 'Dzmitry';
// userName = 'Dima';

// let age = 27;
// age = 30;

// var result;

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 10) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector('button');
// button?.addEventListener('click', (event) => console.log(event));

// printOutput(add(4));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Dzmitry',
  age: 27,
};

const copiedPerson = { ...person };

const add = (...args: number[]) => {
  return args.reduce((acc, val) => acc + val, 0);
};

const addedNumbers = add(5, 10, 2, 4);
console.log(addedNumbers);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

const { age: myAge, firstName } = person;
console.log(myAge, firstName);


