
	/******************************************************************************************************************* 
		리스트리뷰
	*******************************************************************************************************************/

	$( document ).ready(function() {

		// 마크업
		if( $('#sp-listreview > ul').size() ){

			var spwNo = [];
			var spwIdx = [];
			var spwBoard = [];
			var spwUrl = [];
			var rsData = [];
			var rsSplit = [];
			var rsAttach = [];
			var spwImgBox = [];
			var spwConBox = [];
			var spDesc = [];
			var spSlider = [];
			$('#sp-listreview > ul').each(function( index ){
				spwNo[index] = $(this).data('no');
				spwIdx[index] = $(this).data('idx');
				spwBoard[index] = $(this).data('board');
				spwUrl[index] = '/exec/front/board/Get/'+ spwBoard[index] +'?no='+ spwIdx[index] +'&board_no='+ spwBoard[index];
				spwImgBox[index] = $(this).find('.reviewimage');
				spwConBox[index] = $(this).find('.reviewcontent');
				$.ajax({
					type: 'get',
					dataType: 'json',
					url: spwUrl[index],
					success: function(data){

						//console.log( spwUrl[index], data );
						rsData[index] = data;

						// 컨텐츠 생성
						spDesc[index]  = '<div class="reviewcontent_desc">'
						spDesc[index] += ( rsData[index]['data']['content'] ) ? rsData[index]['data']['content'] : '이 글은 비밀글입니다.' ;
						spDesc[index] += '</div>'

						// 이미지 추출
						if( rsData[index]['data']['content_image'] ){
							spDesc[index] += '<div class="reviewcontent_image">'
							rsSplit[index] = rsData[index]['data']['content_image'].split('<img src="');
							spSlider[index] = '<div class="sp-listreview-slider">';
							spSlider[index] += '<div class="sp-slider-ready" data-fade="true" data-initialslide="int" data-autoplayspeed="50000000" data-speed="0" hover="false" arrows="blk-h-l" arrowsArea="h-in-46" dots="circle-l" dotsArea="in-b-c">';
							for(var i=0;i<rsSplit[index].length;i++){
								rsAttach[index] = rsSplit[index][i].split('"')[0];
								if( rsAttach[index] ){
									spwImgBox[index].append('<a style="background-image:url(\''+ rsAttach[index] +'\')" data-index="'+ i +'" togglelayer="'+ rsAttach[index] +'"></a>');
									spDesc[index] += '<a style="background-image:url(\''+ rsAttach[index] +'\');" data-index="'+ i +'" togglelayer="'+ rsAttach[index] +'"></a>';
									spSlider[index] += '<div class="sp-slider-loop" style="background-image:url(\''+ rsAttach[index] +'\');"><img src="'+ rsAttach[index] +'"></div>';
									//console.log( rsAttach );
								}
							}
							spSlider[index] += '</div>';
							spSlider[index] += '</div>';
							spDesc[index] += '</div>';
						}

						// 컨텐츠 밀어넣기
						spDesc[index] += '<hr />';
						spDesc[index] += '<div class="reviewcontent_reply"></div>';
						spDesc[index] += '<div class="reviewcontent_link sp-btn-group sp-left">';
						/*
						if( rsData[index]['data']['content_image'] ){
							spDesc[index] += '	<a href="#none" class="sp-btn" theme="black" scale="large" change="dot"><span>간편보기</span></a>';
						}
						*/
						spDesc[index] += '	<a href="/board/review/read.html?no='+ spwIdx[index] +'&board_no='+ spwBoard[index] +'" class="sp-btn" theme="black" scale="large" change="right"><span>상품후기 상세보기</span></a>';
						spDesc[index] += '	<span class="msg">수정,삭제의 경우 <a <a href="/board/review/read.html?no='+ spwIdx[index] +'&board_no='+ spwBoard[index] +'">상세보기</a>를 눌러주세요</span>';
						spDesc[index] += '</div>';
						spDesc[index] += '<span class="reviewcontent_close" toggleclose>[ 리뷰 접기 ]</span>';
						if( rsData[index]['data']['vote_count'] ){
							spDesc[index] += '<span class="reviewcontent_vote"><span>'+ rsData[index]['data']['vote_count'] +'명</span>이 이 후기가 도움이 된다고 선택 했습니다</span>';
						}
						spwConBox[index].append( spDesc[index] , spSlider[index] );

					},
					error: function(xhr,status,error){
						//
					},
					timeout: 3000
				});
			});
		}

		// 댓글 불러오기
		function callReply( elem ){
			if( !elem.find('.reviewcontent_reply').html() ){
				var crIdx = elem.data('idx');
				var crBoard = elem.data('board');
				var crUrl = '/board/review/read_ajax.html?no='+ crIdx +'&board_no='+ crBoard ;
				$.ajax({
					type: 'get',
					dataType: 'html',
					url: crUrl,
					success: function(data){
						var $result = $(data).filter('#sp-result').html();
						elem.find('.reviewcontent_reply').append( $result );
						if( !elem.find('.sp-board-reply-list').size() ){
							elem.find('#sp-board').addClass('displaynone');
						}
						if( $('#sp-listreview-layer').size() ){
							if( !$('#sp-listreview-layer .sp-board-reply-list').size() ){
								$('#sp-listreview-layer .reviewcontent_reply').append( $result );
								if( !$('#sp-listreview-layer .sp-board-reply-list').size() ){
									$('#sp-listreview-layer #sp-board').addClass('displaynone');
								}
							}
						}
					},
					error: function(xhr,status,error){
						//
					},
					timeout: 3000
				});
			}
		}

		// 더보기
		$('#sp-listreview [toggleopen]').live('click', function(e) {
			var ckCov = $(this).closest('ul');
			var ckThis = ckCov.find('.reviewcontent');
			if( !ckCov.hasClass('open') ){
				if( $('#sp-listreview >ul.open .reviewcontent').size() ){
					$('#sp-listreview >ul.open .reviewcontent').stop(true, true).fadeTo(300, 0).slideUp(300,function(){
						ckThis.stop(true, true).slideDown(300,function(){
							$('#sp-listreview >ul.open').removeClass('open');
							ckCov.addClass('open');
							ckThis.fadeTo(300, 1);
							callReply(ckCov); // 댓글 부르기
						});
					});
				}else{
					ckThis.stop(true, true).slideDown(300,function(){
						ckCov.addClass('open');
						ckThis.fadeTo(300, 1);
						callReply(ckCov); // 댓글 부르기
					});
				}
			}
		});

		// 더보기 닫기
		$('#sp-listreview [toggleclose]').live('click', function(e) {
			var ckCov = $(this).closest('ul');
			var ckThis = ckCov.find('.reviewcontent');
			if( ckCov.hasClass('open') ){
				ckThis.stop(true, true).fadeTo(300, 0).slideUp(300,function(){
					ckCov.removeClass('open')
				});
			}
		});

		// 레이어 띄우기
		$('#sp-listreview [togglelayer]').live('click', function(e) {
			var lyCon;
			var lyMy = $(this).closest('ul');
			var lyImage = $(this).closest('ul').find('.sp-listreview-slider').clone();
			var lyImageCon = lyImage.html();
			var lyIndex = $(this).index();
			var lyDesc = $(this).closest('ul').clone().wrapAll("<div/>").parent();

			lyImageCon = lyImageCon.replace('sp-slider-ready','sp-slider');
			lyImageCon = lyImageCon.replace('data-initialslide="int"','data-initialslide="'+ lyIndex +'"');
			//lyImageCon = lyImageCon.replace('theme="white"','theme="black"');

			lyCon  = '<div id="sp-listreview-layer"><button><p></p></button><ul><li>';
			lyCon += '<div class="sp-listreview-layer-inside">';
			lyCon += lyImageCon;
			lyCon += '<div class="sp-listview-layer-content">'+ lyDesc.html().replace('theme="white"','theme="my"') +'</div>';
			lyCon += '</div>';
			lyCon += '</li></ul></div>';

			$('body').append( lyCon );

			$('#sp-listreview-layer .reviewcontent').show();

			// 슬라이더 연동
			if ( typeof setSlickSlider !== 'undefined' && $.isFunction(setSlickSlider) ) {
				setTimeout(function(){ 
					setSlickSlider( $('#sp-listreview-layer .sp-slider') ); 
					$('#sp-listreview-layer').addClass('show');
					$('body').addClass('disable');
					setTimeout(function(){ callReply(lyMy); }, 1);
				}, 1);
			}
			/*
			$('#sp-listreview-layer').bind('mousewheel scroll touchmove',function(e,delta){
				e.preventDefault();
				e.stopPropagation();
				return false;
			});*/
		});

		//이미지 더 크게보기
		$('#sp-listreview-layer .slick-slide').live('click', function(e) {
			var ozUrl = $(this).find('img').attr('src');
			var ozWidth = $(this).outerWidth();
			var ozHeight = $(this).outerHeight();
			var ozZoom;
			function onloadZoomCallback(url,callback) {
				var image = new Image();
					image.src = url;
					image.onload = function() {
						var result = [{ x: this.width, y: this.height, url: url }];
						callback(result);
					};
			}
			onloadZoomCallback( ozUrl, function(result){
				if( result[0]['x'] > ozWidth ){
					ozZoom  = ''
					ozZoom += '<div class="sp-listreview-layer-zoom"><button><p></p></button>'
					ozZoom += '<ul><li><img src="'+ result[0]['url'] +'"></li></ul>'
					ozZoom += '</div>'
					$('#sp-listreview-layer').append( ozZoom );
					$('#sp-listreview-layer .sp-listreview-layer-zoom').fadeIn();
				}else{
					ozZoom  = ''
					ozZoom += '<div class="sp-listreview-layer-origin">현재 이미지가 원본 크기입니다</div>'
					$('#sp-listreview-layer').append( ozZoom );
					$('#sp-listreview-layer .sp-listreview-layer-origin').hide().fadeIn(200).delay(600).fadeOut(200,function(){
						$('#sp-listreview-layer .sp-listreview-layer-origin').remove();
					});
				}
			});
		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-listreview-layer').remove();
				$('body').removeClass('disable');
			}
		});

		//$(document).on('click', '#sp-language, #sp-language button', function(e) {
		$('#sp-listreview-layer, #sp-listreview-layer > button').live('click', function(){
			$('#sp-listreview-layer').remove();
			$('body').removeClass('disable');
		});

		//$(document).on('click', '#sp-language .sp-language-inside', function(e) {
		$('#sp-listreview-layer .sp-listreview-layer-inside').live('click', function(e){
			e.stopPropagation();
		});

		//이미지 더 크게보기 닫기
		$('#sp-listreview-layer .sp-listreview-layer-zoom').live('click', function(e){
			var zmThis = $('#sp-listreview-layer .sp-listreview-layer-zoom');
			zmThis.fadeOut(function(){
				zmThis.remove();
			});
			e.stopPropagation();
		});

		//UPDATE
		var img = new Image();
		var imgwidth;
		var imgheight;
		var winwidth;
		var winheight;
		var setwidt = 0;
		var setheight = 0;
		var bgcontent;
		function onloadCallback(url,callback) {
			var image = new Image();
				image.src = url;
				image.onload = function() {
					var result = [{ x: this.width, y: this.height, url: url }];
					callback(result);
				};
		}
		setInterval(function(){
			if( $('#sp-listreview-layer').css('display') === 'block' ){

				onloadCallback( $('#sp-listreview-layer .slick-active img').attr('src'), function(result){
					imgwidth = result[0]['x'];
					imgheight = result[0]['y'];
					winwidth = ($(window).width() * 0.90) - 400;
					winheight = $(window).height() * 0.90;
					winwidth = Math.round(winwidth);
					winheight = Math.round(winheight);

					if( imgwidth > winwidth && imgheight > winheight ){
						setheight = winheight;
						setwidth = imgwidth * setheight / imgheight;
						if( setwidth > winwidth ){
							setwidth = winwidth;
						}
					}else if( imgwidth > winwidth ){
						//console.log('2');
						setwidth = winwidth;
						setheight = imgheight;
					}else if( imgheight > winheight ){
						//console.log('3');
						setheight = winheight;
						setwidth = imgwidth * setheight / imgheight;
					}else{
						//console.log('4');
						setwidth = imgwidth;
						setheight = imgheight;
					}

					if( $(window).width() < 601 ){
						setwidth = $(window).width() - 5;
						setheight = $(window).height();
						//console.log(setwidth , setheight , imgwidth , imgheight);
						if( imgheight > setheight ){
							setwidth = imgwidth * setheight / imgheight;
							//console.log('???::'+setwidth);
							if( setwidth > $(window).width() ){
								setwidth = $(window).width() - 5;
							}
						}
					}

					setwidth = Math.round(setwidth);
					setheight = Math.round(setheight);
					
					//console.log( $('#sp-listreview-layer .sp-slider').css('width').replace('px','') , $('#sp-listreview-layer .sp-slider').css('height').replace('px','') , setwidth , setheight );

					// 슬라이더 새로고침
					if( imgwidth > imgheight ){
						//console.log(1);
						bgcontent = 'auto 100%';
					}else if( imgheight > imgwidth ){
						//console.log(2);
						bgcontent = 'auto 100%';
					}else{
						//console.log(3);
						bgcontent = setwidth +' '+ setheight;
					}
					$('#sp-listreview-layer .sp-slider-loop.slick-active').css({'height':setheight,'background-size':bgcontent});
					if ( typeof resetSlickSlider !== 'undefined' && $.isFunction(resetSlickSlider) ) {
						if( $('#sp-listreview-layer .sp-slider').css('width').replace('px','') != setwidth || $('#sp-listreview-layer .sp-slider').css('height').replace('px','') != setheight ){
							console.log('RESIZE PHOTOREVIEW');
							$('#sp-listreview-layer .sp-listreview-layer-inside').css('width',setwidth);
							$('#sp-listreview-layer .sp-slider').css({'width':setwidth,'height':setheight});
							setTimeout(function(){ resetSlickSlider( 
								$('#sp-listreview-layer .sp-slider') ); 
								$('#sp-listreview-layer .sp-slider-loop.slick-active').css({'height':setheight,'background-size':bgcontent});
							}, 1);
						}
					}

				});

			}else{
				//
			}
		}, 100);

	});


	// 커스터마이징
	$(window).load(function(){

		// 백그라운드 커버
		function bgCheckCallback(url, callback) {
			var vals;
			var image = new Image();
				image.src = url;
				image.onload = function() {
					var vals;
					//console.log( result[0]['x'] );
					if( this.width > this.height ){
						vals = 'auto 100%';
					}else if( this.height > this.width ){
						vals = '100% auto';
					}else{
						vals = '100% 100%';
					}
					callback(vals);
				};
		}
		$('#sp-listreview [togglelayer]').each(function( index ){
			var bgElement = $(this);
			bgCheckCallback( bgElement.attr('togglelayer'), function(result){
				bgElement.css('background-size',result);
			})
		});

	});