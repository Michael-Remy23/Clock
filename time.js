const hour_hand = document.querySelector("#hour")
const minute_hand = document.querySelector("#minute")
const second_hand = document.querySelector("#second")


function time(){
    var current_time = new Date();
    var hour = current_time.getHours() *30
    var minute = current_time.getMinutes() *6
    var second = current_time.getSeconds() *6

    hour_hand.style.transform = "rotate("+(hour+minute/12)+"deg)";
    minute_hand.style.transform = "rotate("+minute+"deg)";
    second_hand.style.transform = "rotate("+second+"deg)";
}
setInterval(time, 1000)
//Hello how are you?

