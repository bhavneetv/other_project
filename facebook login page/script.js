
var war = document.getElementById("warning");
function first() {
    var firs = document.getElementById("name-input")
    var firstvalue = document.getElementById("name-input").value.length;
    var war = document.getElementById("warning1");



    if (firstvalue == 0) {
        firs.style.borderColor = "red";
        war.style.display = "block"
    }

    else {
        firs.style.borderColor = "black";
        war.style.display = "none"
    }


    firs.onclick = function () {

        var name = document.getElementById("name1");
        name.style.display = "block"



        firs.style.borderColor = "black";
        war.style.display = "none"

        firs.onblur = function () {
            name.style.display = "none"
            if (firstvalue == 0) {
                firs.style.borderColor = "red";
                war.style.display = "block"
            }
            first()
        }


    }


}

function second() {
    var firs = document.getElementById("last-input")
    var firstvalue = firs.value.length;
    var war = document.getElementById("warning2");



    if (firstvalue == 0) {
        firs.style.borderColor = "red";
        war.style.display = "block"
    }

    else {
        firs.style.borderColor = "black";
        war.style.display = "none"
    }


    firs.onclick = function () {

        var name = document.getElementById("name2");
        name.style.display = "block"



        firs.style.borderColor = "black";
        war.style.display = "none"

        firs.onblur = function () {
            name.style.display = "none"
            if (firstvalue == 0) {
                firs.style.borderColor = "red";
                war.style.display = "block"
            }
            second()
        }


    }


}
function third() {
    var firs = document.getElementById("mail")
    var firstvalue = firs.value.length;
    var war = document.getElementById("warning3");



    if (firstvalue == 0) {
        firs.style.borderColor = "red";
        war.style.display = "block"
    }

    else {
        firs.style.borderColor = "black";
        war.style.display = "none"
    }


    firs.onclick = function () {

        var name = document.getElementById("name3");
        name.style.display = "block"



        firs.style.borderColor = "black";
        war.style.display = "none"

        firs.onblur = function () {
            name.style.display = "none"
            if (firstvalue == 0) {
                firs.style.borderColor = "red";
                war.style.display = "block"
            }
            second()
        }


    }


}


// password show

var show = document.getElementById("show-pass");
var pass = document.getElementById("passwordd");

function shows() {
    var show = document.getElementById("show-pass");
    var lab = document.getElementById("label")
    var pass = document.getElementById("passwordd");
    if (show.checked == true) {

        lab.innerHTML = "Hide password"
        pass.type = "text";
    }
    else {
        pass.type = "password";
        lab.innerHTML = "Show password"
    }

}



// weak pass

function matchh() {
    var pass = document.getElementById("passwordd");
    var pass_tick = document.getElementById("pass-tick")
    var passlen = document.getElementById("passwordd").value.length;
    var passv = document.getElementById("passwordd").value;
    var name = document.getElementById("nam4")
    // window.alert(passlen)
    var cap = /[A-Z]/g
    var small = /[a-z]/g
    var num = /[0-9]/g
    var spe = /[!-*]/



    if (passv.match(cap) && passv.match(small) && passv.match(num) && passv.match(spe) && passlen >= 8) {

        pass_tick.style.display = "block";
        name.style.display = "none"
        pass.style.borderColor = "black"


    }

    else {
        pass_tick.style.display = "none";
        name.style.display = "block"
        pass.style.borderColor = "red"

    }






}
function aa() {
    var y = document.getElementById("bdya-year");
    var main = document.getElementById("bdya")
    var maina = document.getElementById("bdyaa")
    var zz = Number(document.getElementById("bdya-year").value);
    if (zz >= 12) {
        main.style.borderColor = "red"
        maina.style.borderColor = "red"
        y.style.borderColor = "red";
        window.alert("Must be above or at 12 year old !!")
    }

    else {
        y.style.borderColor = "black";
        main.style.borderColor = "black"
        maina.style.borderColor = "black"
    }

}


// submit btn


function submit()
{
    var month = document.getElementById("bdya")
    var y = document.getElementById("bdya-year");
    var zz = Number(document.getElementById("bdya-year").value);
    var pass = document.getElementById("passwordd");
    var passvalue = document.getElementById("passwordd").value;
    
    var day = document.getElementById("bdyaa")
    var mail = document.getElementById("mail")
    var mailvalue = mail.value.length;
    var war3 = document.getElementById("warning3");
    var last = document.getElementById("last-input")
    var lastvalue = last.value.length;
    var war2 = document.getElementById("warning2");
    var name = document.getElementById("name-input")
    var namevalue = name.value.length;
    var war1 = document.getElementById("warning1");
    var passlen = document.getElementById("passwordd").value.length;
    var passv = document.getElementById("passwordd").value;
    var name4 = document.getElementById("nam4")
    // window.alert(passlen)
    var cap = /[A-Z]/g
    var small = /[a-z]/g
    var num = /[0-9]/g
    var spe = /[!-*]/




    if(namevalue == 0 && lastvalue==0 && mailvalue<=3 && passvalue==0 && zz >= 12  )
    {
        pass.style.borderColor="red";
        month.style.borderColor="red";
        y.style.borderColor="red";
        day.style.borderColor="red";
        mail.style.borderColor="red";
        last.style.borderColor="red";
        name.style.borderColor="red";

        war1.style.display="block";
        war2.style.display="block";
        war3.style.display="block";
    }

    else{

        pass.style.borderColor="black";
        month.style.borderColor="black";
        y.style.borderColor="black";
        day.style.borderColor="black";
        mail.style.borderColor="black";
        last.style.borderColor="black";
        name.style.borderColor="black";

        war1.style.display="none";
        war2.style.display="none";
        war3.style.display="none";

        
    }


    var passv = document.getElementById("passwordd").value;
    // var name = document.getElementById("nam4")
    // window.alert(passlen)
    var cap = /[A-Z]/g
    var small = /[a-z]/g
    var num = /[0-9]/g
    var spe = /[!-*]/



    if (passv.match(cap) && passv.match(small) && passv.match(num) && passv.match(spe) && passlen >= 8  && mailvalue >=3 ) {

        pass_tick.style.display = "block";
        name4.style.display = "none"
        pass.style.borderColor = "black"
        window.open("https://www.facebook.com/")


    }

    else {
        pass_tick.style.display = "none";
        // name.style.display = "block"
        pass.style.borderColor = "red"
        

    }

}





// login page




function user() {
    var sec_mail = document.getElementById("sec-mail");
    var sec_pass = document.getElementById("sec-passs");
    var b = document.getElementById("sec-mail").value;
    var c = document.getElementById("sec-passs").value;
    var war5 = document.getElementById("war5");
    var war6 = document.getElementById("war6");

   
    if (b == "admin" && c == "Admin123@") {
        window.open("https://www.facebook.com")
        war5.style.display="none";
        war6.style.display="none";
        sec_mail.style.borderColor="black";
        sec_pass.style.borderColor="black";

    }

    else if (b == "admin" && c != "Admin123@") {
        // window.alert("Wrong Password!")
        war5.style.display="none";
        war6.style.display="block";
        sec_mail.style.borderColor="black";
        sec_pass.style.borderColor="red";


    } 
    else if (b != "admin" && c == "Admin123@") 
    {
        // window.alert("Wrong Username!")
        war5.style.display="block";
        war6.style.display="none";
        sec_mail.style.borderColor="red";
        sec_pass.style.borderColor="black";
    }

    else
    {
        // window.alert("Worng Username & Password!!")
        war5.style.display="block";
        war6.style.display="block";
        sec_mail.style.borderColor="red";
        sec_pass.style.borderColor="red";
    }

}
