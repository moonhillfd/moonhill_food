

	/******************************************************************************************************************* 
		기획전
	*******************************************************************************************************************/

	$( document ).ready(function() {

		var sp_project_id;
		var sp_project_this;
		var sp_project_title;
		var sp_project_count;
		var sp_project_content;

		var sp_project;
		$('.sp-project-loop').each(function( a ){
			sp_project = $(this).attr('id');

			sp_project_content = '<div class="sp-project-navigation">';
			$('.sp-project-category li a').each(function( b ){
				sp_project_id = $(this).attr('href').replace('#','');
				sp_project_title = $(this).data('title');
				sp_project_count = ( $(this).data('countdisplay') ) ? '' : '<span>'+ $(this).data('count') +'</span>' ;
				sp_project_this = ( sp_project == sp_project_id ) ? 'active' : '' ;
				sp_project_content += '<a href="#none" class="'+ sp_project_this +' sp-goto" data-target="#'+sp_project_id+'">'+ sp_project_title + sp_project_count +'</a>';
			});
			sp_project_content += '</div>';

			$(this).prepend( sp_project_content );

		});


		$('[project]').click(function(e) {

			$('#sp-projectajax, #sp-projectajax-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-projectajax-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;

			$('body').prepend( _load );
			$('#sp-projectajax-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-projectajax').css('height',$(document).height()).fadeIn('fast');

					//$('#sp-projectajax .sp-projectajax-inside').css('marginTop',_offset.top);
					$('#sp-projectajax .sp-projectajax-inside').css('top',_now + 100);

					$('#sp-projectajax-loading').fadeOut();

					/* 연동 */
					var _connect;
					var _connectdata;
					if( $('#sp-projectajax [connect="은행링크"]').size() ){
						$('#sp-projectajax [connect="은행링크"]').each(function( a ){
							if( $(this).data('connect') ){
								_connectdata = $(this).data('connect').split('^');
								if( _connectdata.length == 2 ){
									_connect  = '';
									_connect += '<tr>';
									_connect += '	<td>'+ _connectdata[0] +'</td>';
									_connect += '	<td><a href="'+ _connectdata[1] +'">'+ _connectdata[1] +'</a></td>';
									_connect += '</tr>';
									$('#sp-projectajax [connectbox]').append( _connect );
								}
							}
						});
					}

				},
				error: function(xhr,status,error){
					$('#sp-projectajax-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-projectajax-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-projectajax').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-projectajax, #sp-projectajax button', function(e) {
		$('#sp-projectajax, #sp-projectajax button').live('click', function(){
			$('#sp-projectajax').fadeOut('fast');
		});

		//$(document).on('click', '#sp-projectajax .sp-projectajax-inside', function(e) {
		$('#sp-projectajax .sp-projectajax-inside').live('click', function(e){
			e.stopPropagation();
		});


	});