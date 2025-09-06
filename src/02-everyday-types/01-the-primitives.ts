
// primitives : string, number, boolean
const myName:string = 'sathish';
const myAge:number = 42;
const myStatus:boolean = true;
console.log(`type of myname is ` + typeof myName);
console.log(`type of myAge is ` + typeof myAge);
console.log(`type of myStatus is ` + typeof myStatus);

// arrays
let ages:number[] = [1,2,3,4];
console.log(`type of ages is ` + typeof ages);
let sums:Array<number> = [1,2,3,4];
console.log(`type of sums is ` + typeof sums);

// any
let anyData:any;
console.log("type of mydata is : " + typeof anyData);
anyData = 10;
console.log("type of mydata is : " + typeof anyData);
anyData = 'single';
console.log("type of mydata is : " + typeof anyData);
anyData = true;
console.log("type of mydata is : " + typeof anyData);


