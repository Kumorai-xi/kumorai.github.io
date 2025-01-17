function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12

    // Add leading zero if the values are less than 10
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    var timeString = hours + ':' + minutes + ' ' + ampm;

    // Update the content of the span with id "showClock"
    document.getElementById('showClock').textContent = timeString;
}

// Call the function initially to set the initial time
updateClock();

// Set up an interval to update the time every minute
setInterval(updateClock, 60000);