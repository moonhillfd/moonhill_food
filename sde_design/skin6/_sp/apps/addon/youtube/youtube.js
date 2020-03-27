
	/******************************************************************************************************************* 
		유투브 플레이어
	*******************************************************************************************************************/

	function isYoutubeMobileCheck(){
		var isMobile = false;
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
		return isMobile;
	}

	//$('[youtubeplayer]').live('click', function() {
	$( document ).delegate( "[youtubeplayer]", "click", function() {
		var _id = ( $(this).data('id') ) ? 'data-id="'+ $(this).data('id') +'"' : '' ;
		var _start = ( $(this).data('start') ) ? 'data-start="'+ $(this).data('start') +'"' : '' ;
		var _sound = ( $(this).data('sound') ) ? 'data-sound="'+ $(this).data('sound') +'"' : '' ;
		var _loop = ( $(this).data('loop') ) ? 'data-loop="'+ $(this).data('loop') +'"' : '' ;
		var _width = ( $(this).data('width') ) ? 'data-width="'+ $(this).data('width') +'"' : '' ;
		var _height = ( $(this).data('height') ) ? 'data-height="'+ $(this).data('height') +'"' : '' ;
		var _parameter = _id +' '+ _start +' '+ _sound +' '+ _loop +' '+ _width +' '+ _height ;
		var _layer = '';
		if( _id.length > 8 ){
			_layer += '<div id="sp-youtube-layer">';
			_layer += '<button><p></p></button>';
			_layer += '	<ul>';
			_layer += '		<li>';
			_layer += '			<div>';
			_layer += '				<ol youtubeouter>';
			_layer += '					<div youtube '+ _parameter +'></div>';
			_layer += '				</ol>';
			_layer += '			</div>';
			_layer += '		</li>';
			_layer += '	</ul>';
			_layer += '</div>';
			if( !$('#sp-youtube-layer').size() ){
				$('body').prepend(_layer);
				$('#sp-youtube-layer').fadeIn('fast');
				setYoutubePlayer( $('#sp-youtube-layer [youtubeouter]') );
			}
		}
	});
	$('#sp-youtube-layer').live('click', function() {
		$('#sp-youtube-layer').fadeOut('fast');
		setTimeout(function(){
			$('#sp-youtube-layer').remove();
		},300);
	});

	/* 유투브 비디오 재생 */
	function setYoutubePlayer( obj ){

		/* 랜덤인자만들기 */
		function uniqId() {
			return Math.round(new Date().getTime() + (Math.random() * 100));
		}

		/* 모듈과 연결됐다면, 링크를 날려주자 */
		if( $('[youtubeplayer]').size() ){
			$('[youtubeplayer]').each(function( index ){
				if( $(this).data('id').length > 8 && $(this).find('a').size() ){
					$(this).html( $(this).find('a').html() ).css('cursor','pointer');
				}
			});
		}

		/* 유투브 플레이어 체크 */
		if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
			window.onYouTubeIframeAPIReady = function() {
				setYoutubePlayerPlay(obj);
			};
			$.getScript('//www.youtube.com/iframe_api');
		} else {
			setYoutubePlayerPlay(obj);
		}

		/* 플레이어 실행 */
		function setYoutubePlayerPlay(obj){

			var player = {};
			$(obj).find('[youtube]').each(function( index ){
				var _id = '#'+ uniqId();
					$(this).attr('id',_id);
				var _index = $('[youtube]').index( $(this) );
				var _youtube = $(this);
				var _youtubeID = _youtube.data('id');
				var _youtubeStart = _youtube.data('start');
				var _youtubeSound = _youtube.data('sound');
				var _youtubeLoop = _youtube.data('loop');
				var _youtubeWidth = _youtube.data('width');
				var _youtubeHeight = _youtube.data('height');

				var _width = '';
				var _height = '';
				var _fixheight = ( _youtube.data('fixheight') != undefined ) ? _youtube.data('fixheight') : false ;

				if( isYoutubeMobileCheck() ){
					_youtubeStart = 'false';
				}

				if( _youtubeWidth && _youtubeHeight && _fixheight ){
					_width = _youtubeWidth+'px';
					_height = _youtubeHeight+'px';
					_youtube.closest('[youtubeouter]').css({'width':_width,'height':_height});
					_youtube.closest('[youtubeouter]').attr('style','position:relative;top:'+ parseInt(_fixheight) / 2 +'px;left:50%;margin:-'+ parseInt(_height) / 2 +'px 0 0 -'+ parseInt(_width) / 2 +'px;height:'+_fixheight+'px');
				}else if( _youtubeWidth && _youtubeHeight ){
					_width = _youtubeWidth+'px';
					_height = _youtubeHeight+'px';
					_youtube.closest('[youtubeouter]').css({'width':_width,'height':_height});
				}else{
					_youtube.closest('[youtubeouter]').attr('youtubeouter','wide');
					_width = '100%';
					//_height = _youtube.width() * 9/16;
				}

				function onYouTubePlayerAPIReady() {
					player[_index] = new YT.Player( _id , {
						width: _width,
						height: _height,
						playerVars: {
							'allowScriptAccess': 'always',
							'enablejsapi': 1,
							'controls': 0,           
							'showinfo': 0,
							'rel': 0,
							'loop': _youtubeLoop,
							'fs': 0,
							'cc_load_policy': 0,
							'iv_load_policy': 3,
							'modestbranding': 1,
							'autohide': 0,
							'wmode': 'transparent'
						},
						videoId: _youtubeID,
					    startSeconds: 30,
					    endSeconds: 60,
						events: {
							'onReady': onPlayerReady,
							onStateChange: 
								function(e){
									if( ( _youtubeLoop === true || _youtubeLoop === 'true' ) && ( e.data === YT.PlayerState.ENDED ) ){
										player[_index].playVideo(); 
									}
								}
						}
					});

				}
				function onPlayerReady(event) {
					if( _youtubeSound === false ){ event.target.mute(); }
					if( _youtubeStart === true ){ 
						//event.target.seekTo(30);
						event.target.playVideo(); 
					}
				}
				onYouTubePlayerAPIReady();
			});

		}

	}

	// 유투브 플레이어 //
    $(document).ready(function(){

		if( $('[youtubeouter]').size() ){
			setYoutubePlayer( $('[youtubeouter]') );
		}

	});