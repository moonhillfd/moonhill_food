
	/******************************************************************************************************************* 
		패널 디자인 1
	*******************************************************************************************************************/
/*
	$(window).scroll(function(){
		if ($(this).scrollTop() > 550) {
			$('#sp-panel-design-1').addClass('active');
		} else {
			$('#sp-panel-design-1').removeClass('active');
		}
	});
*/
	$( document ).ready(function() {

		var startIndex;
		var endIndex;

		/* GET */
		function _getPanel_1_Cookie(cookieName){
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
		function _setPanel_1_Cookie(cookieName, cookieValue, expireDate){
			var today=new Date();
			today.setDate(today.getDate()+parseInt(expireDate));
			document.cookie=cookieName+"="+escape(cookieValue)+"; path=/; expires="+today.toGMTString()+";";
		}

		/* DEL */
		function _delPanel_1_Cookie(cookieName){
			var expireDate=new Date();
			expireDate.setDate(expireDate.getDate()-1);
			document.cookie=cookieName+"="+"; expires="+expireDate.toGMTString()+"; path=/";
		}

		
		/* 패널 있는지 체크 */
		if( $('#sp-panel-design-1').size() ){

			var _spPanel = $('#sp-panel-design-1');
			var _spPanelStart = _spPanel.data('start');
			var _spPanelCookie = _spPanel.data('cookie');

			//console.log( _getPanel_1_Cookie(_spPanelCookie) );

			if( _spPanelStart == 'open' ){
				if( _getPanel_1_Cookie(_spPanelCookie) === null ){
					_spPanel.addClass('open');
				}
			}
			if( _getPanel_1_Cookie(_spPanelCookie) == 'open' ){
				_spPanel.addClass('open');
			}

			// 패널 버튼 클릭
			$('#sp-panel-design-1 .sp-panel-design-1-toggle').live('click', function() {			
				if( _spPanel.hasClass('open') ){
					_spPanel.removeClass('open');
					_setPanel_1_Cookie( _spPanelCookie , 'close', 1);
				}else{
					_spPanel.addClass('open');
					_setPanel_1_Cookie( _spPanelCookie , 'open', 1);
				}
			});

			//_delPanel_1_Cookie( _spPanelCookie ); /* 모든쿠키살리기 : 테스트용 */

		}

		var nscroll;
		$(window).scroll(function(){
			nscroll = $(window).scrollTop();
			if( nscroll > 0 ){
				$('#sp-panel-design-1').addClass('scroll');
			}else{
				$('#sp-panel-design-1').removeClass('scroll');
			}
		});

		
  

	});

	/* 로드 */
	$(window).load(function(){

		// 오픈 디자인
		$('#sp-panel-design-1').addClass('ready');

	});


	