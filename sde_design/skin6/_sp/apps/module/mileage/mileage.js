
	/******************************************************************************************************************* 
		��ġ����Ʈ - ���ɻ�ǰ
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[mileage]').click(function(e) {

			$('#sp-mileage, #sp-mileage-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-mileage-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">�ҷ�������</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-mileage-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();

					if(!$result){
						$('#sp-mileage-loading').html('�α����� �ʿ��մϴ�');
						setTimeout(function(){
							$('#sp-mileage-loading').fadeOut('fast');
						}, 2000);
					}else{
						$('body').append( $result );
						$('#sp-mileage').fadeIn(100,function(){
							// ��ũ�ѹ� ����
							if ( typeof setScrollbarStyle !== 'undefined' && $.isFunction(setScrollbarStyle) ) {
								setScrollbarStyle( $('#sp-mileage [scrollbar]') );
							}
							$('#sp-mileage .sp-mileage-inside').addClass('active');
						});
						$('#sp-mileage-loading').fadeOut();
						$('#sp-mileage [mileagecount]').append('<em class="sp-mileage-count" count="'+ $('#sp-mileage .sp-mileage-loop ul:not(.displaynone) li').size() +'">'+ $('#sp-mileage .sp-mileage-loop ul:not(.displaynone) li').size() +'</em>').fadeIn();
					}
				},
				error: function(xhr,status,error){
					if( xhr.status === 0 ){
						$('#sp-mileage-loading').html('�α����� �ʿ��մϴ�');
					}else{
						$('#sp-mileage-loading').html('��� �� �ٽ� �õ����ּ���');
					}
					setTimeout(function(){
						$('#sp-mileage-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-mileage').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-mileage, #sp-mileage button', function(e) {
		$('#sp-mileage, #sp-mileage .sp-mileage-close').live('click', function(){
			$('#sp-mileage').fadeOut('fast');
		});

		//$(document).on('click', '#sp-mileage .sp-mileage-inside', function(e) {
		$('#sp-mileage .sp-mileage-inside').live('click', function(e){
			e.stopPropagation();
		});

	});