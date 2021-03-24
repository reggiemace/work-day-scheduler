// Current day is displayed at the top of the page.
var currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format("LL");

// Get the current time hour value and store it in a variable,
var currentHour = moment().hour();
console.log(currentHour);

// Set the background color of text area based on past, present or future.
$(".time-block").each(function () {
  // Set a variable to get the hour attribute from each time block
  var thisHour = $(this).attr("hour");
  if (thisHour < currentHour) {
    $(this).addClass("past");
  } else if (thisHour == currentHour) {
    $(this).addClass("present");
  } else if (thisHour > currentHour) {
    $(this).addClass("future");
  }
});

// Set description to local storage
$(".saveBtn").click(function () {
  // get the value of the element that came before the button and store in variable.
  var textDescription = $(this).prev().val();
  localStorage.setItem($(this).parent().attr("hour"), textDescription);
  console.log(localStorage);
});
// Test local storage in dev tools
//console.log(localStorage);

// Description is still visible on page reload.
$(".time-block").each(function () {
  var thisHour = $(this).attr("hour"); // grab the hour attribute and store it in a variable
  var value = localStorage.getItem(thisHour); // get item from local storage and store in variable.
  $(this).children().val(value); // when page reloads, gets value of textarea
});
