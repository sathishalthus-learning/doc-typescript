# Functions

### Function Type Expressions
- syntactically simila to arrow functions

### Call Signatures 
### Construct Signatures

### Generic Functions
- by declaring a type parameter in function signature
    ```
    function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
    ```
- Type is inferred from the signature
- multiple types also can be used similar to map
- contraints 
}

### Optional Parameters
- optional parameter
- default parameter
- optional parameters in callbacks

### Function Overloads
- redefine and use with different argument count and types
- overload signature and implementations
- writing good overloads

### this 
-infers the this what it should be

### other types to know 
- void represents return value of function
- infered when it is not present, or explicitly retrun nothing
- object - special type which is not primitive
- unknown - 
- never - functions never return a value
- Function - 

### Rest Parameters and Arguements
- ... notations
- type implicits to any[]
- rest arguements

### Parameter Destructuring
- unpacking object into more local variables

### Assignability of functions
