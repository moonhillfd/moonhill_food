
	/******************************************************************************************************************* 
		어탬프 디자인 변형하기
	*******************************************************************************************************************/

    $(document).ready(function(){

		var sp_cal_image;
		$('.xans-attend-calendar img, .xans-attend-calendarhead img').each(function( index ){
			sp_cal_image = $(this).attr('src');
			if( sp_cal_image == '//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_attendStart.png' ){
				$(this).attr('src','/_sp/image/cafe24/ico_attendStart.png');
			}
			if( sp_cal_image == '//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_attendEnd.png' ){
				$(this).attr('src','/_sp/image/cafe24/ico_attendEnd.png');
			}
			if( sp_cal_image == '//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_attendOn.png' ){
				$(this).attr('src','/_sp/image/cafe24/ico_attendOn.png');
				$(this).closest('td').addClass('active');
			}
			if( sp_cal_image == '//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_attendOff.png' ){
				$(this).attr('src','/_sp/image/cafe24/ico_attendOff.png');
			}
		});

    });