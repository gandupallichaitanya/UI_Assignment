function validate(){
	var email = document.getElementById("email").value;
	var emailRegExp = /\S+@\S+\.\S+/;
	var emailMsg = document.getElementById("validEmailMsg")
	var password = document.getElementById("password").value;
	var passwordMsg = document.getElementById("validPasswordMsg")
	var passRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/;
	
	if (email == ""){
		document.getElementById("validEmailMsg").innerHTML='Please Enter Email Id';
		emailMsg.style.display = "block";
	}
	else if(!emailRegExp.test(email)){
		document.getElementById("validEmailMsg").innerHTML='Please Enter Valid Email Id (Example: chaitanya@gmail.com)';
		emailMsg.style.display = "block";
	}else{
		emailMsg.style.display = "none";
	}
	
	if(password == ""){
		document.getElementById("validPasswordMsg").innerHTML='Please Enter Password';
		passwordMsg.style.display = "block";
	}
	else if(password.length > 0 && password.length < 6){
		document.getElementById("validPasswordMsg").innerHTML='Password length should be more than 6 characters';
		passwordMsg.style.display = "block";
	}
	else if(!passRegExp.test(password)){
		document.getElementById("validPasswordMsg").innerHTML='Password should contain only alphabets,numbers,special characters';
		passwordMsg.style.display = "block";
	}
	else{
		passwordMsg.style.display = "none";
	}
}
