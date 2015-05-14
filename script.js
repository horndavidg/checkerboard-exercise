// Your JS goes here

var startingFunction = function() {


for (var i =0 ; i<9; i++)
{
	for (var j = 0; j < 8; j++)
	{

		

			var rando1 = Math.floor(Math.random() * 255);
			var rando2 = Math.floor(Math.random() * 255);
			var rando3 = Math.floor(Math.random() * 255);

		var tile = document.createElement("div");
		tile.style.width = "11%";
		tile.style.height = "100px";
		tile.style.background = "rgb("+ rando1 + "," + rando2 + "," + rando3 + ")";
		tile.style.float = "left";
		document.body.appendChild(tile);
		
	
	} 
}

}

document.addEventListener("DOMContentLoaded", startingFunction);