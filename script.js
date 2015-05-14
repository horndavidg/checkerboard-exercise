// Your JS goes here

// var check1 = document.createElement("div")

// check1.style.backgroundColor = "red";
// check1.style.width = 11.1%;
// check1.style.float = left;
// check1.style.paddingBottom = 11.1%;

// var check2 = document.createElement("div")

// check2.style.backgroundColor = "black";
// check2.style.width = 11.1%;
// check2.style.float = left;
// check2.style.paddingBottom = 11.1%;


// (function(){

// 	document.createElement("div");

// })();



// I was able to create multiple <div>s with the below functions and insert them
// into the page. Need to change the attributes of each one to match the 
// checkerboard but ran out of time. Got mixed up in the begining. 

// (function() {

// for (i = 0; i < 50; i++) {

// var div = document.createElement("div");

// var body = document.querySelector("body");

// var create = body.appendChild(div);

// for (j = 0; j < 2; j++) {

// 	console.log(create[j]);
// }
// }
// })();

////////////////////////////////////////////////////////////////////////////////

// Able to create 2 squares but they seem to write over the other ones.
// By console.loging the action I can see they are created 50 times but they
// just over write one and other.  


// var tile2 = document.createElement("div");
// tile2.innerHTML = ".";
// tile2.style.backgroundColor = "black";
// tile2.style.width = "11.1%";
// tile2.style.paddingBottom = "11.1%";
// tile2.style.float = "left";



// var tile = document.createElement("div");
// tile.innerHTML = ".";
// tile.style.backgroundColor = "red";
// tile.style.width = "11.1%";
// tile.style.paddingBottom = "11.1%";
// tile.style.float = "left";


// var body = document.querySelector("body");


// // var answer = document.createElement("div");

// var checker = (function() {

// 	//var answer = [];

// 	for (var i = 0; i < 50; i++) {

// 	if (i % 2 === 0) {
// 		//answer.push(tile2);
// console.log(body.appendChild(tile));

// 	} else {
// 		//answer.push(tile);
// console.log(body.appendChild(tile2));
		
// 	}
// }

// //body.appendChild(answer);


// //return answer;

// })();

/////////////////////////////////////////////////////////////////////



// UPDATED!!!!!!!


var startingFunction = function() {


var bod = document.querySelector("body");


for (var i =0 ; i<9; i++)
{
	for (var j = 0; j < 8; j++)
	{
				if(j%2 === 0) {
		
		var tile = document.createElement("div");
		tile.style.width = "11%";
		tile.style.height = "100px";
		tile.style.background = "red";
		tile.style.float = "left";
		document.body.appendChild(tile);
	}
	else
	{
		var tile = document.createElement("div");
		tile.style.width = "11%";
		tile.style.height = "100px";
		tile.style.background = "black";
		tile.style.float = "left";
		document.body.appendChild(tile);
	}
	} 
}

}

document.addEventListener("DOMContentLoaded", startingFunction);

// // var answer = document.createElement("div");
//  (function() {

// 	//var answer = [];
// for (i = 0; i < 100; i++) {

// 	var create1 = body.appendChild(tile)
// 	var create2 = body.appendChild(tile2)

// 	        for (j = 0; j < 2; j++) {

// 	              if (j % 2 === 0) {
// 		//answer.push(tile2);
// 			     console.log(create1[j]);

// 	          } else {
// 		//answer.push(tile);
// 				  console.log(create2[j]);
		
// 	   }
// }

// //body.appendChild(answer);

// }
// //return answer;

// })();



// var j = 0;

// while (j < 40) {

// 	insertBefore(checker,document.getElementById("body").firstChild);;
//        j++;
// }			

// (function() {

// 	for (j = 0; j < 40; j++) {

// console.log(body.appendChild(checker));
// 			//return checker[j];

// 	}

// })();

// body.appendChild(tile);

// body.appendChild(tile2);
