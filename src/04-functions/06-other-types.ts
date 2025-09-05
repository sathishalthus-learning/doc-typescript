// void
// The inferred return type is void
function noop() {
  return;
}

// object 

// unknown
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  console.log(a);
//   a.b();
// 'a' is of type 'unknown'.
}

// never
function fail(msg: string): never {
  throw new Error(msg);
}

// Function
