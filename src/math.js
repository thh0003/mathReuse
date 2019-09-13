exports.addition = (numbers, type=10) => {
    //takes and array and returns a value of the sum of the array's contents
    try {
        //Make sure the array is not empty and exists
        if ( !Array.isArray(numbers) || !numbers.length) {
            return "ERROR: EMPTY ARRAY CHECK YOUR INPUTS";
        } else {
            //add the numbers
            sum = numbers.reduce((total, num) => {
                return total + num;
            });
            // check the sum to make sure it is a number
            if (isNaN(sum)) return "NOT INTEGER: CHECK INPUTS";
            //return the sum
            return sum.toString(type);
        }
    } catch (error) {
        return error;
    }
};

exports.multiplication = (numbers, type=10) => {
    //takes and array and returns a value of the product of the array's contents
    try {
        //Make sure the array is not empty and exists
        if ( !Array.isArray(numbers) || !numbers.length) {
            return "ERROR: EMPTY ARRAY CHECK YOUR INPUTS";
        } else {
            //muliple the numbers
            product = numbers.reduce((total, num) => {
                return total * num;
            });
            // check the product to make sure it is a number
            if (isNaN(product)) return "NOT INTEGER: CHECK INPUTS";
            //return the sum
            return product.toString(type);
        }
    } catch (error) {
        return error;
    }
};

exports.subtraction = (numbers, type=10) => {
    //takes and array and returns the difference.  1st element = Minuend, Rest of Elements = Subtrahend
    try {
        //Make sure the array is not empty and exists and has at least a Subtrahend
        if ( !Array.isArray(numbers) || !numbers.length) {
            return "ERROR: EMPTY ARRAY CHECK YOUR INPUTS";
        } else {
            //subtract the numbers the numbers
            difference = numbers.reduce((total, num) => {
                return total - num;
            });
            // check the difrerence to make sure it is a number
            if (isNaN(difference)) return "NOT INTEGER: CHECK INPUTS";
            //return the sum
            return difference.toString(type);
        }
    } catch (error) {
        return error;
    }
};

exports.multiplication = (numbers, type=10) => {
    //takes and array and returns a value of the product of the array's contents
    try {
        //Make sure the array is not empty and exists
        if ( !Array.isArray(numbers) || !numbers.length) {
            return "ERROR: EMPTY ARRAY CHECK YOUR INPUTS";
        } else {
            //muliple the numbers
            product = numbers.reduce((total, num) => {
                return total * num;
            });
            // check the product to make sure it is a number
            if (isNaN(product)) return "NOT INTEGER: CHECK INPUTS";
            //return the sum
            return product.toString(type);
        }
    } catch (error) {
        return error;
    }
};

exports.division = (numerator=0, denominator=0, type=10) => {
    //takes 2 numbers numberator and denominator and returns a quotient
    try {
        //Make sure the denomintor is not 0
        if ( denominator == 0) {
            return "ERROR: DIVISION BY ZERO NOT ALLOWED CHECK YOUR INPUTS";
        } else {
            //Divide the numbers
            let quotient = numerator/denominator;
            // check the quotient to make sure it is a number
            if (isNaN(quotient)) return "NOT INTEGER: CHECK INPUTS";
            //return the sum
            return quotient.toString(type);
        }
    } catch (error) {
        return error;
    }
};

exports.sqrroot = (numbers, type=10) => {
    //takes and array and returns a value of the square root of each
    try {
        //Make sure the array is not empty and exists
        if ( !Array.isArray(numbers) || !numbers.length) {
            return "ERROR: EMPTY ARRAY CHECK YOUR INPUTS";
        } else {
            //add the numbers
            sum = numbers.map((num) => {
                return num;
            });
            // check the sum to make sure it is a number
            if (isNaN(sum)) return "NOT INTEGER: CHECK INPUTS";
            //return the sum
            return sum.toString(type);
        }
    } catch (error) {
        return error;
    }
};