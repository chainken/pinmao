javascript: void((function() {
	function ti(divs){
		var i =0;
		window.setInterval(function(){
			divs[i++%4].click();
		},1000);
	}
	function go() {
		var divs = document.getElementsByClassName("answer-core");
		
		
			ti(divs);
		
	}
	console.log("加载");

	go();


})())
