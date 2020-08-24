(function(window){
	var hellospeaker={};
	var speakword="Hello";
	hellospeaker.speak= function (name) {
		console.log(speakword+" "+name);
		}
		window.hellospeaker=hellospeaker;
})(window);