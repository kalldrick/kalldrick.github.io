function validation()	{

	let form = document.getElementById("form");
	let email = document.getElementById("email").value;
	let text = document.getElementById("text");

	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if(email.match(pattern))
	{
		form.classList.add("valid");
		form.classList.remove("invalid");
		text.innerHTML = "Valid Email Address";
		text.style.color = "#00ff00";
	}
	else{
		form.classList.remove("valid");
		form.classList.add("invalid");
		text.innerHTML = "Invalid Email Address";
		text.style.color = "#ff0000";
	}
	if(email == ""){
		form.classList.remove("valid");
		form.classList.remove("invalid");
		text.innerHTML = "";
		text.style.color = "#ffffff";
	}
}