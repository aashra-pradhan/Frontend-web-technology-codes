function square(n){
    var s=n*n;
    return s;
}

var a=window.prompt("Enter a number");
var b=parseInt(a);
// to convert string to integer
var c=square(b);
window.alert("The square is =" + c);

