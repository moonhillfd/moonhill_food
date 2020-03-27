
	/******************************************************************************************************************* 
		쿠폰 카운터
	*******************************************************************************************************************/

	window.coupon_fullimage_use = ( window.coupon_fullimage_use ) ? window.coupon_fullimage_use : false;

    $(document).ready(function(){

		/*
			쿠폰 전역을 클릭하도록 하려면 살려라
			다만, 이미지 전체에 클릭시 다운이 될거라는 UI는 필수다.
			고객을 헷갈리게 하지마라. 꼴사나운 멋 부리지 마라.
		*/
		if( window.coupon_fullimage_use ){
			var setAllClickBtn;
			$('#sp-coupon .coupon .button a').each(function(a){
				setAllClickBtn = $(this);
				setAllClickBtn.closest('.coupon').find('.detail').addClass('displaynone');
				setAllClickBtn.closest('.coupon').addClass('hand').attr('onClick','location.href=\''+ setAllClickBtn.attr('href') +'\'');
			});
		}

		var setCouponTabs;
		var setCouponTitle;
		var setCouponIndex;
		$('#sp-coupon[grade]').each(function(a){
			setCouponTabs = $(this).attr('grade');
			$(this).find('> ul > li').each(function(b){
				setCouponTitle = $(this).find('.title').html();
				setCouponIndex = ( b === 0 ) ? 
					'<p class="grade best" title="'+ setCouponTabs +'">'+ (b+1) +'</p><p class="gradetext"><span>'+ setCouponTitle +'</span></p>' : 
					'<p class="grade">'+ (b+1) +'</p><p class="gradetext"><span>'+ setCouponTitle +'</span></p>';
				$(this).prepend(setCouponIndex);
			});
		});

		function getCouponSaleDate( totalSec ) {

			var result = '';
			var day = Math.floor(totalSec / (60 * 60 * 24));
			var hour = Math.floor((totalSec - day * 60 * 60 * 24) / (60 * 60));
			var minute = Math.floor((totalSec - day * 60 * 60 * 24 - hour * 3600) / 60);
			var second = Math.floor(totalSec % 60);

			var day_deco;
			var hour_deco;
			var minute_deco;
			var second_deco;

			var i;
			var len;

			if( day > 0 ){ day_deco = ' class="-on"'; }
			for (i = 0, len = String(day).length; i < len; i++) {
				result += '<strong '+day_deco+'>'+ String(day).substr(i,1) + '</strong>';
			}
			result += '<span '+day_deco+'>일</span>';

			if( hour > 0 || day > 0 ){ hour_deco = ' class="-on"'; }
			if( String(hour).length < 2 ){ hour = '0' + hour; }
			for (i = 0, len = String(hour).length; i < len; i++) {
				result += '<strong '+hour_deco+'>'+ String(hour).substr(i,1) + '</strong>';
			}
			result += '<span '+hour_deco+'>시간</span>';

			if( minute > 0 || hour > 0 || day > 0 ){ minute_deco = ' class="-on"'; }
			if( String(minute).length < 2 ){ minute = '0' + minute; }
			for (i = 0, len = String(minute).length; i < len; i++) {
				result += '<strong '+minute_deco+'>'+ String(minute).substr(i,1) + '</strong>';
			}
			result += '<span '+minute_deco+'>분</span>';

			second_deco = ' class="-on"';
			if( String(second).length < 2 ){ second = '0' + second; }
			for (i = 0, len = String(second).length; i < len; i++) {
				result += '<strong '+second_deco+'>'+ String(second).substr(i,1) + '</strong>';
			}
			result += '<span '+second_deco+'>초</span>';

			return result;

		}

		function setCouponSaleCount(){

			$('[couponsale]').each(function( index ){
				
				var _this = $(this);
				var _element = '<div class="sp-coupon-field"></div>';
				var _startdate = new Date();
				var _start = _startdate;
				var _enddate = _this.data('saleend');
				var _promotion = _this.data('promotion');

					if(!_enddate){
						_enddate = String(new Date('yyyy-mm-dd hh:mm:ss'));
						if( _promotion && _promotion.indexOf(' ~ ') > 0 ){
							_promotion = _promotion.split(' ~ ')[1];
							if( _promotion.length == 10 ){
								_promotion = _promotion +' 00:00:00';
								_enddate = _promotion;
							}
							if( _promotion.length == 16 ){
								_promotion = _promotion +':00';
								_enddate = _promotion;
							}
							if( _promotion.length == 19 ){
								_enddate = _promotion;
							}
						}
					}
					var _end = new Date( 
						(_enddate.substr(0,4) +'-'+
						_enddate.substr(5,2) +'-'+
						_enddate.substr(8,2) +'T'+
						_enddate.substr(11,2) +':'+
						_enddate.substr(14,2) +':00')
					);
					if( isNaN(_end) ){
						_end = new Date( 
							(_enddate.substr(0,4) +'-'+
							_enddate.substr(5,2) +'-'+
							_enddate.substr(8,2) +'T'+
							_enddate.substr(11,2) +':'+
							_enddate.substr(14,2) +':00').replace(/-/g, '/')
						);
					}

				var _sStart = Math.floor( _start / 1000 );
				var _sEnd = Math.floor( _end / 1000 );
				var _sTotal = Math.floor( _sEnd - _sStart );

				if( !_this.find('.sp-coupon-field').size() ){
					_this.find('div[rel="할인 기간"]').addClass('displaynone');
					_this.find('[couponsale-counter]').after(_element);
				}

				// 날짜가 있는 쿠폰만 출력
				if( _promotion.substring(0,1) === "2" ){
					if ( !_sTotal || _sTotal < 0 ) {
						_this.find('.sp-coupon-field').html('<div class="sp-coupon-field-enddate">종료되었습니다</div>');
					}else{
						_this.find('.sp-coupon-field').html('<div class="sp-coupon-field-timer">' + getCouponSaleDate( _sTotal ) +'</div>');
					}
				}else{
					_this.find('.sp-coupon-field').html('<div class="sp-coupon-field-enddate">기간없음</div>');
				}

				//clearInterval(_timer);

			});

		}

		var _timer;
		_timer = setInterval(setCouponSaleCount, 1000);


		/* 쿠폰 미리보기 */
		$('[coupon]').click(function(e) {

			$('#sp-couponload, #sp-couponload-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-couponload-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-couponload-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-couponload').fadeIn(100,function(){
						// 스크롤바 연동
						if ( typeof setScrollbarStyle !== 'undefined' && $.isFunction(setScrollbarStyle) ) {
							setScrollbarStyle( $('#sp-couponload [scrollbar]') );
						}
						$('#sp-couponload .sp-couponload-inside').addClass('active');
					});
					$('#sp-couponload-loading').fadeOut();
					$('#sp-couponload [wishcount]').append('<em class="sp-couponload-count" count="'+ $('#sp-couponload .sp-couponload-loop ul:not(.displaynone) li').size() +'">'+ $('#sp-couponload .sp-couponload-loop ul:not(.displaynone) li').size() +'</em>').fadeIn();
				},
				error: function(xhr,status,error){
					$('#sp-couponload-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-couponload-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-couponload').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-couponload, #sp-couponload button', function(e) {
		$('#sp-couponload, #sp-couponload .sp-couponload-close').live('click', function(){
			$('#sp-couponload').fadeOut('fast');
		});

		//$(document).on('click', '#sp-couponload .sp-couponload-inside', function(e) {
		$('#sp-couponload .sp-couponload-inside').live('click', function(e){
			e.stopPropagation();
		});

    });