$(document).ready(function(){
	
	$("p").hide();
	$("#topPicture").hide();
	
	$("h1").click(function(){
		
	$(this).next().fadeToggle(1000);
		
	});
	
	/* this is jq 02 - button selectors */
	
	$("#testbutton").click(function() {
		
	/* $("#jq02").css("background-color","#FF0000");	*/
	
		$("strong, #testbutton").css("background-color","#FF0000");
	});
	
	
});

 /* this is jq 03 mouse effects */


	$("h3").mousedown(function)() {
	
	
	$(this).css("background-color", "#0000FF");
	
	
	
});
$("h3").mouseup(function)() {
	
	
	$(this).css("background-color", "#00FF00");
	
	
	
});




	$("h3").mouseenter(function)() {
	
	
	$(this).css("font-size", "3em");
		
	
	
});
$("h3").mouseleave(function)() {
	
	
	$(this).css("background-color", "#0FFF00");
	/*#(this) unbind(); makes it happen one time only */	
	
	
});	
