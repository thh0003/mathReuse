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
7. toBaseX(number,base=10) - takes a number and returns a string converted to the designated base.  Javascript only has one Number "type".

#### Class Instantiation Notes
1. ES6 
    - Browser ES6 - I have included an example of using the Class in the folder examples->browsers-client.  If you are going to use the ES6 Class there are a few things you will need todo:
        - In your HTML file you must use the script attribute "type" of "module" this tells the browser it is a ES6 module. 
        
        > <script type="module" src="main.js"></script>


        - Because you are using the module type, the scope of the script is contained to your local javascript script tag or file.  Not Javascripts "Global" scope as in ES5.  So any listeners/mutations of the DOM need to be made within your script tag or JS file.
        - Use import MathReuse from '../src/math.js' to import the class into your script tag or JS file
    -Node.js - I have included an exmpale of using the Class in the folder examples->node-server
        - As you can see in the package.json you will need to install (@babel/core,@babel/preset-env,@babel/register)
        - Create a JS file which requires your application to start using @babel/register.
        - To start the example run  "node ./examples/ES6/node-server/start.js" from the root folder
3. Browser ES5 - I have included an ES5 compliant build in the "build" folder.  This was created using Babel 7.  I have not had time to test this version






 
