onst spDay = document.querySelector(".sp-countdown-days .sp-countdown-number");
const spHour = document.querySelector(".sp-countdown-hours .sp-countdown-number");
const spMinute = document.querySelector(".sp-countdown-minutes .sp-countdown-number");
const spSecond = document.querySelector(".sp-countdown-seconds .sp-countdown-number");

const spCountdownContainer = document.querySelector(".sp-countdown-container");

const birthdayEnd = new Date("January 08 2021 12:00:00");
let birthdayEnded = false;

const updateTimer = () => {
	let currentDate = new Date();
	let difference = birthdayEnd.getTime() - currentDate.getTime();
	if (difference <= 1000) {
		birthdayEnded = true;
	}
	
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
	
	let newDay = Math.floor(difference / day);
	let newHour = Math.floor((difference % day) / hour);
	let newMiute = Math.floor((difference % hour) / minute);
	let newSecond = Math.floor((difference % minute) / second);
	spDay.innerText = newDay < 10 ? "0" + newDay : newDay;
	spHour.innerText = newHour < 10 ? "0" + newHour : newHour;
	spMinute.innerText = newMiute < 10 ? "0" + newMiute : newMiute;
	spSecond.innerText = newSecond < 10 ? "0" + newSecond : newSecond;
};

setInterval(() => {
	if (!birthdayEnded) {
		updateTimer();
	} else {
		spCountdownContainer.style.display = "none";
	}
}, 1000);
