//this is client side validation, where we validate null cha ki chaina, length of password,
//email maagda @ cha ki chaina, first name matra maagda user le spaces diyecha bhane thats 
//full name so invalid first name, name ma kunai special character aaye identify
// garera invalid bhanne and so on. So yo sabai aafai try gara w w3schools.

function formValidation(){
    var txtbox1=document.getElementById("uname");
    var txtbox2=document.getElementById("upass");
    var txtbox3 =document.getElementById("uem");
    var txtbox4 =document.getElementById("uadd");

    if(txtbox1.value == ""){  //"" is null, if ko satta switch case use garda ni ok, thats better
        window.alert("Please enter your username and it should be valid");
        txtbox1.focus(); //yo khali bhayera submit fail bhaye aba the first box is focussed so that the user can type directly
        txtbox1.style.border="3px solid black";
        txtbox1.style.backgroundColor="yellow";
        return false; //yo lekhena bhane hamro action wala page khulcha, considers true if not written
    }

    if(txtbox2.value == "" || txtbox3.value=="" || txtbox4.value==""){  //esari sangai rakhna ni milcha "or" use garera
        window.alert("Please enter ALL DETAILS");
        return false; 
    }


    if(txtbox2.value.length<=8){
        window.alert("Password should be more than 8 characters");
        txtbox2.focus(); 
        txtbox2.style.border="3px solid black";
        txtbox2.style.backgroundColor="yellow";
        return false; 
    }
}
