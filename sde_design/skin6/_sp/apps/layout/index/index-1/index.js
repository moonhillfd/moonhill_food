
	/******************************************************************************************************************* 
		메인페이지
	*******************************************************************************************************************/

	function setNavigation(){

		// 네비게이션 위치잡기
		var rndID;
		var navCon = '';
		var navTitle = '';
		var navCount;
		var navScroll;
		var navOffset = [];
		$('.nav').each(function( index ) {
			rndID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
			navTitle = $(this).data('title');
			$(this).attr('id',rndID);
			navCon += '<a href="#none" class="sp-goto" data-target="#'+ rndID +'" data-index="'+ index +'" data-space="80">'+ navTitle +'</a>';
			navCount = index + 1
			navOffset.push('#'+ rndID +'|'+$(this).offset().top);
			//console.log( $(this).offset().top );
		});
		// 있다면
		if( navCon ){
			// 펑션을 짜고
			function setIndexScroll( elem , scroll ){
				var nowID;
				var nowScroll;
				var endScroll = $('#sp-footer').offset().top;
				var nowScrollFix = null;
				var nowNavCheck = $('#sp-index-navigation a').index( $('#sp-index-navigation a.sp-active') );
				$.each(elem, function( index, value ) {
					nowID = value.split('|')[0];
					nowScroll = value.split('|')[1];
					if( parseInt(scroll) > parseInt(nowScroll) ){
						nowScrollFix = index;
					}
				});
				// 정리하자
				if( scroll > endScroll || nowScrollFix === null ){
					//console.log('다끔');
					$('#sp-index-navigation').fadeOut();
					$('div#sp-index-navigation a').removeClass('sp-active');
				}else{
					if( nowNavCheck === nowScrollFix ){
						//console.log('있지만 이미 켜져있으므로 안켬');
					}else{
						//console.log(nowScrollFix +'켬');
						$('#sp-index-navigation').fadeIn();
						$('div#sp-index-navigation a').removeClass('sp-active');
						$('#sp-index-navigation a[data-index="'+ nowScrollFix +'"]').addClass('sp-active');
					}
				}
			}
			// 레이아웃을 넣어주고
			$('body').append('<div id="sp-index-navigation"><ul><li><p>'+ navCon +'</p></li></ul></a>');
			// 스크롤을 인식하라
			$(window).scroll(function(){
				navScroll = $(window).scrollTop() + $(window).height() - 250;
			});
			setInterval(function(){
				setIndexScroll(navOffset,navScroll);
			}, 300);
			setIndexScroll(navOffset,navScroll);
		}

	}

	$( document ).ready(function() {

		var _ths;
		var _url;
		var _size;
		var _target;
		var _content;
		var _result;

		//$('[lazyhtml]').each(function( idx ){

		_ths = $('[lazyhtml]');
		_url = _ths.data('url');

		$.ajax({
			type: 'get',
			dataType: 'html',
			url: _url,
			success: function(data){

				_result = $(data).filter('#sp-result').html();
				_ths.append( _result );

				// 타켓찾기
				_size = _ths.find('[lazyhtmltarget]').size();
				_ths.find('[lazyhtmltarget]').each(function( index ) {
					_target = $(this).attr('lazyhtmltarget');
					_content = $(this).html();

					$('div[lazyhtmlelem="'+ _target +'"]').append( _content );

					if( _size == ( index + 1 ) ){

						setTimeout(function(){

							// 배너관리체크
							$.sp_bannermanage2_fixed();
							// 슬라이더 연동
							if ( typeof setSlickSlider !== 'undefined' && $.isFunction(setSlickSlider) ) {
								setSlickSlider();
							}
							// 마스테이블
							if ( typeof setMasTable !== 'undefined' && $.isFunction(setMasTable) ) {
								setMasTable();
							}
							// 상품스타일
							if ( typeof setProductStyle !== 'undefined' && $.isFunction(setProductStyle) ) {
								setProductStyle();
							}
							// 네비게이션 만들기
							setNavigation();

							_ths.remove();

						}, 100 );

					}
				});

			},
			error: function(xhr,status,error){
				//
				//console.log(xhr,status,error);
			},
			timeout: 10000
		});

		//});


	});

	// 커스터마이징
	$(window).load(function(){

		

	});