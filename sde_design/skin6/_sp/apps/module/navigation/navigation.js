
	/******************************************************************************************************************* 
		네비게이션
	*******************************************************************************************************************/

	$( document ).ready(function() {

		var sp_navi_count = '';

		if( $('#sp-navigation .sp-navigation-layer-toggle a[help]').size() ){
			sp_navi_count += 'HELP<i class="count">'+ $('#sp-navigation .sp-navigation-layer-toggle a[help]').size() +'</i>';
		}
		if( $('#sp-navigation .sp-navigation-layer-toggle a[event]').size() ){
			if( sp_navi_count ){
				sp_navi_count += '&nbsp; · EVENT<i class="count">'+ $('#sp-navigation .sp-navigation-layer-toggle a[event]').size() +'</i>';
			}else{
				sp_navi_count += 'EVENT<i class="count">'+ $('#sp-navigation .sp-navigation-layer-toggle a[event]').size() +'</i>';
			}
		}
		if( sp_navi_count ){
			 $('#sp-navigation .sp-navigation-layer-btn').html( sp_navi_count );
		}

	});

