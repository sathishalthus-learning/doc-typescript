
// functions
//parameter type annotation
function greet(name:string){
    console.log("hello " + name);
}
greet('javascript');
// return type annotation
function welcome(name:string):string{
    return "welcome "+name;
}
let message = welcome("typescript");
console.log(message);
// function return promises
async function getFavoriteNumber(): Promise<number> {
  return 26;
}

// anonymous functions
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});




