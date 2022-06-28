function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function() {
    // var time = getSecondsSinceStartOfDay();
    // console.log(time);

    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();
    console.log(hours + " " + minutes + " " + seconds);
    var degreesSeconds = ((seconds / 60) * 360);
    var degreesMinutes = (minutes / 60) * 360;
    var degreesHours = (hours / 12) * 360;
    console.log(degreesHours + " " + degreesMinutes + " " + degreesSeconds);
    document.getElementById("seconds").style.transform = "rotate(" + (degreesSeconds + 180) + "deg)";
    document.getElementById("minutes").style.transform = "rotate(" + (degreesMinutes + 180) + "deg)";
    document.getElementById("hour").style.transform = "rotate(" + (degreesHours + 180) + "deg)";
}, 1000);