
	/******************************************************************************************************************* 
		카테고리 관련 스크립트
	*******************************************************************************************************************/

	window.layout_category_detail = ( window.layout_category_detail ) ? window.layout_category_detail : false;

	function sp_category_1_scroll(){
		if( $('.sp-category-design-1-trick').size() ){
			var scroll;
			var origin = $('#sp-category-design-1');
			var origingap = origin.data('fixgap');
			var overscroll = ( origingap ) ? $('.sp-category-design-1-trick').offset().top - origingap : $('.sp-category-design-1-trick').offset().top ;

			if( window.layout_category_detail || !$('#sp-path[scope="product"][path="detail"]').size() ){
				$(window).scroll(function(){
					scroll = $(window).scrollTop();
					if( scroll > overscroll ){
						if( !origin.hasClass('fixed') ){
							origin.addClass('fixed').css('top',origingap);
						}
					}else{						
						if( origin.hasClass('fixed') ){
							origin.removeClass('fixed').css('top',0);
						}
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
				sp_category_1_scroll();
			};
		});
		sp_category_1_scroll();

	});

	/* 튜토리얼 */
	$(document).ajaxComplete(function( event, xhr, settings ) {
		if( settings.url === '/_sp/apps/layout/category/category-1/category.html' ){
			sp_category_1_scroll();
		};
	});