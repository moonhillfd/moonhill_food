
	/******************************************************************************************************************* 
		퓨어 마손리 테이블 : 백그라운드
	*******************************************************************************************************************/

	function setMasTable(){

		var _mastableBg;
		$('.sp-mastable .sp-mastable-trick').each(function( a ){
			_mastableBg  = '';
			_mastableBg += 'background-image:url('+ $(this).find('img').attr('src') +');';
			_mastableBg += 'filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+ $(this).find('img').attr('src') +'\',sizingMethod=\'scale\');';
			_mastableBg += '-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+ $(this).find('img').attr('src') +'\',sizingMethod=\'scale\')";';
			$(this).append('<span class="sp-mastable-background" style="'+ _mastableBg +'"></span>');
			$(this).find('img').attr('src', '/_sp/apps/addon/mastable/'+ $(this).closest('td').attr('ratio') +'.png' );
			$(this).addClass('sp-show');
		});

		// 순위매기기
		var _mastext;
		var _masgrade;
		$('.sp-mastable[grade]').each(function(){
			_mastext = $(this).attr('grade');
			$(this).find('.sp-mastable-element').each(function( a ){
				_masgrade = ( a === 0 ) ? '<p class="sp-mastable-grade best">'+ _mastext +' '+ (a + 1) +'</p>' : '<p class="sp-mastable-grade">'+ (a + 1) +'</p>' ;
				$(this).prepend( _masgrade );
			});
		});

		// 테이블 빈공간 매워주기
		var _masEmptyWid;
		var _masEmptyFull;
		var _masEmptyResult;
		$('.sp-mastable tr:first-child').each(function(){
			_masEmptyFull = 0;
			$(this).find('td').each(function(){
				_masEmptyWid = $(this).attr('width').replace('%','');
				if( $.sp_isNumeric(_masEmptyWid) ){
					_masEmptyFull = parseInt(_masEmptyFull) + parseInt(_masEmptyWid);
				}
			});
			_masEmptyResult = 100 - _masEmptyFull;
			if( _masEmptyResult && _masEmptyResult != 100 ){
				$(this).append('<td width="'+ _masEmptyResult +'%">&nbsp;</td>');
			}
		});

	}

	$( document ).ready(function() {

		setMasTable();

	});