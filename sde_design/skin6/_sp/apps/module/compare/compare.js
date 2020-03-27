
	/******************************************************************************************************************* 
		가격비교
	*******************************************************************************************************************/

	$( document ).ready(function() {

		var sp_compare_count = $('#sp-compare .sp-compare-td').size();
		var sp_compare_size = $('#sp-compare').outerWidth();
		var sp_compare_th_size = 160;
		var sp_compare_td_size = ( sp_compare_size - sp_compare_th_size ) * ( 100 / sp_compare_count / 100 );
			sp_compare_td_size = sp_compare_td_size - $('#sp-compare .sp-compare-td').css('padding-left').replace('px','') - $('#sp-compare .sp-compare-td').css('padding-right').replace('px','');

		$('#sp-compare .sp-compare-th').css('width',sp_compare_th_size+'px');
		$('#sp-compare .sp-compare-td').css('width',sp_compare_td_size+'px');
		$('#sp-compare .sp-compare-td img').css('max-width',sp_compare_td_size+'px');
		$('#sp-compare').addClass('show');

	});