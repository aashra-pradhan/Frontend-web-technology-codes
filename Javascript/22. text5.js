function changeStyle(){

    //changing content(text) of tag--by using innerHTML
    
    var txt1 =document.getElementsByTagName("p");
    txt1[0].innerHTML="Hi i replaced this text using innerHTML";
    txt1[1].innerHTML="another replacement using innerHTML";   
}

function addText(){
    var txt1 =document.getElementsByTagName("p");
    var t1=txt1[0].innerHTML;
    var t2=txt1[1].innerHTML;
    var t3=txt1[2].innerHTML= t1+t2; //tyo khali p tag ma yo display huncha

    
    var t1=txt1[0].innerHTML="";
    var t2=txt1[1].innerHTML="";
    //add garesi pahila ko paras hataideko null halera
}

//go and explore  more on w3schools and aruharu