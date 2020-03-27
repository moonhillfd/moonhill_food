
	/******************************************************************************************************************* 
		쿠키 제어하기
	*******************************************************************************************************************/

	$(document).ready(function(){

		var startIndex;
		var endIndex;

		/* GET */
		function _getSpCookie(cookieName){
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
		function _setSpCookie(cookieName, cookieValue, expireDate){
			var today=new Date();
			today.setDate(today.getDate()+parseInt(expireDate));
			document.cookie=cookieName+"="+escape(cookieValue)+"; path=/; expires="+today.toGMTString()+";";
		}

		/* DEL */
		function _delSpCookie(cookieName){
			var expireDate=new Date();
			expireDate.setDate(expireDate.getDate()-1);
			document.cookie=cookieName+"="+"; expires="+expireDate.toGMTString()+"; path=/";
		}

		var _spCookie = [];
		var _spCookieName = [];
		var _spCookieReset = [];
		$('[spcookie="cover"]').each(function( index ){
			_spCookie[index] = $(this);
			_spCookieName[index] = _spCookie[index].data('cookie');
			_spCookieReset[index] = _spCookie[index].data('reset');
			if( _getSpCookie(_spCookieName[index]) ){
				_spCookie[index].remove();
			}else{
				_spCookie[index].addClass('active');
			}
			if( _spCookieReset[index] ){
				_delSpCookie( _spCookieName[index] ); /* 모든쿠키살리기 : 테스트용 */
			}
		});

		// 제어
		$('[spcookie="button"]').live('click', function() {
			var _spCookieBtn = $(this);
			var _spCookieCover = _spCookieBtn.closest('[spcookie="cover"]');
			_setSpCookie( _spCookieCover.data('cookie') , true, 1);
			_spCookieCover.fadeOut(300,function(){
				_spCookieCover.remove();
			});
		});

	});