let buttonPaint = document.getElementById("submit"); // Encuentra el elemento "p" en el sitio
buttonPaint.onclick = paintPoint; // Agrega función onclick al elemento


let pointX;
let pointY;
let prevX;
let prevY;
function paintPoint(e) {

    pointX = document.getElementById("pointX");
    pointY = document.getElementById("pointY");
    
    if(parseFloat(pointX.value) && parseFloat(pointY.value)){
        ctx.beginPath();
        ctx.arc(parseFloat(pointX.value),-parseFloat(pointY.value),10,0*Math.PI,2*Math.PI);
        ctx.fill();
        ctx.stroke();
        
    }else{
 
        
        alert("Insert a valid number");
  }

}


document.getElementById("clear").addEventListener('click', function(){
location.reload();
});
 

function showCoords(event) {
    var x = event.clientX - 10;
    var y = event.clientY - 10;
    var coords = "X coordinates: " + x + ", Y coordinates: " + y;
    document.getElementById('showCoords').innerHTML = coords;
  
  }