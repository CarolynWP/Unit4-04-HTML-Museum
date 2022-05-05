//use strict
"use strict"

function museumDiscount() {
	// variables
	let age = parseInt(document.getElementById("age").value);
	let select = document.getElementById("day");
	let day = select.options[select.selectedIndex].value;
	
	//if statement for if the user is under 5 or over 95
	if (age < 5 || age > 95){
		document.getElementById("answer").innerHTML = "You will be able to go to the museum for free!"

}
	//if statement for if the user is between the ages of 12 and 21 or it is a Tuesday or Thursday
	else if (age > 12 && age < 21 || day == tue || day == thu) {
	document.getElementById("answer").innerHTML = "You will be able to go to the museum for a discounted price!"
}

	else {
		document.getElementById("answer").innerHTML = "You are not eligible for any discounts."
	}
}