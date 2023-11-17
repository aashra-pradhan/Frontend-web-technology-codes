function add(a,b){ 
    var c=a+b;
    window.alert("The string sum of number is=" + c);
    window.confirm("Do you wanna exit the program?");
    window.prompt("Please give your feedback!");
}

var a=window.prompt("Enter first number:");
var b=window.prompt("Enter second number:");

// prompt bata chai string input hune ho ani string ko chai sum bhayeko ho,
//  pachi we got functions to convert string to numeric, so can do that later


add(a,b);