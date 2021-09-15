/* In this example, you will learn to write a program that solves a quadratic equation in JavaScript.
This program computes roots of a quadratic equation when its coefficients are known.
The term b2-4ac is known as the discriminant of a quadratic equation. It tells the nature of the roots.
1. If the discriminant is greater than 0, the roots are real and different.
2. If the discriminant is equal to 0, the roots are real and equal.
3. If the discriminant is less than 0, the roots are complex and different.
*/

var root1, root2;

var a = prompt('Enter the first number a');
var b = prompt('Enter the second number b');
var c = prompt('Enter the third number c');

// a should not be equal to 0 so let's apply condition

if(a == 0){
   a = prompt('Kindly enter the non zero number a');
}

// now let's declare the discriminent to check weather different conditions.

let discriminent = (b*b) - (4*a*c);

console.log(discriminent);

// check if discriminent is greater than zero then roots are real and different
if(discriminent>0){
    root1 = (-b + Math.sqrt(discriminent)) / (2*a) ;
    root2 = (-b - Math.sqrt(discriminent)) / (2*a) ;

    console.log(`The roots of quadratic equation are ${root1.toFixed(2)} and ${root2.toFixed(2)}`);
}

else if(discriminent === 0){
    root1 = root2 = -b / (2*a);

    console.log(`The roots of quadratic equation are ${root1.toFixed(2)} and ${root2.toFixed(2)}`);
}

else {
    let realPart = -b / (2*a);
    let ImaginaryPart = (Math.sqrt(-discriminent)) / (2*a);

    console.log(`The roots of quadratic equation are ${realPart.toFixed(2)} + ${ImaginaryPart.toFixed(2)}i and ${realPart.toFixed(2)} - ${ImaginaryPart.toFixed(2)}i`);
}

