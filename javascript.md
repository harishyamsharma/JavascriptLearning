# What is Javascript?
Javascript an object-oriented computer programming language commonly used to create interactive effects within web browser,

# Difference b/w Let & Var ?
In the early days of JavaScript, there was only one way of declaring variables and that was using the var keyword. A variable declared with var is defined throughout the program. One of the issues with using the var keyword was redeclaring a variable inside a block will also redeclare the variable outside the block. 

With the introduction of ES6 in 2015 two more keywords, let and const came into the picture. var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted. 

# What is Data types in Js. 


## JavaScript has 8 Datatypes

1. String => " Hari"
2. Number => 2345
3. Bigint => 123456789
4. Boolean => True
5. Undefined 
6. Null
7. Symbol
8. Object

## The Object Datatype

The object data type can contain:

1. An object
2. An array
3. A date

Note : A JavaScript variable can hold any type of data. 


## Difference between Primitive & Non-Primitive Datatyes ?

The difference between [primitive and non primitive](https://datatrained.com/post/difference-between-primitive-and-non-primitive/) data types is that nonprimitives can store multiple values within one object, while primitives only store single values. For example, a nonprimitive such as an array can contain several integers (like 10, 50 and 25), whereas a primitive like int can only store one integer at one time (such as 10).

[Primitive & Non-Primitive Datatyes](https://datatrained.com/post/difference-between-primitive-and-non-primitive/)


## What is string in javaacript ?

A JavaScript string stores a series of characters like "John Doe". A string can be any text inside double or single quotes: let carName1 = "Volvo XC60"; let carName2 = 'Volvo XC60'; Try it Yourself


## What is number in javascript ?

Number is a built-in object that represents numeric values. It is used for handling and performing operations on numbers.

        let num = 42; // A number
        let pi = 3.14159; // A floating-point number

        console.log(Number.MAX_VALUE); // Prints the largest possible number
        console.log(Number.isNaN(NaN)); // true
        console.log(Number.isInteger(42)); // true

## What is Math in javascript ?

Math is a built-in object that provides mathematical constants and functions. It does not have a constructor, so all its properties and methods are static.

        console.log(Math.PI); // 3.141592653589793
        console.log(Math.sqrt(16)); // 4
        console.log(Math.random()); // Random number between 0 and 1
        console.log(Math.max(1, 5, 10)); // 10
        console.log(Math.pow(2, 3)); // 8 (2^3)


## What is date in javascript ?    

In JavaScript, Date is a built-in object used to work with dates and times. It provides functionality to create, manipulate, and format date and time values.

Current Date and Time:

        let now = new Date();
        console.log(now); // Outputs the current date and time

Specific Date and Time:

        let specificDate = new Date('2024-12-31T12:00:00');
        console.log(specificDate); // Outputs: Tue Dec 31 2024 12:00:00

Using Year, Month, Day, etc.:

        let customDate = new Date(2024, 11, 31, 12, 0, 0); // Month is 0-indexed (11 = December)
        console.log(customDate); // Outputs: Tue Dec 31 2024 12:00:00

From a Timestamp:

        let fromTimestamp = new Date(1672531200000); // Milliseconds since Jan 1, 1970
        console.log(fromTimestamp); // Outputs a date based on the timestamp
