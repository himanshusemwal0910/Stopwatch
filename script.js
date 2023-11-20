let hr = 0 ;
let sec = 0;
let min = 0;
let count = 0;

let timer = false;


function start(){
    timer = true;
    stopWatch();
}
function stop(){
timer = false;
}
function reset(){
timer = false;
hr = 0;
min = 0;
sec = 0;
count = 0;

document.getElementById('min').innerHTML = "00";
document.getElementById('count').innerHTML ="00"; 
document.getElementById('sec').innerHTML = "00";
document.getElementById('hour').innerHTML = "00";
}


function stopWatch(){
    if(timer==true){
        count = count + 1;
        let countString = count ;
        if(countString<10){
            countString = '0' + count;
        }
    document.getElementById('count').innerHTML = countString;

        if(count ==99){
            sec = sec + 1;
            count=0;
        }
        
        let secString = sec;
        if(secString<10){
            secString = "0" + sec;
        }
        document.getElementById('sec').innerHTML = secString;
        
        if(sec == 59){
            min = min + 1;
            sec = 0;
        }
        let minString = min;
        if(minString<10){
            minString = "0" + min;
        }
        document.getElementById('min').innerHTML = minString;
        
        if(min == 59){
            hr = hr + 1;
            min = 0;
        }
        let hrString = hr;
        if(hrString<10){
            hrString = "0" + hr;
        }
        document.getElementById('hour').innerHTML = hrString;

        setTimeout("stopWatch()",10);
    }

}