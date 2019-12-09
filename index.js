/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string) {
  let time = parseInt(string, 10)
  if (time < 12) return "Good Morning" 
  if (time > 17) return "Good Evening"
  return "Good Afternoon"
}
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
