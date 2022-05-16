var circle = document.getElementById("circle");
var cimaBtn = document.getElementById("cimaBtn");
var baixoBtn = document.getElementById("baixoBtn");

var rotateValue = circle.style.transform;
var rotateSum; 

cimaBtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)"; 
    circle.style.transform = rotateSum; 
    rotateValue = rotateSum; 
}

baixoBtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)"; 
    circle.style.transform = rotateSum; 
    rotateValue = rotateSum; 
}
