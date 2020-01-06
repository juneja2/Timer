function update(hours, minutes, seconds){
	if(seconds == 0){
		seconds = 59;
		minutes--;
		if(minutes < 0){
			minutes = 59;
			hours--;
		}
	}
	else{
		seconds--;
	}
	return [hours, minutes, seconds];
}
function showClock(){
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");

	hours = parseInt(hours.options[hours.selectedIndex].value, 10);
	minutes = parseInt(minutes.options[minutes.selectedIndex].value, 10);
	seconds = parseInt(seconds.options[seconds.selectedIndex].value, 10);
	

	while(!(hours == 0 && minutes == 0 && seconds == 0)){
		console.log(hours + ":" + minutes + ":" + seconds);
		// setTimeout(console.clear, 1000);
		[hours, minutes, seconds] = update(hours, minutes, seconds);
	}
	/* There is some over head he**/

}