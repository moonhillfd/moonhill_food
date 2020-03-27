
	/******************************************************************************************************************* 
		카드할부 안내
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[cardinfo]').click(function(e) {

			$('#sp-cardinfo, #sp-cardinfo-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-cardinfo-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-cardinfo-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-cardinfo').css('height',$(document).height()).fadeIn('fast');

					//$('#sp-cardinfo > ul').css({'top':_offset.top,'left':_offset.left - 600});
					$('#sp-cardinfo > ul').css('top',_now + 100);

					$('#sp-cardinfo-loading').fadeOut();

					/* 연동 */
					var _connect;
					var _connectdata;
					if( $('#sp-cardinfo [connect="무이자할부"]').size() ){
						$('#sp-cardinfo [connect="무이자할부"]').each(function( a ){
							if( $(this).data('connect') ){
								_connectdata = $(this).data('connect').split('^');
								if( _connectdata.length == 1 ){
									_connect  = '';
									_connect += '<ul>';
									_connect += '	<p>'+ _connectdata[0] +'</p>';
									_connect += '</ul>';
									$('#sp-cardinfo [connectbox="무이자할부"]').append( _connect );
								}else if( _connectdata.length == 2 ){
									_connect  = '';
									_connect += '<ul>';
									_connect += '	<li class="sp-title">'+ _connectdata[0] +'</li>';
									_connect += '	<li class="sp-content">'+ _connectdata[1] +'</li>';
									_connect += '</ul>';
									$('#sp-cardinfo [connectbox="무이자할부"]').append( _connect );
								}
							}
						});
					}

					if( $('#sp-cardinfo [connect="부분무이자할부"]').size() ){
						$('#sp-cardinfo [connect="부분무이자할부"]').each(function( a ){
							if( $(this).data('connect') ){
								_connectdata = $(this).data('connect').split('^');
								if( _connectdata.length == 1 ){
									_connect  = '';
									_connect += '<ul>';
									_connect += '	<p>'+ _connectdata[0] +'</p>';
									_connect += '</ul>';
									$('#sp-cardinfo [connectbox="부분무이자할부"]').append( _connect );
								}else if( _connectdata.length == 2 ){
									_connect  = '';
									_connect += '<ul>';
									_connect += '	<li class="sp-title">'+ _connectdata[0] +'</li>';
									_connect += '	<li class="sp-content">'+ _connectdata[1] +'</li>';
									_connect += '</ul>';
									$('#sp-cardinfo [connectbox="부분무이자할부"]').append( _connect );
								}
							}
						});
					}

				},
				error: function(xhr,status,error){
					$('#sp-cardinfo-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-cardinfo-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-cardinfo').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-cardinfo, #sp-cardinfo > ul > button', function(e) {
		$('#sp-cardinfo, #sp-cardinfo > ul > button').live('click', function(){
			$('#sp-cardinfo').fadeOut('fast');
		});

		//$(document).on('click', ''#sp-cardinfo > ul', function(e) {
		$('#sp-cardinfo > ul').live('click', function(e){
			e.stopPropagation();
		});

		//$(document).on('click', '#sp-cardinfo > ul > p > button', function(e) {
		$('#sp-cardinfo > ul > p > button').live('click',function(){
			var _index = $('#sp-cardinfo > ul > p > button').index( $(this) );
			$('#sp-cardinfo > ul > p > button').removeClass('-on');
			$('#sp-cardinfo > ul > p > button').eq(_index).addClass('-on');

			$('#sp-cardinfo > ul > li').removeClass('-on');
			$('#sp-cardinfo > ul > li').eq(_index).addClass('-on');
		});

	});