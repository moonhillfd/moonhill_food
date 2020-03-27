
	/******************************************************************************************************************* 
		상품 관련 스크립트
	*******************************************************************************************************************/

	window.payment_scroll = ( window.payment_scroll ) ? window.payment_scroll : false;
	window.image_hover_zoom = ( window.image_hover_zoom ) ? window.image_hover_zoom : false;
	window.image_hover_change = ( window.image_hover_change ) ? window.image_hover_change : false;
	window.layout_payment_hidescroll = ( window.layout_payment_hidescroll ) ? window.layout_payment_hidescroll : false;

	$( document ).ready(function() {

		/* 상품사이사이에 배너 등록하기 */
		if( $('.sp-product-eventbanner').size() ){
			var sp_event_item;
			var sp_event_width;
			var sp_event_margin;
			var sp_event_margin_total;
			$('.sp-product-eventbanner span').each(function( index ) {
				sp_event_item = $(this).closest('.sp-product').find('.sp-product-item');
				sp_event_margin = parseInt(sp_event_item.css('marginLeft').replace('px',''));
				sp_event_margin_total = (sp_event_item.outerWidth() + sp_event_margin) * $(this).data('cols');
				sp_event_width = sp_event_margin_total - parseInt(sp_event_item.css('marginLeft').replace('px',''));
				sp_event_item.eq( $(this).data('number') ).before( '<div class="sp-product-event" style="width:'+ sp_event_width +'px;margin-left:'+ sp_event_margin +'px;">'+ $(this).html() +'</div>' );
			});
		}

		/* 상품 리스팅 분기해서 보여주기 */
		$('.sp-product-style button').live('click', function(e) {
			if( $(this).closest('.sp-product').size() ){
				$(this).closest('.sp-product').attr('grid',$(this).attr('grid'));
				setFreeGrid($(this).closest('.sp-product'),'destroy'); // 특이레이아웃 삭제
			}else{
				$(this).closest('.sp-product-style[theme="single"]').attr('grid',$(this).attr('grid'));
				$('.sp-product').attr('grid',$(this).attr('grid'));
				setFreeGrid($('.sp-product'),'destroy'); // 특이레이아웃 삭제
			}
		});

		/* 상품리스팅 특정 부위만 다르게 표현하기 */
		function setFreeGrid(obj,type){
			if( $$('.sp-product[point]').size() ){
				$$('.sp-product[point]').each(function( index ) {

					var _this = (obj) ? obj : $$(this) ;
					var _point = _this.attr('point').split(',');
					var _idx;
					for (_idx = 0; _idx < _point.length; ++_idx) {
						var _array = _point[_idx].split(':')[0];
						var _pointGrid = _point[_idx].split(':')[1];
						var _image = _this.find('.sp-product-item').eq( _array - 1 ).find('.sp-product-inputs').data('big');
						var _origin = _this.find('.sp-product-item').eq( _array - 1 ).find('.sp-product-inputs').data('medium');
						_this.find('.sp-product-item').eq( _array - 1 ).find('.-origin').attr('src',_image);
						_this.find('.sp-product-item').eq( _array - 1 ).attr('grid',_pointGrid);
                        _this.find('.sp-product-item').eq( _array - 1 ).find('.sp-product-item-thumb-origin img').attr('src',_image);

						if( type == 'destroy' ){
							_this.find('.sp-product-item').eq( _array - 1 ).attr({'grid':'','src':_origin});
						};

					};
					
				});
			};
		};
        setFreeGrid('','');

		// 상품 상세페이지 수량 컨트롤
		if( $('#sp-detail-count').size() ){

			var ths = $('#sp-detail-count');
			var sp_qna = ths.find('.qna').val();
			var sp_review = ths.find('.review').val();
			var sp_relation = ths.find('.relation').val();
			var sp_coupon = $('#sp-coupon > ul > li').size();

			if( $.sp_isNumeric(sp_qna) ){
				if( $.sp_getNum(sp_qna) > 0 ){ $('.sp-detail-navigation > ul > li[data-target="#prdQnA"]').append('<i>'+ $.sp_getNum(sp_qna) +'</i>'); }
				$('#prdQnA .sp-detail-navigation > ul > li[data-target="#prdQnA"]').addClass('active');
			}
			if( $.sp_isNumeric(sp_review) ){
				if( $.sp_getNum(sp_review) > 0 ){ $('.sp-detail-navigation > ul > li[data-target="#prdReview"]').append('<i>'+ $.sp_getNum(sp_review) +'</i>'); }
				$('#prdReview .sp-detail-navigation > ul > li[data-target="#prdReview"]').addClass('active');
			}
			if( $.sp_isNumeric(sp_relation) || $.sp_getNum($('#sp-detail-relation .sp-detail-relation-loop').size()) > 0 ){
				if( $.sp_getNum(sp_relation) > 0 ){ 
					$('.sp-detail-navigation > ul > li[data-target="#prdRelated"]').append('<i>'+ $.sp_getNum(sp_relation) +'</i>'); 
				}else if( $.sp_getNum($('#sp-detail-relation .sp-detail-relation-loop').size()) > 0 ){
					$('.sp-detail-navigation > ul > li[data-target="#prdRelated"]').append('<i>'+ $.sp_getNum($('#sp-detail-relation .sp-detail-relation-loop').size()) +'</i>'); 
				}
				$('#prdRelated .sp-detail-navigation > ul > li[data-target="#prdRelated"]').addClass('active');
			}else{
				$('.sp-detail-navigation > ul > li[data-target="#prdRelated"]').hide();
			}
			if( $.sp_isNumeric(sp_coupon) ){
				if( $.sp_getNum(sp_coupon) > 0 ){ 
					$('.sp-detail-navigation > ul > li[data-target="#sp-coupon"]').append('<i>'+ $.sp_getNum(sp_coupon) +'</i>');
					$('#sp-coupon .sp-detail-navigation > ul > li[data-target="#sp-coupon"]').addClass('active');
				}else{
					$('.sp-detail-navigation > ul > li[data-target="#sp-coupon"]').hide();
				}
			}

			// 세트상품
			if( $('.xans-product-detail .xans-product-setproduct .productSet .product > li').size() > 0 ){
				$('#sp-detail-optiontab > ul > li[value="setproduct"]').append('<i>'+ $('.xans-product-detail .xans-product-setproduct .productSet .product > li').size() +'</i>');
			}

			// 추가구성상품
			if( $('.xans-product-detail .xans-product-addproduct .productSet .product > li').size() > 0 ){
				$('#sp-detail-optiontab > ul > li[value="addproduct"]').append('<i>'+ $('.xans-product-detail .xans-product-addproduct .productSet .product > li').size() +'</i>');
			}

			// 일반
			if( $('#prdDetail').size() ){ $('#prdDetail .sp-detail-navigation > ul > li[data-target="#prdDetail"]').addClass('active'); }
			if( $('#prdInfo').size() ){ $('#prdInfo .sp-detail-navigation > ul > li[data-target="#prdInfo"]').addClass('active'); }

			// 돔 체크
			$('#totalPrice').bind("DOMSubtreeModified",function(){
				if( $('#totalPrice .total em').html() ){
					if( $('#totalPrice .total em').html().substring(0,1) == '0' ){
						$('#sp-detail-buying > ul > li a.buy').removeClass('active');
						$('#sp-detail-payment[theme="footerwide"] .sp-detail-payment-toggle').removeClass('active');
						$('#sp-detail-payment[theme="footerwide"] .sp-detail-payment-toggle p').html('');
					}else{
						$('#sp-detail-buying > ul > li a.buy').addClass('active');
						$('#sp-detail-payment[theme="footerwide"] .sp-detail-payment-toggle').addClass('active');
						$('#sp-detail-payment[theme="footerwide"] .sp-detail-payment-toggle p').html( $('#totalPrice .total').html() );
					}
				}
			});

		}

		// 마우스를 올려보세요 변환 : ( //img.echosting.cafe24.com/design/skin/admin/ko_KR/txt_product_zoom.gif )
		$('#zoomGuideImage').attr('src','/_sp/image/cafe24/admin/product_detail_mouseover.png').show();

		// 상품명, 간략설명, 요약설명 스타일 복제
		var sp_detail_title_name = $('.sp-detail-baseinfo tr.product_name_css td[clone] > span').clone();
		var sp_detail_title_simple_desc = $('.sp-detail-baseinfo tr.simple_desc_css td[clone] > span').clone();
		var sp_detail_title_summary_desc = $('.sp-detail-baseinfo tr.summary_desc_css td[clone] > span').clone();
			sp_detail_title_name.html( $('#sp-detail .sp-detail-title .sp-detail-title-name').html() );
			sp_detail_title_simple_desc.html( $('#sp-detail .sp-detail-title .sp-detail-title-simple-desc').html() );
			sp_detail_title_summary_desc.html( $('#sp-detail .sp-detail-title .sp-detail-title-summary-desc').html() );
		if( sp_detail_title_name.html() ){ $('#sp-detail .sp-detail-title .sp-detail-title-name').html('').prepend( sp_detail_title_name ).show(); }
		if( sp_detail_title_simple_desc.html() ){ $('#sp-detail .sp-detail-title .sp-detail-title-simple-desc').html('').prepend( sp_detail_title_simple_desc ).show(); }
		if( sp_detail_title_summary_desc.html() ){ $('#sp-detail .sp-detail-title .sp-detail-title-summary-desc').html('').prepend( sp_detail_title_summary_desc ).show(); }

		// 추가이미지 수가 없을경우
		if( $('.sp-slider.listImg .sp-slider-loop').size() < 2 ){
			$('.sp-slider.listImg').remove();
		}

		// 비디오 플레이어 추가하기
		$('.sp-product-video-playid').each(function( index ) {
			if( $(this).attr('vimeo') ){
                if( $('#sp-detail-slider').size() ){
					$('#sp-detail-slider').prepend('<div class="sp-slider-loop"><a href="#none" class="sp-product-video-playbtn" vimeoplayer data-id="'+ $(this).attr('vimeo') +'" data-start="true" data-sound="true" data-loop="false"></a></div>');
                }else{
                    $('.sp-detail-otherlink').after('<a href="#none" class="sp-product-video-playbtn" vimeoplayer data-id="'+ $(this).attr('vimeo') +'" data-start="true" data-sound="true" data-loop="false"></a>');
               	}
			}else if( $(this).attr('youtube') ){
                if( $('#sp-detail-slider').size() ){
                    $('#sp-detail-slider').prepend('<div class="sp-slider-loop"><a href="#none" class="sp-product-video-playbtn" youtubeplayer data-id="'+ $(this).attr('youtube') +'" data-start="true" data-sound="true" data-loop="false"></a></div>');
                }else{
                    $('.sp-detail-otherlink').after('<a href="#none" class="sp-product-video-playbtn" youtubeplayer data-id="'+ $(this).attr('youtube') +'" data-start="true" data-sound="true" data-loop="false"></a>');
               	}
			}
		});

		/* 축소이미지 불러와서 보여주기 */
        if(window.image_hover_change){
			$('.sp-product-item-thumb-href:not(.sp-product-item-enter)').live('mouseenter', function(e) {
                $(this).addClass('sp-product-item-enter').find('.sp-product-item-thumb-cover').append('<img src="'+ $(this).closest('.sp-product-item').find('.sp-product-inputs').data('small') +'">');
            });
        }

	});

	function setProductStyle(){

		// 비디오 플레이어 목록에서 생성하기
		$('.sp-product-description div[rel="movie"] span + span, .sp-mastable-element .sp-description p[rel="movie"] span + span').each(function( index ) {
			if( $(this).html().indexOf('youtube') != -1 ){
				$(this).closest('.sp-product-description').prepend('<a href="#none" class="sp-product-video-playbtn-list" youtubeplayer '+ $(this).html().replace('youtube','data-id') +' data-start="true" data-sound="true" data-loop="false"></a>');
				$(this).closest('a').after('<span class="sp-product-video-playbtn-list" youtubeplayer '+ $(this).html().replace('youtube','data-id') +' data-start="true" data-sound="true" data-loop="false"></span>');
				$(this).remove();
			}else if( $(this).html().indexOf('vimeo') != -1 ){
				$(this).closest('.sp-product-description').prepend('<a href="#none" class="sp-product-video-playbtn-list" vimeoplayer '+ $(this).html().replace('vimeo','data-id') +' data-start="true" data-sound="true" data-loop="false"></a>');
				$(this).closest('a').after('<span class="sp-product-video-playbtn-list" vimeoplayer '+ $(this).html().replace('vimeo','data-id') +' data-start="true" data-sound="true" data-loop="false"></span>');
				$(this).remove();
			}
		});

		/* 이미지 줌 인 시키기 */
        if(window.image_hover_zoom){
			$('.sp-product-item-thumb-origin').addClass('change');
        }

		/* 할인가격 셋팅하기 */
		if( $('.sp-product-item').size() ){
			var sp_custom_price;
			var sp_normal_price;
			var sp_sale_price;
			var sp_percent;
			$('.sp-product-item').each(function( index ) {
				sp_custom_price = ($(this).find('.sp-product-inputs').data('custom')) ? String($(this).find('.sp-product-inputs').data('custom')).toString().replace(/[^0-9]/g,'') : 0 ;
				sp_normal_price = ($(this).find('.sp-product-inputs').data('price')) ? String($(this).find('.sp-product-inputs').data('price')).toString().replace(/[^0-9]/g,'') : 0 ;
				sp_sale_price = ($(this).find('.sp-product-inputs').data('sale')) ? String($(this).find('.sp-product-inputs').data('sale')).toString().replace(/[^0-9]/g,'') : 0 ;

				sp_custom_price = parseFloat(sp_custom_price);
				sp_normal_price = parseFloat(sp_normal_price);
				sp_sale_price = parseFloat(sp_sale_price);

				sp_custom_price = (isNaN(sp_custom_price))	? sp_custom_price	: Number(sp_custom_price) ;
				sp_normal_price = (isNaN(sp_normal_price))	? sp_normal_price	: Number(sp_normal_price) ;
				sp_sale_price = (isNaN(sp_sale_price))		? sp_sale_price		: Number(sp_sale_price) ;
				if( String(sp_sale_price).indexOf(' ') > 0 ){
					sp_sale_price = String(sp_sale_price).split(' ')[0];
				}
				if( sp_custom_price > sp_normal_price && sp_normal_price > sp_sale_price && sp_custom_price > 0 && sp_sale_price > 0 ){
					sp_percent = ((1-( sp_sale_price / sp_custom_price )) * 100).toFixed(0);
				}else if( sp_custom_price > sp_normal_price ){
					sp_percent = ((1-( sp_normal_price / sp_custom_price )) * 100).toFixed(0);
				}else if( sp_normal_price > sp_sale_price && sp_sale_price > 0 ){
					sp_percent = ((1-( sp_sale_price / sp_normal_price )) * 100).toFixed(0);
				}else{
					sp_percent = 0;
				}
				if(sp_percent){
					if(!$(this).find('.sp-product-discount').size()){
					   $(this).find('.sp-product-item-thumb').append( '<div class="sp-product-discount">'+'-'+ sp_percent +'%</div>' );
					}
				}
			});
		}

		// 이미지 엑박 대처하기
		function IsImageOk(img) {
			if (!img.complete) {
				return false;
			}
			if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
				return false;
			}
			return true;
		}
		$('#sp-board img').each(function(){
		   var img=$(this)[0];
		   if(IsImageOk(img)) return true;
		   $(this).remove();
		});

	}

	/* 로드 */
	$(window).load(function(){

		// 줌, 오버, 세일
		setProductStyle();

		// 서브카테고리 스크롤
		if( $('.sp-subcategory').size() ){
			var scroll;
			var origin = $('.sp-subcategory');
			var originW = origin.outerWidth();
			var originH = origin.outerHeight();
			var chnager = $('.sp-subcategory-trick');
			var overscroll = $('.sp-subcategory-trick').offset().top;
			$(window).scroll(function(){
				scroll = $(window).scrollTop();
				if( scroll > overscroll ){
					origin.addClass('fixed').attr('style','top:94px');
					chnager.css('height',originH);
				}else{
					origin.removeClass('fixed').attr('style','top:0;');
					chnager.css('height',0);
				}
			});
			$('.sp-subcategory.fixed').live('mouseenter', function(e) {
				origin.css('width', originW+'px' );
			}).live('mouseleave', function(e) {
				origin.css('width', 'auto' );
			});
		}

		// 상세페이지 스크롤
		if( window.payment_scroll == true && $('#sp-detail-payment').size() && $('#sp-detail-additional').size() ){

			// 쿠키::패널의 시작을 정의하는 쿠키 //
			// 쿠키::쿠키명칭 : payment_toggle 2018.10.17 //
			var startDetailIndex;
			var endDetailIndex;
			/* GET */
			function _getSpDetailCookie(cookieName){
				var cookie=document.cookie;
				if(cookie.length>0){
					startDetailIndex=cookie.indexOf(cookieName);
					if(startDetailIndex!=-1){
						startDetailIndex+=cookieName.length;
						endDetailIndex=cookie.indexOf(";", startDetailIndex);
						if(endDetailIndex==-1) endDetailIndex=cookie.length;
						return unescape(cookie.substring(startDetailIndex+1, endDetailIndex));
					}else{
						return null;
					}
				}else{
					return false;
				}
			}
			/* SET */
			function _setSpDetailCookie(cookieName, cookieValue, expireDate){
				var today=new Date();
				today.setDate(today.getDate()+parseInt(expireDate));
				document.cookie=cookieName+"="+escape(cookieValue)+"; path=/; expires="+today.toGMTString()+";";
			}
			/* DEL */
			function _delSpDetailCookie(cookieName){
				var expireDate=new Date();
				expireDate.setDate(expireDate.getDate()-1);
				document.cookie=cookieName+"="+"; expires="+expireDate.toGMTString()+"; path=/";
			}

			var payment = $('#sp-detail-payment');
			var payment_theme = payment.attr('theme');
			var payment_trick = $('#sp-detail-payment-trick');
			var payment_inside = payment.find('.sp-detail-payment-inside');
			var payment_inside_scroll = payment.find('.sp-detail-payment-inside > ul > li');
			var payment_inside_scroll_element;
			var body_scroll = $('#sp-detail-additional').offset().top - ( $(window).height() / 2 );

			// 좌측 하단 디자인인 경우
			if( payment_theme === 'leftfooter' ){
				payment_inside_scroll = payment.find('.sp-detail-payment-inside');
			}

			// 우측 하단 디자인인 경우
			if( payment_theme === 'rightfooter' ){
				payment_inside_scroll = payment.find('.sp-detail-payment-inside');
			}

			$('#sp-detail-payment').live('click', function(e) {
				setScrollbarStyleResize( payment_inside_scroll );
			});
			$('#sp-detail-payment select').live('change', function(e) {
				setTimeout(function(){
					setScrollbarStyleResize( payment_inside_scroll );
				}, 300);
			});

			$(window).scroll(function(){
				scroll = $(window).scrollTop();
				body_scroll = $('#sp-detail-additional').offset().top - ( $(window).height() / 2 ); // 다시계산
				if( scroll > body_scroll ){
					if(!payment.hasClass('fixed')){

						// 쿠키::쿠키가 있다면 닫아두자
						if( _getSpDetailCookie('payment_toggle') ){
							payment.addClass('active');
						}

						payment_trick.css('height',payment.outerHeight());
						payment.addClass('fixed');
						payment_inside.attr('layout','sp-layout-fixed');

						$('#sp-detail-payment.fixed[theme="footerwide"] .sp-detail-payment-inside > ul > li').each(function( index ) {
							if( $(this).attr('tabindex') ){
								setScrollbarStyleResize( payment_inside_scroll );
							}else{
								setScrollbarStyle( $(this) );
							}
							setScrollbarStyle( $(this) );
							payment_inside_scroll_element = $(this);
						});

						$('#sp-detail-payment.fixed[theme="leftfooter"] .sp-detail-payment-inside').each(function( index ) {
							payment_inside_scroll.attr('style','margin-bottom:'+ ( payment_inside_scroll.find('[area="4"]').outerHeight() + 20 ) +'px;');
							if( $(this).attr('tabindex') ){
								setScrollbarStyleResize( payment_inside_scroll );
							}else{
								setScrollbarStyle( $(this) );
							}
							setScrollbarStyle( $(this) );
							payment_inside_scroll_element = $(this);
						});

						$('#sp-detail-payment.fixed[theme="rightfooter"] .sp-detail-payment-inside').each(function( index ) {
							payment_inside_scroll.attr('style','margin-bottom:'+ ( payment_inside_scroll.find('[area="4"]').outerHeight() + 20 ) +'px;');
							if( $(this).attr('tabindex') ){
								setScrollbarStyleResize( payment_inside_scroll );
							}else{
								setScrollbarStyle( $(this) );
							}
							setScrollbarStyle( $(this) );
							payment_inside_scroll_element = $(this);
						});

					}
				}else{
					if(payment.hasClass('fixed')){

						payment_trick.css('height',0);
						payment.removeClass('fixed active');
						payment_inside.attr('layout','');

						payment_inside_scroll.find('.scroll-bar').remove();
						payment_inside_scroll.find(' > div > div > .unwrap').unwrap().unwrap();
						payment_inside_scroll.removeClass('scrollable').removeAttr('style');
						payment_inside_scroll.customScrollbar("remove");

						$('#sp-detail-payment .sp-detail-payment-desc-toggle').removeClass('active');

						if( payment_theme === 'footerwide' ){
							$('#sp-detail-payment.fixed[theme="footerwide"] .sp-detail-payment-inside > ul > li[area="1"]').removeClass('active');
							$('#sp-sky, #sp-category').removeClass('hide');
						}
						if( payment_theme === 'leftfooter' ){
						}
						if( payment_theme === 'rightfooter' ){
						}

					}
				}
			});

			// 구매패널 토글
			if( window.layout_payment_hidescroll ){
				var sp_togglePay;
				$('#sp-detail-payment.fixed .sp-detail-payment-toggle').live('click', function(e) {
					sp_togglePay = $(this).closest('#sp-detail-payment').toggleClass('active');
					if( payment_theme === 'footerwide' ){
						if( sp_togglePay.hasClass('active') ){
							$('#sp-sky, #sp-category').addClass('hide');
						}else{
							$('#sp-sky, #sp-category').removeClass('hide');
						}
					}else{
						// 쿠키::닫기 버튼에 달아두자
						if( sp_togglePay.hasClass('active') ){
							_setSpDetailCookie('payment_toggle',true,1);
						}else{
							_delSpDetailCookie('payment_toggle');
						}
					}
				});
			}

			// 기본설명보기 토글
			$('#sp-detail-payment .sp-detail-payment-desc-toggle').live('click', function(e) {
				$(this).toggleClass('active');
				$('#sp-detail-payment.fixed[theme="footerwide"] .sp-detail-payment-inside > ul > li[area="1"]').toggleClass('active');
			});

		}

		// ajax 통신 체크
		$( document ).ajaxComplete(function( event, xhr, settings ) {
			if ( settings.url === "/exec/front/shop/CalculatorProduct" ) {
				$('img[src*=/design/skin/default/product/btn_count_up.gif]').attr('src','/_sp/image/cafe24/common/btn_quantity_up.gif');
				$('img[src*=/design/skin/default/product/btn_count_down.gif]').attr('src','/_sp/image/cafe24/common/btn_quantity_down.gif');
				$('img[src*=/design/skin/default/product/btn_price_delete.gif]').attr('src','/_sp/image/cafe24/common/btn_quantity_remove.gif');
			}
		});

	});