// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve) => {
//   console.log(1111);
//   setTimeout(() => {
//     resolve('Thi is done!');
//   }, 2000);
// });

// promise.then((res) => console.log(res))

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const res = merge({ name: 'Dzmitry', hobbies: ['Sport'] }, { age: 30 });
console.log(res);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no value!';
  if (element.length === 1) {
    description = 'Got 1 element.';
  } else if (element.length > 0) {
    description = `Got ${element.length} elements`;
  }
  return [element, description];
}

console.log(countAndPrint('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  console.log('Value ' + obj[key]);
}

extractAndConvert({ name: 'Dzmitry' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Dzmitry');
textStorage.addItem('Varvara');

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Dzmitry' });
// objectStorage.addItem({ name: 'Carvara' });

// objectStorage.removeItem({ name: 'Dzmitry' });
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  desc: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.desc = desc;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Dzmitry', 'Sports'];
// names.push('Varvara');
