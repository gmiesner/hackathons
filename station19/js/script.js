window.onload=function(){
  cubeAngle = 90;
  document.getElementById("cube").addEventListener("click", rotate);
}


function rotate(){
    cube.style.transform = "rotateY(" + cubeAngle +       "deg)";
    if (cubeAngle >= 90) {
        cubeAngle = cubeAngle + 90;
    }  
}