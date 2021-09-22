 canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d")
var color = "teal"
var lineWidth = 1
var lastpositionX,lastpostionX
var currentpostionX,currentpostionY
 var width = screen.width
 var newWidth = screen.width - 70
 var newHeight = screen.height - 100
 if (width<=992){
     document.getElementById("myCanvas").width = newWidth
     document.getElementById("myCanvas").Height = newHeight
     document.body.style.overflow= "hidden"
 }
 canvas.addEventListener("touchstart",myTouchStart)
  function myTouchStart(e){
 lastpositionX = e.touches[0].clientX- canvas.offsetLeft
 lastpositionY = e.touches[0].clientY -canvas.offsetTop
  }
 canvas.addEventListener("touchmove",myTouchMove)
 function myTouchMove(e){
    currentpositionX = e.touches[0].clientX- canvas.offsetLeft
    currentpositionY = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.moveTo(lastpositionX,lastpositionY);
    ctx.lineTo(currentpostionX,currentpositionY);
    lastpositionX = currentpostionX
    lastpositionY = currentpostionY
 }
 
 
