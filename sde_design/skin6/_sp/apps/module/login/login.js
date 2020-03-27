
	/******************************************************************************************************************* 
		언어선택
	*******************************************************************************************************************/

	$( document ).ready(function() {

		if( $.sp_get_param( location.href , 'returnUrl' ) && $.sp_get_param( location.href , 'returnUrl' ).indexOf('orderform.html') > 0 ){
			$('.sp-login-accordian').attr('data-start','2');
		}

		function checkTime(i) {
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}
		$('label[for="member_check_save_id0"]').html('<i></i>');
		$('#sp-login .security img[src*=ico_access.gif]').wrap('<span class="secure"></span>').attr('src','/_sp/apps/module/login/secure.gif');

		var _tm = [];
		var _tms = [];
		var _now = [];
		var _nowT = [];
		$('.sp-login-messenger p').each(function( key ){
			_tm[key] = $(this);
			_tms[key] = setTimeout(function(){ _tm[key].fadeIn(); }, key * 300);
			_nowT[key] = new Date();
			_now[key] = new Date(Date.parse(_nowT[key]) + (key * 60 * 1000));
			$(this).find('span.time').html(
				checkTime( _now[key].getHours() ) +':'+ checkTime( _now[key].getMinutes() )
			);
		});

		$(window).scroll(function() {
			var scrT = $(window).scrollTop();
			var scrH = $(document).height();
			var winH = $(window).height();
			var scrollPercent = (scrT / (scrH - winH)) * 100;
			$('.sp-terms-privacy-progress').stop().animate({
				'height': scrollPercent + '%'
			},'slow');
		});

		var now;
		var year;
		var month;
		var day;
		var hour;
		var minute;
		var second;

		function js_yyyy_mm_dd_hh_mm_ss () {
			now = new Date();
			year = "" + now.getFullYear();
			month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
			day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
			hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
			minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
			second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
			return year + "a" + month + "a" + day + "c" + hour + "b" + minute + "b" + second;
		}

		function setSpTimeSleep(a,b,c) {
			var spTimeRnd = Math.floor(Math.random() * 300) + 1;
			setTimeout(function() {
				a.addClass('n'+b);
			}, i * spTimeRnd);
		}

		if( $('#sp-timesleep').size() ){

			var spTimer = $('#sp-timesleep');
			var spTimeDate = js_yyyy_mm_dd_hh_mm_ss();
			var spTimeString;
			var spTimeArray = [];
			for (i = 0; i < spTimeDate.length; ++i) {
				spTimeString = spTimeDate.substr(i, 1);
				spTimer.append('<i></i>');
			}
			for (i = 0; i < spTimeDate.length; ++i) {
				spTimeString = spTimeDate.substr(i, 1);
				setSpTimeSleep(spTimer.find('i').eq(i),spTimeString,i);
			}
		}

	});

	// ROAD
	$(window).load(function(){

		if( $('#order_name').size() && $.sp_get_param( location.href , 'trigger' ) == '1' ){
			$('#sp-login [tabs] [tabsControl] li:eq(1)').trigger('click');
		}

		/* 미친 윈도우 사파리 개새끼야 */
		if( $('html.win.safari5 #sp-login label.order_id').size() ){
			
			var safari_order_id1 = $('html.win.safari5 #sp-login label.order_id #order_id1');
			var safari_order_id2 = $('html.win.safari5 #sp-login label.order_id #order_id2');
			safari_order_id1.attr('placeholder','주문번호 1').wrap('<div class="safari_order1 order_name ePlaceholder" title="주문번호"></div>'); // <-- adds the div
			safari_order_id2.attr('placeholder','주문번호 2').wrap('<div class="safari_order2 order_name ePlaceholder" title="주문번호"></div>'); // <-- adds the div
			$('#sp-login .order_id').replaceWith('<div class="safari_fucking">'+ $('#sp-login .order_id').html() +'</div>');
      
		}

	});