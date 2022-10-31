

document.getElementById("demo1").innerHTML="This is Dynamic text message"
document.getElementById("demo2").innerHTML="Hello! Javascript"
document.getElementById("myButton").onclick=displayDate;

function displayDate(){
		document.getElementById("mydate").innerHTML=Date();
}