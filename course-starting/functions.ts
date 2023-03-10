function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result is: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (v: number) => void) {
  const result =  n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;

addAndHandle(2, 5, (res) => {
  console.log(res);
});

// console.log(combineValues(2, 4));
