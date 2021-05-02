//POP SHOWS WITH SCROLL
var getBodyHeight = $('body').outerHeight();
$('.rentPopUp').height(getBodyHeight);

//ALLOWS INNER LINKS TO CLICK
$('.rentPopUp').click(function(e) {
	if ( !$(e.target).is('.rentPopUpContent, .rentPopUpContent *' ) ) {
		$('.rentPopUp').fadeOut("2000");
		return false;
	}
});

$('.closeButton').click(function() {
	$('.rentPopUp').fadeOut("2000");
	return false;
});

//FADE IN POP UP
function showPopUp() {
    $('.rentPopUp').fadeIn("2000");
}

setTimeout(showPopUp, 3000);