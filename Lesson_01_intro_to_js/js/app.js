/*var name, time, place, event;
name = "Ros";
time = "19:00";
place = "Lviv, Comein";
event = prompt ("");
var sentense = console.log(name + " " + time + " " + place + " " + event); //краще оголосити змінну тут, чи рядком вище і окремо?
*/

var x1, x2, y1, y2;
x2 = prompt("Enter X of a point A:","0");
y2 = prompt("Enter Y of a point A:","0");
x1 = 4;
y1 = 7;
var result = Math.sqrt((Math.pow(x1-x2),2) + Math.pow((y1-y2),2));
alert("The distance between points A and B = "+result);

/*
var ds="";
for (var i = 0; i<8; i++) {
    ds = ds + "#";
    console.log(ds)
}
/*

var i = 0;
while (i<4) {
	console.log("# # # # ");
	console.log(" # # # #");
	i++;
}
/*
while (1) {
	var numb = prompt("Try to guess a number!");
	var rand = parseInt((Math.random() * 100) + 1);
	if (numb != rand) {
		if (numb < rand) {
			alert("Our number is higher, try again!");
		} else
			alert("Our number is lower, try again!");
	} else
		alert("You are right, the number is [rand]");
}
*/