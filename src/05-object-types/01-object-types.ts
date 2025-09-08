//

// anonoymous
function greet1(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

// interface
interface PersonA {
  name: string;
  age: number;
}
 
function greet2(person: PersonA) {
  return "Hello " + person.name;
}

// type alias
type PersonB = {
  name: string;
  age: number;
};
 
function greet3(person: PersonB) {
  return "Hello " + person.name;
}