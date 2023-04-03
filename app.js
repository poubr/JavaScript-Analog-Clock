// setting constants and displaying current date
const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");
const date = document.querySelector(".date");
const today = new Date();
const year = today.getFullYear();
let month = today.toLocaleString('default', { month: 'long' });
let day = today.getDate();
date.innerText = `${day} ${month} ${year}`;

// fetches the time and returns an object literal (shorthand)
function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    return {seconds, hours, minutes};
}

// sets the rotation degree of the hands based on the current time every second
setInterval(() => {
    const { seconds, minutes, hours } = getTime();

                                // 360/60 => 6 degrees per second
    secHand.style.setProperty("--sec-rotation", `${seconds * 6}deg`);

                                //360/60 => 6 degrees per minute
    minHand.style.setProperty("--min-rotation", `${minutes * 6}deg`);

                                // offsetting for the minutes passed
    const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30;
    hourHand.style.setProperty("--hour-rotation", `${hourDegrees}deg`);
  }, 1000);
