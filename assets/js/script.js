// var currentHour = 10;
// var timeEl = document.querySelectorAll("time-block");

var dayEl = document.querySelector('#currentDay');
var textEl = document.querySelectorAll("textarea");
var curentHour = 0;

var t9 = document.querySelector('#t9');
var t10 = document.querySelector('#t10');
var t11 = document.querySelector('#t11');
var t12 = document.querySelector('#t12');
var t13 = document.querySelector('#t13');
var t14 = document.querySelector('#t14');
var t15 = document.querySelector('#t15');
var t16 = document.querySelector('#t16');
var t17 = document.querySelector('#t17');

console.log(t9)

var btn9 = $('#b9');
var btn10 = $('#b10');
var btn11 = $('#b11');
var btn12 = $('#b12');
var btn13 = $('#b13');
var btn14 = $('#b14');
var btn15 = $('#b15');
var btn16 = $('#b16');
var btn17 = $('#b17');


btn9.on('click', function () {
    console.log(t9.textContent)
    var userEvent9 = {
        calEvent: t9.textContent.trim(),
        timeEvent: "at 9 am",
    };
    localStorage.setItem("userEvent9", JSON.stringify(userEvent9))
});


btn10.on('click', function () {
    console.log(t10.textContent)
    var userEvent10 = {
        calEvent: t10.textContent.trim(),
        timeEvent: "at 10 am",
    };
    localStorage.setItem("userEvent10", JSON.stringify(userEvent10))
});



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








//////


////  OLD CODE      BELOW



//  $( function() {
//     $( "#draggable" ).draggable({ scroll: true });
//  });


// var timeInterval = setInterval(function() {
//     timeEl.textContent = currentTime;
// }, 1000)