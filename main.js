class User {
	constructor(_fname, _lname, _age, _img){
		this.fname = _fname;
		this.lname = _lname;
		this.age = _age;
		this.img = _img;
	}

	retAge(){
		return this.age;
	}

	retImg(){
		return this.img;
	}

	retFname(){
		return this.fname;
	}

	retLname(){
		return this.lname;
	}
}

var  arrUser = [];

function btnSendClick(){
	let data = {};
	data.fname = document.getElementById("fname").value;
	data.lname = document.getElementById("lname").value;
	data.age = document.getElementById("age").value;
	data.img = document.getElementById("img").value;

	if(data.fname != "" && data.lname != "" && data.age > 0 && data.age<156){
		arrUser.push(new User(data.fname, data.lname, data.age, data.img));
		console.log("User addded");
	}else{
		console.log("Error");
	}
}


function btnPrintClick(){
	clearPage();
	let body = document.body;
	let contects = "<div>\n";
	for (let i = 0; i< arrUser.length; i++){
		contects += "<p>" + "<img src='" + arrUser[i].retImg() + " ' width='350' height='250' align='left' class='img-responsive' >";
		contects += "Name : " + arrUser[i].retFname() + "<br>"  + "<br>";
		contects += "Last Name : " + arrUser[i].retLname() + "<br>" + "<br>";
		contects += "Age : " + arrUser[i].retAge() + "</p>" +  "<br>" ;
	}

	contects += "</div>";

	body.innerHTML = contects;
}

function clearPage(){
	document.body.innerHTML = "";
}