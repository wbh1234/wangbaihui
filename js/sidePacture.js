/**
 * Created by ASUS on 2018/3/22.
 */
function player(){
    objt = setInterval(function(){
        var h = $(document).scrollTop();
        if(h==0|| h< 1150 ){
            one.style.display='block';
            two.style.display='none';
            three.style.display='none';
            four.style.display='none';
        }else if(h==1150 || h<1610){
            one.style.display ='none';
            two.style.display='block';
            three.style.display='none';
            four.style.display='none';
        }else if(h ==1610 ||h<2102){
            one.style.display='none';
            two.style.display='none';
            three.style.display='block';
            four.style.display='none';
        }else{
            one.style.display='none';
            two.style.display='none';
            three.style.display='none';
            four.style.display='block';
        }
    },50);
}
player();