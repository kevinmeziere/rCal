
function resizeCal() {
	var calRows = $('.calRow').size();
	var calHeight = $(window).height()-$('.titleRow').height()-$('#header').height()-100;
	$('.calContainer').css('height', calHeight);
	$('.calRow').css('height', (calHeight/calRows));
}
$(document).ready(function(){
resizeCal();
//	alert("point1");
});
$(window).resize(function(){
resizeCal();
});

$('.calDay').live("mouseover", function(){
	$(this).addClass("highlight");
});
$('.calDay').live("mouseleave", function(){
	$(this).removeClass("highlight");
});

$('.calDay').live("click", function(){
	$(this).parent(".calRow").()
	
});
