
	/******************************************************************************************************************* 
		마이페이지
	*******************************************************************************************************************/

    $(document).ready(function(){

		$('.sp-coupon-use-product img[src*="btn_coupon_view.gif"]').each(function(a){
			$(this).attr('src','/_sp/apps/module/mypage/btn_coupon_view.gif');
		});

		$('#order_search_btn').attr('src','/_sp/image/cafe24/myshop/btn_search.gif');
		$('.xans-myshop-orderhistoryhead fieldset button img').attr('src','/_sp/image/cafe24/myshop/ico_cal.gif');

		/* 나의 배송정보 */
		if( $('#sp-myorder').size() ){
			$(document).ajaxComplete(function( event, xhr, settings ) {
				if( settings.url.indexOf('/exec/front/manage/async') > -1 && settings.url.indexOf('path_role=MYSHOP_MAIN') > -1 ){

					var spStep = [];
					var spGraph = [];
					spStep[0] = parseInt(0);
					spStep[1] = $('#xans_myshop_orderstate_shppied_before_count').html();
					spStep[2] = $('#xans_myshop_orderstate_shppied_standby_count').html();
					spStep[3] = $('#xans_myshop_orderstate_shppied_begin_count').html();
					spStep[4] = $('#xans_myshop_orderstate_shppied_complate_count').html();
					spStep[5] = $('#xans_myshop_orderstate_order_cancel_count').html();
					spStep[6] = $('#xans_myshop_orderstate_order_exchange_count').html();
					spStep[7] = $('#xans_myshop_orderstate_order_return_count').html();

					spStep[1] = ( $.sp_isNumeric(spStep[1]) ) ? parseInt(spStep[1]) : 0 ;
					spStep[2] = ( $.sp_isNumeric(spStep[2]) ) ? parseInt(spStep[2]) : 0 ;
					spStep[3] = ( $.sp_isNumeric(spStep[3]) ) ? parseInt(spStep[3]) : 0 ;
					spStep[4] = ( $.sp_isNumeric(spStep[4]) ) ? parseInt(spStep[4]) : 0 ;
					spStep[5] = ( $.sp_isNumeric(spStep[5]) ) ? parseInt(spStep[5]) : 0 ;
					spStep[6] = ( $.sp_isNumeric(spStep[6]) ) ? parseInt(spStep[6]) : 0 ;
					spStep[7] = ( $.sp_isNumeric(spStep[7]) ) ? parseInt(spStep[7]) : 0 ;

					spGraph[1] = ( $.sp_isNumeric(spStep[1]) ) ? parseInt(spStep[1]) : 0 ;
					spGraph[2] = ( $.sp_isNumeric(spStep[2]) ) ? parseInt(spStep[2]) : 0 ;
					spGraph[3] = ( $.sp_isNumeric(spStep[3]) ) ? parseInt(spStep[3]) : 0 ;
					spGraph[4] = ( $.sp_isNumeric(spStep[4]) ) ? parseInt(spStep[4]) : 0 ;
					spGraph[5] = ( $.sp_isNumeric(spStep[5]) ) ? parseInt(spStep[5]) : 0 ;
					spGraph[6] = ( $.sp_isNumeric(spStep[6]) ) ? parseInt(spStep[6]) : 0 ;
					spGraph[7] = ( $.sp_isNumeric(spStep[7]) ) ? parseInt(spStep[7]) : 0 ;

					spStep[0] = spStep[1] + spStep[2] + spStep[3] + spStep[4] + spStep[5] + spStep[6] + spStep[7] ;

					spGraph[1] = spStep[1] / spStep[0] * 100;
					spGraph[2] = spStep[2] / spStep[0] * 100;
					spGraph[3] = spStep[3] / spStep[0] * 100;
					spGraph[4] = spStep[4] / spStep[0] * 100;
					spGraph[5] = spStep[5] / spStep[0] * 100;
					spGraph[6] = spStep[6] / spStep[0] * 100;
					spGraph[7] = spStep[7] / spStep[0] * 100;
					
					if( spGraph[1] && spGraph[1] !== 0 ){ $('#sp-myorder [order="1"]').addClass('active').prepend('<i class="new"></i>'); }
					if( spGraph[2] && spGraph[2] !== 0 ){ $('#sp-myorder [order="2"]').addClass('active').prepend('<i class="new"></i>'); }
					if( spGraph[3] && spGraph[3] !== 0 ){ $('#sp-myorder [order="3"]').addClass('active').prepend('<i class="new"></i>'); }
					if( spGraph[4] && spGraph[4] !== 0 ){ $('#sp-myorder [order="4"]').addClass('active').prepend('<i class="new"></i>'); }
					if( spGraph[5] && spGraph[5] !== 0 ){ $('#sp-myorder [order="5"]').addClass('active').prepend('<i class="new"></i>'); }
					if( spGraph[6] && spGraph[6] !== 0 ){ $('#sp-myorder [order="6"]').addClass('active').prepend('<i class="new"></i>'); }
					if( spGraph[7] && spGraph[7] !== 0 ){ $('#sp-myorder [order="7"]').addClass('active').prepend('<i class="new"></i>'); }

					$('#sp-myorder [order="1"] .sp-myordercon[track="0"]').stop().delay(700).animate({height:spGraph[1]*1.2+'px'},function(){
						$('#sp-myorder [order="1"] .sp-myordercon[track="1"]').addClass('cnt-'+spStep[1]);
					});
					$('#sp-myorder [order="2"] .sp-myordercon[track="0"]').stop().delay(900).animate({height:spGraph[2]*1.2+'px'},function(){
						$('#sp-myorder [order="2"] .sp-myordercon[track="2"]').addClass('cnt-'+spStep[2]);
					});
					$('#sp-myorder [order="3"] .sp-myordercon[track="0"]').stop().delay(500).animate({height:spGraph[3]*1.2+'px'},function(){
						$('#sp-myorder [order="3"] .sp-myordercon[track="3"]').addClass('cnt-'+spStep[3]);
					});
					$('#sp-myorder [order="4"] .sp-myordercon[track="0"]').stop().delay(300).animate({height:spGraph[4]*1.2+'px'},function(){
						$('#sp-myorder [order="4"] .sp-myordercon[track="4"]').addClass('cnt-'+spStep[4]);
					});
					$('#sp-myorder [order="5"] .sp-myordercon[track="0"]').stop().delay(1300).animate({height:'1px'},function(){
						$('#sp-myorder [order="5"] .sp-myordercon[track="5"]').addClass('cnt-'+spStep[5]);
					});
					$('#sp-myorder [order="6"] .sp-myordercon[track="0"]').stop().delay(1500).animate({height:'1px'},function(){
						$('#sp-myorder [order="6"] .sp-myordercon[track="6"]').addClass('cnt-'+spStep[6]);
					});
					$('#sp-myorder [order="7"] .sp-myordercon[track="0"]').stop().delay(1100).animate({height:'1px'},function(){
						$('#sp-myorder [order="7"] .sp-myordercon[track="7"]').addClass('cnt-'+spStep[7]);
					});

				}
			});
		}

		/* 마이페이지 모듈 */
		if( $('#sp-path').attr('scope') == 'myshop' ){
			$('#sp-title h1').append('<button id="sp-mypage-ajax-btn" type="button" mypagemain data-url="/_sp/apps/module/mypage/mypage_main.html"></button>');
		}

		/* 마이페이지 모듈 연결 */
		$('[mypagemain]').click(function(e) {

			$('#sp-mypage-main, #sp-mypage-main-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-mypage-main-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-mypage-main-loading').fadeIn('fast');
			if( e.clientY < 50 ){ $('#sp-mypage-main-loading').css('marginTop',($(this).outerHeight() + 20) + 'px') }

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-mypage-main').css('height',$(document).height()).fadeIn('fast');

					//$('#sp-mypage-main .sp-mypage-main-inside').css('marginTop',_offset.top);
					$('#sp-mypage-main .sp-mypage-main-inside').css('top',_now + 100);

					$('#sp-mypage-main-loading').fadeOut();

				},
				error: function(xhr,status,error){
					$('#sp-mypage-main-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-mypage-main-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-mypage-main').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-mypage-main, #sp-mypage-main button', function(e) {
		$('#sp-mypage-main, #sp-mypage-main button').live('click', function(){
			$('#sp-mypage-main').fadeOut('fast');
		});

		//$(document).on('click', '#sp-mypage-main .sp-mypage-main-inside', function(e) {
		$('#sp-mypage-main .sp-mypage-main-inside').live('click', function(e){
			e.stopPropagation();
		});

    });