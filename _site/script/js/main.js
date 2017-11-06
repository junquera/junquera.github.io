var main = function(){
	$('#saber_mas').click(function(){
		$('#main').animate({top: "-200%"}, 2000);
		$('#datos').css('position', 'absolute');
	});

	$('#up').click(function(){
		$('#main').animate({top: "0"}, 1000);
		$('#datos').css('position', 'fixed');
	});
	$('#saber_mas').mouseover(function(){
				$('#saber_mas').animate({color: "#DFDFDF"}, 200);
				/*document.body.style.cursor='pointer'; */
			}).mouseout(function(){
				$('#saber_mas').animate({color: "#FFFFFF"}, 200);
				/*document.body.style.cursor='auto'; */
			});
};
$(document).ready(main);