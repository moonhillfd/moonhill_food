
	/******************************************************************************************************************* 
		회원가입 포인트
	*******************************************************************************************************************/

	window.join_point_msg = ( window.join_point_msg ) ? window.join_point_msg : '';

	/* 레디 */
	$(document).ready(function(){

		/* 회원가입 메세지 */
		if( window.join_point_msg ){
			setTimeout(function(){
				$('.sp-join-message').each(function( index ) {
					$(this).append('<div fix class="sp-join-message-inner">'+ window.join_point_msg +'</div>');
					$(this).find('.sp-join-message-inner').css('marginLeft','-'+ $(this).find('.sp-join-message-inner').outerWidth()/2 +'px');
				});
			}, 1);
		}

	});