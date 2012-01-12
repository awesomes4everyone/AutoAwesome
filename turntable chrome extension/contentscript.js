chrome.extension.onRequest.addListener(onRequest);

function onRequest(request, sender, sendResponse) {
	if (request.check == 'yes')
	{
		if(document.getElementById('autoawesome'))
		{
			response = {check: 'loaded'};
		}
		else
		{
			response = {check: 'notloaded'};
		}
	}
	else
	{
		response = {check: 'notloaded'};
	}	
  	sendResponse(response);
}