/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
	let time = timeString.split(':')[0];
	if (time < 12) {
		return 'Good Morning';
	} else if (time >= 12 && time <= 17) {
		return 'Good Afternoon';
	} else if (time > 17 && time <= 24) {
		return 'Good Evening';
	} else {
		return 'TEST';
	}
}

function displayMessage(message) {
	const greeting = document.getElementById('greeting');
	greeting.innerText = message;
}