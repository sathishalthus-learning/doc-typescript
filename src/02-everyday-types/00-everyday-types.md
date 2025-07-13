# Everyday Types

### The Primitives
- string, number and boolean
- string represents sequence of characters
- number for numeric values, js has no special runtime for int/float, so everything is number
- boolean is for true, false

### Arrays
- group similar values
- number[] , string[], boolean[]

### any
- a special type that have no particular value not to cause typechecking
- noImplicitAny

### Type Annotations on Varibales
- add type annotation with a colon to the varibale
- typescript uses types on the right side.

### Functions
#### Parameter type annotations
- when declaring a funtion, can add type annotations 
- when parameter passed , typecheck will be checked
#### Return type annotations
- can add return type annotations after parameter list
- function which return promises, Promise<type>
#### Anonymous functions (foreach)

### Object Types
- value and property type

### Union Types
- to build types out of existing types
- combining types
#### define union type
- use | operator with different types
#### working with union types
- primitive types can be used with | operator
- make sure the type of the value before using (narrowing)
- in case of using an array, use Array.isArray 

### Type Aliases
- if a custome type needed to define more variables
- type definition is handy



