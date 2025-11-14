var num1 = parseFloat(prompt("Enter your first number"));
var num2 = parseFloat(prompt("Enter your second number"));
var num3 = parseFloat(prompt("Enter your third number"));

if(num1 > num2 && num1 > num3){
    alert("The greatest number is " + num1);
}

else if(num2 > num3){
    alert("The greatest number is " + num2);
}

else{
    alert("The greatest number is " + num3);
}