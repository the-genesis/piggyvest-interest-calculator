var interestCalculator = document.getElementById("interest-calculator");
var interestResult = document.getElementById("interest-result");
var interestSelector = document.getElementById("interest-selector");
var btn = document.getElementById("calculate");
var durationSelect = document.getElementById("duration");
var input = document.getElementById("amount");
var dateSelect = document.getElementById("payback-date");
var safelock = document.getElementById("safelock");
var error = document.getElementById("error");
var closeCalculator = document.getElementById("close-calculator");
var closeResult = document.getElementById("close-result");
var interestText = document.getElementById("interest");
var balanceText = document.getElementById("balance");
var interest = 0;
var balance = 0;
var operation = "";


//slide in interest calculator
interestSelector.addEventListener("click", function() {
	interestCalculator.classList.remove("hidden");
	interestCalculator.classList.add("visible");
	operation = "interest calculation";
	
});

//calculate interest on click
btn.addEventListener("click", calculateInterest);

closeResult.addEventListener("click", function() {
	interestResult.classList.add("hidden");
	interestResult.classList.remove("visible");

	error.textContent = "";
});

closeCalculator.addEventListener("click", function() {
	interestCalculator.classList.add("hidden");
	interestCalculator.classList.remove("visible");
    
    input.value ="";
	durationSelect.value = "0";

	operation = "";
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
		interest = (amount*rate*duration)/100;
		balance = (interest+amount);

		//slide in interest result
		interestResult.classList.remove("hidden");
		interestResult.classList.add("visible");
		interestText.textContent = "N" + interest;
		balanceText.textContent = "N" + balance;
		safelock.textContent = "SAFELOCK N" + amount + " NOW!!";
	}
}

//share interest calculator to social media
var social = document.getElementById("social");
social.addEventListener("click", shareToTwitter);

var socialLink = document.getElementById("social-link");

function shareToTwitter() {
	var amount = parseInt(input.value);
	var tweet = "";

	if(operation == "interest calculation") {
		tweet = "https://twitter.com/intent/tweet?url=https%3A%2F%2Fthe-genesis.github.io%2Fpiggyvest-interest-calculator&text=I%20just%20calculated%20my%20interest%20with%20@piggyvest.%20Turns%20out%20I%20can%20make%20N"+interest+"%20as%20interest%20on%20N"+amount+"%20in%20"+durationSelect.options[parseInt(durationSelect.value)].textContent+"%21%20Check%20yours%20here%3A%20&hashtags=savings%2Cpiggyvest";
	}
	
	socialLink.setAttribute("href", tweet);
	socialLink.click();
} 
var download = document.getElementById("download");
download.addEventListener("click", saveReport);

function saveReport() {
	var amount = parseInt(input.value);

    var report = "If you SafeLock N"+amount+" for "+durationSelect.options[parseInt(durationSelect.value)].textContent+" with PiggyVest, you'll get an interest of N"+interest+", making your balance N"+balance+". You should save now!!";
			
    var blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "SafeLock-report.txt");
}




// Target calculator code starts here

var closeTargetCalculator = document.getElementById("close-target");
var targetCalculator = document.getElementById("target-calculator");
var targetResult = document.getElementById("target-result");
var targetSelector = document.getElementById("target-selector");
var targetAmount = document.getElementById("target-amount");
var targetFrequency = document.getElementById("target-frequency");
var targetDate = document.getElementById("target-date");
var targetBtn = document.getElementById("calculate-target");
var targeterror = document.getElementById("target-error");
var closetargetResult = document.getElementById("close-target-result");
var savings = document.getElementById("savings");
var goal = document.getElementById("goal");
var date = document.getElementById("date");
var sf=document.getElementById("sf");
var saveNow = document.getElementById("save");
var currentDate=new Date();  


//slide in target calculator
targetSelector.addEventListener("click", function() {
	targetCalculator.classList.remove("hidden");
	targetCalculator.classList.add("visible");

	operation = "target calculation";
});

closeTargetCalculator.addEventListener("click", function() {
	targetCalculator.classList.add("hidden");
	targetCalculator.classList.remove("visible");
    
    targetAmount.value ="";
	targetFrequency.value = "0";
	targetDate.value = "0";
    
	operation = "";
});

targetBtn.addEventListener("click", calculateTarget);
closetargetResult.addEventListener("click", closetargetOutput);
			 
   function closetargetOutput(){
	targetResult.classList.remove("visible");
	targetResult.classList.add("hidden");
   }

   function calculateTarget() {
			 var cashOutDate=new Date(targetDate.value);
			 var dateDifference=cashOutDate - currentDate;
			 var res = Math.abs(dateDifference) / 1000;
			 var elapsedDays = (Math.floor(res / 86400))+1;
			 var elapsedMonths=Math.round(elapsedDays/28);
			 var target=parseInt(targetAmount.value);
			 var dailyAmount=(target/elapsedDays).toFixed(2);
			 var monthlyAmount=target/elapsedMonths;
			 var savingFreq=parseInt(targetFrequency.value);
			 goal.textContent=target;
			 date.textContent="by "+formatDate(cashOutDate);
			 if(isNaN(target)){
                targeterror.textContent="Enter a valid amount"
			 }
			 
			 if(savingFreq===1){
			  sf.textContent="You need to save daily";
			  targeterror.textContent="";
			  savings.textContent=dailyAmount;
			  targetResult.classList.add("visible");
			  targetResult.classList.remove("hidden");
			  saveNow.textContent = "SAVE N" + target + " NOW!";
			 }
			 
			    else if (savingFreq===2){
				 
				 if(elapsedMonths<1){
					 targeterror.textContent="Period is less than a month"
				 }
				 else{
					sf.textContent="You need to save monthly";
					targeterror.textContent="";
					savings.textContent=monthlyAmount;
				    targetResult.classList.add("visible");
			        targetResult.classList.remove("hidden");
			        saveNow.textContent = "SAVE N" + target + " NOW!";
				 }

			 }
			 else{
			   targeterror.textContent="select saving frequency";
			 }
}

// share target calculator to twitter
var targetSocial = document.getElementById("target-social");
targetSocial.addEventListener("click", shareTargetToTwitter);

var targetSocialLink = document.getElementById("target-social-link");

function shareTargetToTwitter() {
	var shareTarget = parseInt(targetAmount.value);
	var tweet = "";

	if(operation == "target calculation") {
		tweet = "https://twitter.com/intent/tweet?url=https%3A%2F%2Fthe-genesis.github.io%2Fpiggyvest-interest-calculator&text=I%20just%20did%20my%20target%20savings%20calculations%20with%20@piggyvest.%20Turns%20out%20I%20have%20to%20save%20N"+savings.textContent+"%20"+targetFrequency.options[parseInt(targetFrequency.value)].textContent+"%20to%20make%20N"+shareTarget+"%21%20Check%20yours%20here%3A%20&hashtags=savings%2Cpiggyvest"
	}
	
	targetSocialLink.setAttribute("href", tweet);
	targetSocialLink.click();
}

// Download target saving report


var downloadTarget = document.getElementById("target-download");
downloadTarget.addEventListener("click", saveTargetReport);

function saveTargetReport() {
	var amount = parseInt(input.value);
	var shareTarget = parseInt(targetAmount.value);

    var report = "In order to save up to N"+shareTarget+" "+date.textContent+", you'll have to save "+savings.textContent+" with PiggyVest, on a "+targetFrequency.options[parseInt(targetFrequency.value)].textContent+" basis. You should save now!!";
			
    var blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "target-savings-report.txt");
}


