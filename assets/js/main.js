// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//
// Place any custom JS here
//

const element = document.getElementById('mainnav');
const classToAdd = 'sticky-nav';
const viewportThreshold = 500;

function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

window.addEventListener('scroll', debounce(function() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > viewportThreshold) {
      element.classList.add(classToAdd);
    } else {
      element.classList.remove(classToAdd);
    }
}, 100));

// Set the date we're counting down to
var countDownDate = new Date("May 24, 2025 03:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EVENT STARTED";
  }
}, 1000);

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })
