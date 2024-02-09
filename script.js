function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros to minutes and seconds if they are less than 10
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Convert hours from 24-hour time to 12-hour time
    hours = (hours > 12) ? hours - 12 : hours;

    // Convert hours of 0 to 12
    hours = (hours === 0) ? 12 : hours;

    // Create a string for displaying the time
    var timeString = hours + ":" + minutes + ":" + seconds;

    // Update the time display
    document.getElementById('time').innerHTML = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
