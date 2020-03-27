
	/******************************************************************************************************************* 
		최근 본 상품
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[detailzoom]').live('click', function(e) {

			$('#sp-zoom, #sp-zoom-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-zoom-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-zoom-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-zoom').css('height',$(document).height()).fadeIn();

					//$('#sp-zoom .sp-zoom-inside').css('marginTop',_offset.top);
					//$('#sp-zoom .sp-zoom-inside').css('top',_now + 100);

					$('#sp-zoom-loading').fadeOut();

					//console.log( $('#sp-zoom .sp-slider-loop').size() , $('#sp-zoom .sp-slider').data('slidestoshow') );

					if( parseInt($('#sp-zoom .sp-slider-loop').size()) > parseInt($('#sp-zoom .sp-slider').data('slidestoshow')) ){
						$('#sp-zoom .sp-zoom-count').prepend('<p>'+ $('#sp-zoom .sp-slider-loop').size() +'</p>').fadeIn();
					}

					// 슬라이더 연동
					if ( typeof setSlickSlider !== 'undefined' && $.isFunction(setSlickSlider) ) {
						setSlickSlider();
					}

				},
				error: function(xhr,status,error){
					$('#sp-zoom-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-zoom-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-zoom').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-zoom, #sp-zoom button', function(e) {
		$('#sp-zoom, #sp-zoom > button').live('click', function(){
			$('#sp-zoom').fadeOut('fast');
		});

		//$(document).on('click', '#sp-zoom .sp-zoom-inside', function(e) {
		$('#sp-zoom .sp-zoom-inside').live('click', function(e){
			e.stopPropagation();
		});

	});