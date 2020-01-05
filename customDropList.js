var dropDownList = document.createElement("select");

for(var i = 0; i < 24; i++){
	var option = document.createElement("option");
	option.value = i.toString();
	option.textContent = i.toString();
	dropDownList.appendChild(option);
}

console.log("Hello");
document.getElementById("timerSetting").appendChild(dropDownList);