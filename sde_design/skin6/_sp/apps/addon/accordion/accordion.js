
	/******************************************************************************************************************* 
		아코디언 생성
	*******************************************************************************************************************/

	/*********************************************************************
		컨플릭트 호출
	*********************************************************************/
	window.jQuery = window.$ = $$;
	/********************************************************************/

	$$(document).ready(function(){

		function close_accordion_section( obj , speed ) {
			if( $$(obj).closest('[accordion]').data('close') == 'all' ){
				if( !$$(obj).closest('[accordion-loop]').is('.sp-active') ){
					$$(obj).closest('[accordion]').find('[accordion-loop].sp-active').each(function( index ){
						$$(this).removeClass('sp-active');
						$$(this).find('[accordion-inside]').stop(true,false).slideUp( speed );
					});
				}
			}else{
				$$(obj).closest('[accordion-loop].sp-active').each(function( index ){
					$$(this).removeClass('sp-active');
					$$(this).find('[accordion-inside]').stop(true,false).slideUp( speed );
				});
			}

		}
		$$('[accordion-button]').click(function(e) {
			var currentAttrValue = $$(this).attr('href');
			var currentDataSpeed = $$(this).closest('[accordion]').data('speed');
			if($$(e.target).closest('[accordion-loop]').is('.sp-active')) {
				close_accordion_section( $$(this) , currentDataSpeed );
			}else {
				close_accordion_section( $$(this) , currentDataSpeed );
				$$(this).closest('[accordion-loop]').addClass('sp-active');
				$$(this).closest('[accordion-loop]').find('[accordion-inside]').stop(true,false).slideDown(currentDataSpeed,function(){

					// 스크롤바 연동
					if ( $$(this).closest('[accordion-loop]').find('[scrollbar]').size() && typeof setScrollbarStyleResize !== 'undefined' && $.isFunction(setScrollbarStyleResize) ) {
						setScrollbarStyleResize( $$(this).closest('[accordion-loop]').find('[scrollbar]') );
					}

				}); 
			}
			e.preventDefault();

		});

		// 트리거
		$$('[accordion]').each(function( index ){
			if( $$.isNumeric( $$(this).data('start') ) ){
				
				$$(this).find('[accordion-loop]:eq('+ parseInt( $$(this).data('start') - 1 ) +') [accordion-button]').trigger('click');
			}
		});

	});

	/*********************************************************************
		컨플릭트 초기화
	*********************************************************************/
	window.jQuery = window.$ = window.jQueryOrigin;
	/********************************************************************/