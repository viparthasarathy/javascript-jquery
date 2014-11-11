function createGrid(gridSize) {

	var boxSize = (500 -2*gridSize)/gridSize;
	var container = $(".container").html("");
	for (var row = 0; row < gridSize; row++) {
		for (var column = 0; column < gridSize; column++) {
			container.append( $("<div class='grid'></div>").height(boxSize).width(boxSize) );
		}
	}
}

function clear(){

	newSize = prompt("How many grids would you like? Choose a number between 1 and 64 (enter 0 to cancel)");
		if (newSize > 0 && newSize < 65) {
			createGrid(newSize);

		}
		else if (newSize == 0) {

		}
		else {
			clear();
		}
}

$(document).ready(function(){
 	createGrid(16);
 	 $(".grid").on("mouseenter", function() {

 		$(this).css("background-color", "white");
 	});

 	$("#clear").on("click", function(){
 		clear();

 		$(".grid").on("mouseenter", function() {

 			$(this).css("background-color", "white");
 		});
 	});
});
