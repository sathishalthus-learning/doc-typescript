// does not explicitly specified
{
let a = 123;
let b = '12345';
let c = true;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

}

//  type annotations
{
    let a:number = 123;
    let b:string = '12345';
    let c:boolean = true;
    let d:any = 123; // skips typechecking
    

    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
}