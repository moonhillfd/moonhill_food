
	// 저작권
	var sp_copyright = [];
	sp_copyright[0] = 'padding:4px 17px 3px 13px; font-family:tahoma; line-height:15px; font-size:10px; background: #f5f5f5; color: #666';
	sp_copyright[1] = 'padding:4px 17px 3px 13px; font-family:tahoma; line-height:15px; font-size:10px; background: #9EC9DA; color: #fff';
	console.log('%c  ', '');
	console.log('%c  Designed by pandassi  ', 'font-family:tahoma; font-size:24px; padding:2px 0; background: #577891; color: #fff');
	console.log('%c · phone :     070.7774.8646', sp_copyright[0]);
	console.log('%c · website : http://www.pandassi.com', sp_copyright[0]);
	console.log('%c · contact us :     2verworks@naver.com , kakao : 2verworks', sp_copyright[0]);
	console.log('%c · COPYRIGHT © 2016 PANDASSI. THANKS. ALL RIGHTS RESERVED', sp_copyright[1]);
	console.log('%c · season #4 designed by pandassi.com', sp_copyright[1]);
	console.log('%c  ', '');

	// 메인 대배너 동영상 넣기
	if( $('.sp-slider-index-1').size() ){
		$('.sp-slider-index-1 .sp-slider-loop:eq(1)').after('<div class="sp-slider-loop" data-title="[ ▶ ] ZARA SPRING SUMMER 2016"><div youtubeouter="fixed"><div youtube data-id="JTjxuqn67d4" data-start="true" data-sound="false" data-loop="true" data-width="3000" data-height="1350" data-fixheight="1000" data-center="true"></div></div></div>');
	}

	// 상품에 리뷰 카운트 넣기
	$('#anchorBoxId_9 .sp-product-count-review').removeClass('sp-product-count-').html('153');
	$('#anchorBoxId_9 .sp-product-count-qna').removeClass('sp-product-count-').html('72');
	$('#anchorBoxId_28 .sp-product-count-review').removeClass('sp-product-count-').html('29');
	$('#anchorBoxId_28 .sp-product-count-qna').removeClass('sp-product-count-').html('43');
	$('#anchorBoxId_42 .sp-product-count-review').removeClass('sp-product-count-').html('71');
	$('#anchorBoxId_42 .sp-product-count-qna').removeClass('sp-product-count-').html('52');
	$('#anchorBoxId_43 .sp-product-count-review').removeClass('sp-product-count-').html('594');
	$('#anchorBoxId_43 .sp-product-count-qna').removeClass('sp-product-count-').html('327');

	// 카테고리 백업 텍스트 넣기
	var backuptext;
	backuptext = '';
	backuptext += '<i backup="24" change="10% 그뤠잇"></i>';
	backuptext += '<i backup="29" change="예쁜시계"></i>';
	backuptext += '<i backup="47" change="시즌 오프"></i>';
	backuptext += '<i backup="48" change="클리어런스"></i>';
	backuptext += '<i backup="49" change="부츠"></i>';
	backuptext += '<i backup="50" change="자켓"></i>';
	backuptext += '<i backup="51" change="점퍼"></i>';
	backuptext += '<i backup="52" change="코트"></i>';
	backuptext += '<i backup="30" change="머스트해브"></i>';
	backuptext += '<i backup="31" change="위시리스트"></i>';
	backuptext += '<i backup="25" change="아우터"></i>';
	backuptext += '<i backup="32" change="메이드"></i>';
	backuptext += '<i backup="36" change="탑샵"></i>';
	backuptext += '<i backup="38" change="정말 좋아요"></i>';
	backuptext += '<i backup="39" change="어디에 있나요"></i>';
	backuptext += '<i backup="37" change="2017 가을"></i>';
	backuptext += '<i backup="40" change="아저씨"></i>';
	backuptext += '<i backup="41" change="액티브웨어"></i>';
	backuptext += '<i backup="53" change="란제리"></i>';
	backuptext += '<i backup="33" change="자켓"></i>';
	backuptext += '<i backup="54" change="가디건"></i>';
	backuptext += '<i backup="55" change="점퍼"></i>';
	backuptext += '<i backup="56" change="코트"></i>';
	backuptext += '<i backup="27" change="탑 &amp; 니트"></i>';
	backuptext += '<i backup="28" change="블라우스 &amp; 셔츠"></i>';
	backuptext += '<i backup="26" change="드레스"></i>';
	backuptext += '<i backup="42" change="스커트"></i>';
	backuptext += '<i backup="43" change="팬츠"></i>';
	backuptext += '<i backup="44" change="슈즈"></i>';
	backuptext += '<i backup="45" change="악세사리"></i>';
	backuptext += '<i backup="46" change="언더웨어"></i>';
	backuptext += '<i backup="BRAND" change="브랜드"></i>';
	backuptext += '<i backup="TIMESALE" change="타임세일"></i>';
	backuptext += '<i backup="LOOKBOOK" change="2019 룩북"></i>';
	$('[changecategory]').append(backuptext);

	// 애드온
	$(document).ready(function(){

		// 전체 카테고리 좀 줄여 보여주기
		$('body').prepend('<style>#sp-category-1-all .sp-sub-category-2 > li[data-no="55"] ~ li { display:none; }</style>');

		if( $('#sp-path').attr('scope') != 'index' ){
			$('#tutorial').remove();
		}
/*
		if( $('#sp-detail-payment').size() ){

			var paytutorial  = '';
				paytutorial += '<style>';
				paytutorial += '	.tutorial_payment_type { display:none; z-index:99; position:absolute; top:-115px; right:0; }';
				paytutorial += '	#sp-detail-payment.fixed .tutorial_payment_type { display:block; }';
				paytutorial += '</style>';
				paytutorial += '<a href="/_sp/apps/test.html?product_no=42" target="_blank" class="tutorial_payment_type sp-btn" theme="white" scale="small" change="dot">다른 구매창 디자인 보기</a>';

			$('#sp-detail-payment .sp-detail-payment-inside').prepend(paytutorial);

		}
*/
		var div;
		var html;
		var pos = 0;
		$('#tutorial .tutorial-tabs > ul > li').live('click', function(e) {

			html = $(this).html();
			if( html.indexOf('띠배너') > 0 ){
				div = $('#sp-tee');
				pos = 0;
			}else if( html.indexOf('스카이') > 0 ){
				div = $('#sp-sky');
				pos = div.offset().top - 50;
			}else if( html.indexOf('헤더') > 0 ){
				div = $('#sp-header');
				pos = div.offset().top - 50;
			}else if( html.indexOf('카테고리') > 0 ){
				div = $('#sp-category');
				pos = div.offset().top - 50;
			}else if( html.indexOf('컨텐츠') > 0 ){
				div = $('#sp-content');
				pos = div.offset().top - 50;
			}else if( html.indexOf('푸터') > 0 ){
				div = $('#sp-footer');
				pos = div.offset().top - 50;
			}else if( html.indexOf('패널') > 0 ){
				div = $('#sp-panel');
				pos = div.offset().top - 50;
			}

			$("html, body").animate({ scrollTop: pos }, 300, function(){
				div.append($('<div id="highlight"></div>').hide().fadeIn(30).fadeOut(500));
			});

		});

		var url;
		var target;
		$('.tutorial-layout-change').live('click', function(e) {

			$('#tutorial-loading').remove();

			var _offset = $(this).offset();
			var _load = '<div id="tutorial-loading">불러오는중</div>';
			$(this).prepend( _load );
			$('#tutorial-loading').show();

			$(this).closest('.tutorial-layout-btn').find('.tutorial-layout-change').removeClass('active');
			$(this).addClass('active');

			url = $(this).data('url');
			target = $(this).data('target');
			if( url === '' ){
				$(target).html('');
				$('#tutorial-loading').hide();
			}else{
				$(target).load( url , function( response, status, xhr ) {
					if( $(target).outerHeight() === 0 ){
						console.log('reload container');
						$(target).load( url );
					}
					$('#tutorial-loading').hide();
					$(target).find('meta,title').remove();
				});
			}
		});

		$('#tutorial h3 span').click(function(e) {
			$('#tutorial').toggleClass('active');
		});

		$('#tutorial').append($('<div id="highlight"></div>').hide().fadeIn(30).fadeOut(500));

		// 레이아웃 변경
		$('#sp-coupon[theme="detail"] > ul > li + li + li').remove();	// 쿠폰은 두개만 보여주자

		// 상세페이지 이미지 변형
		$('#sp-detail-description').html('<a href="http://www.pandassi.com" target="_blank"><img src="/_sp/image/sample/product_description.jpg"></a>');

		// 룩북일 경우 다른 이미지
		$('#sp-detail-description.lookbook').html('<a href="http://www.pandassi.com" target="_blank"><img src="/_sp/image/sample/lookbook.png"></a>');

		// 네이버페이 달아주기
		$('#NaverChk_Button').html('<a href="http://www.pandassi.com" target="_blank"><img src="/_sp/image/sample/naverpay.jpg"></a>');

		// 카테고리별 타이틀 이미지 넣어주기
		if( $('#path_category').val() == '24' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/category_5.jpg">'); }
		if( $('#path_category').val() == '45' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/category_3.jpg">'); }
		if( $('#path_category').val() == '25' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/category_4.jpg">'); }
		if( $('#path_category').val() == '27' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/category_1.jpg">'); }
		if( $('#path_category').val() == '28' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/category_2.jpg">'); }

		// 게시판별 타이틀 이미지 넣어주기
		if( $('#board_no').val() == '1' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/board_title_1.png">'); }
		if( $('#board_no').val() == '3' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/board_title_3.png">'); }
		if( $('#board_no').val() == '6' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/board_title_6.png">'); }
		//if( $('#board_no').val() == '4' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/board_title_4.png">'); }
		if( $('#board_no').val() == '8' ){ $('#sp-title h2 span:first-child').append('<img src="/_sp/image/sample/board_title_8.png">'); }

		// 상세페이지에 동영상 미리 넣어주기
		var items = Array('Sc2rNZsNobw','l3v6z1EqxIg','GN4htXI17rE');
		var item = items[Math.floor(Math.random()*items.length)];
		if( !$('.sp-product-video-playid[youtube]').size() && !$('.sp-product-video-playid[vimeo]').size() ){
			$('#sp-detail-slider').prepend('<div class="sp-slider-loop"><a href="#none" class="sp-product-video-playbtn" youtubeplayer data-id="'+ item +'" data-start="true" data-sound="true" data-loop="false"></a></div>');
		}

		// 특정 카테고리 스타일 주기
		$('#sp-category-1-normal > ul > li[data-no="BRAND"] > a').attr('style','font-weight:bold;');
		$('#sp-category-1-normal > ul > li[data-no="LOOKBOOK"] > a').attr('style','color:#912b45;font-weight:bold;');
		$('#sp-category-1-normal > ul > li[data-no="24"] > a').attr('style','color:#912b45;font-weight:bold;');
		$('#sp-category-1-normal > ul > li[data-no="25"] > a').attr('style','font-weight:bold;');
		$('#sp-category-1-normal > ul > li[data-no="TIMESALE"] > a').attr('style','font-weight:bold;');

		// 전체 브랜드 페이지 
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">A. SAKS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ACL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ADIDAS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ADORA HATS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ADRIENNE LANDAU</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AERO TRAY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ALE BY ALESSANDRA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ALIFE DESIGN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ALL FOR COLOR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AMERIBAG</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AMERICAN FLYER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AMERICAN GREEN TRAVEL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AMERICAN WEST</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AMERILEATHER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AMPERE CREATIONS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AMY BUTLER FOR KALENCOM</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ANDIAMO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ANN SHELBY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ANNA BY ANUSCHKA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ANNE KLEIN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ANTLER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ANUSCHKA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AO COOLERS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">APE CASE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">APERA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AQUAPAC</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ARMITRON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ARMPOCKET</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ASHLEY M</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ASICS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ATHALON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ATLANTIC</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">AURIELLE-CARRYLAND</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BAG BOY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BAGGALLINI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BAGGIZMO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BANDANA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BARSKA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BASE AUDIO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BAYIT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BELARNO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BELLA TAYLOR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BELLINO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BEN SHERMAN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BERTHA WATCHES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BESAFE BY DAYMAKERS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BETMAR NEW YORK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BEVERLY HILLS COUNTRY CLUB</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BIAGGI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BIGLOVE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BIRKENSTOCK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BMW LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BOB ALLEN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BOBO ACTIVE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BOCONI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BOCONI BELTS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BOSCA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BOULEVARD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BOYT HARNESS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BRIC\'S</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BRIGGS & RILEY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BRIO LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BROWNING</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BUCKY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BUCO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BUDD LEATHER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BUENO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BUGATTI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BUQU</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BURTON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">BUXTON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CABRELLI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CADDY DADDY GOLF</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CALPAK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CANDYWIREZ</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CANYON OUTBACK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CAPPELLI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CAPRI DESIGNS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CARBON SESTO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CARIBBEAN JOE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CARLOS SANTANA HATS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CARRIE\'S</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CASE LOGIC</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CASIO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CASUAL HOME</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CAT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CB STATION</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CHARGEHUB</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CHARIOT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CHEERO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CHIC BUDS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CINDA B</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CIRCUS BY SAM EDELMAN SUNGLASSES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CLAIRECHASE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CLARK & MAYFIELD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CLAVA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CLUB ROCHELIER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">COCA COLA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">COCOON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">COLUMBIA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">COOL & DRY COOLER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">COOL-IT CADDY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CRAYO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CREATIVE OUTDOOR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CRESCENT MOON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">CROCODILE CREEK INC</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DADGEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DAKINE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DAKOTA WATCH COMPANY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DAMNDOG</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DASEIN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DATREK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DAVEY\'S</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DAVID KING & CO.</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DAY & MOOD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DBEST PRODUCTS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DC COMICS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DEJUNO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DELSEY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DENCO SPORTS LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DENY DESIGNS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DEREK ALEXANDER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DESIGNER SLEEVES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DETOURS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DEUX LUX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DEVICEWEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DICKIES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DIESEL WATCHES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DIOPHY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DISC-O-BED</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DOCKERS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DONNA BELLA DESIGNS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DONNA SHARP</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DOPP</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">DURACELL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EAGLE CREEK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EARTH WOOD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EASTSPORT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EBAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ECBC</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ECKO UNLTD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ECLIPSE SOLAR GEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ECO STYLE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ECOGEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ED HECK LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EGEETOUCH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">E-GO! PORTABLE LIBRARY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ELITE BOWLING</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ELLIOTT LUCCA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ELWN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EMILIE M</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EMME</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ERGODYNE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EVEREST</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EVERKI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">EYN CASE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FAN FAVORITES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FILA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FILSON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FIRST ALERT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FIT & FRESH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FJALLRAVEN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FLANABAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FLIGHT 001</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FLIPILLOW THE MOST VERSATILE PILLOW</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FOLEY + CORINNA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FOSSIL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FUEL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">FUL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GABBIANO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GAME TIME</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GEKO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GENIUS PACK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GEOFFREY BEENE LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GLAMOUR STATUS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GLOVE IT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GO TRAVEL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GOBI GEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GOLD COAST</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GOLF TRAVEL BAGS LLC</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GOSLEEP USA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GOTTEX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GRAND TRUNK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GRANITE GEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GRANITE ROCX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GREAT AMERICAN LEATHERWORKS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GREEN GURU</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GREENWITCH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GUESS TRAVEL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">GYRATION</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HADAKI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HAIKU</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HANG ACCESSORIES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HARLEY DAVIDSON BY ATHALON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HBUTLER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HEDGREN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HELINOX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HELLO GORGEOUS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HELLO KITTY GOLF</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HERITAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HERSCHEL SUPPLY CO.</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HEX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HIDESIGN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HIGH ROAD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HIGHLAND TACTICAL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HOBIE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HOMINGPIN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HONEYWELL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HOOEY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HOOK & ALBERT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HOT-Z GOLF BAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HUMANGEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HUSH PUPPIES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HYDRA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">HYPERGEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ICE RED</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ICEBREAKER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">IGLOO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">IKON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">IN YOUR FACE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">INCASE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">INCIPIO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">INSTA360</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">INTEX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">INUSA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ION8</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">IT LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ITZY RITZY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">IVOMAX INC.</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">IVY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">J WORLD NEW YORK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">J. P. OURSE & CIE.</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">J.L. CHILDRESS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JACK GEORGES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JACK MASON LEAGUE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JACKI DESIGN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JANSPORT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JAYBIRD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JENNI CHAN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JESSICA MCCLINTOCK SCARVES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JESSICA SIMPSON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JNB</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JOHN COLE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JOHNSTON & MURPHY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JOURNEY COLLECTION BY ANNETTE FERBER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JU-JU-BE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">JULBO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KALENCOM</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KATE SPADE WATCHES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KATHY VAN ZEELAND TRAVELWARE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KAZ HEADREST</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KEDS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KEEN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KELTY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KENNETH COLE NEW YORK BUSINESS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KENNETH COLE REACTION</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KENSINGTON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KINROSS CASHMERE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KIPLING</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KLOGS FOOTWEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KNOMO LONDON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KODIAK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KOMFORT KOLLAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">KR STRIKEFORCE BOWLING</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LA DIVA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LANCASTER PARIS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LATICO LEATHERS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LAUNDRY BY SHELLI SEGAL SUNGLASSES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LAUREL BURCH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LAUREX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LAVA ACCESSORIES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LAX GADGETS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LE DONNE LEATHER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LEATHERBAY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LEGO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LEIGHTON UMBRELLAS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LEISURE LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LENCCA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LESPORTSAC</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LEVI\'S</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LEWIS N. CLARK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LIFE IS GOOD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LIFECHARGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LIFELINE FIRST AID</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LILY BLOOM</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LIMELENS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LITEGEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LITTLEARTH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LLAMASTE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LODIS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LOJEL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LONDON FOG</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LOUDMOUTH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LUCAS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LUG</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LUGGAGE SPOTTERS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LUGLOC</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">LUNDHAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MACCASE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MAD RABBIT KICKING TIGER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MAGID</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MAKER & CO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MAMMOTH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MANCINI LEATHER GOODS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MANFROTTO BAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MANHATTAN PORTAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MCBRINE LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MCKLEIN USA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">M-EDGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MEDICI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MEE AUDIO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MELLOW WORLD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MERET</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MIA TORO ITALY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MICHAEL KORS WATCHES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MINIMUS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MKF COLLECTION BY MIA K. FARROW</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MOBILE EDGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MODA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MOFE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MOJO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MOLESKINE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MONTANA WEST</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MOPHIE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MOUNTAIN KHAKIS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MUNDI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MY CLEAR BACKPACK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">MYWALIT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NANUK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NAPA SOAP COMPANY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NATIVE EYEWEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NAUTICA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NAVA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NAZTECH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NETPACK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NEW WAVE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NICOLE LEE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NICOLE MILLER NEW YORK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NIDECKER DESIGN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NIKE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NINE WEST LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NINO BOSSI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NUBAND.</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NUMINOUS LONDON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NUO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">NYNE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OAKLEY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OBERSEE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OGIO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OLD TREND</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OLUKAI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OLYMPIA USA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OLYMPUS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ORGO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ORIGAMI UNICORN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ORIGINAL PENGUIN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OSGOODE MARLEY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OSPREY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OSTRICH PILLOW</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OUTDOOR PRODUCTS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">OUTDOOR RESEARCH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PACIFIC COAST</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PACKIT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PACSAFE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PAKEMS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PAN AM</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PAPAGO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PAPERTHINKS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PARINDA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PARROT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PATAGONIA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PATHFINDER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PB TRAVEL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PENDLETON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PERRY ELLIS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PERRY MACKIN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PETER GRIMM</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PETERSONS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PETUNIA PICKLE BOTTOM</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PHIVE RIVERS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PHYSICIAN ENDORSED</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PICNIC AT ASCOT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PICNIC PACK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PICNIC PLUS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PICNIC TIME</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PIEL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PIVOTAL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PO CAMPO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PRANA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PROPPER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PUNTO UNO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PURTECH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">PYRAMID</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">QUE BOTTLE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">R & R COLLECTIONS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RAINKIST UMBRELLAS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RAPPORT LONDON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RAWLINGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RBX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">REALTREE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">REBECCA & RIFKA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RED ROCK OUTDOOR GEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RELIC</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">REVELATION</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RHOMBUS CANVAS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RILEE & LO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RISE GEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RJ GOLF</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ROBERT MYERS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ROCAWEAR SUNWEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ROCKLAND LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ROGUE WALLETS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ROOTS 73</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ROPIN WEST</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ROYAL ROBBINS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ROYCE LEATHER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">RUSSELL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SACS COLLECTION BY ANNETTE FERBER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SAILORBAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SAKROOTS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SALOMON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SAMOE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SAN DIEGO HAT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SANDY LISA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SCALA HATS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SCULLY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SHADYFACE PORTABLE SUNSHADES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SHARO LEATHER BAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SHEDRAIN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SHERPANI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SHOLDIT</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SHOREBAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SIAMOD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SIMPLEX APPAREL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SIMPLIFY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SISKIYOU</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SKAGEN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SLOANE RANGER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SLUMBERJACK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SMART MOMMY BAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SMARTWOOL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SMITH & WESSON WATCHES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SMK-LINK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SOC GEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SOFTSCIENCE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SOLEUS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SOLO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SOMETHING STRONG</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SONDRA ROBERTS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SOYBU</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SPORTUBE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SPRAYGROUND</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">STELLAKIM</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">STEPHEN JOSEPH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">STETSON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">STEWART STAND</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">STM GOODS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SUN \'N\' SAND</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SW GLOBAL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SWISSGEAR TRAVEL GEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SWIX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">SYDNEY LOVE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TABOO FASHIONS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TANNERS AVENUE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TARGUS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TEAM GOLF USA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TED BAKER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TEN79LA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TENTH FRAME</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">THE AIRHOOK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">THE LANO COMPANY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">THE NORTH FACE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">THE REAL DEAL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">THE SAK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">THE TRAVEL HALO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">THULE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TIGNANELLO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TILE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TIMBERLAND</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TIMBUK2</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TIMEX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TLC&YOU</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TOAD & CO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TOKEN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TOKK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TOMMY BAHAMA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TOMMY HILFIGER LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TORQUE AUDIO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TOTES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TOUCH OF ECO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRAKK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRAVEL GEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRAVEL SMART BY CONAIR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRAVELER\'S CHOICE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRAVELERS CLUB LUGGAGE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRAVELON</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRAVELPRO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRAVELREST</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRENDYKID</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRIDENT CASE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRIFORCE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRIPLE FIVE SOUL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TROIKA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TRUELU</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TSD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">T-SHIRT & JEANS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TUCANO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">TUSK LTD</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">U.S. TRAVELER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">UAG</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ULTIMATE DIRECTION</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ULTRALOQ</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">UNDER ARMOUR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">UNIONBAY EYEWEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">UNITED BY BLUE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">UNITY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">UNU</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VAGABOND TRAVELER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VALIRA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VAPUR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VAUDE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VERA BRADLEY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VERBATIM</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VERDI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VERTX</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VESSEL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VIATOR GEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VICENZO LEATHER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VICTORIA LEATHER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VINCE CAMUTO</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VINGARDEVALISE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VISCONTI</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VISIONTEK</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">VOLCOM</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WAKAWAKA</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WALLY BAGS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WAVERLY</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WELLZHER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WENZEL</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WILDKIN</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WIRED</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WISEWEAR</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WOLF</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WOMEN IN BUSINESS</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WONDERWOOF</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WOOLRICH</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WORLD TRAVELER</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WOWWEE</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">WRAP-A-NAP</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">XERO SHOES</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">YELL BY VOGUESTRAP</a>');
		$('#sp-brand [brand-custom]').append('<a href="/product/list.html?cate_no=24">ZERO HALLIBURTON</a>');

	});

	/* 로드 */
	$(window).load(function(){

		// 

	});

	//Make the DIV element draggagle:
	dragElement(document.getElementById(("tutorial")));

	function dragElement(elmnt) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		if (document.getElementById(elmnt.id + "header")) {
			/* if present, the header is where you move the DIV from:*/
			document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
		} else {
			/* otherwise, move the DIV from anywhere inside the DIV:*/
			elmnt.onmousedown = dragMouseDown;
		}
		function dragMouseDown(e) {
			e = e || window.event;
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		}
		function elementDrag(e) {
			e = e || window.event;
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}
		function closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}


	/* 아작스 로드 후 컨트롤 */
	function endAjaxload( url ){
		if( url === '/_sp/apps/layout/sky/sky-1/sky.html' && typeof sp_sky_1_scroll !== 'undefined' && $.isFunction(sp_sky_1_scroll) ){
			sp_sky_1_scroll();
		};
		if( url === '/_sp/apps/layout/sky/sky-2/sky.html' && typeof sp_sky_2_scroll !== 'undefined' && $.isFunction(sp_sky_2_scroll) ){
			sp_sky_2_scroll();
		};
		if( url === '/_sp/apps/layout/category/category-1/category.html' && typeof sp_category_1_scroll !== 'undefined' && $.isFunction(sp_category_1_scroll) ){
			sp_category_1_scroll();
		};
	}
	$(document).ajaxComplete(function( event, xhr, settings ) {
		//console.log('ajaxComplete');
		endAjaxload( settings.url );
	});
	$(document).ajaxSuccess(function( event, xhr, settings ) {
		//console.log('ajaxSuccess');
		endAjaxload( settings.url );
	});




	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-17927489-3', 'auto');
	ga('send', 'pageview', '[#23] ' + location.href );