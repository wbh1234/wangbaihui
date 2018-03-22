/**
 * Created by ASUS on 2018/3/22.
 */
function show() {
    var typewriter = document.querySelector('#background_word');
    var code = typewriter.innerHTML;
    var i = 0;
    typewriter.innerHTML = "";
    typeWriting();

    function typeWriting() {
        i++;
        if (i < code.length) {
            switch (code.charAt(i)) {
                case '<':
                    i = code.indexOf(">", i);
                    break;
                case '&':
                    i = code.indexOf(";", i);
                    break;
            }
            typewriter.innerHTML = code.substr(0, i);
            setTimeout(typeWriting, 150);
        } else {
            setTimeout(show, 1500);
        }
    }
}
window.onload = show;