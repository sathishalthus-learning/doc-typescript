
class MyClass {
    // basic
    static x = 0;

    // access modifiers
    private static y = 0;

    // basic
    static printX() {
        console.log(MyClass.x);
    }
}
console.log(MyClass.x);
MyClass.printX();

// only accesible inside class, will produce error
// console.log(MyClass.y);

// inherited
class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}
