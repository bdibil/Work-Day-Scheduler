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

var btn9 = $('#b9');
var btn10 = $('#b10');
var btn11 = $('#b11');
var btn12 = $('#b12');
var btn13 = $('#b13');
var btn14 = $('#b14');
var btn15 = $('#b15');
var btn16 = $('#b16');
var btn17 = $('#b17');

var dummy = 0;
var eventFlag = [];

var eventsArray = [t9, t10, t11, t12, t13, t14, t15, t16, t17]
var userEvent = {
    eventText: "",
    eventTime: 0,
};

var eventArray = [];

// var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
var printChar = [""];

// generate Array of Printable Characters
for (let index = 0; index < 95; index++) {
    printChar[index] = String.fromCharCode(index + 32)
}

// Keydown and Click events for Events at 9am
t9.addEventListener('keyup', function (event) {
    // Access value of pressed key with key property
    var key = event.key;
    if (printChar.includes(key)) {
        eventsArray[0].textContent += event.key;
    }
    // console.log(dummy)
});
btn9.on('click', function () {
    saveEvents(9);
});

// Keydown and Click events for Events at 10am
t10.addEventListener('keyup', function (event) {
    var key = event.key;
    if (printChar.includes(key)) {
        eventsArray[1].textContent += event.key;
    }
});

btn10.on('click', function () {
    saveEvents(10);
});

// Keydown and Click events for Events at 11am
t11.addEventListener('keyup', function (event) {
    var key = event.key;
    if (printChar.includes(key)) {
        eventsArray[2].textContent += event.key;
    }
});

btn11.on('click', function () {
    saveEvents(11);
});

// Keydown and Click events for Events at 12 pm
t12.addEventListener('keyup', function (event) {
    var key = event.key;
    if (printChar.includes(key)) {
        eventsArray[3].textContent += event.key;
    }
});

btn12.on('click', function () {
    saveEvents(12);
});

// Keydown and Click events for Events at 1 pm
t13.addEventListener('keyup', function (event) {
    var key = event.key;
    if (printChar.includes(key)) {
        eventsArray[4].textContent += event.key;
    }
});

btn13.on('click', function () {
    saveEvents(13);
});

// Keydown and Click events for Events at 1 pm
t14.addEventListener('keyup', function (event) {
    var key = event.key;
    if (printChar.includes(key)) {
        eventsArray[5].textContent += event.key;
    }
});

btn14.on('click', function () {
    saveEvents(14);
});

// Keydown and Click events for Events at 1 pm
t15.addEventListener('keyup', function (event) {
    var key = event.key;
    if (printChar.includes(key)) {
        eventsArray[6].textContent += event.key;
    }
});

btn15.on('click', function () {
    saveEvents(15);
});

// Keydown and Click events for Events at 1 pm
t16.addEventListener('keyup', function (event) {
    var key = event.key;
    if (printChar.includes(key)) {
        eventsArray[7].textContent += event.key;
    }
});

btn16.on('click', function () {
    saveEvents(16);
});

// Keydown and Click events for Events at 1 pm
t17.addEventListener('keyup', function (event) {
    var key = event.key;
    if (printChar.includes(key)) {
        eventsArray[8].textContent += event.key;
    }
});

btn17.on('click', function () {
    saveEvents(17);
});







function saveEvents(time) {
    dummy = 5
    console.log(dummy)
    var offset = time - 9
    userEvent.eventText = eventsArray[offset].textContent;
    console.log(userEvent.eventText)
    userEvent.eventTime = time;

    // check if empty event and exit early 
    if (userEvent.eventText === "") {
        if (eventArray[offset] === "") {
            eventsArray[offset].textContent = eventArray[offset]
        }
        console.log('empty');
        return;
    }

    localStorage.setItem("userEvent", JSON.stringify(userEvent))
    var event = JSON.parse(localStorage.getItem("userEvent"));

    // Re-write event Only if there's a change
    eventArray[offset] = event;
    localStorage.setItem("eventArray", JSON.stringify(eventArray))

    location.reload();
}

function displayEvents() {
    
    t9.textContent = eventArray[0].eventText;
    t10.textContent = eventArray[1].eventText;
    t11.textContent = eventArray[2].eventText;
    t12.textContent = eventArray[3].eventText;
    t13.textContent = eventArray[4].eventText;
    t14.textContent = eventArray[5].eventText;
    t15.textContent = eventArray[6].eventText;
    t16.textContent = eventArray[7].eventText;
    t17.textContent = eventArray[8].eventText;


    console.log(eventArray[1].eventText)
    // clearArray()
    // t9.textContent = "";
}

function clearArray() {
    dummy = 99
    console.log(dummy)
    for (let index = 0; index < 10; index++) {
    }
}

//Resets timeblock's colors before colorize
function colorReset() {
    for (let index = 0; index < textEl.length; index++) {
        // textEl[index].setAttribute("data-state", "future")
        textEl[index].setAttribute("class", "col-8 future")
        // console.log(index)
    }
    // console.log(textEl)
}


function getHour() {
    curentHour = moment().hour();
    colorize()
}


// Changes timeblock's colors by current hour
function colorize() {
    colorReset()
    if (curentHour === 9) {
        textEl[0].setAttribute("class", "col-8 present")
    }
    if (curentHour > 9 && curentHour < 18) {
        var offset = curentHour - 9
        textEl[offset].setAttribute("class", "col-8 present")
        for (let index = 0; index < offset; index++) {
            textEl[index].setAttribute("class", "col-8 past")
        }
    }
}


// Inits time and timeblock colors
function init() {
    console.log("reloaded")
    console.log(eventArray[0])
    console.log(eventArray[1])
    var today = moment().format("dddd, MMMM Do YYYY");
    dayEl.textContent = today
    setInterval(getHour, 100)
    colorReset()
    localStorage.setItem("userEvent", JSON.stringify(userEvent))
    var emptyEvent = JSON.parse(localStorage.getItem("userEvent"));
    console.log(emptyEvent);
    var storedEvents = JSON.parse(localStorage.getItem("eventArray"));
    // If event were retrieved from localStorage, update the event array to it
    if (storedEvents !== null) {
        eventArray = storedEvents;
        for (let index = 0; index < 10; index++) {
            if (eventArray[index].eventText === "") {
                eventFlag[index] = false
            } else{
                eventFlag[index] = true
            }
        }

    } else {
        for (let index = 0; index < 10; index++) {
            eventArray[index] = emptyEvent;
        }
    }
    // displayEvents()
    console.log(eventArray[0])
    console.log(eventArray[1])
    console.log(eventFlag);
    // console.log(eventArray);
    displayEvents()
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