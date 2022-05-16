var circle = document.getElementById("circle");
var cimaBtn = document.getElementById("cimaBtn");
var baixoBtn = document.getElementById("baixoBtn");

var valorRotativo = circle.style.transform;
var rotateSum; 

cimaBtn.onclick = function()
{
    rotateSum = valorRotativo + "rotate(-90deg)"; 
    circle.style.transform = rotateSum; 
    valorRotativo = rotateSum; 
}

baixoBtn.onclick = function()
{
    rotateSum = valorRotativo + "rotate(-90deg)"; 
    circle.style.transform = rotateSum; 
    valorRotativo = rotateSum; 
}
