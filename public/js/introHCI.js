'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$('.likeCtr').click(clickLikeCtr);
}

function clickLikeCtr(e) {
	e.preventDefault();
	ga('create', 'UA-134930894-1', 'auto');
	ga('send', 'event', 'like', 'click');
}