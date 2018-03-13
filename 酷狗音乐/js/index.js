/**
 * Created by newuser on 2017/9/20.
 */
var myMusic = document.getElementById("music");
var play = document.getElementById("mmm");
var music = document.getElementById("music");
var range = document.getElementById("range");
var flag = false
var timer1 = null;

play.onclick = function() {
    flag = !flag
    clearInterval(timer1)
    if (flag == true) {
        myMusic.play();
        timer1 = setInterval(function () {
            range.value++;
            console.log(range.value);
        }, 1000)
    }
    else {
        // clearInterval(timer1)
        myMusic.pause();
        console.log(111)
    }
}
var timer2 = setInterval(function () {
    set_to_time(music.currentTime)
}, 1000)

function set_to_time(s) {
    var t;
    var t1;// undefined
    var t2;
    if (s > 1) {
        var min = Math.floor(s / 60) % 60;
        var sec = Math.floor(s % 60);
        if (min < 10) {
            t1 = "0" + min++;
        }
        if (min >= 10) {
            t1 = "0" + min++;
        }
        if (sec < 10) {
            t2 = "0" + sec++;
        }
        if (sec >= 10) {
            t2 = sec
        }

        t = t1 + ":" + t2
        long.innerHTML = t

    } else {
        00 / 00
        long.innerHTML = "00:00"
    }
    return t

}