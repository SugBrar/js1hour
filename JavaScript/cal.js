
document.getElementById("addbtn").onclick = add2Numbers;
document.getElementById("subbtn").onclick = sub2Numbers;
document.getElementById("mulbtn").onclick = mul2Numbers;

function add2Numbers(){
    let a = document.getElementById("val1").value;
    let b = document.getElementById("val2").value;
    let res = parseInt(a) + parseInt(b);
    document.getElementById("Result").innerHTML=res;
}

function sub2Numbers(){
    let a = document.getElementById("val1").value;
    let b = document.getElementById("val2").value;
    let res = parseInt(a) - parseInt(b);
    document.getElementById("Result").innerHTML=res;
}

function mul2Numbers(){
    let a = document.getElementById("val1").value;
    let b = document.getElementById("val2").value;
    let res = parseInt(a) * parseInt(b);
    document.getElementById("Result").innerHTML=res;
}