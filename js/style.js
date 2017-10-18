/**
 * Created by ASUS on 2017/10/18.
 */
window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var canvas1 = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var context1 = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var x1 = canvas1.width / 2;
    var y1 = canvas1.height / 2;
    var radius = 50;
    var radius1 = 50;
    var startAngle = 1 * Math.PI;
    var startAngle1 = 1.5 * Math.PI;
    var endAngle = 4* Math.PI;
    var endAngle1 = 3.1*Math.PI;
    var counterClockwise = false;
    var counterClockwise1 = false;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle,
        counterClockwise);
    context.lineWidth = 10;
    // 设置线的颜色
    context.strokeStyle = "darkgray";
    context.stroke();



    context1.beginPath();
    context1.arc(x1, y1, radius1, startAngle1, endAngle1,counterClockwise1);
    context1.lineWidth = 10;
    context1.strokeStyle = "darkgreen";
    context1.stroke();


};
