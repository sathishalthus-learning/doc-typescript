interface Box<Type> {
  contents: Type;
}
let box: Box<string>;


// type alias
type Cube<Type> = {
  contents: Type;
};



// tuple type
type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
  const a = pair[0];
    // const a: string
    console.log(a);
  const b = pair[1];
    // const b: number
    console.log(b);

    // destructuring
    const [input, hash] = pair;
    console.log(input,hash);
}
 
doSomething(["hello", 42]);
