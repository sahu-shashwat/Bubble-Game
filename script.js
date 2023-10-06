var timer=30
var score=0
var hitnum=0
function incresescore(){
    score+=10
    document.querySelector("#scoreval").textContent=score
}

function hitvalue(){
    hitnum=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitnum
}

function makebubble() {
    
    var clutter="";
    for (let i = 0; i <=95; i++) {
        var rn=Math.floor(Math.random()*10)
        clutter+=`<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML=clutter
}

function runtimer(){
   var timerint= setInterval(() => {
    if (timer>0) {
        timer--
        document.querySelector("#timervalue").textContent=timer       
    }
    else{
        clearInterval(timerint)
        document.querySelector("#pbtm").innerHTML=`<h1>TIME OFF</h1><h3>your score is ${score}</h3>`
    }
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clicknum=Number(dets.target.textContent)
    if (clicknum===hitnum) {
        incresescore();
        makebubble();
        hitvalue();
    }
})
runtimer();
makebubble();
hitvalue();
 