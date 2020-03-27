
	/******************************************************************************************************************* 
		타임세일
	*******************************************************************************************************************/

    $(document).ready(function(){

		function getTimesaleDate( totalSec ) {

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

		function setTimeSaleCount(){

			$('[timesale]').each(function( index ){
				
				var _this = $(this);
				var _element = '<div class="sp-timesale-field"></div>';
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

				if( !_this.find('.sp-timesale-field').size() ){
					_this.find('div[rel="할인 기간"]').addClass('displaynone');
					_this.find('[timesale-counter]').after(_element);
				}

				if ( !_sTotal || _sTotal < 0 ) {
					_this.find('.sp-timesale-field').html('<div class="sp-timesale-field-enddate">타임세일이 종료되었습니다</div>');
				}else{
					_this.find('.sp-timesale-field').html('<div class="sp-timesale-field-timer">' + getTimesaleDate( _sTotal ) +'</div>');
				}

				//clearInterval(_timer);

			});

		}

		var _timer;
		_timer = setInterval(setTimeSaleCount, 1000);

    });