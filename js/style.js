window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y =canvas.height / 2;
    circle(ctx,x,y);
    var canvas1 = document.getElementById("myCanvas");
    var e=3.1;
    draw(e,canvas1);
};
var canvas2 =document.getElementById("myCanvas2");
var ctx = canvas2.getContext("2d");
var x =canvas2.width /2;
var y =canvas2.width /2;
circle(ctx,x,y);
var canvas1 = document.getElementById("myCanvas2");
var e=2.7;
draw(e,canvas1);

function circle(ctx,x,y){
    var radius =50;
    var startAngle = 1 * Math.PI;
    var endAngle = 4* Math.PI;
    var counterClockwise = false;
    ctx.beginPath();
    ctx.arc(x,y,radius,startAngle,endAngle,counterClockwise);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "darkgray";
    ctx.stroke();

}
function draw(e,canvas1){
    var ctx1 = canvas1.getContext("2d");
    var x1 = canvas1.width / 2;
    var y1 =canvas1.height / 2;
    var radius1 =50;
    var startAngle1 = 1.5 * Math.PI;
    var endAngle1 = e* Math.PI;
    var counterClockwise1 = false;
    ctx1.beginPath();
    ctx1.arc(x1,y1,radius1,startAngle1,endAngle1,counterClockwise1);
    ctx1.lineWidth = 10;
    ctx1.strokeStyle = "darkgreen";
    ctx1.stroke();

};