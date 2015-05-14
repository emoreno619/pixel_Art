function makeBoard(){

	var body = document.querySelector("body");
	var flag = true;
	for (var i = 0; i < 900; i++){ //row
			var aSquare = document.createElement("div");
			aSquare.style.width = "3.23%";
			aSquare.style.float = "left";
			aSquare.style.paddingBottom = "3.23%";
			aSquare.style.border = "1px solid black";
			aSquare.style.backgroundColor = "white";
			body.appendChild(aSquare);
		}
	var tiles = document.querySelectorAll("div");
	for (var j = 29; j < tiles.length; j++){
		tiles[j].addEventListener("click", function(){changeColor(this);});
		tiles[j].addEventListener("dragover", function(event) {event.preventDefault(); changeColor(this);}, false);
		tiles[j].draggable = false;
	}
	createPallette();
}

function createPallette(){
	var tiles = document.querySelectorAll("div");

	//Credit to the following site for helping me understand how to generate a rainbow pallette
	//http://krazydad.com/tutorials/makecolors.php

	var frequency = .3;
	var rand1 = 0;
	var rand2 = 0;
	var rand3 = 0;
	for (var i = 0; i < 29 ; i++){
		
		rand1 = Math.round(Math.sin(frequency*i + 0) * 127 + 128);
		rand2 = Math.round(Math.sin(frequency*i + 2) * 127 + 128);
		rand3 = Math.round(Math.sin(frequency*i + 4) * 127 + 128);

		tiles[i].style.backgroundColor = "rgb("+rand1+","+rand2+","+rand3+")";
		tiles[i].addEventListener("click", function(){changeBrush(this);});

	}
}

var color = "rgb(0, 0, 0)";

function changeBrush(palletteSq){

	color = palletteSq.style.backgroundColor;

}

function changeColor(aSquare){

	aSquare.style.backgroundColor = color;
	
}

function dragChange(aSquare){

}


makeBoard();