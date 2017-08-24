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
	
  	var savePainting = function(){
  		var paintColors = []
  		for (var i = 0; i < paintBox.length; i ++) {
  			paintColors.push(paintBox[i].style.backgroundColor.charAt(0))
  		}
  		row1 = [paintColors[0], paintColors[1], paintColors[2], paintColors[3]]
  		row2 = [paintColors[4], paintColors[5], paintColors[6], paintColors[7]]
  		row3 = [paintColors[8], paintColors[9], paintColors[10], paintColors[11]]
  		row4 = [paintColors[12], paintColors[13], paintColors[14], paintColors[15]]

    	var request = new XMLHttpRequest();
    	request.open("GET", "/saves?savedColors=" + row1 + "," + row2 + "," + row3 + "," + row4 );

    	request.send()

    	request.addEventListener("load", alertSuccess)
  	}

 	 var alertSuccess = function(event){

    	alert("Save Successful");
  	}

	var saveButton = document.getElementById("save_button");
	saveButton.addEventListener("click", savePainting)

	// Goals: On saveButton click: 
	// Get info from savefiles.csv via saves.php
	// Put current row colors into array
	// append that array to csv
});