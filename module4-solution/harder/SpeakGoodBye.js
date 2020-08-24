(function(window){
	var byespeaker={};
	var speakword="Good Bye";
	byespeaker.speak= function (name) {
		console.log(speakword+" "+name);
		}
		window.byespeaker=byespeaker;
})(window);