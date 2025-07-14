// type assertions

// as parameter
function printText(s: string, alignment: "left" | "right" | "center") {
  console.log(s);
  console.log(alignment);
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre");  // type error

// as return type
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

