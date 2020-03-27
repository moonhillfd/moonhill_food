
	/******************************************************************************************************************* 
		�귣��

		�귣�� Ŭ���� ���ð�
		{
			'dom_all':$('[brand-all]'),			=> �귣�� ��ü ��ü
			'dom_favo':$('[brand-favo]'),		=> �귣�� �� ��ü - �α� �귣�� ��ü
			'dom_custom':$('[brand-custom]'),	=> �귣�� �� ��ü - ����� ���� �귣�� ��ü
			'dom_search':$('[brand-search]'),	=> �귣�� �� ��ü - �귣�� �˻� ��ü
			'dom_info':$('[brand-info]'),		=> �귣�� �� ��ü - �귣�� ���� ��ü
			'parent_cate_no':2					=> �θ�ī�װ���
		}

		- ��ü ��ü�� �ʼ�
		- �� ��ü�� ���� ���� ���� (��ü ��ü �ٱ��� �ִ� ��ü�� ���� ����)
		- �θ�ī�װ��� ������ �θ�ī�װ��� ����ī�װ��� �����´�
	*******************************************************************************************************************/

	function _brand(_data){
		var _data=$.extend({
			'dom_all':null,
			'dom_favo':null,
			'dom_custom':null,
			'dom_search':null,
			'dom_info':null,
			'parent_cate_no':null
		}, _data);

		this.brand_dom={
			'favo':_data['dom_all'].find('[brand-favo]'),
			'custom':_data['dom_all'].find('[brand-custom]'),
			'search':_data['dom_all'].find('[brand-search]'),
			'info':_data['dom_all'].find('[brand-info]')
		};

		if(_data['dom_favo']) this.brand_dom['favo']=_data['dom_favo'];
		if(_data['dom_custom']) this.brand_dom['custom']=_data['dom_custom'];
		if(_data['dom_search']) this.brand_dom['search']=_data['dom_search'];
		if(_data['dom_info']) this.brand_dom['info']=_data['dom_info'];

		this.brand_name_info=[];
		this.brand_temp_info={};
		this.brand_info={
			'A':[], 'B':[], 'C':[], 'D':[], 'E':[], 'F':[], 'G':[], 'H':[], 'I':[], 'J':[], 'K':[], 'L':[], 'M':[], 'N':[], 'O':[], 'P':[], 'Q':[], 'R':[], 'S':[], 'T':[], 'U':[], 'V':[], 'W':[], 'X':[], 'Y':[], 'Z':[],
			'��':[], '��':[], '��':[], '��':[], '��':[], '��':[], '��':[], '��':[], '��':[], '��':[], '��':[], '��':[], '��':[], '��':[], '_0':[],
			'_1':[], '_2':[], '_3':[], '_4':[], '_5':[], '_6':[], '_7':[], '_8':[], '_9':[],
			'ETC':[]
		};
		this.favo_info=this.brand_dom['favo'].html().split(',');
		this.parent_cate_no_info=[];

		if(_data['parent_cate_no']) this.parent_cate_no_info.push(_data['parent_cate_no']);

		this.load();
	};

	_brand.prototype.chars=function(str){
		var cCho=['��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��'],
			cJung=['��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��'],
			cJong=['', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��', '��'],
			cho, jung, jong;

		var cnt=str.length,
			chars=[],
			cCode;

		if(!str) return chars;

		for(var i=0; i<cnt; i++){
			cCode=str.charCodeAt(i);

			if(cCode==32){ continue; }

			// �ѱ��� �ƴ� ���
			if(cCode<0xAC00 || cCode>0xD7A3){
				// ������ ���
				if(cCode>=48 && cCode<=57){
					chars.push(str.charAt(i));
					continue;
				}

				// ����, ������ ���
				if((cCode>=12593 && cCode<=12622)
				|| (cCode>=12623 && cCode<=12643)){
					chars.push(str.charAt(i));
					continue;
				}

				// �������� ���
				if((cCode>=65 && cCode<=90)
				|| (cCode>=97 && cCode<=122)){
					chars.push(str.charAt(i).toUpperCase());
					continue;
				}

				chars.push('ETC');
				continue;
			}

			cCode=str.charCodeAt(i)-0xAC00;

			jong=cCode%28;						// ����
			jung=((cCode-jong)/28)%21			// �߼�
			cho=(((cCode-jong)/28)-jung)/21		// �ʼ�

			chars.push(cCho[cho], cJung[jung]);
			if (cJong[jong]!=='') { chars.push(cJong[jong]); }
		}

		return chars;
	};

	_brand.prototype.load=function(){
		var _self=this;

		$.ajax({
			'url':'/exec/front/Product/SubCategory',
			'dataType':'json',
			'success':function(data){
				for(var i in data){
					if(!data[i]['name']) continue;

					if(_self.parent_cate_no_info.length){
						if($.inArray(data[i]['parent_cate_no'], _self.parent_cate_no_info)!=-1){
							_self.parent_cate_no_info.push(data[i]['cate_no']);
						}else{
							continue;
						}
					}

					var _name=data[i]['name'];
					var _name_key=_name.toLowerCase()+Math.floor(Math.random()*1000)+1;
					var _link='/product/list.html'+data[i]['param'];
					var _char=_self.chars(_name)[0];
					var _favo=$.inArray(String(data[i]['cate_no']), _self.favo_info)!=-1 ? 'Y' : 'N';

					_self.add(_name_key, _name, _link, _char, _favo);
				}

				if(!_self.parent_cate_no_info.length){
					_self.brand_dom['custom'].find('a').each(function(){
						var _name=$(this).html();
						var _name_key=_name.toLowerCase()+Math.floor(Math.random()*1000)+1;
						var _link=$(this).attr('href');
						var _char=_self.chars(_name)[0];
						var _favo=$(this).attr('favo')=='Y' ? 'Y' : 'N';

						_self.add(_name_key, _name, _link, _char, _favo);
					});
				}

				_self.brand_name_info.sort();

				for(var i in _self.brand_name_info){
					if(!_self.brand_temp_info[_self.brand_name_info[i]]) continue;

					var _brand=_self.brand_temp_info[_self.brand_name_info[i]];
					var _char=_brand['char'];

					_self.brand_info[_char].push(_brand);
				}

				_self.dom();
			}
		});
	};

	_brand.prototype.add=function(_name_key, _name, _link, _char, _favo){
		if(_char=='��') _char='��';
		if(_char=='��') _char='��';
		if(_char=='��') _char='��';
		if(_char=='��') _char='��';
		if(_char=='��') _char='��';

		if(_char=='0') _char='_0';
		if(_char=='1') _char='_1';
		if(_char=='2') _char='_2';
		if(_char=='3') _char='_3';
		if(_char=='4') _char='_4';
		if(_char=='5') _char='_5';
		if(_char=='6') _char='_6';
		if(_char=='7') _char='_7';
		if(_char=='8') _char='_8';
		if(_char=='9') _char='_9';

		this.brand_name_info.push(_name_key);
		this.brand_temp_info[_name_key]={
			'name':_name,
			'link':_link,
			'char':_char,
			'favo':_favo
		};
	};

	_brand.prototype.dom=function(){
		var _self=this;

		this.brand_dom['search'].find('[button]').click(function(){
			_self.show(this);

			// ������ �����
			_self.brand_dom['search'].find('[button]').removeClass('active');
			$(this).addClass('active');
		});

		for(var i in this.brand_info){
			if(!this.brand_info[i].length) continue;

			var _brand_info=this.brand_info[i];
			var _group=$('<div class="active">').attr('brand-group', '');
			var _group_name=$('<p>').html(i.replace('_', ''));
			_group.append(_group_name);

			for(var j in _brand_info){
				var _brand=$('<div class="active">')
					.attr({
						'brand':'',
						'char':_brand_info[j]['char'],
						'favo':_brand_info[j]['favo']
					});
				var _link=$('<a />').attr('href', _brand_info[j]['link']).html(_brand_info[j]['name']);

				_brand.append(_link);
				_group.append(_brand);
			}

			_self.brand_dom['info'].append(_group);
		}
	};

	_brand.prototype.show=function(_dom){

		var _char_target=$(_dom).attr('char');
		var _char_target_ths = this.brand_dom['info'];									// ü�δ��
		var _char_target_count = 0;
		var _char_target_length = this.brand_dom['info'].find('[brand-group]').length;	// �� ��ΰ�

		this.brand_dom['info'].find('[brand]').addClass('active');

		if(_char_target=='ALL'){
			this.brand_dom['info'].find('[brand-group]').addClass('active');
			return;
		}

		if(_char_target=='FAVO'){
			this.brand_dom['info'].find('[brand][favo=N]').removeClass('active');
		}

		this.brand_dom['info'].find('[brand-group]').removeClass('active');

		this.brand_dom['info'].find('[brand-group]').each(function( idx ){
			var _show=false;

			$(this).find('[brand]').each(function(){
				if(_char_target=='FAVO'){
					var _favo=$(this).attr('favo');
					if(_favo=='Y'){
						_show=true;
						return false;
					}
				}else{
					var _char=$(this).attr('char');
					if(_char==_char_target){
						_show=true;
						return false;
					}
				}
			});

			if(_show) $(this).addClass('active');
			if(_show) _char_target_count++;

			// ���� üũ�ϱ� ����
			if( _char_target_length == idx + 1 ){
				if( _char_target_count ){
					_char_target_ths.closest('[brandall]').attr('brandall',1);
				}else{
					_char_target_ths.closest('[brandall]').attr('brandall',0);
				}
			}

		});

	};


	$(document).ready(function(){

		var brand_int = $.sp_isNumeric($.sp_getNum($('[brandall]').data('cate'))) ? parseInt($.sp_getNum($('[brandall]').data('cate'))) : null ;
		var brand_element=new _brand({
			'dom_all':$('[brandall]'),
			'parent_cate_no': brand_int
		});

		/*
		var _brand_ins_02=new _brand({
			'dom_all':$('#-brand02')
		});

		var _brand_ins_03=new _brand({
			'dom_all':$('#-brand03'),
			'dom_search':$('#-brand03-search'),
			'parent_cate_no':27
		});
		*/
	});