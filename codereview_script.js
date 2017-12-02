
var city=["Amsterdam", "London"];
var country=["Netherlands", "United Kingdom"]

var amsterdam=[1500, 500, 1800, 700];
var london=[2500, 1500, 1000, 900];

var dam1=1500;
var dam2=500;
var dam3=1800;
var dam4=700;
var damtotal=[dam1 + dam2 + dam3 + dam4];
var averagedam=[damtotal/amsterdam.length];

var don1=2500;
var don2=1500;
var don3=1000;
var don4=900;
var dontotal=[don1 + don2 + don3 + don4];
var averagedon=[dontotal/london.length];

var diff=[averagedon-averagedam];

console.log("mean of amsterdam prices "+ averagedam);
console.log("mean of london prices "+ averagedon);
console.log("difference between london and amsterdam prices "+ diff);
var averagedam=document.getElementsByClassName("pricee");


/*

function avarage(amsterdam, london){

	var dam = amsterdam/4;
	var don = london/4;
	console.log(dam + don);
}
console.log(dam + don); */