
	/******************************************************************************************************************* 
		스카이
	*******************************************************************************************************************/

	window.layout_sky_detail = ( window.layout_sky_detail ) ? window.layout_sky_detail : false;

	function sp_sky_1_scroll(){
		if( $('.sp-sky-design-1-trick').size() ){
			var scroll;
			var origin = $('#sp-sky-design-1');
			var overscroll = $('.sp-sky-design-1-trick').offset().top;

			// 상세페이지에서는 스크롤 하지 않는다.
			if( window.layout_sky_detail || !$('#sp-path[scope="product"][path="detail"]').size() ){
				$(window).scroll(function(){
					scroll = $(window).scrollTop();
					if( scroll > overscroll ){
						origin.addClass('fixed');
					}else{
						origin.removeClass('fixed');
					};
				});
			};
		};
	};

	$( document ).ready(function() {

		//

	});

	/* 로드 */
	$(window).load(function(){

		// 
		$(document).ajaxComplete(function( event, xhr, settings ) {
			if( settings.url.indexOf('optimizer.php') > 0 ){
				sp_sky_1_scroll();
			};
		});
		sp_sky_1_scroll();

	});

	/* 튜토리얼 */
	$(document).ajaxComplete(function( event, xhr, settings ) {
		if( settings.url === '/_sp/apps/layout/sky/sky-1/sky.html' ){
			sp_sky_1_scroll();
		};
	});