
// object type
// js value with properties

// The parameter's type annotation is an object type
function printCoords(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoords({ x: 3, y: 7 });

// optioanl parameter
function printName(obj: { first: string; last?: string }) {
  console.log(obj.first + obj.last)
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });