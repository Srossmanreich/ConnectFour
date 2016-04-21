$(document).ready(function(){
	$('#color-button').click(function(e){
		e.preventDefault();

		$.ajax({
  			method: "GET",
  			url: '/colors/random'
	  	})
	 	.done(function(data) {
	 		$("li:nth-child("+data.cell+")").css("background-color",data.color);
  	 	});

	})
});