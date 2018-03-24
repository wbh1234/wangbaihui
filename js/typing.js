var oContent_logol = document.getElementById('content_logol');
var oFind = document.getElementsByName('find_me');
var oQq = oContent_logol.getElementsByTagName('qq1');
var oWeixin = oContent_logol.getElementsByTagName('weixin1');
var q1 = oFind.getElementsByTagName('qq');
var w1 = oFind.getElementsByTagName('weixin');

oQq.onclick = function(){
    q1.style.display='block';
};
oWeixin.onclick = function(){
    w1.style.display='block';
}