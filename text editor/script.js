function run()
{
    var a = document.getElementById("code").value;
    var input= document.getElementById("input");
    // window.alert(a)
    var output = document.getElementById("output-codes");
    var outputfeildset = document.getElementById("output");
    output.innerHTML=a;
    outputfeildset.style.display="block";
    var btn = document.getElementById("run-btn")
    var backbtn = document.getElementById("back-btn")
    input.style.display="none";
    backbtn.style.display="block";
    btn.style.display="none";
    outputfeildset.getAttribute("class","animate__animated animate__SlideInLeft")

}
function back()
{
    var a = document.getElementById("code").value;
    var input= document.getElementById("input");
    // window.alert(a)
    var output = document.getElementById("output-codes");
    var outputfeildset = document.getElementById("output");
    // output.innerHTML=a;
    outputfeildset.style.display="none";
    input.style.display="block";
    var btn = document.getElementById("run-btn")
    var backbtn = document.getElementById("back-btn")
    backbtn.style.display="none";
    btn.style.display="block";
    outputfeildset.getAttribute("class","animate__animated animate__SlideInLeft")


}

