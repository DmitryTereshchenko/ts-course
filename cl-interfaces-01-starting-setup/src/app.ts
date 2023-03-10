type AddFn = (a: number, b: number) => number;
// interface AddFn {
//   (a: number, b: number): number;
// }

let add: AddFn;

add = (b: number) => b;

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name?: string) {}

  greet(phrase: string): void {
    console.log(phrase + (this.name || 'Dzmitry'));
  }

  walk() {
    console.log('Walking...');
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet('Hi there! I am ');