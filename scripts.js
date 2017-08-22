window.addEventListener("load", function(){
	var	colorSelect = document.getElementsByClassName("color");
	for (var i=0; i< colorSelect.length; i++) {
		colorSelect[i].addEventListener("click", function(event) {
			currentColor = event.target.id;
		});
	}
	var paintBox = document.getElementsByClassName("row");
	for (var i=0; i< paintBox.length; i++) {
		paintBox[i].addEventListener("click", function(event){
			event.target.style.backgroundColor = currentColor ;
		});
	}
	var saveButton = document.getElementByID("save_button")
	saveButton.addEventListener("click", function())
});