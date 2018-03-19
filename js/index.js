/**
 * Created by ASUS on 2017/10/12.
 */
var oBackground= document.getElementById("background");
var oBackground_list = document.getElementById("background_list");
var aLi = oBackground_list.getElementsByTagName("li");
var oBackground_img = document.getElementById("background_img");
var aImg = oBackground_img.getElementsByTagName("img");
var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var nowIndex = 0;//全局变量，保存当前显示的图片的索引
var timer;

var Top= document.getElementById("top");
Top.onclick = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    timer = setInterval(function () {
        window.scrollTo(0, scrollTop-=15);
        if(scrollTop <= 0){
            clearInterval(timer());
        }
    }, 30);
};


for(var i=0; i<aLi.length; i++){
    aLi[i].index = i;//给每个li对象自定义属性，保存住当时的i的值
    /*
     相当于：
     aLi[0].index = 0;
     aLi[1].index = 1;
     aLi[2].index = 2;
     aLi[3].index = 3;*/
    aLi[i].onmouseover = function(){
        nowIndex = this.index;
        changeImg();
    };
}

oPrev.onclick = oNext.onclick = function(){
    if(this === oPrev){
        nowIndex--;
        if(nowIndex == -1){
            nowIndex = aLi.length - 1;//3
        }
    }else{
        nowIndex++;
        if(nowIndex == aLi.length){
            nowIndex = 0;
        }
    }
    changeImg();
};

oPrev.onselectstart = oNext.onselectstart = function(){
    return false;
};

oBackground.onmouseover = function(){
    clearInterval(timer);
};
oBackground.onmouseout = function(){
    play();
};

play();

function play(){
    timer = setInterval(function(){
        oNext.onclick();
    }, 1500);
}

function changeImg(){
    for(var i=0; i<aLi.length; i++){
        aLi[i].className = "";
        aImg[i].className = "";
    }
    aLi[nowIndex].className = "selected";
    aImg[nowIndex].className = "selected";
}

window.onload =
    function(){
    var oIntro2 = document.getElementById('intro2');
    H = 0,
    Y = oIntro2
    while (Y) {H += Y.offsetTop; Y = Y.offsetParent}
    window.onscroll = function()
        {
            var s = document.body.scrollTop || document.documentElement.scrollTop
            if(s>H){
                oIntro2.style = "position:fixed;top:0;right:0;"

             }else{
                oIntro2.style=""
             }
        }
    }
$.scrollto = function(item2){
        $("item2").click(function(){
            $('item2').animate({
                scrollTop:$(services).offset().top
            },50);
        })
}