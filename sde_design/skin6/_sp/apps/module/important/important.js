
	/******************************************************************************************************************* 
		���μ����ϱ�
	*******************************************************************************************************************/

	$( document ).ready(function() {

		//$(document).on('click', '#sp-banklink, #sp-banklink button', function(e) {
		$('#sp-shipping, #sp-shipping .close').live('click', function(){
			$('#sp-shipping').fadeOut('fast');
		});

		//$(document).on('click', '#sp-banklink .sp-banklink-inside', function(e) {
		$('#sp-shipping .worldshipLayer').live('click', function(e){
			e.stopPropagation();
		});

	});