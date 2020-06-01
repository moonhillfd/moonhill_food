
	/******************************************************************************************************************* 
		게시판 관련
	*******************************************************************************************************************/

	window.board_list_allview = ( window.board_list_allview ) ? window.board_list_allview : false;
	window.board_list_preview = ( window.board_list_preview ) ? window.board_list_preview : [];
	window.board_category_split = ( window.board_category_split ) ? window.board_category_split : false;

	/* 게시판 배너를 위한 scope */
	$('#sp-board-banner').attr('scope',$('#board_no').val());

	$(document).ready(function(){

		/* 전체 게시판 보기 */
		if( window.board_list_allview && $('#sp-board .sp-board-box > ul > li.sp-left').size() ){
			var sp_board_allview = $('#sp-board-allview-layer').removeClass('displaynone').addClass('prepend').clone();
			$('#sp-board-allview-layer').remove();
			$('#sp-board .sp-board-box > ul > li.sp-left').prepend( sp_board_allview );
		}

		/* 카테고리 분기 탭 */
		if( window.board_category_split && $('#board_category').size() && $('#boardSearchForm').size() ){

			var _idxB;
			var _nameB;
			var _checkB;
			var _directionB;
			var _urlB = $('#boardSearchForm').attr('action')+'?board_no='+ $.sp_get_param(location.href,'board_no') +'&is_reply_sort='+ $.sp_get_param(location.href,'is_reply_sort') +'&category_no=';
			var _sizeB = $('#board_category option').size();
			var _targetB = $('#sp-board-category-split');
			$('#board_category option').each(function( index ) {
				_idxB = $(this).attr('value');
				_nameB = $(this).html();
				_checkB = ($(this).attr('selected')) ? 'after' : '';
				_directionB = '';
				if( index === 0 ){
					_directionB = 'first';
				}else if( _sizeB == (index + 1) ){
					_directionB = 'last';
				}
				_targetB.append('<a href="'+_urlB+_idxB+'" class="'+ _checkB +' '+ _directionB +'">'+_nameB+'</a>');
				if( index + 1 >= _sizeB ){
					_targetB.fadeIn(function(){
						_targetB.find('.after').addClass('active');
					});
				}
			});

		}

		/* 상품 리스팅 분기해서 보여주기 */
		$('.sp-board-gallery-style button').live('click', function(e) {
			$(this).closest('.sp-board-gallery').attr('grid',$(this).attr('grid'));
		});

		/* 이미지 바꿔주기 */
		$('#BoardDelForm img[src*="but_mileage.gif"]').attr({'src':'/_sp/image/cafe24/board/but_mileage.gif','style':'margin-left:5px;'});

		/* 상세페이지 댓글 없을시 삭제 */
		if( $('#sp-board-reply[emptycheck]').size() ){
			if( !$('#sp-board-reply[emptycheck] .sp-board-reply-form').size() && !$('#sp-board-reply[emptycheck] .sp-board-reply-list').size() ){
				$('#sp-board-reply[emptycheck]').addClass('displaynone');
			}
		}

		/* 글쓰기 평점 아이콘 변형 */
		if( $('.sp-board-write-point').size() ){
			$('.sp-board-write-point span[class*=point]').each(function( index ){
				
				switch ( $(this).html() ){
					case "<em>★★★★★</em>"	: $(this).html('<img src="/_sp/image/cafe24/board/ico_point5.gif">'); break;
					case "<em>★★★★</em>"	: $(this).html('<img src="/_sp/image/cafe24/board/ico_point4.gif">'); break;
					case "<em>★★★</em>"		: $(this).html('<img src="/_sp/image/cafe24/board/ico_point3.gif">'); break;
					case "<em>★★</em>"		: $(this).html('<img src="/_sp/image/cafe24/board/ico_point2.gif">'); break;
					case "<em>★</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point1.gif">'); break;

					case "<em>5</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point5.gif">'); break;
					case "<em>4</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point4.gif">'); break;
					case "<em>3</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point3.gif">'); break;
					case "<em>2</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point2.gif">'); break;
					case "<em>1</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point1.gif">'); break;
				}

			});
		}

		/* 게시판 미리보기 */
		var sp_preview;
		var sp_preview_board;
		var sp_preview_onclick;
		$('a[boardpreview]').each(function( index ) {

			sp_preview = $(this);
			sp_preview_board = sp_preview.data('board');
			sp_preview_onclick = sp_preview.data('onclick');
			if($.inArray(sp_preview_board, window.board_list_preview) != -1){
				sp_preview.attr({
					'href':'#none',
					'onClick':sp_preview_onclick
				}).addClass('preview');
			}

		});

		/* 게시판 ( 상품상세페이지 ) 그룹핑 */
		if( $('#sp-cscenter .sp-board-group-category').size() ){
			var sp_category_ths;
			var sp_category_text;
			var sp_category_start;
			var sp_category_array = [];
			$('#sp-cscenter .sp-board-group-element').each(function( a ){
				sp_category_array = [];
				$(this).find('li[category]').each(function( b ){
					if($.inArray( $(this).attr('category') , sp_category_array) == -1){
						$(this).closest('.sp-board-group-loop').find('.sp-board-group-category').append('<a href="#none" class="sp-board-group-category-btn">'+ $(this).attr('category') +'</a>');
						sp_category_array.push( $(this).attr('category') );
					}
				});
			});
			$('#sp-cscenter .sp-board-group-category-btn').live('click', function(e) {
				sp_category_ths = $(this).closest('.sp-board-group-loop');
				sp_category_text = $(this).text();
				sp_category_ths.find('.sp-board-group-category-btn').removeClass('active');
				$(this).addClass('active');
				sp_category_ths.find('.sp-board-group-element li').removeClass('active');
				sp_category_ths.find('.sp-board-group-element li[category="'+ sp_category_text +'"]').addClass('active');
			});
			$('#sp-cscenter .sp-board-group-category').each(function( a ){
				sp_category_start = ( $(this).data('start') ) ? $(this).data('start') : 0 ;
				$(this).find('.sp-board-group-category-btn').eq( sp_category_start ).trigger('click');
			});
		}

	});


	// ROAD
	$(document).ready(function(){

		var currentLocation = window.location.href;
		var boardListProductNotice = 'board_no=3001'; /* 제품소식 */
		var boardListNotice = 'board_no=1'; /* 공지사항 리스트 */
		var boardViewNotice = '/1/'; /* 공지사항 */
		var boardViewProductNotice = '/3001/'; /* 제품소식 */
		var boardViewEvent = '/8/'; /* 이벤트 */
		var boardListEvent = 'board_no=8'; /* 이벤트 */	
		var boardListVideo = 'board_no=12'; /* 홍보영상 */
		var boardViewVideo = '/12/'; /* 홍보영상 */
		var boardListCooper = 'board_no=5'; /* 판매/제휴/수출문의 */
		var boardProduct = 'board_no=4' /* 구매후기 */;
		var boardQna = 'board_no=6' /* 상품Q&A */;
		var boardListSupporters = 'board_no=1002' /* 체험단 */;
		var boardViewSupporters = '/1002/' /* 체험단 */;


		if(currentLocation.match(boardListNotice)) {
			document.getElementById("depthTwo").innerHTML = "소식";
		}
		if(currentLocation.match(boardViewNotice)) {
			document.getElementById("depthTwo").innerHTML = "소식";
		}
		if(currentLocation.match(boardListProductNotice)) {
			document.getElementById("depthTwo").innerHTML = "소식";
		}
		if(currentLocation.match(boardViewProductNotice)) {
			document.getElementById("depthTwo").innerHTML = "소식";
		}	
		if(currentLocation.match(boardViewEvent)) {
			document.getElementById("depthTwo").innerHTML = "이벤트";
		}
		if(currentLocation.match(boardListEvent)) {
			document.getElementById("depthTwo").innerHTML = "이벤트";
		}
		if(currentLocation.match(boardListVideo)) {
			document.getElementById("depthTwo").innerHTML = "소식";
		}
		if(currentLocation.match(boardViewVideo)) {
			document.getElementById("depthTwo").innerHTML = "소식";
		}
		if(currentLocation.match(boardListCooper)) {
			document.getElementById("marketing").innerHTML = "마케팅 담당 : 070.4652.3191";
		}

		if(currentLocation.match(boardProduct)) {
			document.getElementById("depthTwo").innerHTML = "구매후기";
			document.getElementById("best_link").innerHTML = "" +
				"<ul>" +
				"<li><a href='https://moonhillfood.com/article/review/4/1633/'><img src='/image/sub/best_04.jpg' /></a></li>" +
				"<li><a href='https://moonhillfood.com/article/review/4/1648/'><img src='/image/sub/best_05.jpg' /></a></li>" +
				"<li class='soon'>COMING SOON</li>" +
				"<li class='soon'>COMING SOON</li>" +
				"<li class='soon'>COMING SOON</li>" +
				"</ul>";
			document.getElementById("notice").innerHTML = "달맞이자연식품에서 판매하고 있는 식품, 건강기능식품은 질병의 예방과 치료를 위한 의약품이 아닙니다.<br>구매후기 작성 시 질병명, 치료 예방과 관련된 단어(효과, 효능 등)를 사용할 경우 과대광고로 오인할 수 있으니 가급적 의학적 용어나 효능/효과에 대한 표현은 삼가부탁드리며,<br>이런 내용으로 후기가 작성될 경우 부득이하게 게시글 삭제 또는 수정(** 처리)될 수 있다는 점 양해 부탁드립니다.";
			document.getElementById("boardReview").style.display="block";
		}

		if(currentLocation.match(boardQna)) {
			document.getElementById("notice").style.display = "none";
		}

		if(currentLocation.match(boardListSupporters)) {
			document.getElementById("depthTwo").innerHTML = "이벤트";
		}
		if(currentLocation.match(boardListSupporters)) {
			document.getElementById("supporters").innerHTML = "<img src='/image/sub/supporters_banner.jpg'>";
		}
		if(currentLocation.match(boardViewSupporters)) {
			document.getElementById("supporters").innerHTML = "<img src='/image/sub/supporters_banner.jpg'>";
		}

	});