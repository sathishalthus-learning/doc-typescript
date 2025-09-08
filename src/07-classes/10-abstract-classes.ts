// 
abstract class AbstractBase {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
class AbstractDerived extends AbstractBase {
  getName() {
    return "world";
  }
}
 
const d = new AbstractDerived();
d.printName();