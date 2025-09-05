
//
let x: "hello" = "hello";
// OK
x = "hello";
// 
// x = "howdy"; // errror


function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); error

//
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}


//
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic"); error





