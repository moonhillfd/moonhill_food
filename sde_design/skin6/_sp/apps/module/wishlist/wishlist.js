
	/******************************************************************************************************************* 
		위치리스트 - 관심상품
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[wishlist]').click(function(e) {

			$('#sp-wishlist, #sp-wishlist-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-wishlist-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-wishlist-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();

					if(!$result){
						$('#sp-wishlist-loading').html('로그인이 필요합니다');
						setTimeout(function(){
							$('#sp-wishlist-loading').fadeOut('fast');
						}, 2000);
					}else{
						$('body').append( $result );
						$('#sp-wishlist').fadeIn(100,function(){
							// 스크롤바 연동
							if ( typeof setScrollbarStyle !== 'undefined' && $.isFunction(setScrollbarStyle) ) {
								setScrollbarStyle( $('#sp-wishlist [scrollbar]') );
							}
							$('#sp-wishlist .sp-wishlist-inside').addClass('active');
						});
						$('#sp-wishlist-loading').fadeOut();
						$('#sp-wishlist [wishcount]').append('<em class="sp-wishlist-count" count="'+ $('#sp-wishlist .sp-wishlist-loop ul li').size() +'">'+ $('#sp-wishlist .sp-wishlist-loop ul li').size() +'</em>').fadeIn();
					}
				},
				error: function(xhr,status,error){
					$('#sp-wishlist-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-wishlist-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-wishlist').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-wishlist, #sp-wishlist button', function(e) {
		$('#sp-wishlist, #sp-wishlist .sp-wishlist-close').live('click', function(){
			$('#sp-wishlist').fadeOut('fast');
		});

		//$(document).on('click', '#sp-wishlist .sp-wishlist-inside', function(e) {
		$('#sp-wishlist .sp-wishlist-inside').live('click', function(e){
			e.stopPropagation();
		});

	});