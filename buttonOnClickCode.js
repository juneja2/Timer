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
	
	setTimeout(() => {$("span").hide();
					  $("#startButton").text("Pause");
					  $("#startButton").attr("onclick", "pause()");
					  clock(hours, minutes, seconds)}
			   ,1000);
}
function clock(hours, minutes, seconds){
	var p = document.getElementById("time");
	p.textContent = hours + ":" + minutes + ":" + seconds;
	if(!(hours == 0 && minutes == 0 && seconds == 0)){
		[hours, minutes, seconds] = update(hours, minutes, seconds);
		setTimeout(() => {clock(hours, minutes, seconds)}, 1000);
	}
	else{
		$("span").show();
		$("#startButton").text("Start");
		$("#startButton").attr("onclick", "restart()");
		/**Adding audio tag when the timer is finished*/
		var audio = document.createElement("audio");
		audio.src = "5thSymphony.mp3";
		audio.volume = 0.9;
		audio.autoplay = true;
		document.getElementById("timerSetting").appendChild(audio);
		/**Making finished timer aka 0:0:0 blink*/
		let intervalId = setInterval(() => {
				p.style.visibility = (p.style.visibility == "hidden" ? "" : "hidden");
			}, 500)
	}
}
function pause(){

}
function restart(){

}