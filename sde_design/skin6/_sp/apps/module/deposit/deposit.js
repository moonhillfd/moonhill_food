
	/******************************************************************************************************************* 
		위치리스트 - 관심상품
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[deposit]').click(function(e) {

			$('#sp-deposit, #sp-deposit-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-deposit-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-deposit-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();

					if(!$result){
						$('#sp-deposit-loading').html('로그인이 필요합니다');
						setTimeout(function(){
							$('#sp-deposit-loading').fadeOut('fast');
						}, 2000);
					}else{
						$('body').append( $result );
						$('#sp-deposit').fadeIn(100,function(){
							// 스크롤바 연동
							if ( typeof setScrollbarStyle !== 'undefined' && $.isFunction(setScrollbarStyle) ) {
								setScrollbarStyle( $('#sp-deposit [scrollbar]') );
							}
							$('#sp-deposit .sp-deposit-inside').addClass('active');
						});
						$('#sp-deposit-loading').fadeOut();
						$('#sp-deposit [depositcount]').append('<em class="sp-deposit-count" count="'+ $('#sp-deposit .sp-deposit-loop ul:not(.displaynone) li').size() +'">'+ $('#sp-deposit .sp-deposit-loop ul:not(.displaynone) li').size() +'</em>').fadeIn();
					}
				},
				error: function(xhr,status,error){
					if( xhr.status === 0 ){
						$('#sp-deposit-loading').html('로그인이 필요합니다');
					}else{
						$('#sp-deposit-loading').html('잠시 후 다시 시도해주세요');
					}
					setTimeout(function(){
						$('#sp-deposit-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-deposit').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-deposit, #sp-deposit button', function(e) {
		$('#sp-deposit, #sp-deposit .sp-deposit-close').live('click', function(){
			$('#sp-deposit').fadeOut('fast');
		});

		//$(document).on('click', '#sp-deposit .sp-deposit-inside', function(e) {
		$('#sp-deposit .sp-deposit-inside').live('click', function(e){
			e.stopPropagation();
		});

	});