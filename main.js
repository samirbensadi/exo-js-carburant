$(function(){
	
	$( "input" ).on( "click", function() {
	  $( "#reponse" ).html( $( "input:checked" ).val() + " a été choisi !" );
	  $("form").hide();
	  $("#CB").html("<button id='btn'> Valider </button>");
		  $("button").on("click",function(){
			$("#CB").html("<img id='Youh' src='vaisseau.gif'>");
			alert(" On décole !!! Youhooo !!!");	
		});
	});



	

	
});



