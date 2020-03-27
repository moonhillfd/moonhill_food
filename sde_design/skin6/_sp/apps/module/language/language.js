
	/******************************************************************************************************************* 
		언어선택
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$('[chooselanguage]').click(function(e) {

			$('#sp-language, #sp-language-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-language-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;
			var _flag = [];

			$('body').prepend( _load );
			$('#sp-language-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-language').css('height',$(document).height()).fadeIn('fast');

					//$('#sp-language .sp-language-inside').css('marginTop',_offset.top);
					//$('#sp-language .sp-language-inside').css('top',_now + 200);

					$('#sp-language-loading').fadeOut();

					$('.language-loop').each(function( index ){
						_flag[index] = $(this);
						_flag[index].animate({
							opacity: 1,
							top: "-=20",
							},{
							duration: (index+1) * 300,
							specialEasing: { top: "swing" }
						});
					});

				},
				error: function(xhr,status,error){
					$('#sp-language-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-language-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-language').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-language, #sp-language button', function(e) {
		$('#sp-language, #sp-language button').live('click', function(){
			$('#sp-language').fadeOut('fast');
		});

		//$(document).on('click', '#sp-language .sp-language-inside', function(e) {
		$('#sp-language .sp-language-inside').live('click', function(e){
			e.stopPropagation();
		});

	});