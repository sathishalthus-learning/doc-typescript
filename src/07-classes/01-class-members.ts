// class members

class Sample { 
    // fields
    x: number= 0; 
    y: string= "0";

    // readonly pr
    readonly name: string = "world";

    // constructor
    constructor(){
        // super 
        
        this.name="hello";

    }
}
const s2 = new Sample();
s2.x = 123;
s2.y = 'sample';



