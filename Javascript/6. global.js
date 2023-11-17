
var name1="ram";

function myfunction(){
    document.write(name1);
    var name2="sita";
    name3="riya";
}

myfunction();
document.write(name2);
// yo print hunna aba cause name2 is local variable and cannot be accesed outside the function
document.write(name3);
// yo chai print huncha(keyword kei narakhi variable define garyo bhane local variable becomes global automatically)