function changeStyle(){

    //accessing through tag
    
    var txt1 =document.getElementsByTagName("h1");
    txt1[0].style.color="red";
     //esma ni classname ma jastai each object ko index huncha, 0,2,3

    var txt2 =document.getElementsByTagName("h2");
    txt2[0].style.color="blue";
   
}
