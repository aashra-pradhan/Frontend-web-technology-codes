function changeStyle(){
    //there are 3 ways to access an object(dom anusar onject ho); id bata, class 
    // name bata ya direct tag bata, ani we can use js to change html/css or even the content inside html tags

    var txt1 =document.getElementById("p1"); 
    txt1.style.color = "red"; 
    txt1.style.backgroundColor = "yellow";

    var txt1 =document.getElementById("p2"); 
    txt1.style.color = "blue"; 
    txt1.style.backgroundColor = "pink";

    var txt1 =document.getElementById("p3"); 
    txt1.style.color = "yellow"; 
    txt1.style.backgroundColor = "green";

    var txt1 =document.getElementById("p4"); 
    txt1.style.color = "brown"; 
    txt1.style.backgroundColor = "coral";


}
