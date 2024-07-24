function add(){
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    document.getElementById("ans").innerHTML="Answer is : "+(parseInt(a)+parseInt(b));
}

function sub(){
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    document.getElementById("ans").innerHTML="Answer is : "+(parseInt(a)-parseInt(b));
}

function mul(){
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    document.getElementById("ans").innerHTML="Answer is : "+(parseInt(a)*parseInt(b));
}

function div(){
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    document.getElementById("ans").innerHTML="Answer is : "+(parseInt(a)/parseInt(b)).toFixed(3);
}