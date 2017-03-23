function clicked() {
	// Declaring a variable 'score' to add points to it if they user inputs correct answer. 
	var score = 0;
	var div = document.getElementById('incorrect');
	//Question 1
	var q1 = $('input[name=q1]:checked').val();
	if (q1 == 4) { // position 4 contains the correct answer
		score = score + 100;
	} else {
		div.innerHTML = 'Question 1: Correct Answer is The Late Late Show';
	}
	//Question 2
	var q21 = document.getElementById("q2");
	var q2a = $("input[name=q21]:checked").length;
	var q22 = document.getElementById("q2");
	var q2b = $("input[name=q22]:checked").length;
	var q23 = document.getElementById("q2");
	var q2c = $("input[name=q23]:checked").length;
	var q24 = document.getElementById("q2");
	var q2d = $("input[name=q24]:checked").length;
	if ((q2a == 0) && (q2b == 1) && (q2c == 0) && (q2d == 0)) { // position q2b contains the correct answer
		score = score + 100;
	} else {
		div.innerHTML = div.innerHTML + "<br>" + 'Question 2: Correct Answer is The River Shannon';
	}
	//Question 3
	var q3 = document.getElementById("q3");
	if ((q3.value == "snake") || (q3.value == "SNAKE") || (q3.value == "Snake") || (q3.value == 3)) {
		score = score + 100;
	} else {
		div.innerHTML = div.innerHTML + "<br>" + 'Question 3: Correct Answer is Snake';
	}
	//Question 4
	var q4 = $("#limerick").val();
	if (q4 == "munster") { // munster from the drop down list is the correct answer
		score = score + 100;
	} else {
		div.innerHTML = div.innerHTML + "<br>" + 'Question 4: Correct Answer is Munster ';
	}
	//Question 5
	var q5 = $('input[name=q5]:checked').val();
	if (q5 == 2) { // position 2 contains the correct answer
		score = score + 100;
	} else {
		div.innerHTML = div.innerHTML + "<br>" + 'Question 5: Correct Answer is May';
	}
	//Question 6
	var q61 = document.getElementById("q6");
	var q6a = $("input[name=q61]:checked").length;
	var q62 = document.getElementById("q6");
	var q6b = $("input[name=q62]:checked").length;
	var q63 = document.getElementById("q6");
	var q6c = $("input[name=q63]:checked").length;
	var q64 = document.getElementById("q6");
	var q6d = $("input[name=q64]:checked").length;
	if ((q6a == 0) && (q6b == 0) && (q6c == 0) && (q6d == 1)) { // position q6d contains the correct answer
		score = score + 100;
	} else {
		div.innerHTML = div.innerHTML + "<br>" + 'Question 6: Correct Answer is Hook Lighthouse, Wexford, Ireland';
	}
	//If user forgets to tick boxes in Question 2 or 6, or if user forgets to type answer for Question 3 in textbox, This will alert user by a pop up.
	if (((q2a == 0) && (q2b == 0) && (q2c == 0) && (q2d == 0)) || (q3.value == "") || ((q6a == 0) && (q6b == 0) && (q6c == 0) && (q6d == 0))) {
		alert("Please make sure every question is answered before pressing 'Submit' button");
	} else {
		score = (score / 600) * 100; //Calculation Percentage for score.
		score = Math.round(score * 100) / 100; //Round function used for reducing additional digits.
		document.getElementById('feedback').innerHTML = document.getElementById('hidden').innerHTML + "****  You have scored " + score + "% out of 100%!  ****";
	}
}

function hideButtonClicked() {
	document.getElementById('incorrect').innerHTML = "";
}

function showButtonClicked() {
	document.getElementById('incorrect').innerHTML = 'Question 1: Correct Answer is The Late Late Show' + "<br>" + 'Question 2: Correct Answer is The River Shannon' + "<br>" + 'Question 3: Correct Answer is Snake' + "<br>" + 'Question 4: Correct Answer is Munster ' + "<br>" + 'Question 5: Correct Answer is May' + "<br>" + 'Question 6: Correct Answer is Hook Lighthouse, Wexford, Ireland';
}