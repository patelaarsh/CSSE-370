function Print() {
  document.getElementById("demo").innerHTML = "Hello";
}

function removeElement(){   	
		
	var element = document.getElementById("demo");
	element.parentNode.removeChild(element);
}

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("coordinates").innerHTML = coords;
}

function clearCoor() {
  document.getElementById("coordinates").innerHTML = "";
}
