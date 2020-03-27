
	/******************************************************************************************************************* 
		갤러리 게시판 불러오기
	*******************************************************************************************************************/

	$( document ).ready(function() {

		var boardload = $('[boardload]');
		var boardload_url = boardload.data('url');
		var boardload_title = boardload.data('title');
		var boardload_grid = boardload.data('grid');
		var boardload_rank = boardload.data('rank');
		var boardload_ranktext = boardload.data('ranktext');

		if( boardload_url ){

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: boardload_url,
				success: function(data){

					var $result = $(data).filter('#sp-result').html();

					boardload.after( $result );

					$('#sp-boardload').attr('grid',boardload_grid);
					$('#sp-boardload h3 span').html( boardload_title );
					$('.sp-boardload-element').each(function( index ) {
						if( !isNaN(boardload_rank) ){
							if( ( index + 1 ) > parseInt(boardload_rank) ){
								$(this).prepend('<div class="sp-rank" theme="off">'+ (index + 1) +'</div>');
							}else{
								$(this).prepend('<div class="sp-rank" theme="on">'+ boardload_ranktext +' '+ (index + 1) +'</div>');
							}
						}
					});

				},
				error: function(xhr,status,error){
					//
				},
				timeout: 3000
			});

		}

	});