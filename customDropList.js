function appendDropDownValues(arr, start, end){
	for(var i = start; i < end; i++){
		var i_str = i.toString();
		for(var elem of arr){
			var child = document.createElement("option");
			child.value = child.textContent = i_str;
			elem.appendChild(child);
		}	
	}
	console.log("Hi");
}
var hours = document.createElement("select");
var minutes = document.createElement("select");
var seconds = document.createElement("select");

var arr = [hours, minutes, seconds];
appendDropDownValues(arr, 0, 24);

appendDropDownValues(arr.slice(1, 3), 24, 60);

timerSetting = document.getElementById("timerSetting");

for (var elem of arr){
	timerSetting.appendChild(elem);
}
