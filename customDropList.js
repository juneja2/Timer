function appendDropDownValues(arr, start, end){
	for(var i = start; i < end; i++){
		var i_str = i.toString();
		for(var elem of arr){
			var child = document.createElement("option");
			child.value = child.textContent = i_str;
			elem.appendChild(child);
		}	
	}
}
var hours = document.createElement("select");
var minutes = document.createElement("select");
var seconds = document.createElement("select");

var arr = [hours, minutes, seconds];
appendDropDownValues(arr, 0, 24);

appendDropDownValues(arr.slice(1, 3), 24, 60);

var timerSetting = document.getElementById("timerSetting");
var button = document.createElement("BUTTON");
button.innerHTML = "Start";
arr.push(button);

for (var i = 0; i < arr.length; i++){
	timerSetting.appendChild(arr[i]);
	if(i == arr.length - 2){ // Want to add a space between the time and button
		timerSetting.appendChild(document.createTextNode(" "));
	}
}
