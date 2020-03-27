
	/******************************************************************************************************************* 
		좋아요
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[like]').click(function(e) {

			$('#sp-like, #sp-like-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-like-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-like-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-like').fadeIn(100,function(){
						// 스크롤바 연동
						if ( typeof setScrollbarStyle !== 'undefined' && $.isFunction(setScrollbarStyle) ) {
							setScrollbarStyle( $('#sp-like [scrollbar="product"]') );
							setScrollbarStyle( $('#sp-like [scrollbar="category"]') );
						}
						$('#sp-like .sp-like-inside').addClass('active');
					});
					$('#sp-like-loading').fadeOut();
					$('#sp-like .sp-like-count').remove();
					$('#sp-like [likeprdcount="product"]').append('<em class="sp-like-count" count="'+ $('#sp-like .sp-like-loop[scrollbar="product"] > ul:not(.displaynone) > li').size() +'">'+ $('#sp-like .sp-like-loop[scrollbar="product"] > ul:not(.displaynone) > li').size() +'</em>').fadeIn();
					$('#sp-like [likeprdcount="category"]').append('<em class="sp-like-count" count="'+ $('#sp-like .sp-like-loop[scrollbar="category"] > ul:not(.displaynone) > li').size() +'">'+ $('#sp-like .sp-like-loop[scrollbar="category"] > ul:not(.displaynone) > li').size() +'</em>').fadeIn();
				},
				error: function(xhr,status,error){
					$('#sp-like-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-like-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-like').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-like, #sp-like button', function(e) {
		$('#sp-like, #sp-like .sp-like-close').live('click', function(){
			$('#sp-like').fadeOut('fast');
		});

		//$(document).on('click', '#sp-like .sp-like-inside', function(e) {
		$('#sp-like .sp-like-inside').live('click', function(e){
			e.stopPropagation();
		});

	});