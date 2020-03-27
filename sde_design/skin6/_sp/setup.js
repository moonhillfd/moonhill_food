
	// 회원관련
	window.join_point_msg = '쿠폰 3000원';			// 로그인전 회원가입 포인트 아이콘 | string | 주석처리하면 노출중지 : 문자앞에 //window.join...

	// 쿠폰관련
	window.coupon_fullimage_use = false;		// 쿠폰을 전체이미지로 활용할지 결정 | true,false | 쿠폰안에 정보를 넣어줘야 한다.

	// 게시판 관련
	window.board_list_allview = true;			// 게시판 목록에서 모든 게시판을 볼 링크를 만든다 | true,false
	window.board_list_preview = [3];			// 게시판 목록에서 클릭시 미리보기를 연다 | [3,4] 라면 3번, 4번 게시판이 적용된다는 의미
	window.board_category_split = true;			// 게시판의 카테고리를 링크로 뺄지 결정 | true,false
	window.board_photoreview = true;			// 상품후기 게시판을 포토후기 게시판으로 사용한다 | true,false

	// 상품 목록관련
	window.image_hover_zoom = true ;			// 이미지에 마우스를 올리면 줌 이벤트를 발생시킨다 | true,false
	window.image_hover_change = false ;			// 이미지에 마우스를 올리면 축소 이미지를 보여준다 | true,false

	// 레이아웃 관련
	window.payment_scroll = true;				// 상세페이지에 상품옵션의 스크롤을 활성화 한다 | true,false
	window.layout_sky_detail = true;			// 최상단 (로그인, 즐겨찾기 ) 라인은 상품 상세페이지에서 스크롤 하지 않는다. | true,false
	window.layout_category_detail = true;		// 카테고리 라인은 상품 상세페이지에서 스크롤 하지 않는다. | true,false
	window.layout_payment_hidescroll = true;	// 상세페이지에서 구매패널을 열면 상단 메뉴들을 숨긴다. | true,false

	// window.layout_category_detail = ( window.layout_category_detail ) ? window.layout_category_detail : false;
	// if( window.board_list_allview ){
	// };