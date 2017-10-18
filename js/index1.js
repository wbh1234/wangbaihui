/**
 * Created by ASUS on 2017/10/18.
 */
window.onload = function() {
    var canvas2 = document.getElementById("myCanvas2");
    var canvas3 = document.getElementById("myCanvas2");
    var context2 = canvas2.getContext("2d");
    var context3 = canvas3.getContext("2d");
    var x2 = canvas2.width / 2;
    var y2 = canvas2.height / 2;
    var x3 = canvas3.width / 2;
    var y3 = canvas3.height / 2;
    var radius2 = 50;
    var radius3 = 50;
    var startAngle2 = 1 * Math.PI;
    var startAngle3 = 1.5 * Math.PI;
    var endAngle2 = 4* Math.PI;
    var endAngle3 = 3.1*Math.PI;
    var counterClockwise2 = false;
    var counterClockwise3 = false;
    context2.beginPath();
    context2.arc(x2, y2, radius2, startAngle2, endAngle2,
        counterClockwise2);
    context2.lineWidth = 10;
    // 设置线的颜色
    context2.strokeStyle = "darkgray";
    contex2t.stroke();



    context3.beginPath();
    context3.arc(x3, y3, radius13, startAngle13, endAngle13,counterClockwise13);
    context3.lineWidth = 10;
    context3.strokeStyle = "darkgreen";
    context3.stroke();


};
