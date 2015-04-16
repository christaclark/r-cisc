// When a user navigates away from a page or closes a tab, the beforeunload event fires. This is useful 
// for preventing someone from losing unsaved work on something by closing a document. When using beforeunload, 
// we don't use the preventDefault method like in other events. Instead, the even handle returns a string that 
// is used as part of a confirmation message displayed to a user to confirm or deny that they are ready to leave.
// https://github.com/AustinCodingAcademy/HTMLIntermediate/blob/master/syllabus/11.md    

// Option 1 //
window.onbeforeunload = function(e) {
  return 'Are you sure you want to leave without saving?';
};

// Option 2 //
window.addEventListener("beforeunload", function(e) {
	var confirmationMessage ="Are you sure you want to leave without saving?";
	console.log(e, window.event)
	(e || window.event).retunValue = confirmationMessage;
	return confirmationMessage;
});



// Similar to requestAnimationFrame that we talked about, is setTimeout. setTimeout lets us schedule an event to 
// happen after a specified number of milliseconds. The following example changes the color of a page after 2 seconds:


document.body.style.background = "black";
setTimeout(function() {
    document.body.style.background = "green";
}, 2000);


// Future events defined by setTimeout can be canceled by calling clearTimeout on it.

var countDown = setTimeout(function() {
    console.log("BOOM!");
}, 500);

if (Math.random() < 0.5) { // 50% chance
  console.log("MacGruber!");
  clearTimeout(countDown);
}

// We can use cancelAnimationFrame in a manner similar to clearTimeout. We can call it on a value returned by 
//requestAnimationFrame to cancel that frame.

//Finally, we can use setInterval and clearInterval to repeat a function every X milliseconds.

var ticks = 0;
var clock = setInterval(function() {
    console.log("tick", ticks++);
    if (ticks == 10) {
        clearInterval(clock);
        console.log("stop.");
    }
}, 200);


// Debouncing allows the event to happen only so often 
// We add an event listener to the keyup event with a timeout and 
// cancel the timer if a user types faster than the timeout function.

<textarea>Type something here...</textarea>

var textarea = document.querySelector("textarea");
var timeout;
textarea.addEventListener("keydown", function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        console.log("You stopped typing.");
    }, 500);
});


// In the next example, we use setTimeout to throttle how often an event can fire.


function displayCoords(event) {
    document.body.textContent = "Mouse at " + event.pageX + ", " + event.pageY;
}

var scheduled = false, lastEvent;
addEventListener("mousemove", function(event) {
    lastEvent = event;
    if (!scheduled) {
        scheduled = true;
        setTimeout(function() {
            scheduled = false;
            displayCoords(lastEvent);
        }, 250);
    }
});
