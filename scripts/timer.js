// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2025 0:00:00").getTime();

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
  document.getElementById("ng-timer-a").innerHTML = "До нового года осталось"
  document.getElementById("ng-timer-b").innerHTML = hours + "ч " + minutes + "м " + seconds + "с ";

  function getDaysString(count) {
    // Приводим число к целому
    const num = Math.abs(count) % 100;
    const num1 = num % 10;

    if (num > 10 && num < 20) {
        return `дней`;
    } else if (num1 === 1) {
        return `день`;
    } else if (num1 >= 2 && num1 <= 4) {
        return `дня`;
    } else {
        return `дней`;
    }
}

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ng-timer-a").innerHTML = "";
    document.getElementById("ng-timer-b").innerHTML = "С новым годом!";
  }
}, 250);