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
  	var get_time = function(){
    	var request = new XMLHttpRequest();
    	request.open("GET", "/saves.php");

    	request.send();

    	request.addEventListener("load", function(event){
      		var request = event.target;
      		alert(request.response)
      	})
    }

	var saveButton = document.getElementById("save_button");
	saveButton.addEventListener("click", get_time
	})

	// Goals: On saveButton click: 
	// Get info from savefiles.csv via saves.php
	// Put current row colors into array
	// append that array to csv
});