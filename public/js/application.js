$(document).ready(function () {

	$('.die').hide();
  
	$('form').submit(function(e){
		e.preventDefault();
	  	$('.die').show();

	  	var input = $('input').serialize();

	  	$.ajax({
	  		method: "POST",
	  		url: "/rolls",
	  		data: input
		  })
		 .done(function( data ) {
	    	$( '.roll' ).text(data);
	  	});
	  	

	})


});
