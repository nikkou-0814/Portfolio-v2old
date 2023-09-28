function close_modal(){
    document.getElementById("hello_modal").style.display="none";
    }

function topButton() {

    duration=100;
    var begin = new Date() - 0;
    var yOffset = window.pageYOffset;
    var timer= setInterval(function() {
        var current = new Date() - begin;
        if (current > duration) {
            clearInterval(timer);
            current = duration;
        }

        //スクロール位置を単位時間で変更する
        window.scrollTo(0, yOffset * (1 - current / duration)) 
    }, 10);

}