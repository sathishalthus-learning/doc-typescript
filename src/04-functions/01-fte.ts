// function type expressions

// a parameter , return nothing
function fteGreeter(fn: (a: string) => void) {
  fn("Hello, World");
}
// one parameter , return any
function printToConsole(s: string) {
  console.log(s);
}
fteGreeter(printToConsole);

// fte alias
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  console.log(fn);
}

// call signatures
// construct signature


