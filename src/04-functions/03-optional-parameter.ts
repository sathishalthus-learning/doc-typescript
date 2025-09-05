// optional parameters

function f(x?: number) {
  console.log(x);
}
f(); // OK
f(10); // OK

// default
function f2(x=10) {
  console.log(x);
}
f2(); // OK


