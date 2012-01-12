//AutoAwesome - listens for event for beginning of song which triggers clicking of Awesome

function getAwesomeId() {
	var awesomeId="";
	for (x in document.styleSheets) {
		for (i in document.styleSheets[x].cssRules) 
		{
			var ss = document.styleSheets[x];
			if( typeof ss != "undefined")
			{
				csstext = document.styleSheets[x].cssRules[i];
				if( typeof csstext==="object") 
				{
					if( document.styleSheets[x].cssRules[i].cssText.indexOf("vote") != -1)
					{	
						awesomeId = document.styleSheets[x].cssRules[i].selectorText;
						break;
					}
				}
			}
		}
	}
	return awesomeId;
}

turntable.addEventListener("trackstart", awesomeHandler);    //the awesome button will be clicked the first time this code runs and whenever a track starts
function awesomeHandler(){
	
	var e = jQuery.Event("click");
	e.pageX = 1;							//click handler for awesome button checks that click event has pageX and pageY properties != 0
	e.pageY = 1;							//
	turntable.lastMotionTime = util.now();  //click handler checks idle time - use internal time check - util.now - to set our activity to current time
	$(getAwesomeId()).trigger(e); //attribute for 'AWESOME' button
}

awesomeHandler();
