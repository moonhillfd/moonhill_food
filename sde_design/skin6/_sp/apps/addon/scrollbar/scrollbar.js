
	/******************************************************************************************************************* 
		스크롤바 생성
	*******************************************************************************************************************/
	
	!function(e){e.fn.customScrollbar=function(t,i){var o={skin:void 0,hScroll:!0,vScroll:!0,updateOnWindowResize:!1,animationSpeed:300,onCustomScroll:void 0,swipeSpeed:1,wheelSpeed:40,fixedThumbWidth:void 0,fixedThumbHeight:void 0,preventDefaultScroll:!1},s=function(t,i){this.$element=e(t),this.options=i,this.addScrollableClass(),this.addSkinClass(),this.addScrollBarComponents(),this.options.vScroll&&(this.vScrollbar=new n(this,new r)),this.options.hScroll&&(this.hScrollbar=new n(this,new l)),this.$element.data("scrollable",this),this.initKeyboardScrolling(),this.bindEvents()};s.prototype={addScrollableClass:function(){this.$element.hasClass("scrollable")||(this.scrollableAdded=!0,this.$element.addClass("scrollable"))},removeScrollableClass:function(){this.scrollableAdded&&this.$element.removeClass("scrollable")},addSkinClass:function(){"string"!=typeof this.options.skin||this.$element.hasClass(this.options.skin)||(this.skinClassAdded=!0,this.$element.addClass(this.options.skin))},removeSkinClass:function(){this.skinClassAdded&&this.$element.removeClass(this.options.skin)},addScrollBarComponents:function(){this.assignViewPort(),0==this.$viewPort.length&&(this.$element.wrapInner('<div class="viewport" />'),this.assignViewPort(),this.viewPortAdded=!0),this.assignOverview(),0==this.$overview.length&&(this.$viewPort.wrapInner('<div class="overview" />'),this.assignOverview(),this.overviewAdded=!0),this.addScrollBar("vertical","prepend"),this.addScrollBar("horizontal","append")},removeScrollbarComponents:function(){this.removeScrollbar("vertical"),this.removeScrollbar("horizontal"),this.overviewAdded&&this.$element.unwrap(),this.viewPortAdded&&this.$element.unwrap()},removeScrollbar:function(e){this[e+"ScrollbarAdded"]&&this.$element.find(".scroll-bar."+e).remove()},assignViewPort:function(){this.$viewPort=this.$element.find(".viewport")},assignOverview:function(){this.$overview=this.$viewPort.find(".overview")},addScrollBar:function(e,t){0==this.$element.find(".scroll-bar."+e).length&&(this.$element[t]("<div class='scroll-bar "+e+"'><div class='thumb'></div></div>"),this[e+"ScrollbarAdded"]=!0)},resize:function(e){this.vScrollbar&&this.vScrollbar.resize(e),this.hScrollbar&&this.hScrollbar.resize(e)},scrollTo:function(e){this.vScrollbar&&this.vScrollbar.scrollToElement(e),this.hScrollbar&&this.hScrollbar.scrollToElement(e)},scrollToXY:function(e,t){this.scrollToX(e),this.scrollToY(t)},scrollToX:function(e){this.hScrollbar&&this.hScrollbar.scrollOverviewTo(e,!0)},scrollToY:function(e){this.vScrollbar&&this.vScrollbar.scrollOverviewTo(e,!0)},remove:function(){this.removeScrollableClass(),this.removeSkinClass(),this.removeScrollbarComponents(),this.$element.data("scrollable",null),this.removeKeyboardScrolling(),this.vScrollbar&&this.vScrollbar.remove(),this.hScrollbar&&this.hScrollbar.remove()},setAnimationSpeed:function(e){this.options.animationSpeed=e},isInside:function(t,i){var o=e(t),s=e(i),n=o.offset(),l=s.offset();return n.top>=l.top&&n.left>=l.left&&n.top+o.height()<=l.top+s.height()&&n.left+o.width()<=l.left+s.width()},initKeyboardScrolling:function(){var e=this;this.elementKeydown=function(t){document.activeElement===e.$element[0]&&(e.vScrollbar&&e.vScrollbar.keyScroll(t),e.hScrollbar&&e.hScrollbar.keyScroll(t))},this.$element.attr("tabindex","-1").keydown(this.elementKeydown)},removeKeyboardScrolling:function(){this.$element.removeAttr("tabindex").unbind("keydown",this.elementKeydown)},bindEvents:function(){this.options.onCustomScroll&&this.$element.on("customScroll",this.options.onCustomScroll)}};var n=function(e,t){this.scrollable=e,this.sizing=t,this.$scrollBar=this.sizing.scrollBar(this.scrollable.$element),this.$thumb=this.$scrollBar.find(".thumb"),this.setScrollPosition(0,0),this.resize(),this.initMouseMoveScrolling(),this.initMouseWheelScrolling(),this.initTouchScrolling(),this.initMouseClickScrolling(),this.initWindowResize()};n.prototype={resize:function(e){this.scrollable.$viewPort.height(this.scrollable.$element.height()),this.sizing.size(this.scrollable.$viewPort,this.sizing.size(this.scrollable.$element)),this.viewPortSize=this.sizing.size(this.scrollable.$viewPort),this.overviewSize=this.sizing.size(this.scrollable.$overview),this.ratio=this.viewPortSize/this.overviewSize,this.sizing.size(this.$scrollBar,this.viewPortSize),this.thumbSize=this.calculateThumbSize(),this.sizing.size(this.$thumb,this.thumbSize),this.maxThumbPosition=this.calculateMaxThumbPosition(),this.maxOverviewPosition=this.calculateMaxOverviewPosition(),this.enabled=this.overviewSize>this.viewPortSize,void 0===this.scrollPercent&&(this.scrollPercent=0),this.enabled?this.rescroll(e):this.setScrollPosition(0,0),this.$scrollBar.toggle(this.enabled)},calculateThumbSize:function(){var e,t=this.sizing.fixedThumbSize(this.scrollable.options);return e=t?t:this.ratio*this.viewPortSize,Math.max(e,this.sizing.minSize(this.$thumb))},initMouseMoveScrolling:function(){var t=this;this.$thumb.mousedown(function(e){t.enabled&&t.startMouseMoveScrolling(e)}),this.documentMouseup=function(e){t.stopMouseMoveScrolling(e)},e(document).mouseup(this.documentMouseup),this.documentMousemove=function(e){t.mouseMoveScroll(e)},e(document).mousemove(this.documentMousemove),this.$thumb.click(function(e){e.stopPropagation()})},removeMouseMoveScrolling:function(){this.$thumb.unbind(),e(document).unbind("mouseup",this.documentMouseup),e(document).unbind("mousemove",this.documentMousemove)},initMouseWheelScrolling:function(){var e=this;this.scrollable.$element.mousewheel(function(t,i,o,s){if(e.enabled){var n=e.mouseWheelScroll(o,s);e.stopEventConditionally(t,n)}})},removeMouseWheelScrolling:function(){this.scrollable.$element.unbind("mousewheel")},initTouchScrolling:function(){if(document.addEventListener){var e=this;this.elementTouchstart=function(t){e.enabled&&e.startTouchScrolling(t)},this.scrollable.$element[0].addEventListener("touchstart",this.elementTouchstart),this.documentTouchmove=function(t){e.touchScroll(t)},document.addEventListener("touchmove",this.documentTouchmove),this.elementTouchend=function(t){e.stopTouchScrolling(t)},this.scrollable.$element[0].addEventListener("touchend",this.elementTouchend)}},removeTouchScrolling:function(){document.addEventListener&&(this.scrollable.$element[0].removeEventListener("touchstart",this.elementTouchstart),document.removeEventListener("touchmove",this.documentTouchmove),this.scrollable.$element[0].removeEventListener("touchend",this.elementTouchend))},initMouseClickScrolling:function(){var e=this;this.scrollBarClick=function(t){e.mouseClickScroll(t)},this.$scrollBar.click(this.scrollBarClick)},removeMouseClickScrolling:function(){this.$scrollBar.unbind("click",this.scrollBarClick)},initWindowResize:function(){if(this.scrollable.options.updateOnWindowResize){var t=this;this.windowResize=function(){t.resize()},e(window).resize(this.windowResize)}},removeWindowResize:function(){e(window).unbind("resize",this.windowResize)},isKeyScrolling:function(e){return null!=this.keyScrollDelta(e)},keyScrollDelta:function(e){for(var t in this.sizing.scrollingKeys)if(t==e)return this.sizing.scrollingKeys[e](this.viewPortSize);return null},startMouseMoveScrolling:function(t){this.mouseMoveScrolling=!0,e("html").addClass("not-selectable"),this.setUnselectable(e("html"),"on"),this.setScrollEvent(t)},stopMouseMoveScrolling:function(t){this.mouseMoveScrolling=!1,e("html").removeClass("not-selectable"),this.setUnselectable(e("html"),null)},setUnselectable:function(e,t){e.attr("unselectable")!=t&&(e.attr("unselectable",t),e.find(":not(input)").attr("unselectable",t))},mouseMoveScroll:function(e){if(this.mouseMoveScrolling){var t=this.sizing.mouseDelta(this.scrollEvent,e);this.scrollThumbBy(t),this.setScrollEvent(e)}},startTouchScrolling:function(e){e.touches&&1==e.touches.length&&(this.setScrollEvent(e.touches[0]),this.touchScrolling=!0,e.stopPropagation())},touchScroll:function(e){if(this.touchScrolling&&e.touches&&1==e.touches.length){var t=-this.sizing.mouseDelta(this.scrollEvent,e.touches[0])*this.scrollable.options.swipeSpeed,i=this.scrollOverviewBy(t);i&&this.setScrollEvent(e.touches[0]),this.stopEventConditionally(e,i)}},stopTouchScrolling:function(e){this.touchScrolling=!1,e.stopPropagation()},mouseWheelScroll:function(e,t){var i=-this.sizing.wheelDelta(e,t)*this.scrollable.options.wheelSpeed;return 0!=i?this.scrollOverviewBy(i):void 0},mouseClickScroll:function(e){var t=this.viewPortSize-20;e["page"+this.sizing.scrollAxis()]<this.$thumb.offset()[this.sizing.offsetComponent()]&&(t=-t),this.scrollOverviewBy(t)},keyScroll:function(e){var t=e.which;if(this.enabled&&this.isKeyScrolling(t)){var i=this.scrollOverviewBy(this.keyScrollDelta(t));this.stopEventConditionally(e,i)}},scrollThumbBy:function(e){var t=this.thumbPosition();t+=e,t=this.positionOrMax(t,this.maxThumbPosition);var i=this.scrollPercent;if(this.scrollPercent=t/this.maxThumbPosition,i!=this.scrollPercent){var o=t*this.maxOverviewPosition/this.maxThumbPosition;return this.setScrollPosition(o,t),this.triggerCustomScroll(i),!0}return!1},thumbPosition:function(){return this.$thumb.position()[this.sizing.offsetComponent()]},scrollOverviewBy:function(e){var t=this.overviewPosition()+e;return this.scrollOverviewTo(t,!1)},overviewPosition:function(){return-this.scrollable.$overview.position()[this.sizing.offsetComponent()]},scrollOverviewTo:function(e,t){e=this.positionOrMax(e,this.maxOverviewPosition);var i=this.scrollPercent;if(this.scrollPercent=e/this.maxOverviewPosition,i!=this.scrollPercent){var o=this.scrollPercent*this.maxThumbPosition;return t?this.setScrollPositionWithAnimation(e,o):this.setScrollPosition(e,o),this.triggerCustomScroll(i),!0}return!1},positionOrMax:function(e,t){return 0>e?0:e>t?t:e},triggerCustomScroll:function(e){this.scrollable.$element.trigger("customScroll",{scrollAxis:this.sizing.scrollAxis(),direction:this.sizing.scrollDirection(e,this.scrollPercent),scrollPercent:100*this.scrollPercent})},rescroll:function(e){if(e){var t=this.positionOrMax(this.overviewPosition(),this.maxOverviewPosition);this.scrollPercent=t/this.maxOverviewPosition;var i=this.scrollPercent*this.maxThumbPosition;this.setScrollPosition(t,i)}else{var i=this.scrollPercent*this.maxThumbPosition,t=this.scrollPercent*this.maxOverviewPosition;this.setScrollPosition(t,i)}},setScrollPosition:function(e,t){this.$thumb.css(this.sizing.offsetComponent(),t+"px"),this.scrollable.$overview.css(this.sizing.offsetComponent(),-e+"px")},setScrollPositionWithAnimation:function(e,t){var i={},o={};i[this.sizing.offsetComponent()]=t+"px",this.$thumb.animate(i,this.scrollable.options.animationSpeed),o[this.sizing.offsetComponent()]=-e+"px",this.scrollable.$overview.animate(o,this.scrollable.options.animationSpeed)},calculateMaxThumbPosition:function(){return Math.max(0,this.sizing.size(this.$scrollBar)-this.thumbSize)},calculateMaxOverviewPosition:function(){return Math.max(0,this.sizing.size(this.scrollable.$overview)-this.sizing.size(this.scrollable.$viewPort))},setScrollEvent:function(e){var t="page"+this.sizing.scrollAxis();this.scrollEvent&&this.scrollEvent[t]==e[t]||(this.scrollEvent={pageX:e.pageX,pageY:e.pageY})},scrollToElement:function(t){var i=e(t);if(this.sizing.isInside(i,this.scrollable.$overview)&&!this.sizing.isInside(i,this.scrollable.$viewPort)){var o=i.offset(),s=this.scrollable.$overview.offset();this.scrollable.$viewPort.offset();this.scrollOverviewTo(o[this.sizing.offsetComponent()]-s[this.sizing.offsetComponent()],!0)}},remove:function(){this.removeMouseMoveScrolling(),this.removeMouseWheelScrolling(),this.removeTouchScrolling(),this.removeMouseClickScrolling(),this.removeWindowResize()},stopEventConditionally:function(e,t){(t||this.scrollable.options.preventDefaultScroll)&&(e.preventDefault(),e.stopPropagation())}};var l=function(){};l.prototype={size:function(e,t){return t?e.width(t):e.width()},minSize:function(e){return parseInt(e.css("min-width"))||0},fixedThumbSize:function(e){return e.fixedThumbWidth},scrollBar:function(e){return e.find(".scroll-bar.horizontal")},mouseDelta:function(e,t){return t.pageX-e.pageX},offsetComponent:function(){return"left"},wheelDelta:function(e,t){return e},scrollAxis:function(){return"X"},scrollDirection:function(e,t){return t>e?"right":"left"},scrollingKeys:{37:function(e){return-10},39:function(e){return 10}},isInside:function(t,i){var o=e(t),s=e(i),n=o.offset(),l=s.offset();return n.left>=l.left&&n.left+o.width()<=l.left+s.width()}};var r=function(){};return r.prototype={size:function(e,t){return t?e.height(t):e.height()},minSize:function(e){return parseInt(e.css("min-height"))||0},fixedThumbSize:function(e){return e.fixedThumbHeight},scrollBar:function(e){return e.find(".scroll-bar.vertical")},mouseDelta:function(e,t){return t.pageY-e.pageY},offsetComponent:function(){return"top"},wheelDelta:function(e,t){return t},scrollAxis:function(){return"Y"},scrollDirection:function(e,t){return t>e?"down":"up"},scrollingKeys:{38:function(e){return-10},40:function(e){return 10},33:function(e){return-(e-20)},34:function(e){return e-20}},isInside:function(t,i){var o=e(t),s=e(i),n=o.offset(),l=s.offset();return n.top>=l.top&&n.top+o.height()<=l.top+s.height()}},this.each(function(){if(void 0==t&&(t=o),"string"==typeof t){var n=e(this).data("scrollable");n&&n[t](i)}else{if("object"!=typeof t)throw"Invalid type of options";t=e.extend(o,t),new s(e(this),t)}})}}(jQuery),function(e){function t(t){var i=t||window.event,o=[].slice.call(arguments,1),s=0,n=0,l=0;return t=e.event.fix(i),t.type="mousewheel",i.wheelDelta&&(s=i.wheelDelta/120),i.detail&&(s=-i.detail/3),l=s,void 0!==i.axis&&i.axis===i.HORIZONTAL_AXIS&&(l=0,n=s),void 0!==i.wheelDeltaY&&(l=i.wheelDeltaY/120),void 0!==i.wheelDeltaX&&(n=i.wheelDeltaX/120),o.unshift(t,s,n,l),(e.event.dispatch||e.event.handle).apply(this,o)}var i=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var o=i.length;o;)e.event.fixHooks[i[--o]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=i.length;e;)this.addEventListener(i[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=i.length;e;)this.removeEventListener(i[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);

	function setScrollbarStyle( obj ){

		// 못가져온다면
		if ( typeof $(obj).customScrollbar !== "function" ){ 
			!function(e){e.fn.customScrollbar=function(t,i){var o={skin:void 0,hScroll:!0,vScroll:!0,updateOnWindowResize:!1,animationSpeed:300,onCustomScroll:void 0,swipeSpeed:1,wheelSpeed:40,fixedThumbWidth:void 0,fixedThumbHeight:void 0,preventDefaultScroll:!1},s=function(t,i){this.$element=e(t),this.options=i,this.addScrollableClass(),this.addSkinClass(),this.addScrollBarComponents(),this.options.vScroll&&(this.vScrollbar=new n(this,new r)),this.options.hScroll&&(this.hScrollbar=new n(this,new l)),this.$element.data("scrollable",this),this.initKeyboardScrolling(),this.bindEvents()};s.prototype={addScrollableClass:function(){this.$element.hasClass("scrollable")||(this.scrollableAdded=!0,this.$element.addClass("scrollable"))},removeScrollableClass:function(){this.scrollableAdded&&this.$element.removeClass("scrollable")},addSkinClass:function(){"string"!=typeof this.options.skin||this.$element.hasClass(this.options.skin)||(this.skinClassAdded=!0,this.$element.addClass(this.options.skin))},removeSkinClass:function(){this.skinClassAdded&&this.$element.removeClass(this.options.skin)},addScrollBarComponents:function(){this.assignViewPort(),0==this.$viewPort.length&&(this.$element.wrapInner('<div class="viewport" />'),this.assignViewPort(),this.viewPortAdded=!0),this.assignOverview(),0==this.$overview.length&&(this.$viewPort.wrapInner('<div class="overview" />'),this.assignOverview(),this.overviewAdded=!0),this.addScrollBar("vertical","prepend"),this.addScrollBar("horizontal","append")},removeScrollbarComponents:function(){this.removeScrollbar("vertical"),this.removeScrollbar("horizontal"),this.overviewAdded&&this.$element.unwrap(),this.viewPortAdded&&this.$element.unwrap()},removeScrollbar:function(e){this[e+"ScrollbarAdded"]&&this.$element.find(".scroll-bar."+e).remove()},assignViewPort:function(){this.$viewPort=this.$element.find(".viewport")},assignOverview:function(){this.$overview=this.$viewPort.find(".overview")},addScrollBar:function(e,t){0==this.$element.find(".scroll-bar."+e).length&&(this.$element[t]("<div class='scroll-bar "+e+"'><div class='thumb'></div></div>"),this[e+"ScrollbarAdded"]=!0)},resize:function(e){this.vScrollbar&&this.vScrollbar.resize(e),this.hScrollbar&&this.hScrollbar.resize(e)},scrollTo:function(e){this.vScrollbar&&this.vScrollbar.scrollToElement(e),this.hScrollbar&&this.hScrollbar.scrollToElement(e)},scrollToXY:function(e,t){this.scrollToX(e),this.scrollToY(t)},scrollToX:function(e){this.hScrollbar&&this.hScrollbar.scrollOverviewTo(e,!0)},scrollToY:function(e){this.vScrollbar&&this.vScrollbar.scrollOverviewTo(e,!0)},remove:function(){this.removeScrollableClass(),this.removeSkinClass(),this.removeScrollbarComponents(),this.$element.data("scrollable",null),this.removeKeyboardScrolling(),this.vScrollbar&&this.vScrollbar.remove(),this.hScrollbar&&this.hScrollbar.remove()},setAnimationSpeed:function(e){this.options.animationSpeed=e},isInside:function(t,i){var o=e(t),s=e(i),n=o.offset(),l=s.offset();return n.top>=l.top&&n.left>=l.left&&n.top+o.height()<=l.top+s.height()&&n.left+o.width()<=l.left+s.width()},initKeyboardScrolling:function(){var e=this;this.elementKeydown=function(t){document.activeElement===e.$element[0]&&(e.vScrollbar&&e.vScrollbar.keyScroll(t),e.hScrollbar&&e.hScrollbar.keyScroll(t))},this.$element.attr("tabindex","-1").keydown(this.elementKeydown)},removeKeyboardScrolling:function(){this.$element.removeAttr("tabindex").unbind("keydown",this.elementKeydown)},bindEvents:function(){this.options.onCustomScroll&&this.$element.on("customScroll",this.options.onCustomScroll)}};var n=function(e,t){this.scrollable=e,this.sizing=t,this.$scrollBar=this.sizing.scrollBar(this.scrollable.$element),this.$thumb=this.$scrollBar.find(".thumb"),this.setScrollPosition(0,0),this.resize(),this.initMouseMoveScrolling(),this.initMouseWheelScrolling(),this.initTouchScrolling(),this.initMouseClickScrolling(),this.initWindowResize()};n.prototype={resize:function(e){this.scrollable.$viewPort.height(this.scrollable.$element.height()),this.sizing.size(this.scrollable.$viewPort,this.sizing.size(this.scrollable.$element)),this.viewPortSize=this.sizing.size(this.scrollable.$viewPort),this.overviewSize=this.sizing.size(this.scrollable.$overview),this.ratio=this.viewPortSize/this.overviewSize,this.sizing.size(this.$scrollBar,this.viewPortSize),this.thumbSize=this.calculateThumbSize(),this.sizing.size(this.$thumb,this.thumbSize),this.maxThumbPosition=this.calculateMaxThumbPosition(),this.maxOverviewPosition=this.calculateMaxOverviewPosition(),this.enabled=this.overviewSize>this.viewPortSize,void 0===this.scrollPercent&&(this.scrollPercent=0),this.enabled?this.rescroll(e):this.setScrollPosition(0,0),this.$scrollBar.toggle(this.enabled)},calculateThumbSize:function(){var e,t=this.sizing.fixedThumbSize(this.scrollable.options);return e=t?t:this.ratio*this.viewPortSize,Math.max(e,this.sizing.minSize(this.$thumb))},initMouseMoveScrolling:function(){var t=this;this.$thumb.mousedown(function(e){t.enabled&&t.startMouseMoveScrolling(e)}),this.documentMouseup=function(e){t.stopMouseMoveScrolling(e)},e(document).mouseup(this.documentMouseup),this.documentMousemove=function(e){t.mouseMoveScroll(e)},e(document).mousemove(this.documentMousemove),this.$thumb.click(function(e){e.stopPropagation()})},removeMouseMoveScrolling:function(){this.$thumb.unbind(),e(document).unbind("mouseup",this.documentMouseup),e(document).unbind("mousemove",this.documentMousemove)},initMouseWheelScrolling:function(){var e=this;this.scrollable.$element.mousewheel(function(t,i,o,s){if(e.enabled){var n=e.mouseWheelScroll(o,s);e.stopEventConditionally(t,n)}})},removeMouseWheelScrolling:function(){this.scrollable.$element.unbind("mousewheel")},initTouchScrolling:function(){if(document.addEventListener){var e=this;this.elementTouchstart=function(t){e.enabled&&e.startTouchScrolling(t)},this.scrollable.$element[0].addEventListener("touchstart",this.elementTouchstart),this.documentTouchmove=function(t){e.touchScroll(t)},document.addEventListener("touchmove",this.documentTouchmove),this.elementTouchend=function(t){e.stopTouchScrolling(t)},this.scrollable.$element[0].addEventListener("touchend",this.elementTouchend)}},removeTouchScrolling:function(){document.addEventListener&&(this.scrollable.$element[0].removeEventListener("touchstart",this.elementTouchstart),document.removeEventListener("touchmove",this.documentTouchmove),this.scrollable.$element[0].removeEventListener("touchend",this.elementTouchend))},initMouseClickScrolling:function(){var e=this;this.scrollBarClick=function(t){e.mouseClickScroll(t)},this.$scrollBar.click(this.scrollBarClick)},removeMouseClickScrolling:function(){this.$scrollBar.unbind("click",this.scrollBarClick)},initWindowResize:function(){if(this.scrollable.options.updateOnWindowResize){var t=this;this.windowResize=function(){t.resize()},e(window).resize(this.windowResize)}},removeWindowResize:function(){e(window).unbind("resize",this.windowResize)},isKeyScrolling:function(e){return null!=this.keyScrollDelta(e)},keyScrollDelta:function(e){for(var t in this.sizing.scrollingKeys)if(t==e)return this.sizing.scrollingKeys[e](this.viewPortSize);return null},startMouseMoveScrolling:function(t){this.mouseMoveScrolling=!0,e("html").addClass("not-selectable"),this.setUnselectable(e("html"),"on"),this.setScrollEvent(t)},stopMouseMoveScrolling:function(t){this.mouseMoveScrolling=!1,e("html").removeClass("not-selectable"),this.setUnselectable(e("html"),null)},setUnselectable:function(e,t){e.attr("unselectable")!=t&&(e.attr("unselectable",t),e.find(":not(input)").attr("unselectable",t))},mouseMoveScroll:function(e){if(this.mouseMoveScrolling){var t=this.sizing.mouseDelta(this.scrollEvent,e);this.scrollThumbBy(t),this.setScrollEvent(e)}},startTouchScrolling:function(e){e.touches&&1==e.touches.length&&(this.setScrollEvent(e.touches[0]),this.touchScrolling=!0,e.stopPropagation())},touchScroll:function(e){if(this.touchScrolling&&e.touches&&1==e.touches.length){var t=-this.sizing.mouseDelta(this.scrollEvent,e.touches[0])*this.scrollable.options.swipeSpeed,i=this.scrollOverviewBy(t);i&&this.setScrollEvent(e.touches[0]),this.stopEventConditionally(e,i)}},stopTouchScrolling:function(e){this.touchScrolling=!1,e.stopPropagation()},mouseWheelScroll:function(e,t){var i=-this.sizing.wheelDelta(e,t)*this.scrollable.options.wheelSpeed;return 0!=i?this.scrollOverviewBy(i):void 0},mouseClickScroll:function(e){var t=this.viewPortSize-20;e["page"+this.sizing.scrollAxis()]<this.$thumb.offset()[this.sizing.offsetComponent()]&&(t=-t),this.scrollOverviewBy(t)},keyScroll:function(e){var t=e.which;if(this.enabled&&this.isKeyScrolling(t)){var i=this.scrollOverviewBy(this.keyScrollDelta(t));this.stopEventConditionally(e,i)}},scrollThumbBy:function(e){var t=this.thumbPosition();t+=e,t=this.positionOrMax(t,this.maxThumbPosition);var i=this.scrollPercent;if(this.scrollPercent=t/this.maxThumbPosition,i!=this.scrollPercent){var o=t*this.maxOverviewPosition/this.maxThumbPosition;return this.setScrollPosition(o,t),this.triggerCustomScroll(i),!0}return!1},thumbPosition:function(){return this.$thumb.position()[this.sizing.offsetComponent()]},scrollOverviewBy:function(e){var t=this.overviewPosition()+e;return this.scrollOverviewTo(t,!1)},overviewPosition:function(){return-this.scrollable.$overview.position()[this.sizing.offsetComponent()]},scrollOverviewTo:function(e,t){e=this.positionOrMax(e,this.maxOverviewPosition);var i=this.scrollPercent;if(this.scrollPercent=e/this.maxOverviewPosition,i!=this.scrollPercent){var o=this.scrollPercent*this.maxThumbPosition;return t?this.setScrollPositionWithAnimation(e,o):this.setScrollPosition(e,o),this.triggerCustomScroll(i),!0}return!1},positionOrMax:function(e,t){return 0>e?0:e>t?t:e},triggerCustomScroll:function(e){this.scrollable.$element.trigger("customScroll",{scrollAxis:this.sizing.scrollAxis(),direction:this.sizing.scrollDirection(e,this.scrollPercent),scrollPercent:100*this.scrollPercent})},rescroll:function(e){if(e){var t=this.positionOrMax(this.overviewPosition(),this.maxOverviewPosition);this.scrollPercent=t/this.maxOverviewPosition;var i=this.scrollPercent*this.maxThumbPosition;this.setScrollPosition(t,i)}else{var i=this.scrollPercent*this.maxThumbPosition,t=this.scrollPercent*this.maxOverviewPosition;this.setScrollPosition(t,i)}},setScrollPosition:function(e,t){this.$thumb.css(this.sizing.offsetComponent(),t+"px"),this.scrollable.$overview.css(this.sizing.offsetComponent(),-e+"px")},setScrollPositionWithAnimation:function(e,t){var i={},o={};i[this.sizing.offsetComponent()]=t+"px",this.$thumb.animate(i,this.scrollable.options.animationSpeed),o[this.sizing.offsetComponent()]=-e+"px",this.scrollable.$overview.animate(o,this.scrollable.options.animationSpeed)},calculateMaxThumbPosition:function(){return Math.max(0,this.sizing.size(this.$scrollBar)-this.thumbSize)},calculateMaxOverviewPosition:function(){return Math.max(0,this.sizing.size(this.scrollable.$overview)-this.sizing.size(this.scrollable.$viewPort))},setScrollEvent:function(e){var t="page"+this.sizing.scrollAxis();this.scrollEvent&&this.scrollEvent[t]==e[t]||(this.scrollEvent={pageX:e.pageX,pageY:e.pageY})},scrollToElement:function(t){var i=e(t);if(this.sizing.isInside(i,this.scrollable.$overview)&&!this.sizing.isInside(i,this.scrollable.$viewPort)){var o=i.offset(),s=this.scrollable.$overview.offset();this.scrollable.$viewPort.offset();this.scrollOverviewTo(o[this.sizing.offsetComponent()]-s[this.sizing.offsetComponent()],!0)}},remove:function(){this.removeMouseMoveScrolling(),this.removeMouseWheelScrolling(),this.removeTouchScrolling(),this.removeMouseClickScrolling(),this.removeWindowResize()},stopEventConditionally:function(e,t){(t||this.scrollable.options.preventDefaultScroll)&&(e.preventDefault(),e.stopPropagation())}};var l=function(){};l.prototype={size:function(e,t){return t?e.width(t):e.width()},minSize:function(e){return parseInt(e.css("min-width"))||0},fixedThumbSize:function(e){return e.fixedThumbWidth},scrollBar:function(e){return e.find(".scroll-bar.horizontal")},mouseDelta:function(e,t){return t.pageX-e.pageX},offsetComponent:function(){return"left"},wheelDelta:function(e,t){return e},scrollAxis:function(){return"X"},scrollDirection:function(e,t){return t>e?"right":"left"},scrollingKeys:{37:function(e){return-10},39:function(e){return 10}},isInside:function(t,i){var o=e(t),s=e(i),n=o.offset(),l=s.offset();return n.left>=l.left&&n.left+o.width()<=l.left+s.width()}};var r=function(){};return r.prototype={size:function(e,t){return t?e.height(t):e.height()},minSize:function(e){return parseInt(e.css("min-height"))||0},fixedThumbSize:function(e){return e.fixedThumbHeight},scrollBar:function(e){return e.find(".scroll-bar.vertical")},mouseDelta:function(e,t){return t.pageY-e.pageY},offsetComponent:function(){return"top"},wheelDelta:function(e,t){return t},scrollAxis:function(){return"Y"},scrollDirection:function(e,t){return t>e?"down":"up"},scrollingKeys:{38:function(e){return-10},40:function(e){return 10},33:function(e){return-(e-20)},34:function(e){return e-20}},isInside:function(t,i){var o=e(t),s=e(i),n=o.offset(),l=s.offset();return n.top>=l.top&&n.top+o.height()<=l.top+s.height()}},this.each(function(){if(void 0==t&&(t=o),"string"==typeof t){var n=e(this).data("scrollable");n&&n[t](i)}else{if("object"!=typeof t)throw"Invalid type of options";t=e.extend(o,t),new s(e(this),t)}})}}(jQuery),function(e){function t(t){var i=t||window.event,o=[].slice.call(arguments,1),s=0,n=0,l=0;return t=e.event.fix(i),t.type="mousewheel",i.wheelDelta&&(s=i.wheelDelta/120),i.detail&&(s=-i.detail/3),l=s,void 0!==i.axis&&i.axis===i.HORIZONTAL_AXIS&&(l=0,n=s),void 0!==i.wheelDeltaY&&(l=i.wheelDeltaY/120),void 0!==i.wheelDeltaX&&(n=i.wheelDeltaX/120),o.unshift(t,s,n,l),(e.event.dispatch||e.event.handle).apply(this,o)}var i=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var o=i.length;o;)e.event.fixHooks[i[--o]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=i.length;e;)this.addEventListener(i[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=i.length;e;)this.removeEventListener(i[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);
		};

		var _speed		= ( $(obj).data('speed') ) ? $(obj).data('speed') : 30 ;
		var _winsize	= ( $(obj).attr('rule') && $(obj).attr('rule').indexOf('winsize') > -1 ) ? true : false ;
		var _prison		= ( $(obj).attr('rule') && $(obj).attr('rule').indexOf('prison') > -1 ) ? true : false ;
		var _height		= $(obj).data('height');
		if( _height ){
			$(obj).css('height',$(obj).data('height')+'px');
		};

		$(obj).customScrollbar({
			hScroll:false, // 가로스크롤
			vScroll:true, // 세로스크롤
			wheelSpeed:_speed,
			updateOnWindowResize:_winsize,
			preventDefaultScroll:_prison
		});

	};

	function setScrollbarStyleResize( obj ){

		$(obj).customScrollbar('resize', true);

	};

	$(document).ready(function(){

		//

	});

	$(window).load(function(){

		$('[scrollbar]').each(function( index ){
			setScrollbarStyle( $(this) );
		});

	});