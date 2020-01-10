var interval, timeout;
var hours, minutes, seconds;

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
	hours = document.getElementById("hours");
	minutes = document.getElementById("minutes");
	seconds = document.getElementById("seconds");

	hours = parseInt(hours.options[hours.selectedIndex].value, 10);
	minutes = parseInt(minutes.options[minutes.selectedIndex].value, 10);
	seconds = parseInt(seconds.options[seconds.selectedIndex].value, 10);
	
	timeout = setTimeout(() => {$("span").hide();
					  $("#startButton").text("Pause");
					  clock()}
			   ,1000);
}
function clock(){
	$("#startButton").attr("onclick", "pause()");
	var p = document.getElementById("time");
	p.textContent = hours + ":" + minutes + ":" + seconds;
	if(!(hours == 0 && minutes == 0 && seconds == 0)){
		[hours, minutes, seconds] = update(hours, minutes, seconds);
		timeout = setTimeout(() => {clock(hours, minutes, seconds)}, 1000);
	}
	else{
		$("span").show();
		$("#startButton").text("Start");
		$("#startButton").attr("onclick", "restart()");
		/**Adding audio tag when the timer is finished*/
		var audio = document.createElement("audio");
		audio.setAttribute("id", "beethoven");
		audio.src = "5thSymphony.mp3";
		audio.volume = 0.9;
		audio.autoplay = true;
		document.getElementById("timerSetting").appendChild(audio);
		/**Making finished timer aka 0:0:0 blink*/
		interval = setInterval(() => {
				p.style.visibility = (p.style.visibility == "hidden" ? "" : "hidden");
			}, 500)
	}
}
function pause(){
	clearTimeout(timeout);
	$("#startButton").text("Start");
	$("#startButton").attr("onclick", "clock()");
}
function restart(){
	clearInterval(interval);
	$("#beethoven").remove();
	$("p").css("visibility", "");
	showClock();
}