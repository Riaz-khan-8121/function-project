// addTwoNumbers


// function sum(num1, num2) {
//     console.log(num1 + num2);
// }
// sum(12,32)


// subtractNumbers

// function subtract(num1 , num2) {
//     console.log(num1 - num2);
// }

// subtract(12,32);



// multiplyNumbers

// function multi(num1 , num2) {
//     console.log(num1 * num2);
// } 

// multi(3,4)



// divideNumbers

// function divide(num1 , num2) {
//     if (num2 != 0) {
//         console.log(num1 / num2);
//     }
// }

// divide(10,2)



//  getRemainder

// function remaind(num1 , num2) { 
//         console.log(num1 % num2);
// }

// remaind(6,3)


// isPositive

// function positive(num) {
//     if(num > 0) {
//         console.log('positive')
//     } else {
//         console.log('negative')
//     }
// } 

// positive(12,32)



// isNegative

// function negative(num) {
//     if(num < 0) {
//         console.log('negative')
//     }
//     else {
//         console.log('positive')
//     }
// }
// negative(-21);



// checkEven

// function checkEven(num) {
//     if(num%2==0) {
//         console.log(num +'is a Even Number')
//     }
// }

// checkEven(22);



// Equal

// function equal(num1, num2) {
//     if(num1 == num2) {
//         return 'equal';
//     } else {
//         return 'not equal';
//     }
// }

// let equi=equal(12,32);
// console.log(equi);


//  compareNumbers

// function compareNum(num1, num2) {
//     if(num1 > num2) {
//         return 'greater';
//     } else {
//         return 'smaller';
//     }
// }
// compareNum(2,3);



// getFullName

// function getFullName(first, last) {
//     return first + ' ' + last;
// }
// let name=getFullName('Riaz' , 'khan')

// console.log(name)



// getGrade

// function Grade(num) {
//     if(num >= 40 && num<=100) {
//         return 'pass';
//     } else {
//         return 'fail';
//     }
// }

// let gra=Grade(12);
// console.log(gra)



// isTeenager

// function isTeenager(age) {
//     if( age >= 19 && age <= 19) {
//         return 'Teenager';
//     } else {
//         return 'Not a Teenager';
//     }
// }

// let age=isTeenager(20);
// console.log(age);



// greetUser

// function greetName(name) {
//     return 'Hello, ' + name ;
// }
// let name=greetName('Riaz');
// console.log(name);



// isEligibleToVote

// function isEligibleToVote(age) {
//     if(age >= 18) {
//         return 'Eligible to Vote';
//     } else {
//         return 'Not Eligible to Vote';
//     }
// }
// let age=isEligibleToVote(20);
// console.log(age);



// checkTemperature

// function checkTemp(temp) {
//     if(temp >=30) {
//         return 'Hot';
//     } else if(temp <=10) {
//         return 'Cold';
//     } else {
//         return 'Normal';
//     }
// }
// let temp=checkTemp(20);
// console.log(temp);



// getTriangleType

// function triangle (side1, side2, side3) {
//     if (side1 == side2 == side3) {
//         return 'Equilateral Triangle';
//     } else if(side1==side2 || side2==side3 || side1==side3) {
//         return 'Isosceles Triangle';
//     } else {
//         return 'Scalene Triangle';
//     }
// }
// let sides=triangle(5,5,5);
// console.log(sides);



// calculateDiscountedPrice

// function calDisPrice(price, discountPercentage) {
//     const discount = (price * discountPercentage) / 100;
//     return price - discount;
//   }
  
// console.log(calDisPrice(100 , 30));




// isPasswordValid

function passValid(password) {
    if (password.length >= 8) {
      return "Valid Password";
    } else {
      return "Too Short";
    }
  }

  console.log(passValid('Riazkhan8121'))