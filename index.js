/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

/* Take in one argument: a string with "0:00"
     * Convert this to an integer and save it to a local variable
     * If the variable is less than 12, return:  "Good Morning".
     * If the variable is between 12-17 return: "Good Afternoon"
     * If the variable is greater than 17, return: "Good Evening" */
function greet(timeString) {
  let split = timeString.split(':');
  let number= split[0]
  let time= parseInt(number);

  if (time < 12) return "Good Morning";
  if (time > 12 && time < 17) return "Good Afternoon";
  if (time > 17) return "Good Evening";

}

function displayMessage(string) {
  let message= document.getElementById('greeting');
  message.innerText= string;
}