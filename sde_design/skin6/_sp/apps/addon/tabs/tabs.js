
	/******************************************************************************************************************* 
		탭
	*******************************************************************************************************************/

	$(document).ready(function(){

		if( $('[tabs]').size() ){

			var _tabs;
			var _tabsName;
			var _tabsStart;
			var _tabsActive;
			var _tabsSize;
			var _tabsSpeed;
			var _tabsWidth;
			var _tabsUnlock;
			var _tabsValue;
			var _tabsWidthTotal;
			var _tabsHeight;
			var _tabsArea;
			var _tabsIndex;
			var _tabsAdvanced;

			$('[tabs=""] [tabsControl=""] li:not(.active)').live('click',function() {

				_tabsIndex = $(this).closest('[tabs=""]').find('[tabsControl=""] li').index( $(this) );
				_tabsSpeed = ( $(this).closest('[tabs=""]').data('speed') ) ? $(this).closest('[tabs=""]').data('speed') : 1 ;
				_tabsHeight = $(this).closest('[tabs=""]').outerHeight();

				$(this).closest('[tabs=""]').css('height',_tabsHeight);

				$(this).closest('[tabs=""]').find('[tabsControl=""] li').removeClass('active');
				$(this).addClass('active');
				$(this).closest('[tabs=""]').find('[tabsContainer=""]').children().removeClass('active').hide();
				//$(this).closest('[tabs=""]').find('[tabsContainer=""]').children().eq( _tabsIndex ).stop(true,false).fadeIn( _tabsSpeed ,function(){
					$(this).closest('[tabs=""]').find('[tabsContainer=""]').children().eq( _tabsIndex ).fadeIn( _tabsSpeed ).queue(function() {
						$(this).addClass('active');
						$(this).dequeue();
					});
					$(this).closest('[tabs=""]').css('height','auto');
				//});

				// 스크롤바 연동
				if ( $$(this).closest('[tabs=""]').find('[tabsContainer]').children().eq( _tabsIndex ).is('[scrollbar=""]') && typeof setScrollbarStyleResize !== 'undefined' && $.isFunction(setScrollbarStyleResize) ) {
					setScrollbarStyleResize( $$(this).closest('[tabs]').find('[tabsContainer=""]').children().eq( _tabsIndex ) );
				}

			});

			// 이미 로드된건 제어하지 않는다.
			$('[tabs]').each(function( a ){

				if( !$(this).hasClass('onload') ){

					_tabs = $(this);
					_tabs.addClass('onload');
					_tabs.prepend('<ul tabsControl></ul>');
					_tabsWidthTotal = parseInt(100);
					_tabsAdvanced = ( _tabs.data('advanced') ) ? true : false ;

					// 진화된 탭 : advanced attribute가 없다면 삭제한다.
					if( _tabsAdvanced ){
						_tabs.find('[tabsContainer] [tabsLoop]').each(function( b ){
							if( !$(this).find('[advanced]').size() ){
								$(this).remove();
							}
						});
						if( _tabs.find('[tabsContainer] [tabsLoop]').size() == 1 ){
							_tabs.find('[tabscontrol]').remove();
						}
					}

					_tabsSize = _tabs.find('[tabsContainer] [tabsLoop]').size();
					_tabs.attr('count',_tabsSize);
					_tabsStart = ( _tabs.data('start') ) ? _tabs.data('start') : 1 ;
					_tabsWidth = Math.pow( 100 / _tabs.find('[tabsContainer] [tabsLoop]').size() , 1 ).toFixed(1);
					_tabsWidth = (Math.floor( 100 / _tabs.find('[tabsContainer] [tabsLoop]').size() * 100 ) / 100).toFixed(1) ;
					_tabsUnlock = _tabs.data('lock');
					_tabs.find('[tabsContainer] [tabsLoop]').eq( _tabsStart - 1 ).addClass('active').show();
					_tabs.find('[tabsContainer] [tabsLoop]').each(function( b ){
						_tabsName = $(this).data('title');
						_tabsActive = ( (_tabsStart - 1) == b ) ? 'class="active"' : '';
						_tabsValue = ( $(this).data('value') ) ? ' value="'+ $(this).data('value') +'"' : '' ;
						_tabsArea = '';
						var _tabsUnlock;
						if( b === 0 ){
							_tabsArea = ' area="first" ';
						}else if( _tabsSize == b + 1 ){
							_tabsArea = ' area="last" ';
						}
						if( _tabsSize == b + 1 ){
							_tabsWidth = _tabsWidthTotal.toFixed(1);
						}
						if( _tabsUnlock == 'unlock' ){
							_tabs.find('[tabsControl]').append('<li '+ _tabsActive +' style="z-index:'+ ( b ) +';" num="'+ ( b + 1 ) +'" '+ _tabsArea +' '+ _tabsValue +'><span>'+ _tabsName +'</span></li>');
						}else{
							_tabs.find('[tabsControl]').append('<li '+ _tabsActive +' style="width:'+ _tabsWidth +'%;z-index:'+ ( b ) +';" num="'+ ( b + 1 ) +'" '+ _tabsArea +' '+ _tabsValue +'><span>'+ _tabsName +'</span></li>');
						}
						_tabsWidthTotal = _tabsWidthTotal - _tabsWidth;
					});

				}

			});
		}

	});
