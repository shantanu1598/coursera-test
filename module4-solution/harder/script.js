(function(window){

	var names=["John","Yaakov","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];

	for(var i=0;i<names.length;i++){
		var firstletter=names[i].charAt(0);
		if(firstletter=='j' || firstletter=='J'){
			byespeaker.speak(names[i]);
		}
		else{
			hellospeaker.speak(names[i]);
		}
	}
})(window);