function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    // console.log(number2);
    var total = number1 + number2;
    return total;

}

var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('result value: ', result);

function multiplyTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}


var total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication ', total);

//biyog koro duita sonkha
function substractTwoNumbers(num1, num2) {
    var subResult = num1 - num2;
    return subResult;
}

var substract = substractTwoNumbers(54, 100);
console.log('Substraction result: ', substract);

//vagfol ber koro
function divideTwoNumbers(num1, num2) {
    var division = num1 / num2;
    return division;
}

var divideResult = divideTwoNumbers(45, 21);
console.log('Division Result ', divideResult); 