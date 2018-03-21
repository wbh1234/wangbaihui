/**
 * Created by ASUS on 2018/3/20.
 */
var  str = 'You are young And You can be anyone, You want to be pu';
var m=0;
var flashing;
var temp=[];
function typing(){
    var backgroundWord = document.getElementById('background_word');
    if(m <= str.length){
        backgroundWord.innerHTML = str.slice(0, m++) + '_';
        setTimeout('typing()', 250);
    }else{
        backgroundWord.innerHTML = str;
    }
    temp= backgroundWord.innerHTML;
}
typing();
function neon(){
    if(m< str.length){
        for(m=0;m<str.length;m++){
            temp[i].style.color="white";
        }
    }
    if(m= str.length){
        temp[m].style.color="blue";
    }else{
        m=0
    }
}
function beginNeon(){
    flashing=setInterval("neon()",13500);
}
beginNeon();
