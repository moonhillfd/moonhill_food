
	/******************************************************************************************************************* 
		카테고리 호출
	*******************************************************************************************************************/

	$(document).ready(function(){

		// 현재카테고리
		var spc = $('#path_category').val();
		var spcx = $.sp_get_param( $('#path_category').data('mom') , 'cate_no' );

		// 서브카테고리에 미리 넣어주자
		$('.sp-subcategory [category]').attr('data-no',spcx);

		if( $('[getcategory]').size() ){

			var sp_i = 0;
			var sp_no;
			var sp_cate_no;
			var sp_cate_name;
			var sp_cate_link;
			var sp_cate_parent;
			var sp_cate_like;
			var sp_cate_page;
			var sp_cate_param;
			var sp_array = {};
			var sp_inner;
			var sp_autocon;
			var sp_multiple = {};
			var sp_backup;
			var sp_split = 7;	// 카테고리 수가 많다면 옆으로 분리할 수 있는 기능 "3"은 3개씩 분리한다는 의미
			var sp_msize;		// m 단위의 수
			var sp_nsize;		// m 단위의 수
			var sp_osize;		// m 단위의 수
			var sp_esize;		// m 단위의 수
			var sp_inner_trick;
			var sp_inner_trick_clone;
			var sp_inner_trick_cnt;

			$.ajax({
				url : '/exec/front/Product/SubCategory',
				dataType: 'json',
				success: function(data) {
					if (data === null || data == 'undefined') return;

					/*
					sp_cate_no = sp_array[sp_no][i].cate_no;
					sp_cate_name = sp_array[sp_no][i].name;
					sp_cate_link = sp_array[sp_no][i].link_product_list;
					sp_cate_parent = sp_array[sp_no][i].parent_cate_no;
					sp_cate_like = sp_array[sp_no][i].like_count;
					sp_cate_page = sp_array[sp_no][i].design_page_url;
					sp_cate_param = sp_array[sp_no][i].param;
					*/

					for (var i=0; i<data.length; i++){
						sp_cate_no = data[i].parent_cate_no;
						if(!sp_array[ sp_cate_no ]){
							sp_array[ sp_cate_no ] = [];
						}
						sp_array[ sp_cate_no ].push( data[i] );
					}
					$('[getcategory] [category]').each(function( index ){

						sp_msize = $('[getcategory] [category]').length;
						sp_nsize = 0;
						sp_no = $(this).data('no');
						sp_inner = '';
						if(sp_array[sp_no]){
							for (var m=0; m<sp_array[sp_no].length; m++){
								sp_nsize = sp_array[sp_no].length;
								sp_inner += '<li data-no="'+sp_array[sp_no][m].cate_no+'">';
								if(sp_array[sp_array[sp_no][m].cate_no]){
									sp_inner += '<a href="'+ sp_array[sp_no][m].link_product_list +'" class="sp-more">'+ sp_array[sp_no][m].name +'</a>';
								}else{
									sp_inner += '<a href="'+ sp_array[sp_no][m].link_product_list +'">'+ sp_array[sp_no][m].name +'</a>';
								}
								if(sp_array[sp_array[sp_no][m].cate_no]){
									sp_inner += '<ul class="sp-sub-category-2">';
									for (var n=0; n<sp_array[sp_array[sp_no][m].cate_no].length; n++){
										sp_inner += '<li data-no="'+sp_array[sp_array[sp_no][m].cate_no][n].cate_no+'">';
										if(sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no]){
											sp_inner += '<a href="'+ sp_array[sp_array[sp_no][m].cate_no][n].link_product_list +'" class="sp-more">'+ sp_array[sp_array[sp_no][m].cate_no][n].name +'</a>';
										}else{
											sp_inner += '<a href="'+ sp_array[sp_array[sp_no][m].cate_no][n].link_product_list +'">'+ sp_array[sp_array[sp_no][m].cate_no][n].name +'</a>';
										}
										if(sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no]){
											sp_inner += '<ul class="sp-sub-category-3">';
											for (var o=0; o<sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no].length; o++){
												sp_inner += '<li data-no="'+ sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].cate_no +'">';
												if(sp_array[sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].cate_no]){
													sp_inner += '<a href="'+ sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].link_product_list +'" class="sp-more">'+ sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].name +'</a>';
												}else{
													sp_inner += '<a href="'+ sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].link_product_list +'">'+ sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].name +'</a>';
												}
												if(sp_array[sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].cate_no]){
													sp_inner += '<ul class="sp-sub-category-4">';
													for (var e=0; e<sp_array[sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].cate_no].length; e++){
														sp_inner += '<li data-no="'+ sp_array[sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].cate_no][e].cate_no +'"><a href="'+ sp_array[sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].cate_no][e].link_product_list +'">'+ sp_array[sp_array[sp_array[sp_array[sp_no][m].cate_no][n].cate_no][o].cate_no][e].name +'</a></li>';
													}
													sp_inner += '</ul>';
												}
												sp_inner += '</li>';
											}
											sp_inner += '</ul>';
										}
										sp_inner += '</li>';
									}
									sp_inner += '</ul>';
								}
								sp_inner += '</li>';
							}

						}else{

							// 수동카테고리 대응
							if( !$(this).hasClass('xans-record-') ){
								if( !$(this).find('.sp-sub-category-1').size() ){
									sp_multiple[sp_i] = '<li data-no="'+ sp_no +'">'+ $(this).html() +'</li>' ;
								}else{
									sp_autocon = $(this);
									sp_multiple[sp_i] = '<li data-no="'+ sp_no +'">'+ $(this).find(' > a').clone().wrapAll("<div/>").parent().html() +'<ul class="sp-sub-category-2">'+ sp_autocon.find('.sp-sub-category-1').html() +'</ul></li>' ;
								}
							}

						}

						// 서브카테고리 조건을 검색하고
						if( $(this).find('[addcategory]').size() && !$(this).find('[addcategory] .sp-sub-category').html() ){

							sp_inner_trick_cnt = ( sp_nsize > sp_split ) ? 'toomany' : '' ;
							$(this).find('[addcategory]').append('<div class="sp-sub-category" '+ sp_inner_trick_cnt +'><ul class="sp-sub-category-1">'+ sp_inner +'</ul></div>');

						}else if( !$(this).find('[addcategory] .sp-sub-category').html() ){
							sp_i++;
							if( sp_inner ){

								sp_inner_trick = $(this);

								// 카테고리 수가 많다면 여기서 분기하자
								if( sp_nsize > sp_split ){

									/* 카테고리가 많으니 이미지가 없더라도 있다고 지정해주자 */
									$(this).removeClass('nohave').addClass('have');

									$('body').append('<div id="sp-category-trick" class="displaynone">'+ sp_inner +'</div>');
									$(this).append('<div class="sp-sub-category"></div>');
									for(i = 0; i < sp_nsize / sp_split; i++) {
										sp_inner_trick.find('.sp-sub-category').append('<ul class="sp-sub-category-1"></ul>');
									}
									$('#sp-category-trick > li').each(function( index ){
										sp_inner_trick_clone = $(this).clone().wrapAll("<div/>").parent().html();
										sp_inner_trick.find('.sp-sub-category-1').eq( parseInt((index) / sp_split) ).append( sp_inner_trick_clone );
									});
									$('#sp-category-trick').remove();

								}else{

									$(this).append('<div class="sp-sub-category"><ul class="sp-sub-category-1">'+ sp_inner +'</ul></div>');

								}//분기종료							

							}
						}

						if( index + 1 == $('[getcategory] [category]').size() && !$(this).hasClass('single') ){
							$('[getcategory] [category]').each(function( index ){
								if( sp_multiple[index] ){
									$('[getcategory]:not([getcategory="single"]) [addcategory] .sp-sub-category .sp-sub-category-1 > li:eq('+ (index-1) +')').after( sp_multiple[index] );
								}
								if( $('[backupcategory] [backup="'+ $(this).data('no') +'"]').html() && $(this).closest('[getcategory]').attr('getcategory') != 'single' ){

									// 백업이미지
									if( $(this).find('.sp-sub-category').size() ){
										$(this).removeClass('nohave').addClass('have');
										sp_backup = '<div class="sp-sub-category-backup">'+ $('[backupcategory] [backup="'+ $(this).data('no') +'"]').html() +'</div>';
										if( $(this).attr('direction') == 'right' ){
											$(this).find('.sp-sub-category').prepend( sp_backup );
										}else{
											$(this).find('.sp-sub-category').append( sp_backup );
										}
									}else{
										sp_backup = '<div class="sp-sub-category single"><div class="sp-sub-category-backup">'+ $('[backupcategory] [backup="'+ $(this).data('no') +'"]').html() +'</div></div>';
										$(this).append( sp_backup );
									}

									// 유투브 연동
									if ( $('[backupcategory] [backup="'+ $(this).data('no') +'"] [youtubeouter]').size() && typeof setYoutubePlayer !== 'undefined' && $.isFunction(setYoutubePlayer) ) {
										setYoutubePlayer( $('[youtubeouter]') );
									}

									// 비메오 연동
									if ( $('[backupcategory] [backup="'+ $(this).data('no') +'"] [vimeoouter]').size() && typeof setVimeoPlayer !== 'undefined' && $.isFunction(setVimeoPlayer) ) {
										setVimeoPlayer( $('[vimeoouter]') );
									}

								}
							});

							// 스크롤바 연동
							if ( $('[getcategory] [after-scrollbar]').size() && typeof setScrollbarStyle !== 'undefined' && $.isFunction(setScrollbarStyle) ) {
								setScrollbarStyle( $('[getcategory] [after-scrollbar]') );
							}

							// 메인카테고리 활성화
							$('#sp-category [data-no="'+ spcx +'"]').addClass('active');

							// 서브 카테고리의 수를 지정하고, 현재 카테고리를 활성화 한다.
							$('[getcategory="single"] [data-no="'+ spc +'"]').addClass('active');
							$('[getcategory="single"] [data-no="'+ spc +'"]').closest('.sp-sub-category-1 > li').addClass('active');
							$('[getcategory="single"]').attr('grid', $('[getcategory="single"] .sp-sub-category-1 > li').size() );
							if( !$('.sp-subcategory .sp-sub-category-1 .sub-home').size() ){
								if( spc == spcx ){
									$('.sp-subcategory .sp-sub-category-1').prepend('<li data-no="'+ spcx +'" class="sub-home active"><a href="/product/list.html?cate_no='+ spcx +'">ALL</a></li>');
								}else{
									$('.sp-subcategory .sp-sub-category-1').prepend('<li data-no="'+ spcx +'" class="sub-home"><a href="/product/list.html?cate_no='+ spcx +'">ALL</a></li>');
								}
							}

							var sp_backup_no;
							var sp_backup_text;
							var sp_backup_origin;
							$('[changecategory] i').each(function( index ){
								sp_backup_no = $(this).attr('backup');
								sp_backup_text = $(this).attr('change');
								if( $('.xans-layout-category [data-no="'+ sp_backup_no +'"]').size() ){
									sp_backup_origin = $('[data-no="'+ sp_backup_no +'"] > a').html();
									$('.xans-layout-category [data-no="'+ sp_backup_no +'"] > a').attr('hover',sp_backup_text).html('<span>'+ sp_backup_origin +'</span>');
								}
							});

							$('#sp-category-1-normal > ul > li.have').live('mouseenter', function(e) {
								$(this).find('.sp-sub-category-1').css('min-width',$(this).outerWidth());
							});

						}

					});

					// 전체보기에 넣을 컨텐츠가 있다면 넣어주자
					if( $('#sp-category-1-all-trick').size() ){
						$('#sp-category-1-all .sp-sub-category-1').append( $('#sp-category-1-all-trick').html() );
						setScrollbarStyle( $('[getcategory] [after-scrollbar]') );
					}

				}
			});
		}

	});