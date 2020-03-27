
	/******************************************************************************************************************* 
		은행링크 생성
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[banklink]').click(function(e) {

			$('#sp-banklink, #sp-banklink-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-banklink-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-banklink-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-banklink').css('height',$(document).height()).fadeIn('fast');

					//$('#sp-banklink .sp-banklink-inside').css('marginTop',_offset.top);
					$('#sp-banklink .sp-banklink-inside').css('top',_now + 100);

					$('#sp-banklink-loading').fadeOut();

					/* 연동 */
					var _connect;
					var _connectdata;
					if( $('#sp-banklink [connect="은행링크"]').size() ){
						$('#sp-banklink [connect="은행링크"]').each(function( a ){
							if( $(this).data('connect') ){
								_connectdata = $(this).data('connect').split('^');
								if( _connectdata.length == 2 ){
									_connect  = '';
									_connect += '<tr>';
									_connect += '	<td>'+ _connectdata[0] +'</td>';
									_connect += '	<td><a href="'+ _connectdata[1] +'">'+ _connectdata[1] +'</a></td>';
									_connect += '</tr>';
									$('#sp-banklink [connectbox]').append( _connect );
								}
							}
						});
					}

				},
				error: function(xhr,status,error){
					$('#sp-banklink-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-banklink-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-banklink').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-banklink, #sp-banklink button', function(e) {
		$('#sp-banklink, #sp-banklink button').live('click', function(){
			$('#sp-banklink').fadeOut('fast');
		});

		//$(document).on('click', '#sp-banklink .sp-banklink-inside', function(e) {
		$('#sp-banklink .sp-banklink-inside').live('click', function(e){
			e.stopPropagation();
		});

	});