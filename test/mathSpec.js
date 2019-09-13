var expect    = require("chai").expect;
var math = require("../src/math");
let numbers5 = [5,5,5,5]; //addition = 20, subtraction = -10 , multiplication = 625
let numbersOct = [07, 016, 021] //addition = 46, subtraction = -30, multiplication = 3 202
let numbersHex = [0x1, 0x5, 0x5] //addition = b, subtraction = -9 , multiplication = 19
let numbersBin = [0b1, 0b10001, 0b11100000001] //addition = 11100010011, subtraction = -11100010001 ,multiplication = 111011100010001
let numbers_null = [];
let numbers0 = [0,1,2,3,4]; // addition = 10, subtractions = -10, multiplication = 0
let numbers_neg = [-5, -10, 5, 5]; // addition = -5, subtraction = -5, multiplication = 1250
let notallnumbers = ["Hello", 2, 1, "Cheeseburger"];
let intanddbl = [1,1.5,0,1.1134];

describe("Reusable Math Library", function() {
  describe("Addition", function() {
    it("Takes an array of positive numbers and returns the value of their sum", function() {
      let addedNum5 = math.addition(numbers5);
      expect(addedNum5).to.equal('20');
    });
    it("Takes an array of positive binary numbers and returns the value of their sum", function() {
      let addedNumB = math.addition(numbersBin,2);
       expect(addedNumB).to.equal('11100010011');
    });
    it("Takes an array of positive Octal numbers and returns the value of their sum", function() {
       let addedNumOct = math.addition(numbersOct, 8);
      expect(addedNumOct).to.equal('46');
     });
    it("Takes an array of positive Hex numbers and returns the value of their sum", function() {
      let addedNumHex = math.addition(numbersHex, 16);
      expect(addedNumHex).to.equal('b');
    });

    it("Takes an array of non negative numbers and returns the value of their sum", function() {
      let addedNum0 = math.addition(numbers0);
      expect(addedNum0).to.equal('10');
    });

    it("Takes an empty array and returns null", function() {
      let addedNumNull = math.addition(numbers_null);
      expect(addedNumNull).to.equal("ERROR: EMPTY ARRAY CHECK YOUR INPUTS");
    });
      
    it("Takes an array of numbers and returns the value of their sum", function() {
      let addedNumNeg = math.addition(numbers_neg);
      expect(addedNumNeg).to.equal('-5');
    });

    it("If the summed value is not a number return an error", function() {
      let addnotnum = math.addition(notallnumbers);
      expect(addnotnum).to.equal("NOT INTEGER: CHECK INPUTS");
      
    }); 

  });

  describe("Subtraction", function() {
    it("Takes an array of positive numbers and returns the difference", function() {
      let addedNum5 = math.subtraction(numbers5);
      expect(addedNum5).to.equal('-10');
    });
    it("Takes an array of positive binary numbers and returns the value of their difference", function() {
      let addedNumB = math.subtraction(numbersBin,2);
       expect(addedNumB).to.equal('-11100010001');
    });
    it("Takes an array of positive Octal numbers and returns the value of their difference", function() {
       let addedNumOct = math.subtraction(numbersOct, 8);
      expect(addedNumOct).to.equal('-30');
     });
    it("Takes an array of positive Hex numbers and returns the value of their difference", function() {
      let addedNumHex = math.subtraction(numbersHex, 16);
      expect(addedNumHex).to.equal('-9');
    });

    it("Takes an array of non negative numbers and returns the value of their difference", function() {
      let addedNum0 = math.subtraction(numbers0);
      expect(addedNum0).to.equal('-10');
    });

    it("Takes an empty array and returns error", function() {
      let addedNumNull = math.subtraction(numbers_null);
      expect(addedNumNull).to.equal("ERROR: EMPTY ARRAY CHECK YOUR INPUTS");
    });
      
    it("Takes an array of numbers and returns the value of their difference", function() {
      let addedNumNeg = math.subtraction(numbers_neg);
      expect(addedNumNeg).to.equal('-5');
    });

    it("If the summed value is not a number return an error", function() {
      let addnotnum = math.subtraction(notallnumbers);
      expect(addnotnum).to.equal("NOT INTEGER: CHECK INPUTS");
      
    }); 

  });

  describe("Muliplication", function() {
    it("Takes an array of positive numbers and returns the value of their product", function() {
      let addedNum5 = math.multiplication(numbers5);
      expect(addedNum5).to.equal('625');
    });
    it("Takes an array of positive binary numbers and returns the value of their product", function() {
      let addedNumB = math.multiplication(numbersBin,2);
       expect(addedNumB).to.equal('111011100010001');
    });
    it("Takes an array of positive Octal numbers and returns the value of their product", function() {
      let addedNumOct = math.multiplication(numbersOct, 8);
      expect(addedNumOct).to.equal('3202');
    });
    it("Takes an array of positive Hex numbers and returns the value of their product", function() {
      let addedNumHex = math.multiplication(numbersHex, 16);
      expect(addedNumHex).to.equal('19');
    });
    it("Takes an array of non negative numbers and returns the value of their product", function() {
      let addedNum0 = math.multiplication(numbers0);
      expect(addedNum0).to.equal('0');
    });

    it("Takes an empty array and returns null", function() {
      let addedNumNull = math.multiplication(numbers_null);
      expect(addedNumNull).to.equal("ERROR: EMPTY ARRAY CHECK YOUR INPUTS");
    });
      
    it("Takes an array of numbers and returns the value of their product", function() {
      let addedNumNeg = math.multiplication(numbers_neg);
      expect(addedNumNeg).to.equal('1250');
    });

    it("If the summed value is not a number return an error", function() {
      let addnotnum = math.multiplication(notallnumbers);
      expect(addnotnum).to.equal("NOT INTEGER: CHECK INPUTS");
      
    }); 
  });

  describe("Division", function() {
    it("Takes 2 numbers numerator and denominator and returns a quotient", function() {
      let addedNum5 = math.division(numbers5[0],numbers5[1]);
      expect(addedNum5).to.equal('1');
    });
    it("Takes 2 binary numbers numerator and denominator and returns a quotient", function() {
      let addedNumB = math.division(numbersBin[0], numbersBin[1],2);
       expect(addedNumB).to.equal('0.00001111000011110000111100001111000011110000111100001111');
    });
    it("Takes 2 octal numbers numerator and denominator and returns a quotient", function() {
      let addedNumOct = math.division(numbersOct[0], numbersOct[1], 8);
      expect(addedNumOct).to.equal('0.4');
    });
    it("Takes 2 hex numbers numerator and denominator and returns a quotient", function() {
      let addedNumHex = math.division(numbersHex[0],numbersHex[1], 16);
      expect(addedNumHex).to.equal('0.33333333333334');
    });
    it("Takes 0 as the denomitor and returns an error", function() {
      let divNumZero = math.division(0,0);
      expect(divNumZero).to.equal('ERROR: DIVISION BY ZERO NOT ALLOWED CHECK YOUR INPUTS');
    });

    it("If the quotient is not a number return an error", function() {
      let addnotnum = math.division(notallnumbers[0],notallnumbers[1]);
      expect(addnotnum).to.equal("NOT INTEGER: CHECK INPUTS");
      
    }); 
  });

  describe("Square Root", function() {
    it("Takes an array of positive numbers and returns square root of each", function() {
      let addedNum5 = math.sqrroot(numbers5);
      expect(addedNum5).to.equal('20');
    });
    it("Takes an array of positive binary numbers and returns the square root of each", function() {
      let addedNumB = math.sqrroot(numbersBin,2);
       expect(addedNumB).to.equal('11100010011');
    });
    it("Takes an array of positive Octal numbers and returns the square root of each", function() {
       let addedNumOct = math.sqrroot(numbersOct, 8);
      expect(addedNumOct).to.equal('46');
     });
    it("Takes an array of positive Hex numbers and returns the square root of each", function() {
      let addedNumHex = math.sqrroot(numbersHex, 16);
      expect(addedNumHex).to.equal('b');
    });

    it("Takes an array of non negative numbers and returns the square root of each", function() {
      let addedNum0 = math.sqrroot(numbers0);
      expect(addedNum0).to.equal('10');
    });

    it("Takes an empty array and returns null", function() {
      let addedNumNull = math.sqrroot(numbers_null);
      expect(addedNumNull).to.equal("ERROR: EMPTY ARRAY CHECK YOUR INPUTS");
    });
      
    it("Takes an array of numbers and returns the value square root of each", function() {
      let addedNumNeg = math.sqrroot(numbers_neg);
      expect(addedNumNeg).to.equal('-5');
    });

    it("If the summed value is not a number return an error", function() {
      let addnotnum = math.sqrroot(notallnumbers);
      expect(addnotnum).to.equal("NOT INTEGER: CHECK INPUTS");
      
    }); 

  });
  
});
