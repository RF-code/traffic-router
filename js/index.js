var colors =
	[
	"red",
	"yellow",
	"green"
	]

var trafficColor = function(streetPart){
	var randomColor = Math.floor(Math.random()* colors.length);

	document.getElementById(streetPart).style.backgroundColor = colors[randomColor];
}

var display = function(){
	trafficColor("streetA1");
	trafficColor("streetA2");
	trafficColor("streetA3");
	trafficColor("streetA4");
	trafficColor("streetB1");
	trafficColor("streetB2");
	trafficColor("streetB3");
	trafficColor("streetB4");
	trafficColor("streetB5");
	trafficColor("streetB6");
	trafficColor("streetB7");
	trafficColor("streetB8");
}