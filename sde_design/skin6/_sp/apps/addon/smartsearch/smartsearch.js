
	/******************************************************************************************************************* 
		����Ʈ �˻�
	*******************************************************************************************************************/

	$(document).ready(function(){

        var frm = $('#sp-smart-search-form')[0];
			frm.action = '/product/search.html';
			frm.method = 'get';
        var frm_val = ''
        var frm_field = $('input#sp-smart-search-field');
                
		// ����
		$('#sp-smart-search button').live('click', function() {

			$('#sp-smart-search .sp-smart-search-element span').each(function( index ){
				if( $(this).hasClass('on') ){
                    frm_val = frm_val + $(this).data('value') + ' ';
                }
			});
            
            if( frm_val ){
                frm_field.val( $.trim(frm_val) );
                frm.submit();
            }else{
                alert('�ּ� 1�� �̻��� �ɼ��� �����ϼ���.');
            }
            
		});
        
        // ����
		$('#sp-smart-search .sp-smart-search-element span').live('click', function() {
			
			//$(this).toggleClass('on');
            
            $('#sp-smart-search .sp-smart-search-element span[data-value="'+ $(this).data('value') +'"]').toggleClass('on');
            
		});

	});

	// Ŀ���͸���¡
	$(window).load(function(){
        
        var keyword = $('input#keyword').val();
        if( keyword ){
	        $('#sp-smart-search .sp-smart-search-element span').each(function(el) {
	            if( keyword.indexOf( $(this).data('value') ) > -1 ){
	                $(this).addClass('on');
	            }
	        });
        }
        
        if( $('.sp-subcategory .sp-sub-category-1 > li:first-child').data('no') == '77' ){
            $('form#sp-smart-search-form').removeClass('displaynone');
        }else{
            $('#sp-panel-design-1 #sp-smart-search-form').removeClass('displaynone');
        }

	});