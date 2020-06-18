var btn = document.getElementById("calculate");
var durationSelect = document.getElementById("duration");
var input = document.getElementById("amount");
var dateSelect = document.getElementById("payback-date");
var result = document.querySelector(".result-div");
var safelock = document.getElementById("safelock");
var error = document.getElementById("error");
var close = document.querySelector(".active");
var interestText = document.getElementById("interest");
var balanceText = document.getElementById("balance");
var interested = 0;
var balanced = 0;

btn.addEventListener("click", calculateInterest);
close.addEventListener("click", function() {
	result.classList.remove("visible");
});

function calculateInterest() {
	var amount = parseInt(input.value);
	var duration = parseInt(durationSelect.value);
	
	
	var rate = 1;
	
	if(duration == "1") {
		rate = 6;
	}
	else if(duration == "2") {
		rate = 8;
	}
	else if(duration == "3") {
		rate = 10;
	}
	else if(duration == "4") {
		rate = 13;
	}

	if(isNaN(amount) || amount == "0" || amount == "") {
		error.textContent = "Please enter a valid amount";
	}

	else if(duration == "0") {
		error.textContent = "Please select a duration";
	}

	else {
		interested = (amount*rate*duration)/100;
		balanced = (interested+amount);

		result.classList.add("visible");
		interestText.textContent = interested;
		balanceText.textContent = balanced;
		safelock.textContent = "SAFELOCK " + amount + " NOW!!";


		console.log(amount);
		console.log(duration);
		console.log(rate);
		console.log(interest);
	}
}