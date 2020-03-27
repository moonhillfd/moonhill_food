
	/******************************************************************************************************************* 
		검색
	*******************************************************************************************************************/

	$( document ).ready(function() {

		$(document).delegate('.inform','click', function() {
		//$('[inform]').live('.inform', function(e) {

			var elem = $(this);
			var categoryno = $(this).data('categoryno');
			var searchtype = $(this).data('searchtype');
			var orderby = $(this).data('orderby');
			var pstart = $(this).data('start');
			var pend = $(this).data('end');

			if( categoryno ){
				if( categoryno == $('#sp-search').find('select[name="category_no"]').val() ){
					$('#sp-search').find('select[name="category_no"]').attr('value','0');
					elem.removeClass('active');
				}else{
					$('#sp-search').find('select[name="category_no"]').val( categoryno );
					$('#sp-search .select_category_no li').removeClass('active');
					elem.addClass('active');
				}
			}

			if( searchtype ){
				if( searchtype == $('#sp-search').find('select[name="search_type"]').val() ){
					$('#sp-search').find('select[name="search_type"]').val('');
					elem.removeClass('active');
				}else{
					$('#sp-search').find('select[name="search_type"]').val( searchtype );
					$('#sp-search .select_search_type li').removeClass('active');
					elem.addClass('active');
				}
			}

			if( orderby ){
				if( orderby == $('#sp-search').find('select[name="order_by"]').val() ){
					$('#sp-search').find('select[name="order_by"]').val('');
					elem.removeClass('active');
				}else{
					$('#sp-search').find('select[name="order_by"]').val( orderby );
					$('#sp-search .select_order_by li').removeClass('active');
					elem.addClass('active');
				}
			}

			if( pstart && pend || pstart == '0' ){
				if( pstart == $('#sp-search').find('input[name="product_price1"]').val() && pend == $('#sp-search').find('input[name="product_price2"]').val() ){
					$('#sp-search').find('input[name="product_price1"]').val('');
					$('#sp-search').find('input[name="product_price2"]').val('');
					elem.removeClass('active');
				}else{
					$('#sp-search').find('input[name="product_price1"]').val( pstart );
					$('#sp-search').find('input[name="product_price2"]').val( pend );
					$('#sp-search .select_price_range li').removeClass('active');
					elem.addClass('active');
				}
			}

		});

		function setSearchLayer(){

			var searchbox = $('#sp-search-box > ul');
			var category_no = $('#sp-search').find('select[name="category_no"] option');
			var search_type = $('#sp-search').find('select[name="search_type"] option');
			var order_by = $('#sp-search').find('select[name="order_by"] option');
			var price_range = [
				'0 ~ 5,000',
				'5,000 ~ 10,000',
				'10,000 ~ 20,000',
				'20,000 ~ 30,000',
				'30,000 ~ 50,000',
				'50,000 ~ 100,000',
				'100,000 ~ 1,000,000',
				'1,000,000 ~ 10,000,000'
			];
			var price_range_val;

			if( category_no ){
				searchbox.find('.select_category_no').addClass('active');
				category_no.each(function(){
					if( $(this).val() && $(this).val() !='0' ){
						$('.select_category_no .sp-search-box-inside').append('<li class="inform" data-categoryno="'+ $(this).val() +'">'+ $(this).html() +'</li>');
					}
				});
			}

			if( search_type ){
				searchbox.find('.select_search_type').addClass('active');
				search_type.each(function(){
					if( $(this).val() ){
						$('.select_search_type .sp-search-box-inside').append('<li class="inform" data-searchtype="'+ $(this).val() +'">'+ $(this).html() +'</li>');
					}
				});
				$('#sp-search').find('select[name="search_type"]').prepend($('<option>', { value: '', text : '선택하세요' }));
				$('#sp-search').find('select[name="search_type"]').val('');
			}

			if( order_by ){
				searchbox.find('.select_order_by').addClass('active');
				order_by.each(function(){
					if( $(this).val() ){
						$('.select_order_by .sp-search-box-inside').append('<li class="inform" data-orderby="'+ $(this).val() +'">'+ $(this).html() +'</li>');
					}
				});
			}

			searchbox.find('.select_price_range').addClass('active');
			$.each(price_range, function( index, value ) {
				price_range_val = value.replace(/,/gi,'').split(' ~ ');
				$('.select_price_range .sp-search-box-inside').append('<li class="inform" data-start="'+ price_range_val[0] +'" data-end="'+ price_range_val[1] +'">'+ value +'</li>');
			});

			// 스크롤바 연동
			if ( typeof setScrollbarStyle !== 'undefined' && $.isFunction(setScrollbarStyle) ) {
				setScrollbarStyle( $('#sp-search [scrollbar]') );
			}

			$('#sp-search [name="keyword"]').attr('placeholder','k e y w o r d');

		}


		$('[search]').click(function(e) {

			$('#sp-search, #sp-search-loading').remove();

			var _url = $(this).data('url');
			var _offset = $(this).offset();
			var _load = '<div id="sp-search-loading" style="top:'+ (_offset.top-24) +'px;left:'+ (_offset.left-7) +'px;">불러오는중</div>';
			var _now = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;
			var _flag = [];
			var _search;

			$('body').prepend( _load );
			$('#sp-search-loading').fadeIn('fast');

			$.ajax({
				type: 'get',
				dataType: 'html',
				url: _url,
				success: function(data){
					var $result = $(data).filter('#sp-result').html();
					$('body').append( $result );
					$('#sp-search').css('height',$(document).height()).fadeIn('fast');

					//$('#sp-search .sp-search-inside').css('marginTop',_offset.top);
					//$('#sp-search .sp-search-inside').css('top',_now + 200);

					$('#sp-search-loading').fadeOut();

					// 검색연동
					if ( typeof ReWriteSearchKey !== 'undefined' && $.isFunction(ReWriteSearchKey) ) {
						//var aSearchBannerData = [{"msb_idx":1,"msb_prt_no":0,"msb_contents":"\ud64d\ubcf4\ubb38\uad6c 1","msb_type":"U","msb_cate_no":0,"msb_keyword":"","msb_url":"http:\/\/www.naver.com","product_name":null,"category_name":null,"banner_action":"http:\/\/www.naver.com"},{"msb_idx":2,"msb_prt_no":0,"msb_contents":"\ud64d\ubcf4\ubb38\uad6c 2","msb_type":"U","msb_cate_no":0,"msb_keyword":"","msb_url":"http:\/\/www.google.com","product_name":null,"category_name":null,"banner_action":"http:\/\/www.google.com"}];
						//alert( _search.banner_action );
						//alert( _search.msb_contents );
						_search = ReWriteSearchKey();
						if( _search.banner_action && _search.msb_contents ){
							$('#sp-search-event').prepend('<a href="'+ _search.banner_action +'" class="full">'+ _search.msb_contents +'</a>');
						}
					}

					// 검색디자인
					setSearchLayer();

					$('.search-loop').each(function( index ){
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
					$('#sp-search-loading').html('잠시 후 다시 시도해주세요');
					setTimeout(function(){
						$('#sp-search-loading').fadeOut('fast');
					}, 2000);
				},
				timeout: 3000
			});

		});

		//KEY EVENT
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$('#sp-search').fadeOut('fast');
			}
		});

		//$(document).on('click', '#sp-search, #sp-search button', function(e) {
		$('#sp-search, #sp-search > button').live('click', function(){
			$('#sp-search').fadeOut('fast');
		});

		//$(document).on('click', '#sp-search .sp-search-inside', function(e) {
		$('#sp-search .sp-search-inside').live('click', function(e){
			e.stopPropagation();
		});

	});