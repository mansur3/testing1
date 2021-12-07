function Time (time) {

    let sec = Math.floor(time /1000);
    let remaining_sec = sec % 60;

    let min = (sec - remaining_sec)/60;
    let remaining_min = (sec - remaining_sec) % 60;

    
    let hours = Math.floor((min - remaining_min) / 60);
    let remaining_hours = (min - remaining_min) % 60;

    if(time < 1000) {
        return time + " milliseconds"
    } else if (time >= 1000 && time < 60000) {
        return sec + " seconds";
    } else if (time >= 60000 && time < (60 * 60000) && remaining_sec == 0) {
        return min + " minutes"
    } else if (time >= 60000 && time < (60 * 60000)  ) {
        return min + " minutes " + remaining_sec + " seconds"
    } else if (time >= (60 * 60000) ) {
        return hours + " hours " + remaining_hours + " minutes " + remaining_sec + " seconds"
    }



    // console.log(hours);
    // console.log(remaining_hours);
}

// time(601001);

module.exports = Time;

