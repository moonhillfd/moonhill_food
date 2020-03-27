/* 2018 VER 0.1 */
/* PHOTO REVIEW :: WITH PANDASSI */
$(document).ready(function() {
    var t, e, i, s, a, r, o, p, n = !!$.CAFE24_SDK_REVIEWER_UP && $.CAFE24_SDK_REVIEWER_UP.skin.shift(),
        d = {},
        l = 1,
        h = $.CAFE24_SDK_REVIEWER_UP.cell_size;
        h = parseInt(h), h = isNaN(h) || h <= 0 ? 195 : h, h = $("#sp-photoreview .jq_lister_guide_co.size").width() - 3;
    var c = !0,
        u = !0,
        w = $(".xans-photoreview-display .more"),
        g = {};

    function v() {
        if (x(), n.data && n.data.length > 0)
            for (var t = 0; t < n.data.length; t++) {
                var e = n.data[t];
                e.index = t, "string" == typeof e.rcont && (e.rcont = e.rcont.replace(/<p[^>]*>/g, "").replace(/<\/p>/g, "<br/>")), d[e.no] = e
            }
    }

    function m(t) {
        n = t, v();
        var e = [],
            i = t.data;
        if (i && i.length > 0) {
            for (var s = 0; s < i.length; s++) {
                var a = f(i[s]);
                a && e.push(a)
            }
            e.length > 0 && $(".lister_wrap").lister.addCell(e), x()
        }(l = n.page) >= o ? w.hide() : w.show(), u = !0
    }

    function f(t) {
        var e = [];
        1 == c ? t.rhimg : t.rimg;
        return e.push("<ul>"), e.push("<li>"), 
			   e.push('<div class="sp-photoreview-box">'),
			   e.push('<p class="thumb"><a href="#none" rel="' + t.no + '" class="zoom"><img src="' + t.rhimg + '" alt="" /></a></p>'),
			   e.push('<p class="title">' + t.rsub + "</p>"), 
			   e.push('<p class="user">'), e.push('<span class="writer">' + t.rwriter + "</span>"), 
			   e.push('<span class="date">' + t.rdate.substring(5, 11) + "</span>"), 
			   e.push("</p>"), 
			   e.push('<div class="product">'), 
			   e.push('<p class="img"><a href="/product/detail.html?product_no=' + t.pno + '"><img src="' + t.pimg_medium + '"></a></p>'), 
			   e.push('<p class="desc">'), 
			   e.push('<span class="name">' + t.pname + "</span>"), 
			   e.push('<span class="name trick">상품정보가 없습니다.</span>'), 
			   e.push('<span class="count"><i>' + t.pprice + '</i>평점 <img src="/_sp/image/cafe24/board/ico_point' + t.rpoint + '.gif"></span>'), 
			   e.push("</p>"), 
			   e.push("</div>"), 
			   e.push("</div>"), 
			   e.push("</li>"), 
			   e.push("</ul>"), 
			   e.join("")
    }

    function _(t) {
        1 == t ? $("body").css("overflow", "scroll") : $("body").css("overflow", "hidden")
    }

    function y() {
        $(".xans-photoreview-display .detail-dimmed").hide(), $(".xans-photoreview-display .detail").hide(), _(!0)
    }

    function x() {
        1 == r && $(".xans-photoreview-display .is_detail").remove(), !0 !== s && $(".xans-photoreview-display .is_rating").remove()
    }! function() {
        if ("function" != typeof $(".lister_wrap").lister) return;
        if (n && n.data.length > 0) t = n.pno, e = n.cnt, i = n.type, r = n.detail, s = n.config.use_point, a = n.config, p = n.sort, (o = n.total_page) > 1 && w.show(), v(), $(document).delegate(".jq_lister_cell .zoom", "click", function(t) {
            t.preventDefault();
            var e = $(this).attr("rel");
            ! function(t) {
                if (d[t]) {
                    var e, i = d[t];
                    if (i) {
                        var s = function(t) {
                            if (g[t.rno]) return g[t.rno];
                            var e = [];
                            if (t.rhimg && /^.*\.(jpg|jpeg|png|gif|bmp)$/i.test(t.rhimg) && e.push(t.rhimg), t.attach && t.attach.length > 0)
                                for (var i = 0; i < t.attach.length; i++) {
                                    var s = t.attach[i];
                                    "string" == typeof s.att_path && /^.*\.(jpg|jpeg|png|gif|bmp)$/i.test(s.att_path) && e.push(s.att_path)
                                }
                            return g[t.rno] = e, g[t.rno]
                        }(i);
                        if ($(".xans-photoreview-display .detail .post span").html(i.rwriter), $(".xans-photoreview-display .detail .image").html(""), s.length > 0) {
                            var a = "";
                            a = '<div class="sp-slider" data-fade="true" data-autoplayspeed="400000" data-speed="0" hover="true" arrows="wht-h-m" arrowsArea="h-in-33" dots="circle-s" dotsArea="in-t-l">';
                            for (var r = 0; r < s.length; r++) a += '<div class="sp-slider-loop"><ul><li><img src="' + s[r] + '" /></li></ul></div>';
                            a += "</div>", $(".xans-photoreview-display .detail .image").html(a), "undefined" != typeof setSlickSlider && $.isFunction(setSlickSlider) && setTimeout(function() {
                                setSlickSlider()
                            }, 1)
                        }
                        e = "", e += '<div class="product ' + i.pno + '">', e += '    <p class="img"><a href="/product/detail.html?product_no=' + i.pno + '"><img src="' + i.pimg_medium + '"></a></p>', e += '    <p class="desc">', e += '        <span class="name">' + i.pname + "</span>", e += '        <span class="name trick">상품정보가 없습니다.</span>', e += '        <span class="count"><i>' + i.pprice + '</i>평점 <img src="/_sp/image/cafe24/board/ico_point' + i.rpoint + '.gif"></span>', e += "    </p>", e += '\t<div class="description">' + i.rcont + "</div>", e += '\t<div class="sp-btn-group mgt1" grid="1"><a href="/product/detail.html?product_no=' + i.pno + '" class="sp-btn" theme="white" scale="large" change="right"><span>상품 상세보기</span></a></div>', e += '\t<div class="sp-btn-group" grid="1"><a href="/board/product/read.html?no=' + i.rno + "&board_no=" + $("#sp-photoreview").attr("board") + '" class="sp-btn" theme="black" scale="large" change="right"><span>상품후기 상세보기</span></a></div>', e += "</div>", $(".xans-photoreview-display .detail .contents").html(e), $(".xans-photoreview-display .detail-dimmed").show(), $(".xans-photoreview-display .detail").fadeIn("fast"), _(!1)
                    }
                }
            }(e)
        }), $(".xans-photoreview-display .more").click(function(r) {
            if (r.preventDefault(), l >= o) return w.hide(), !1;
            1 == u && (u = !1, w.hide(), $.CAFE24_SDK_REVIEWER_UP.call_more({
                act: "getMore",
                pno: t,
                next: l + 1,
                cnt: e,
                mode: i,
                point: s,
                config: a,
                sort: p
            }, m))
        }), $(".xans-photoreview-display .detail .close, .xans-photoreview-display .detail-dimmed").click(function(t) {
            y()
        }), $(".xans-photoreview-display .detail").click(function(t) {
            t.stopPropagation()
        }), $(document).keyup(function(t) {
            27 == t.keyCode && y()
        });
        else {
            var x = f({
                no: "#",
                rsub: "리뷰가 없습니다.",
                rwriter: "",
                rdate: "",
                rhit: "",
                rimg: "",
                rhimg: ""
            });
            $(".xans-photoreview-display .lister_wrap").html(x), $(".xans-photoreview-display .is_rating").hide()
        }
        $(".xans-photoreview-display .lister_wrap").show(), $(".lister_wrap").lister({
            l_type: "pinterest",
            c_wid: h
        }), $('.xans-photoreview-display .lister_wrap .jq_lister_cell img[src=""]').hide(), c = function() {
            var t = $(".jq_lister_cell dt a img"),
                e = 0;
            if (t.length > 0)
                for (var i = 0; i < t.length; i++) {
                    var s = $(t[i]).attr("src"); - 1 !== s.search("/gallery/") && e++
                }
            if (e > 1) return !1;
            return !0
        }()
    }();
    new Image;
    var b, E, k, S, I = 0;
    setInterval(function() {
        var t, e, i;
        "block" === $("#sp-photoreview .detail-dimmed").css("display") && (t = $("#sp-photoreview .slick-active img").attr("src"), e = function(t) {
            b = t[0].x, E = t[0].y, k = .85 * $(window).width() - $("#sp-photoreview .sp-photoreview-layer .product").outerWidth(), S = .85 * $(window).height(), k = Math.round(k), S = Math.round(S), b > k && E > S ? (I = S, setwidth = b * I / E, setwidth > k && (setwidth = k)) : b > k ? (setwidth = k, I = E) : E > S ? (I = S, setwidth = b * I / E) : (setwidth = b, I = E), $(window).width() < 601 && (setwidth = $(window).width() - 5, I = $(window).height(), E > I && (setwidth = b * I / E, setwidth > $(window).width() && (setwidth = $(window).width() - 5))), setwidth = Math.round(setwidth), I = Math.round(I), "undefined" != typeof resetSlickSlider && $.isFunction(resetSlickSlider) && ($("#sp-photoreview .sp-slider").css("width").replace("px", "") == setwidth && $("#sp-photoreview .sp-slider").css("height").replace("px", "") == I || (console.log("RESIZE PHOTOREVIEW"), $("#sp-photoreview .sp-photoreview-layer .detail").css("width", setwidth), $("#sp-photoreview .sp-slider").css({
                width: setwidth,
                height: I
            }), setTimeout(function() {
                resetSlickSlider($("#sp-photoreview .sp-slider"))
            }, 1)))
        }, (i = new Image).src = t, i.onload = function() {
            var i = [{
                x: this.width,
                y: this.height,
                url: t
            }];
            e(i)
        })
    }, 100), $("#sp-photoreview").css("visibility", "visible")
});

/* PHOTO REVIEW LISTER :: WITH PANDASSI */
! function(i) {
    var t, e, d, n, s;
    i.fn.lister = function(l) {
        t = i.extend({}, i.fn.lister.defaults, l);
        var r, c, _ = i(this);
        return e = i(_[0]), "pinterest" == t.l_type ? ((c = {
            c_wid: 186,
            w_wid: 0,
            init: function() {
                this.setCss(), this.valWidth(), this.calWidth(), this.getCell(), this.genGuide(), this.appendCell(), this.evtSet()
            },
            reGroup: function() {
                this.clean(), this.responsiveWidth(), this.calWidth(), this.genGuide(), this.appendCell()
            }
        }).evtSet = function() {
            i.browser.msie ? setInterval(function() {
                s && s != e.parent().width() && c.reGroup(), s = e.parent().width()
            }, 500) : i(window).resize(function() {
                clearTimeout(n), n = setTimeout(function() {
                    c.reGroup()
                }, 100)
            })
        }, c.ieBoxShadow = function() {
            i.browser.msie && i(".jq_lister_cell").css({
                "border-bottom": "2px solid #c9c7c8",
                "border-left": "1px solid #c9c7c8",
                "border-top": "1px solid #dedcdd",
                "border-right": "1px solid #c9c7c8"
            })
        }, c.clean = function() {
            i(".jq_lister_guide_co").remove()
        }, c.setCss = function() {
            t.c_wid || (t.c_wid = this.c_wid), t.c_hei || (t.c_hei = this.c_hei), t.w_wid || (t.w_wid = e.width()), e.addClass("jq_lister_pinterest")
        }, c.valWidth = function() {
            t.c_wid < this.c_wid && (t.c_wid = this.c_wid), t.w_wid < this.w_wid && (t.w_wid = this.w_wid), e.css({
                width: "100%"
            })
        }, c.responsiveWidth = function() {
            t.w_wid = e.parent().width(), 300 >= t.w_wid && (t.w_wid = 300), e.css({
                width: t.w_wid
            })
        }, c.calWidth = function() {
            t.c_num = Math.floor(t.w_wid / t.c_wid), t.w_pad = Math.floor(t.w_wid % t.c_wid / 2)
        }, c.getCell = function() {
            d = e.children("ul")
        }, c.genGuide = function() {
            i(".lister_clear").remove();
            for (var d = 0; d < t.c_num; d++) {
                var n, s = "jq_lister_guide" + d;
                n = 1 == t.c_num && 0 == d ? i("<div/>").css({
                    "vertical-align": "top",
                    width: "100%"
                }) : i("<div/>").css({
                    "vertical-align": "top",
                    width: t.c_wid
                }), t.c_num > 1 && 0 == d && n.css({
                    "margin-left": t.w_pad
                }), n.attr("id", s), n.addClass("jq_lister_guide_co"), e.append(n)
            }
            e.append('<div class="lister_clear" style="clear:both"></div>')
        }, c.appendCell = function() {
            if (d.length > 0)
                for (var n = 0; n < d.length; n++) {
                    var s = n % t.c_num;
                    i(d[n]).addClass("jq_lister_cell").appendTo("#jq_lister_guide" + s), this.next = (n + 1) % t.c_num
                }
            e.fadeIn(500), t.c_num
        }, c.addCell = function(e) {
            if (e && e.length > 0) {
                for (var n = this.next, s = 0; s < e.length; s++) {
                    var l = (s + n) % t.c_num;
                    i(e[s]).addClass("jq_lister_cell item_append").hide().appendTo("#jq_lister_guide" + l), this.next = (s + n + 1) % t.c_num, d.push(i(e[s]))
                }
                i(".item_append").fadeIn("fast")
            }
        }, r = c) : "tumblr" == t.l_type ? r = tumblr() : "instagram" == t.l_type && (r = instagram()), r && (r.init(), r.evtSet()), i.fn.lister.list_man = r, _
    }, i.fn.lister.addCell = function(t) {
        i.fn.lister.list_man.addCell(t)
    }, i.fn.lister.defaults = {
        l_type: "pinterest"
    }
}(jQuery);