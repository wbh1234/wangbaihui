//
// /**
//  * Created by ASUS on 2018/3/24.
//  */
var oTabs = document.getElementById('tabs');
var oContent_item = document.getElementById('content_item');
var aLi2 = oTabs.getElementsByTagName('li');
var aDiv = oContent_item.getElementsByTagName('div');
for(var j=0;j<aLi2.length;j++){
    aLi2[j].index= j;
    aLi2[j].onclick= function(){
        for(var j=0;j<aLi.length;j++ ){
            aLi2[j].className='';
            aDiv[j].className='';
            this.className = 'selected';
            aDiv[this.index].className='selected';
        }
    }
}