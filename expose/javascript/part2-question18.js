// modify so that the program prints out current time every second 
function printTime() {
   let d = new Date();
   let time = d.toLocaleTimeString();
   console.log(time);
}

setInterval(printTime, 1000);
