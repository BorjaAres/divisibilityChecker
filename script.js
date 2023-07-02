let num1 = prompt("Enter a number as the Dividend");
let num2 = prompt("Now enter a number as the divisor");

result = num1 % num2;

console.log(result);
if (result === 0) {
    document.getElementById('myDiv1').innerHTML = "Divisible";
} else {
    document.getElementById('myDiv2').innerHTML = "Not divisible";
}