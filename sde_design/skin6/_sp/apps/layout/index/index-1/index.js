
	/******************************************************************************************************************* 
		����������
	*******************************************************************************************************************/

	function setNavigation(){

		// �׺���̼� ��ġ���
		var rndID;
		var navCon = '';
		var navTitle = '';
		var navCount;
		var navScroll;
		var navOffset = [];
		$('.nav').each(function( index ) {
			rndID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
			navTitle = $(this).data('title');
			$(this).attr('id',rndID);
			navCon += '<a href="#none" class="sp-goto" data-target="#'+ rndID +'" data-index="'+ index +'" data-space="80">'+ navTitle +'</a>';
			navCount = index + 1
			navOffset.push('#'+ rndID +'|'+$(this).offset().top);
			//console.log( $(this).offset().top );
		});
		// �ִٸ�
		if( navCon ){
			// ����� ¥��
			function setIndexScroll( elem , scroll ){
				var nowID;
				var nowScroll;
				var endScroll = $('#sp-footer').offset().top;
				var nowScrollFix = null;
				var nowNavCheck = $('#sp-index-navigation a').index( $('#sp-index-navigation a.sp-active') );
				$.each(elem, function( index, value ) {
					nowID = value.split('|')[0];
					nowScroll = value.split('|')[1];
					if( parseInt(scroll) > parseInt(nowScroll) ){
						nowScrollFix = index;
					}
				});
				// ��������
				if( scroll > endScroll || nowScrollFix === null ){
					//console.log('�ٲ�');
					$('#sp-index-navigation').fadeOut();
					$('div#sp-index-navigation a').removeClass('sp-active');
				}else{
					if( nowNavCheck === nowScrollFix ){
						//console.log('������ �̹� ���������Ƿ� ����');
					}else{
						//console.log(nowScrollFix +'��');
						$('#sp-index-navigation').fadeIn();
						$('div#sp-index-navigation a').removeClass('sp-active');
						$('#sp-index-navigation a[data-index="'+ nowScrollFix +'"]').addClass('sp-active');
					}
				}
			}
			// ���̾ƿ��� �־��ְ�
			$('body').append('<div id="sp-index-navigation"><ul><li><p>'+ navCon +'</p></li></ul></a>');
			// ��ũ���� �ν��϶�
			$(window).scroll(function(){
				navScroll = $(window).scrollTop() + $(window).height() - 250;
			});
			setInterval(function(){
				setIndexScroll(navOffset,navScroll);
			}, 300);
			setIndexScroll(navOffset,navScroll);
		}

	}

	$( document ).ready(function() {

		var _ths;
		var _url;
		var _size;
		var _target;
		var _content;
		var _result;

		//$('[lazyhtml]').each(function( idx ){

		_ths = $('[lazyhtml]');
		_url = _ths.data('url');

		$.ajax({
			type: 'get',
			dataType: 'html',
			url: _url,
			success: function(data){

				_result = $(data).filter('#sp-result').html();
				_ths.append( _result );

				// Ÿ��ã��
				_size = _ths.find('[lazyhtmltarget]').size();
				_ths.find('[lazyhtmltarget]').each(function( index ) {
					_target = $(this).attr('lazyhtmltarget');
					_content = $(this).html();

					$('div[lazyhtmlelem="'+ _target +'"]').append( _content );

					if( _size == ( index + 1 ) ){

						setTimeout(function(){

							// ��ʰ���üũ
							$.sp_bannermanage2_fixed();
							// �����̴� ����
							if ( typeof setSlickSlider !== 'undefined' && $.isFunction(setSlickSlider) ) {
								setSlickSlider();
							}
							// �������̺�
							if ( typeof setMasTable !== 'undefined' && $.isFunction(setMasTable) ) {
								setMasTable();
							}
							// ��ǰ��Ÿ��
							if ( typeof setProductStyle !== 'undefined' && $.isFunction(setProductStyle) ) {
								setProductStyle();
							}
							// �׺���̼� �����
							setNavigation();

							_ths.remove();

						}, 100 );

					}
				});

			},
			error: function(xhr,status,error){
				//
				//console.log(xhr,status,error);
			},
			timeout: 10000
		});

		//});


	});

	// Ŀ���͸���¡
	$(window).load(function(){

		

	});