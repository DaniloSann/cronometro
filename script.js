var sent=00
var sec=00
var min=00
var pp=00


var interval
function start() {
    
    if(sent>1) {
        if(pp!=0) {
            interval = setInterval(watch,10)
        }
        alert('Cronômetro iniciado')
    }else {
        interval = setInterval(watch,10)
    }
}

function pause() {
    clearInterval(interval)
    pp++
}

function stop() {
    clearInterval(interval)
    sent=00
    sec=00
    min=00
    document.getElementById('watch').innerText='00:00.00'
}

function twoDigits(digit) {
    if(digit<10) {
        return('0'+digit)
    }else {
        return (digit)
    }
}

function watch() {
    sent++
    if(sent==100){
        sec++
        sent=0
    }
    if(sec==60){
        min++
        sec=0
    }
    document.getElementById('watch').innerText=twoDigits(min)+':'+twoDigits(sec)+'.'+twoDigits(sent)
}