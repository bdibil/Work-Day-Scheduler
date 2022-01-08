var dayEl = document.querySelector('#currentDay');
var textEl = document.querySelectorAll("textarea");
var currentHour = 10;
// var timeEl = document.querySelectorAll("time-block");



var curentHour = 0;

console.log(textEl)
console.log(curentHour)

function colorReset () {
    for (let index = 0; index < textEl.length; index++) {
        // textEl[index].setAttribute("data-state", "future")
        textEl[index].setAttribute("class", "col-8 future")
        // console.log(index)
    }
    // console.log(textEl)
}

function getHour(){
    curentHour = moment().hour(); 
    colorize()
}

// var dummy

function colorize(){
    colorReset()
    if (curentHour===9) {
        textEl[0].setAttribute("class", "col-8 present")
    }
    if (curentHour>9&&curentHour<18) {
        var offset = curentHour-9
        textEl[offset].setAttribute("class", "col-8 present")
        for (let index = 0; index < offset; index++) {
            textEl[index].setAttribute("class", "col-8 past")
        }
    }
}




function init() {
    var today = moment().format("dddd, MMMM Do YYYY");
    dayEl.textContent=today
    setInterval(getHour,1000)
    colorReset()
}

init();




//  $( function() {
//     $( "#draggable" ).draggable({ scroll: true });
//  });





//////


////  OLD CODE      BELOW




// var timeInterval = setInterval(function() {
//     timeEl.textContent = currentTime;
// }, 1000)