

$(window).scroll(function(){
	if ($(this).scrollTop() > 80) {
		$('.main_header').addClass('fixed', 300);
		$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		if ( $('.main_header').hasClass('fixed', 300) )	{
			$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		}
		$('.main_header .menu > li').hover(
			function () {
				$('.main_header').addClass('active', 300);
				$('.main_header .menu ul').addClass('active', 300);

				$('.main_header h1 img').attr('src', '/image/common/logo.svg');
				$('.global_menu li i').addClass('active', 300);
			}, function () {
				/*$('.main_header').removeClass('active', 500);*/
				$('.main_header h1 img').attr('src', '/image/common/logo.svg');
				$('.global_menu li i').removeClass('active', 300);
			}
		);
	} else {
		$('.main_header').removeClass('fixed', 300);
		$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		if ( $('.main_header').hasClass('active') ) {
			$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		} else {
			$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		}
		
	}
});




$('.main_header .menu ul').hover(
	function() {
		$(this).siblings('a').children('span').addClass('active', 300);

	}, function() {
		$(this).siblings('a').children('span').removeClass('active', 300);
	}
)

$('.main_header .menu').hover(
	function() {
		$('.main_header').addClass('active', 300);
		$('.main_header .menu ul').addClass('active', 300);
		$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		$('.header_links .header_icon.naver img').attr('src', '/_sp/image/icon/icon_naver2_active.gif');
		
		$(window).scroll(function(){
			if ($(this).scrollTop() > 80) {
				$('.main_header h1 img').attr('src', '/image/common/logo.svg');
			} else {
				if ( $('.main_header').hasClass('active') )	{
					$('.main_header h1 img').attr('src', '/image/common/logo.svg');
				}
				
			}
		});

		if ( $('.main_header').hasClass('fixed') )	{
			$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		} 
		
	}, function() {
		/*$('.main_header').removeClass('active', 500);	
		$('.main_header h1 img').attr('src', '/_sp/image/common/logo.svg');*/
		$(window).scroll(function(){
			if ($(this).scrollTop() > 80) {
				$('.main_header h1 img').attr('src', '/image/common/logo.svg');
			} else {
				$('.main_header h1 img').attr('src', '/image/common/logo.svg');
			}
		});
		if ( $('.main_header').hasClass('fixed') )	{
			$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		}
	}

);

$('.main_header').hover (
	function() {
		$(this).addClass('active', 300);
		$('.main_header .menu ul').addClass('active', 300);
		$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		$('.header_links .header_icon.naver img').attr('src', '/_sp/image/icon/icon_naver2_active.gif');		
		$(window).scroll(function(){
			if ($(this).scrollTop() > 80) {
				$('.main_header h1 img').attr('src', '/image/common/logo.svg');
			} else {
				if ( $('.main_header').hasClass('active') )	{
					$('.main_header h1 img').attr('src', '/image/common/logo.svg');
				}
				
			}
		});

		if ( $('.main_header').hasClass('fixed') )	{
			$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		} 
	}, function() {
		$(this).removeClass('active', 300);	
		$('.main_header .menu ul').removeClass('active', 300);
		$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		$('.header_links .header_icon.naver img').attr('src', '/_sp/image/icon/icon_naver2.png');
		$(window).scroll(function(){
			if ($(this).scrollTop() > 80) {
				$('.main_header h1 img').attr('src', '/image/common/logo.svg');
			} else {
				$('.main_header h1 img').attr('src', '/image/common/logo.svg');
			}
		});
		if ( $('.main_header').hasClass('fixed') )	{
			$('.main_header h1 img').attr('src', '/image/common/logo.svg');
		}
	}
)





$('.total_menu a').click (
	function() {
		$('.all_menu').addClass('active', 300);
		$('.content_menu').animate({
			top: "+=50",
			opacity: 1
		}, 200);
		
		

		
		
	}

);


$('.popup_btn_close').click (
	function() {

		$('.content_menu').animate({
			top: "0",
			opacity : 0,
		}, 200);
		$('.all_menu').removeClass('active', 600);
	}
);
