var hours = document.createElement("select");
var minutes = document.createElement("select");
var seconds = document.createElement("select");
var button = document.createElement("BUTTON");
button.innerHTML = "Start";
button.onclick = showClock;

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

/** Adding the values to the hours, minutes, and seconds select options*/
var arr = [hours, minutes, seconds];
appendDropDownValues(arr, 0, 24);
appendDropDownValues(arr.slice(1, 3), 24, 60);

arr.push(button);
var id_names = ["hours", "minutes", "seconds", "startButton"];

var timerSetting = document.getElementById("timerSetting");

for (var i = 0; i < arr.length; i++){
	arr[i].setAttribute("id", id_names[i]);

	// Everything goes in span so I can hide it while the timer is running
	if(i != arr.length - 1){
		let span = document.createElement("span");
		span.appendChild(arr[i]);

		span.appendChild(document.createTextNode(" "))
	
	 	// Want to add a space between the time and button
		span.appendChild(document.createTextNode(id_names[i] + " "));
		timerSetting.appendChild(span);
	}
	else{
		/** I want to keep the button separate so I can hide all the spans
		  * but button will still be visible for features like pause */
		timerSetting.appendChild(arr[i]); 
	}
	
}

var p = document.createElement("p");
p.setAttribute("id", "time");
timerSetting.appendChild(p);
