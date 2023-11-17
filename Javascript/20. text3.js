function changeStyle(){
    //accessing through class
    var txt1 =document.getElementsByClassName("p");
    for(var i=0;i<=txt1.length;i++)
    {
        txt1[i].style.color="pink"; //yo "" is mandatory hai sabai tira , mathi class/id name ma pani
    }
   
}