
	/******************************************************************************************************************* 
		배경이미지 스크롤
	*******************************************************************************************************************/

	$( document ).ready(function() {

		function resetBackScroll( h ){
			if( $(window).width() < 700 ){
				if( window.matchMedia('(orientation:portrait)').matches ){
					if( h > $(window).height() * 0.3 ){
						_back.css({'min-height': $(window).height() * 0.3 +'px','height': $(window).height() * 0.3 +'px'});
					}else{
						_back.css({'height': h +'px','min-height': h +'px'});
					}
				}
				if( window.matchMedia('(orientation:landscape)').matches ){
					if( h > $(window).height() * 0.7 ){
						_back.css({'min-height': $(window).height() * 0.7 +'px','height': $(window).height() * 0.7 +'px'});
					}else{
						_back.css({'height': h +'px','min-height': h +'px'});
					}
				}
			}else{
				_back.css({'height':h +'px','min-height': h +'px'});
			}
		}

		if( $('[backscroll]').size() ){

			var _back = $('[backscroll]');
			var _height = parseInt(_back.data('height'));
			var _image = _back.find('[backscrolliamge] img').attr('src');

			_back.css({'min-height':_height,'background-image':'url('+ _image +')'});

			if( document.body.addEventListener ){
				if(navigator.userAgent.match(/Trident\/7\./)) {
					document.body.addEventListener("mousewheel", function() {
						event.preventDefault();
						var wd = event.wheelDelta;
						var csp = window.pageYOffset;
						window.scrollTo(0, csp - wd);
					});
				}
			}

			resetBackScroll( _height );
			$(window).resize(function(){
				resetBackScroll( _height );
			});

		}

	});