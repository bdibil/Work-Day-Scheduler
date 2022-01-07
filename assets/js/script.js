var dayEl = document.querySelector('#currentDay');
var dummy = 99;

function init() {
    var today = moment().format("dddd, MMMM Do YYYY");
    dayEl.textContent=today
}

init();




//////
console.log(dummy)


////  OLD CODE      BELOW




// var timeInterval = setInterval(function() {
//     timeEl.textContent = currentTime;
// }, 1000)