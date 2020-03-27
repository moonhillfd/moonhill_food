

$(window).scroll(function(){
	if ($(this).scrollTop() > 80) {
		$('.main_header').addClass('fixed', 300);
		$('.main_header h1 img').attr('src', '/image/main/logo.png');
		if ( $('.main_header').hasClass('fixed', 300) )	{
			$('.main_header h1 img').attr('src', '/image/main/logo.png');			
		}
		$('.main_header .menu > li').hover(
			function () {
				$('.main_header').addClass('active', 300);
				$('.main_header .menu ul').addClass('active', 300);

				$('.main_header h1 img').attr('src', '/image/main/logo_active.png');
				$('.global_menu li i').addClass('active', 300);
			}, function () {
				/*$('.main_header').removeClass('active', 500);*/
				$('.main_header h1 img').attr('src', '/image/main/logo_active.png');
				$('.global_menu li i').removeClass('active', 300);
			}
		);
	} else {
		$('.main_header').removeClass('fixed', 300);
		$('.main_header h1 img').attr('src', '/image/main/logo.png');
		if ( $('.main_header').hasClass('active') ) {
			$('.main_header h1 img').attr('src', '/image/main/logo_active.png');
		} else {
			$('.main_header h1 img').attr('src', '/image/main/logo.png');
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
		$('.main_header h1 img').attr('src', '/image/main/logo_active.png');
		$('.header_links .header_icon.naver img').attr('src', '/_sp/image/icon/icon_naver2_active.gif');
		
		$(window).scroll(function(){
			if ($(this).scrollTop() > 80) {
				$('.main_header h1 img').attr('src', '/image/main/logo_active.png');			
			} else {
				if ( $('.main_header').hasClass('active') )	{
					$('.main_header h1 img').attr('src', '/image/main/logo_active.png');			
				}
				
			}
		});

		if ( $('.main_header').hasClass('fixed') )	{
			$('.main_header h1 img').attr('src', '/image/main/logo_active.png');			
		} 
		
	}, function() {
		/*$('.main_header').removeClass('active', 500);	
		$('.main_header h1 img').attr('src', '/_sp/image/main/logo.png');*/
		$(window).scroll(function(){
			if ($(this).scrollTop() > 80) {
				$('.main_header h1 img').attr('src', '/image/main/logo_active.png');			
			} else {
				$('.main_header h1 img').attr('src', '/image/main/logo.png');						
			}
		});
		if ( $('.main_header').hasClass('fixed') )	{
			$('.main_header h1 img').attr('src', '/image/main/logo_active.png');			
		}
	}

);

$('.main_header').hover (
	function() {
		$(this).addClass('active', 300);
		$('.main_header .menu ul').addClass('active', 300);
		$('.main_header h1 img').attr('src', '/image/main/logo_active.png');
		$('.header_links .header_icon.naver img').attr('src', '/_sp/image/icon/icon_naver2_active.gif');		
		$(window).scroll(function(){
			if ($(this).scrollTop() > 80) {
				$('.main_header h1 img').attr('src', '/image/main/logo_active.png');			
			} else {
				if ( $('.main_header').hasClass('active') )	{
					$('.main_header h1 img').attr('src', '/image/main/logo_active.png');			
				}
				
			}
		});

		if ( $('.main_header').hasClass('fixed') )	{
			$('.main_header h1 img').attr('src', '/image/main/logo_active.png');			
		} 
	}, function() {
		$(this).removeClass('active', 300);	
		$('.main_header .menu ul').removeClass('active', 300);
		$('.main_header h1 img').attr('src', '/image/main/logo.png');
		$('.header_links .header_icon.naver img').attr('src', '/_sp/image/icon/icon_naver2.png');
		$(window).scroll(function(){
			if ($(this).scrollTop() > 80) {
				$('.main_header h1 img').attr('src', '/image/main/logo.png');			
			} else {
				$('.main_header h1 img').attr('src', '/image/main/logo.png');						
			}
		});
		if ( $('.main_header').hasClass('fixed') )	{
			$('.main_header h1 img').attr('src', '/image/main/logo.png');			
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
