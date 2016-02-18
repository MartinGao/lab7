'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('button').click(function(){
		console.log('btn click');
		ga("send", "event", 'like', 'btnClicked');
	})
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}
