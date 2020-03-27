
	/******************************************************************************************************************* 
		미확인 입금자
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[bankmiss]').click(function(e) {

			$('#sp-bankmiss, #sp-bankmiss-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-bankmiss-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-bankmiss-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-bankmiss').css('height',$(document).height()).fadeIn('fast');

					//$('#sp-bankmiss .sp-bankmiss-inside').css('marginTop',_offset.top);
					$('#sp-bankmiss .sp-bankmiss-inside').css('top',_now + 100);

					$('#sp-bankmiss-loading').fadeOut();


					/* 연동 */
					var _connect;
					var _connectdata;
					if( $('#sp-bankmiss [connect="미확인입금자"]').size() ){
						$('#sp-bankmiss [connect="미확인입금자"]').each(function( a ){
							if( $(this).data('connect') ){
								_connectdata = $(this).data('connect').split('^');
								if( _connectdata.length == 4 ){
									_connect  = '';
									_connect += '<tr>';
									_connect += '	<td>'+ _connectdata[0] +'</td>';
									_connect += '	<td>'+ _connectdata[1] +'</td>';
									_connect += '	<td>'+ _connectdata[2] +'</td>';
									_connect += '	<td>'+ _connectdata[3] +'</td>';
									_connect += '</tr>';
									$('#sp-bankmiss [connectbox]').append( _connect );
								}
							}
						});
					}

				},
				error: function(xhr,status,error){
					$('#sp-bankmiss-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-bankmiss-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-bankmiss').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-bankmiss, #sp-bankmiss button', function(e) {
		$('#sp-bankmiss, #sp-bankmiss button').live('click', function(){
			$('#sp-bankmiss').fadeOut('fast');
		});

		//$(document).on('click', '#sp-bankmiss .sp-bankmiss-inside', function(e) {
		$('#sp-bankmiss .sp-bankmiss-inside').live('click', function(e){
			e.stopPropagation();
		});

	});