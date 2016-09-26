$(document).ready(function() {

	$("p").hide();
	$("#topPicture").hide();

	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});

	/* this is jq 02 - button selectors */

	$("#testbutton").click(function() {

		/* $("#jq02").css("background-color","#FF0000");	*/

		$("strong, #testbutton").css("background-color", "#FF0000");
	});

});

