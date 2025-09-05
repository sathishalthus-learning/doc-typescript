// rest
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

// rest args
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);



