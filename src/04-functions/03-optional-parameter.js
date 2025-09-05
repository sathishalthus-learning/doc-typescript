// optional parameters
function f(x) {
    console.log(x);
}
f(); // OK
f(10); // OK
// default
function f2(x) {
    if (x === void 0) { x = 10; }
    console.log(x);
}
f2(); // OK
