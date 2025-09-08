

// public
class Greeter {
    public greet() {
        console.log("hi!");
    }
}
const g = new Greeter();
g.greet();

// protected
class Greeter2 {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter2 {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g2 = new SpecialGreeter();
g2.greet(); // OK
// g.getName(); error

// private
class Base {
  // private x = 0;
}
const b = new Base();
// Can't access from outside the class
// console.log(b.x);