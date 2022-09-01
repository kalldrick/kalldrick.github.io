const scrolls = document.querySelectorAll(".siders");
const panel = document.getElementById("cards");

scrolls.forEach(scroll => {

	scroll.addEventListener("click", () =>{
	
		var x = panel.style.marginLeft;
		x = x.substr(0,x.length-2);
		x = (+x);
		if(x > -400){
			x = -200;
		}
		else if(x < -750){
			x = -770;
		}
		if(scroll.name == "left") {
			console.log(x);
			panel.style.marginLeft = x+200+'px';
		}
		if(scroll.name == "right")	{
			console.log(x);
			panel.style.marginLeft = x-200+'px';
		}

	})

});