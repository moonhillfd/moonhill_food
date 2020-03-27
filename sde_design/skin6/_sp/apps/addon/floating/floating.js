
	/******************************************************************************************************************* 
		플로팅 배너
	*******************************************************************************************************************/

	$( document ).ready(function() {

		var startIndex;
		var endIndex;

		/* GET */
		function _getFloatingCookie(cookieName){
			var cookie=document.cookie;
			if(cookie.length>0){
				startIndex=cookie.indexOf(cookieName);
				if(startIndex!=-1){
					startIndex+=cookieName.length;
					endIndex=cookie.indexOf(";", startIndex);
					if(endIndex==-1) endIndex=cookie.length;
					return unescape(cookie.substring(startIndex+1, endIndex));
				}else{
					return null;
				}
			}else{
				return false;
			}
		}

		/* SET */
		function _setFloatingCookie(cookieName, cookieValue, expireDate){
			var today=new Date();
			today.setDate(today.getDate()+parseInt(expireDate));
			document.cookie=cookieName+"="+escape(cookieValue)+"; path=/; expires="+today.toGMTString()+";";
		}

		/* DEL */
		function _delFloatingCookie(cookieName){
			var expireDate=new Date();
			expireDate.setDate(expireDate.getDate()-1);
			document.cookie=cookieName+"="+"; expires="+expireDate.toGMTString()+"; path=/";
		}

		var _floating = [];
		var _floatingUrl = [];
		var _floatingWait = [];
		var _floatingSpeed = [];
		var _floatingWidth = [];
		var _floatingHeight = [];
		var _floatingTop = [];
		var _floatingLeft = [];
		var _floatingBottom = [];
		var _floatingRight = [];
		var _floatingCookieName = [];
		var _floatingContents = [];
		var _floatingTimer = [];
		var _floatingTarget;

		function setFloting( target ){

			_floatingTarget = ( target ) ? '[data-cookie="'+ target +'"]' : '';

			$('[floating]'+ _floatingTarget ).each(function( index ){
				_floating[index] = $(this);
				_floatingUrl[index] = _floating[index].data('url');
				_floatingWait[index] = ( _floating[index].data('wait') != undefined ) ? _floating[index].data('wait') : 3000 ;
				_floatingSpeed[index] = ( _floating[index].data('speed') != undefined ) ? _floating[index].data('speed') : 300 ;
				_floatingWidth[index] = ( _floating[index].data('width') != undefined ) ? _floating[index].data('width') : '' ;
				_floatingHeight[index] = ( _floating[index].data('height') != undefined ) ? _floating[index].data('height') : '' ;
				_floatingTop[index] = ( _floating[index].data('top') != undefined ) ? _floating[index].data('top') : '' ;
				_floatingLeft[index] = ( _floating[index].data('left') != undefined ) ? _floating[index].data('left') : '' ;
				_floatingBottom[index] = ( _floating[index].data('bottom') != undefined ) ? _floating[index].data('bottom') : '' ;
				_floatingRight[index] = ( _floating[index].data('right') != undefined ) ? _floating[index].data('right') : '' ;
				_floatingCookieName[index] = _floating[index].data('cookie');

				if( target ){
					_floatingWait[index] = 0;
				}

				if( !_getFloatingCookie(_floatingCookieName[index]) ){

					_floating[index].addClass('active');
					_floatingTimer[index] = setTimeout(function(){

						$.ajax({
							type: 'get',
							dataType: 'html',
							url: _floatingUrl[index],
							success: function(data){
								_floatingContents = $(data).filter('#sp-result');
								$(_floatingContents).find('button:first').attr('floatingcookie',_floatingCookieName[index]);
								_floating[index].append( _floatingContents.html() ).children(':last').hide().css({
									'width':_floatingWidth[index],
									'height':_floatingHeight[index],
									'top':_floatingTop[index],
									'left':_floatingLeft[index],
									'bottom':_floatingBottom[index],
									'right':_floatingRight[index]

								});
								if( _floatingHeight[index] ){
									_floating[index].children(':last').slideDown( _floatingSpeed[index] );
								}else{
									_floating[index].children(':last').fadeIn( _floatingSpeed[index] );
								}
								//_floating[index].remove();

								// 이후 컨트롤을 하자. 슬라이더라면 만들어주고, 동영상이라면 재생해주자.

								// 슬릭 슬라이더 연동
								if ( typeof setSlickSlider !== 'undefined' && $.isFunction(setSlickSlider) ) {
									setSlickSlider();
								}

							},
							error: function(xhr,status,error){
								_floating[index].remove();
							},
							timeout: 3000
						});

					}, _floatingWait[index]);

				}else{

					_floating[index].find('.sp-floating-open').addClass('active');

				}

				//_delFloatingCookie( _floatingCookieName[index] ); /* 모든쿠키살리기 : 테스트용 */

			});

		}

		$('[floatingcookie]').live('click', function() {
			_setFloatingCookie( $(this).attr('floatingcookie') , true, 1);
			$('.sp-floating-open[data-cookie="'+ $(this).attr('floatingcookie') +'"]').addClass('active');
			$(this).closest('#sp-floating').fadeOut(300,function(){
				$(this).closest('#sp-floating').remove();
			});
			$(this).closest('[floating]').removeClass('active');
		});

		$('#sp-floating').live('click', function() {
			$(this).fadeOut(300,function(){
				$(this).remove();
			});
		});

		$('.sp-floating-inside').live('click', function(event) {
			event.stopPropagation();
		});

		$('.sp-floating-open').live('click', function(event) {
			_delFloatingCookie( $(this).data('cookie') );
			$(this).removeClass('active');
			setFloting( $(this).data('cookie') );
		});

		setFloting();

	});

