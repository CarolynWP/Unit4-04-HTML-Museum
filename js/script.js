//use strict
"use strict"

function museumDiscount() {
	// variable
	let age = document.getElementById("age").value;

	//if statement for if the user is over 18
	if (age < 5) {
		document.getElementById("answer").innerHTML = "You are old enough to see an R-rated movie alone!"

}
	//if statement for if the user is over 13
	else if (age > 95){
	document.getElementById("answer").innerHTML = "You are old enough to see a PG-13 movie alone!"
}

	else if (age >= 7){
		document.getElementById("answer").innerHTML = "You are old enough to see a G or PG movie alone!"
	}

	else {
		document.getElementById("answer").innerHTML = "Sorry, you are too young to see a movie alone."
	}
}