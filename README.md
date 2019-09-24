# MathReuse - Reusable Math Library

### West Virginia Univeristy - SENG 560 - Software Reuse - Programming Assignment #1

##### MathReuse - Description

MathReuse is a Javascript Class which provides simple math functions (Add, Subtract, Multiply, Divide, Exponent, Square Root, Convert from Base 10 to other Bases).  It was written using ES6 syntax and has been tested for Node using Mocha-Chai and for the browser.  

The main ES6 class file is math.js and is located in the "src" subfolder. The test script used to test the ES6 version is located in the "test" subfolder of this repository.  There is an example of how to use the class in the browser in the "example" folder.  It is also available for use at: https://www.pgesoftware.com/MathReuse/examples/

I also provided an ES5 compatible build using Babel v7 which is located in the "build" subfolder.  I have not tested this build.

#### Class Functions
1. add (num1, num2) - takes 2 numbers and returns their sum
2. multiply (num1, num2) - takes 2 numbers and returns their product
3. subtract (num1, num2) - takes 2 numbers and returns their difference of num1 - num2
4. divide (numerator=0, denominator=0) takes 2 numbers numberator and denominator and returns a quotient
5. exp (base=0, factor=0) - takes a base and a factor and returns product
6. sqrroot(radicand) - takes a nonnegative real number (radicand) and returns its principal square root
7. toBaseX(number,base=10) - takes a number and return it converted to the designated base






 
