
	/******************************************************************************************************************* 
		플로팅 배너
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('.sp-btn[hover], .sp-btn[change]').each(function( index ){
			$(this).html('<span>'+ $(this).html() +'</span>');
		});

	});

