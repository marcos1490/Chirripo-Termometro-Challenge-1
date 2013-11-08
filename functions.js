$(document).ready(function(){

	$("#sendString").click(function(){
		var inputStringText = $("#inputString").val();
		var fontSize = $("#fontSize").val();

		updateCanvas(inputStringText, fontSize);
	});

	$("#fontSize").change(function(){
		var inputStringText = $("#inputString").val();
		var fontSize = $("#fontSize").val();
		updateCanvas(inputStringText, fontSize)
	});

	function updateCanvas(inputStringText, fontSize){
		$('.myCanvas').customText('update', { 'text' : inputStringText, fontSize : fontSize+'px'});		
	}



	$('.myCanvas').customText('init');
		
});