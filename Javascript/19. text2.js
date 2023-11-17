function changeStyle(){
    //accessing through class
    var txt1 =document.querySelectorAll(".p"); //queryselectorall use garna milyo class/id/tag(basically sab bata) bata object access garna, alternative is getElementsByClassName,id,tagname;;;dubai le same kaam garne ho, query selector is easier
    txt1.forEach(text=>{ //jugal taught for each loop, arko prog ma normal for loop pani cha, check it
        //aba txt1 under sabai elements lai text bhanera janaincha(just like for each lop in java/c)
        text.style.color = "red";
    })

    txt1[0].style.backgroundColor = "pink"; //0,1,2,3 haru chai index,esari matra access garna milcha in class( sabai lai eutai kura garna loop chalaunuparyo like jugal and sir taught, mathi hera)
}
