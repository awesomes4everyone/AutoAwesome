//AutoAwesome - listens for event for beginning of song which triggers clicking of Awesome
turntable.addEventListener("trackstart", awesomeHandler);    //the awesome button will be clicked the first time this code runs and whenever a track starts
function awesomeHandler(){
	
	var e = jQuery.Event("click");
	e.pageX = 1;							//click handler for awesome button checks that click event has pageX and pageY properties != 0
	e.pageY = 1;							//
	turntable.lastMotionTime = util.now();  //click handler checks idle time - use internal time check - util.now - to set our activity to current time
	$("a[style='position: absolute; left: 370px; top: 555px; z-index: 10001; ']").trigger(e); //attribute for 'AWESOME' button
}

awesomeHandler();