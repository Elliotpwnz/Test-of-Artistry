$(document).ready(function(){
	$('#left-container').draggable().resizable();
	$('#center-container').draggable().resizable();
	$('#right-container').draggable().resizable();

  $(".updateHPDisplay").click(function(){
		$("#currentHP").html("Current HP: " + player.currentHP);
	});

});
