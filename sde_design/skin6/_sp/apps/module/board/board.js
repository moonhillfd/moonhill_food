
	/******************************************************************************************************************* 
		�Խ��� ����
	*******************************************************************************************************************/

	window.board_list_allview = ( window.board_list_allview ) ? window.board_list_allview : false;
	window.board_list_preview = ( window.board_list_preview ) ? window.board_list_preview : [];
	window.board_category_split = ( window.board_category_split ) ? window.board_category_split : false;

	/* �Խ��� ��ʸ� ���� scope */
	$('#sp-board-banner').attr('scope',$('#board_no').val());

	$(document).ready(function(){

		/* ��ü �Խ��� ���� */
		if( window.board_list_allview && $('#sp-board .sp-board-box > ul > li.sp-left').size() ){
			var sp_board_allview = $('#sp-board-allview-layer').removeClass('displaynone').addClass('prepend').clone();
			$('#sp-board-allview-layer').remove();
			$('#sp-board .sp-board-box > ul > li.sp-left').prepend( sp_board_allview );
		}

		/* ī�װ� �б� �� */
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

		/* ��ǰ ������ �б��ؼ� �����ֱ� */
		$('.sp-board-gallery-style button').live('click', function(e) {
			$(this).closest('.sp-board-gallery').attr('grid',$(this).attr('grid'));
		});

		/* �̹��� �ٲ��ֱ� */
		$('#BoardDelForm img[src*="but_mileage.gif"]').attr({'src':'/_sp/image/cafe24/board/but_mileage.gif','style':'margin-left:5px;'});

		/* �������� ��� ������ ���� */
		if( $('#sp-board-reply[emptycheck]').size() ){
			if( !$('#sp-board-reply[emptycheck] .sp-board-reply-form').size() && !$('#sp-board-reply[emptycheck] .sp-board-reply-list').size() ){
				$('#sp-board-reply[emptycheck]').addClass('displaynone');
			}
		}

		/* �۾��� ���� ������ ���� */
		if( $('.sp-board-write-point').size() ){
			$('.sp-board-write-point span[class*=point]').each(function( index ){
				
				switch ( $(this).html() ){
					case "<em>�ڡڡڡڡ�</em>"	: $(this).html('<img src="/_sp/image/cafe24/board/ico_point5.gif">'); break;
					case "<em>�ڡڡڡ�</em>"	: $(this).html('<img src="/_sp/image/cafe24/board/ico_point4.gif">'); break;
					case "<em>�ڡڡ�</em>"		: $(this).html('<img src="/_sp/image/cafe24/board/ico_point3.gif">'); break;
					case "<em>�ڡ�</em>"		: $(this).html('<img src="/_sp/image/cafe24/board/ico_point2.gif">'); break;
					case "<em>��</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point1.gif">'); break;

					case "<em>5</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point5.gif">'); break;
					case "<em>4</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point4.gif">'); break;
					case "<em>3</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point3.gif">'); break;
					case "<em>2</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point2.gif">'); break;
					case "<em>1</em>"			: $(this).html('<img src="/_sp/image/cafe24/board/ico_point1.gif">'); break;
				}

			});
		}

		/* �Խ��� �̸����� */
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

		/* �Խ��� ( ��ǰ�������� ) �׷��� */
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
		var boardListProductNotice = 'board_no=3001'; /* ��ǰ�ҽ� */
		var boardListNotice = 'board_no=1'; /* �������� ����Ʈ */
		var boardViewNotice = '/1/'; /* �������� */
		var boardViewProductNotice = '/3001/'; /* ��ǰ�ҽ� */
		var boardViewEvent = '/8/'; /* �̺�Ʈ */
		var boardListEvent = 'board_no=8'; /* �̺�Ʈ */	
		var boardListVideo = 'board_no=12'; /* ȫ������ */
		var boardViewVideo = '/12/'; /* ȫ������ */
		var boardListCooper = 'board_no=5'; /* �Ǹ�/����/���⹮�� */
		var boardProduct = 'board_no=4' /* �����ı� */;
		var boardQna = 'board_no=6' /* ��ǰQ&A */;
		var boardListSupporters = 'board_no=1002' /* ü��� */;
		var boardViewSupporters = '/1002/' /* ü��� */;


		if(currentLocation.match(boardListNotice)) {
			document.getElementById("depthTwo").innerHTML = "�ҽ�";
		}
		if(currentLocation.match(boardViewNotice)) {
			document.getElementById("depthTwo").innerHTML = "�ҽ�";
		}
		if(currentLocation.match(boardListProductNotice)) {
			document.getElementById("depthTwo").innerHTML = "�ҽ�";
		}
		if(currentLocation.match(boardViewProductNotice)) {
			document.getElementById("depthTwo").innerHTML = "�ҽ�";
		}	
		if(currentLocation.match(boardViewEvent)) {
			document.getElementById("depthTwo").innerHTML = "�̺�Ʈ";
		}
		if(currentLocation.match(boardListEvent)) {
			document.getElementById("depthTwo").innerHTML = "�̺�Ʈ";
		}
		if(currentLocation.match(boardListVideo)) {
			document.getElementById("depthTwo").innerHTML = "�ҽ�";
		}
		if(currentLocation.match(boardViewVideo)) {
			document.getElementById("depthTwo").innerHTML = "�ҽ�";
		}
		if(currentLocation.match(boardListCooper)) {
			document.getElementById("marketing").innerHTML = "������ ��� : 070.4652.3191";
		}

		if(currentLocation.match(boardProduct)) {
			document.getElementById("depthTwo").innerHTML = "�����ı�";
			document.getElementById("best_link").innerHTML = "" +
				"<ul>" +
				"<li><a href='https://moonhillfood.com/article/review/4/1633/'><img src='/image/sub/best_04.jpg' /></a></li>" +
				"<li><a href='https://moonhillfood.com/article/review/4/1648/'><img src='/image/sub/best_05.jpg' /></a></li>" +
				"<li class='soon'>COMING SOON</li>" +
				"<li class='soon'>COMING SOON</li>" +
				"<li class='soon'>COMING SOON</li>" +
				"</ul>";
			document.getElementById("notice").innerHTML = "�޸����ڿ���ǰ���� �Ǹ��ϰ� �ִ� ��ǰ, �ǰ���ɽ�ǰ�� ������ ����� ġ�Ḧ ���� �Ǿ�ǰ�� �ƴմϴ�.<br>�����ı� �ۼ� �� ������, ġ�� ����� ���õ� �ܾ�(ȿ��, ȿ�� ��)�� ����� ��� ���뱤��� ������ �� ������ ������ ������ �� ȿ��/ȿ���� ���� ǥ���� �ﰡ��Ź�帮��,<br>�̷� �������� �ıⰡ �ۼ��� ��� �ε����ϰ� �Խñ� ���� �Ǵ� ����(** ó��)�� �� �ִٴ� �� ���� ��Ź�帳�ϴ�.";
			document.getElementById("boardReview").style.display="block";
		}

		if(currentLocation.match(boardQna)) {
			document.getElementById("notice").style.display = "none";
		}

		if(currentLocation.match(boardListSupporters)) {
			document.getElementById("depthTwo").innerHTML = "�̺�Ʈ";
		}
		if(currentLocation.match(boardListSupporters)) {
			document.getElementById("supporters").innerHTML = "<img src='/image/sub/supporters_banner.jpg'>";
		}
		if(currentLocation.match(boardViewSupporters)) {
			document.getElementById("supporters").innerHTML = "<img src='/image/sub/supporters_banner.jpg'>";
		}

	});