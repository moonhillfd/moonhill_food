if(typeof jQuery === 'undefined'){
    document.write(unescape("%3Cscript src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js' type='text/javascript'%3E%3C/script%3E"));
}
$(document).ready(function(){

	if( location.href.indexOf('/ShowDisplayDetail') > 0 ){

		/* 전부풀기 */
		$('select[name="display[]"] option').eq(0).attr('selected', true).change();
		$('.icoBold').each(function(){
			if( $(this).hasClass('selected') ){
				$(this).click();
			};
		});

	}else{

		/* 전부풀기 */
		$('select[name*="_option_display[]"]').val('not_display').change();
		$('.icoBold').each(function(){
			if( $(this).hasClass('selected') ){
				$(this).click();
			};
		});

		/* 상품명 */
		var product_name = $('input[value="product_name"]').closest('tr').attr('panda','product_name');
			product_name.find('[name*="_idx[]"]').attr('disabled','');
			product_name.find('[name*="_idx[]"]').click();

		/* 상품요약설명 */
		var summary_desc = $('input[value="summary_desc"]').closest('tr').attr('panda','summary_desc');
			summary_desc.find('[name*="_idx[]"]').click();

		/* 상품요약설명 */
		var simple_desc = $('input[value="simple_desc"]').closest('tr').attr('panda','simple_desc');
			simple_desc.find('[name*="_idx[]"]').click();
			simple_desc.find('[name*="_font_size[]"]').val('11');
			simple_desc.find('[name*="_font_color[]"]').val('#999999');

		/* 소비자가 */
		var product_custom = $('input[value="product_custom"]').closest('tr').attr('panda','product_custom');
			product_custom.find('[name*="_idx[]"]').click();

		/* 판매가 */
		var product_price = $('input[value="product_price"]').closest('tr').attr('panda','product_price');
			product_price.find('[name*="_idx[]"]').click();

		/* 할인판매가 */
		var prd_price_sale = $('input[value="prd_price_sale"]').closest('tr').attr('panda','prd_price_sale');
			prd_price_sale.find('[name*="_idx[]"]').click();

		/* 회원 할인판매가 */
		var product_price_sale_login = $('input[value="product_price_sale_login"]').closest('tr').attr('panda','product_price_sale_login');
			product_price_sale_login.find('[name*="_idx[]"]').attr('disabled','');
			product_price_sale_login.find('[name*="_idx[]"]').click();

		/* 할인기간 */
		var prd_promotion_date = $('input[value="prd_promotion_date"]').closest('tr').attr('panda','prd_promotion_date');
			prd_promotion_date.find('[name*="_idx[]"]').click();

		/* 사용후기 */
		var review_cnt = $('input[value="review_cnt"]').closest('tr').attr('panda','review_cnt');
			review_cnt.find('[name*="_idx[]"]').click();

		/* 사용문의 */
		var qna_cnt = $('input[value="qna_cnt"]').closest('tr').attr('panda','qna_cnt');
			qna_cnt.find('[name*="_idx[]"]').click();

		/* 상품색상 */
		var option_colorchip = $('input[value="option_colorchip"]').closest('tr').attr('panda','option_colorchip');
			option_colorchip.find('[name*="_idx[]"]').click();

		/* 전부풀기 */
		$('._bind_move_first').click();
		$('.allChk').click();

		/* 디테일한 설정 */
		setTimeout(function(){

			product_name = $('[panda="product_name"]');
			product_name.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();
			product_name.find('[name*="_font_size[]"]').val('13');
			product_name.find('[name*="_font_color[]"]').val('#333333');
			product_name.find('.icoBold').click();

			summary_desc = $('[panda="summary_desc"]');
			summary_desc.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();
			summary_desc.find('[name*="_font_size[]"]').val('11');
			summary_desc.find('[name*="_font_color[]"]').val('#333333');

			simple_desc = $('[panda="simple_desc"]');
			simple_desc.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();
			simple_desc.find('[name*="_font_size[]"]').val('11');
			simple_desc.find('[name*="_font_color[]"]').val('#999999');

			product_custom = $('[panda="product_custom"]');
			product_custom.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();
			product_custom.find('[name*="_font_size[]"]').val('11');
			product_custom.find('[name*="_font_color[]"]').val('#999999');

			product_price = $('[panda="product_price"]');
			product_price.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();
			product_price.find('[name*="_font_size[]"]').val('13');
			product_price.find('[name*="_font_color[]"]').val('#333333');
			product_price.find('.icoBold').click();

			prd_price_sale = $('[panda="prd_price_sale"]');
			prd_price_sale.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();
			prd_price_sale.find('[name*="_font_size[]"]').val('13');
			prd_price_sale.find('[name*="_font_color[]"]').val('#333333');
			prd_price_sale.find('.icoBold').click();

			product_price_sale_login = $('[panda="product_price_sale_login"]');
			product_price_sale_login.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();
			product_price_sale_login.find('[name*="_font_size[]"]').val('13');
			product_price_sale_login.find('[name*="_font_color[]"]').val('#ff3300');
			product_price_sale_login.find('.icoBold').click();

			prd_promotion_date = $('[panda="prd_promotion_date"]');
			prd_promotion_date.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();

			review_cnt = $('[panda="review_cnt"]');
			review_cnt.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();

			qna_cnt = $('[panda="qna_cnt"]');
			qna_cnt.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();

			option_colorchip = $('[panda="option_colorchip"]');
			option_colorchip.find('[name*="_option_display[]"] option').eq(0).attr('selected', true).change();

			$('[name*="_title_display[]"]').each(function(){
				$(this).find("option").eq(1).attr('selected', true).change();
			});

		}, 1000);

		/*
		$('input[value="product_name"],input[value="product_custom"],input[value="product_price"],input[value="simple_desc"],input[value="prd_price_sale"]').closest('td').find('input[type="checkbox"]').click();
		$('.typeHeader ._bind_move_first').click();
		$('.typeHeader ._bind_move_next').click();
		$('.allChk').click();
		$('.fSelect._bind_option_display').each(function(){
			$(this).children("option").each(function(index){
				if(index==1){
					$(this).attr('selected',true);
				}else{
					$(this).attr('selected',false);
				}
			});
		});
		$('input[value="product_name"],input[value="product_custom"],input[value="product_price"],input[value="simple_desc"],input[value="prd_price_sale"]').closest('tr').find('.fSelect._bind_option_display').children('option').each(function(index){
			if(index==0){
				$(this).attr('selected',true);
			}else{
				$(this).attr('selected',false);
			}
		});
		*/

	}

	$('.btnSubmit._setting_submit ,#eSubmitBtn').attr('style','position:fixed;top:300px;left:500px;');

});