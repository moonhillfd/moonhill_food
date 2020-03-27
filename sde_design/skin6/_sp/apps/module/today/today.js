
	/******************************************************************************************************************* 
		최근 본 상품
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[today]').click(function(e) {

			$('#sp-today, #sp-today-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-today-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-today-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-today').fadeIn(100,function(){
						// 스크롤바 연동
						if ( typeof setScrollbarStyle !== 'undefined' && $.isFunction(setScrollbarStyle) ) {
							setScrollbarStyle( $('#sp-today [scrollbar]') );
						}
						$('#sp-today .sp-today-inside').addClass('active');
					});
					$('#sp-today-loading').fadeOut();
					$('#sp-today [todaycount]').append('<em class="sp-today-count" count="'+ $('#sp-today .sp-today-loop ul li').size() +'">'+ $('#sp-today .sp-today-loop ul li').size() +'</em>').fadeIn();
				},
				error: function(xhr,status,error){
					$('#sp-today-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-today-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-today').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-today, #sp-today button', function(e) {
		$('#sp-today, #sp-today .sp-today-close').live('click', function(){
			$('#sp-today').fadeOut('fast');
		});

		//$(document).on('click', '#sp-today .sp-today-inside', function(e) {
		$('#sp-today .sp-today-inside').live('click', function(e){
			e.stopPropagation();
		});

	});