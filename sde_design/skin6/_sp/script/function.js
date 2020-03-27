
	/******************************************************************************************************************* 

		객체유무 체크

	*******************************************************************************************************************/	
	$.fn.check = function( func){
		 this.length && func.apply(this);
		 return this;
	};


	/******************************************************************************************************************* 

		숫자 체크

	*******************************************************************************************************************/
	$.sp_getNum = function(num, opt){
		var regex;
		num = String(num).replace(/^\s+|\s+$/g, "");
		if(typeof opt == "undefined" || opt == "1"){
			regex = /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
		}else if(opt == "2"){
			regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
		}else if(opt == "3"){
			regex = /^[0-9]+(\.[0-9]+)?$/g;
		}else{
			regex = /^[0-9]$/g;
		}
		if( regex.test(num) ){
			num = num.replace(/,/g, "");
			return isNaN(num) ? 0 : num;
		}else{
			return 0;
		}
	};
	$.sp_isNumeric = function(num, opt){
		var regex;
		num = String(num).replace(/^\s+|\s+$/g, "");
		if(typeof opt == "undefined" || opt == "1"){
			regex = /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
		}else if(opt == "2"){
			regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
		}else if(opt == "3"){
			regex = /^[0-9]+(\.[0-9]+)?$/g;
		}else{
			regex = /^[0-9]$/g;
		}
		if( regex.test(num) ){
			num = num.replace(/,/g, "");
			return isNaN(num) ? false : true;
		}else{
			return false;
		}
	};

	/******************************************************************************************************************* 

		모바일 체크

	*******************************************************************************************************************/
	$.sp_browser = function() {

		/*
		CSS Browser Selector v0.4.0 (Nov 02, 2010)
		Rafael Lima (http://rafael.adm.br)
		http://rafael.adm.br/css_browser_selector
		License: http://creativecommons.org/licenses/by/2.5/
		Contributors: http://rafael.adm.br/css_browser_selector#contributors
		*/
		function log(e){window.console&&showLog&&console.log(e)}function css_browser_selector(e){var i={},o=[320,480,640,768,1024,1152,1280,1440,1680,1920,2560],t=o.length,n=e.toLowerCase(),r=function(e){return RegExp(e,"i").test(n)},a="gecko",s="webkit",p="chrome",d="firefox",g="safari",l="opera",x="android",c="blackberry",E="lang_",w=document.documentElement,R=[!/opera|webtv/i.test(n)&&/msie\s(\d+)/.test(n)||/trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.test(n)?"ie ie"+(/trident\/4\.0/.test(n)?"8":"11.0"==RegExp.$1?"11":RegExp.$1):r("firefox/")?a+" "+d+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(n)?" "+d+RegExp.$2+" "+d+RegExp.$2+"_"+RegExp.$4:""):r("gecko/")?a:r("opera")?l+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(n)?" "+l+RegExp.$2+" "+l+RegExp.$2+"_"+RegExp.$4:/opera(\s|\/)(\d+)\.(\d+)/.test(n)?" "+l+RegExp.$2+" "+l+RegExp.$2+"_"+RegExp.$3:""):r("konqueror")?"konqueror":r("blackberry")?c+(/Version\/(\d+)(\.(\d+)+)/i.test(n)?" "+c+RegExp.$1+" "+c+RegExp.$1+RegExp.$2.replace(".","_"):/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(n)?" "+c+RegExp.$2+(RegExp.$3?" "+c+RegExp.$2+RegExp.$3:""):""):r("android")?x+(/Version\/(\d+)(\.(\d+))+/i.test(n)?" "+x+RegExp.$1+" "+x+RegExp.$1+RegExp.$2.replace(".","_"):"")+(/Android (.+); (.+) Build/i.test(n)?" device_"+RegExp.$2.replace(/ /g,"_").replace(/-/g,"_"):""):r("chrome")?s+" "+p+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(n)?" "+p+RegExp.$2+(RegExp.$4>0?" "+p+RegExp.$2+"_"+RegExp.$4:""):""):r("iron")?s+" iron":r("applewebkit/")?s+" "+g+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(n)?" "+g+RegExp.$2+" "+g+RegExp.$2+RegExp.$3.replace(".","_"):/ Safari\/(\d+)/i.test(n)?"419"==RegExp.$1||"417"==RegExp.$1||"416"==RegExp.$1||"412"==RegExp.$1?" "+g+"2_0":"312"==RegExp.$1?" "+g+"1_3":"125"==RegExp.$1?" "+g+"1_2":"85"==RegExp.$1?" "+g+"1_0":"":""):r("mozilla/")?a:"",r("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?"mobile":"",r("j2me")?"j2me":r("ipad|ipod|iphone")?(/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(n)?"ios"+function(e,i){for(var o=(i=i.replace(".","_")).indexOf("_"),t="";o>0;)t+=" "+e+i.substring(0,o),o=i.indexOf("_",o+1);return t+=" "+e+i}("ios",RegExp.$2):"")+" "+(/(ip(ad|od|hone))/gi.test(n)?RegExp.$1:""):r("playbook")?"playbook":r("kindle|silk")?"kindle":r("playbook")?"playbook":r("mac")?"mac"+(/mac os x ((\d+)[.|_](\d+))/.test(n)?" mac"+RegExp.$2+" mac"+RegExp.$1.replace(".","_"):""):r("win")?"win"+(r("windows nt 6.2")?" win8":r("windows nt 6.1")?" win7":r("windows nt 6.0")?" vista":r("windows nt 5.2")||r("windows nt 5.1")?" win_xp":r("windows nt 5.0")?" win_2k":r("windows nt 4.0")||r("WinNT4.0")?" win_nt":""):r("freebsd")?"freebsd":r("x11|linux")?"linux":"",/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(n)?(E+RegExp.$2).replace("-","_")+(""!=RegExp.$3?(" "+E+RegExp.$1).replace("-","_"):""):"",r("ipad|iphone|ipod")&&!r("safari")?"ipad_app":""];function $(){var e=window.outerWidth||w.clientWidth,n=window.outerHeight||w.clientHeight;i.orientation=e<n?"portrait":"landscape",w.className=w.className.replace(/ ?orientation_\w+/g,"").replace(/ [min|max|cl]+[w|h]_\d+/g,"");for(var r=t-1;r>=0;r--)if(e>=o[r]){i.maxw=o[r];break}for(var a in widthClasses="",i)widthClasses+=" "+a+"_"+i[a];return w.className=w.className+widthClasses,widthClasses}window.onresize=$,$();var _=R.join(" ")+" js ";return w.className=(_+w.className.replace(/\b(no[-|_]?)?js\b/g,"")).replace(/^ /,"").replace(/ +/g," "),_}showLog=!0,css_browser_selector(navigator.userAgent);

	};

	/******************************************************************************************************************* 

		파라미터 가져오기

	*******************************************************************************************************************/
	$.sp_get_param = function( url,name ) {

		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(url);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

	};

	/******************************************************************************************************************* 
	
		팝업창띄우기

		<a href="#" data-title="타이틀" data-width="가로사이즈" data-height="세로사이즈"></a>

	*******************************************************************************************************************/
	$.sp_popup = function( element ) {

		var _url = element.attr("href");
		var _title = element.data("title");
		var _width = element.data("width");
		var _height = element.data("height");
		var _left = (screen.width/2)-(_width/2);
		var _top = (screen.height/2)-(_height/2)-50;

		e.preventDefault();
		return window.open( _url, _title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width='+_width+', height='+_height+', top='+_top+', left='+_left );

	};

	/******************************************************************************************************************* 
	
		배너관리v2 타이틀 제거 및 규약 제거하기
		1.4 버전으로 언바인드 시킨다
		$('.xans-bannermanage2 a').unbind('click');

	*******************************************************************************************************************/
	$.sp_bannermanage2_fixed = function(){

		$('.xans-bannermanage2 img').attr('title','');
		$('.xans-bannermanage2 .bx-prev, .xans-bannermanage2 .bx-next').addClass('banner_image').attr('rel','0-0');

		$('.xans-bannermanage2 a').check(function(){
			var _popw = '';
			var _poph = '';
			$('.xans-bannermanage2 a').each(function( index ){
				if($(this).find('input').size()){
					$(this).unbind('click');
					_popw = $(this).find('.popup_size_width').val();
					_poph = $(this).find('.popup_size_height').val();
					$(this).attr('popup','');
					$(this).attr('data-title','');
					$(this).attr('data-width',_popw);
					$(this).attr('data-height',_poph);
				}else if( $(this).hasClass('-exit') ){
					$(this).unbind('click');
				}
			});

		});

		/* 배너관리체크 */
        $('.xans-bannermanage2-display').each(function( index ){
            if( $(this).find('.xans-record-').size() < 1 && $(this).find('img.banner_image').size() < 1 ){
				$(this).next().addClass('remove-bannermanage-next');
                $(this).remove();
            }
        });

		/* 배너관리체크 조건문 */
		var _bnscope;
        $('.xans-bannermanage2-display[scope]').each(function( a ){
			_bnscope = $(this).attr('scope');
            $(this).find('.xans-record-').each(function( b ){
				if( _bnscope == $(this).attr('scope') ){
					$(this).removeClass('displaynone');
				}else{
					$(this).remove();
				}
			});
        });

	};

	/******************************************************************************************************************* 

		카페24 페이지 분기하기

	*******************************************************************************************************************/
	$.sp_cafe24_page = function() {

		if( $('meta[name="path_role"]').attr('content') && 
			$('meta[name="path_role"]').attr('content').toLowerCase() == 'main' ){
			$('body').attr('path','index');
		}
		if( $('meta[name="path_role"]').attr('content') && 
			$('meta[name="path_role"]').attr('content').toLowerCase() == 'product_list' ){
			$('body').attr('path','product_list');
		}
		if( $('meta[name="path_role"]').attr('content') && 
			$('meta[name="path_role"]').attr('content').toLowerCase() == 'product_detail' ){
			$('body').attr('path','product_detail');
		}
		if( $('#path_category').val() && $('#path_category').val() !='0' ){
			$('body').attr('category',$('#path_category').val());
		}
		if( $('meta[name="path_role"]').attr('content') && 
			$('meta[name="path_role"]').attr('content').toLowerCase() == 'board_main' ){
			$('body').attr('path','board_main');
		}
		if( $('#board_no').val() ){
			$('body').attr('board',$('#board_no').val());
		}

	};

	/******************************************************************************************************************* 
	
		원하는 위치로 이동하기

		<a href="#" data-title="타이틀" data-width="가로사이즈" data-height="세로사이즈"></a>

	*******************************************************************************************************************/
	$.sp_goto = function() {

		var _speed = 300;
		var _space;
		var _target;
		var _element;
		$('.sp-goto').live('click', function(e){
			_target = $(this).data('target');
			_space = $(this).data('space');
			if( _target == 'top' ){
				$('html,body').animate({ scrollTop: 0 }, _speed );
			}else if( _target == 'bottom' ){
				$('html,body').animate({ scrollTop: $(document).height() - $(window).height() }, _speed );
			}else if( _space ){
				_element = $(_target).offset().top;
				$('html,body').animate({ scrollTop: _element - _space }, _speed );
			}else{
				_element = $(_target).offset().top;
				$('html,body').animate({ scrollTop: _element - 30 }, _speed );
			}
		});

	};

	/******************************************************************************************************************* 
	
		특정 URL을 치환하기 : 만들어진 목적은 포토리뷰 때문

	*******************************************************************************************************************/
	$.sp_replaceUrl = function(){

		window.board_photoreview = ( window.board_photoreview ) ? window.board_photoreview : '';

		var sp_reurl;
		$('a[replaceurl]').each(function( index ){
			sp_reurl = $(this).attr('href');

			// 포토리뷰 사용시
			if( window.board_photoreview ){
				sp_reurl = sp_reurl.replace('/board/product/list.html?board_no=4','/board/review/list.html?board_no=4');
				$(this).attr('href',sp_reurl);
			}

		});

	};

	/******************************************************************************************************************* 

		올드브라우저 대응

	*******************************************************************************************************************/
	$.sp_oldBrowser = function(){
		
		// IE 인풋 버그
		$('html.ie label.sp-label-trick').click(function(e) {
			if (e.target.tagName !== 'INPUT'){
				if( $(this).find('input:enabled').attr('checked') == true ){
					$(this).find('input:enabled').removeClass('checked');
				}else{
					$(this).find('input:enabled').addClass('checked');
				};
			}
		});
		// IE 삭제할 컨텐츠
		$('html.ie #sp-cscenter .sp-board-group-element .subject em:empty').remove();
		// IE 셀렉트 포커스 잃음 방지
		$('.select-trick select').focus(function(){
			$(this).closest('.select-trick').addClass('select-trick-active');
		});
		$('.select-trick select').blur(function(){
			$(this).closest('.select-trick').removeClass('select-trick-active');
		});

	};