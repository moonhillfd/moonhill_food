

$(document).ready(function(){
	var url = 'https://rss.blog.naver.com/moonhillfood.xml';
	$.ajax({
		type : 'GET',
		url : "https://api.rss2json.com/v1/api.json?rss_url=" + url,
		dataType : 'jsonp',
		success : function(data) {
			var itemsFeed = data.feed;
			var feedContent = "<a class='link' target='_blank' href=" + itemsFeed.link + ">" + "<img class='image' src=" + itemsFeed.image + " alt='달맞이자연식품 제나차 제나선 다이어트차 공식 네이버블로그' />" +
			"<div class='header_content'><p class='title'>" + itemsFeed.title + "</p><p class='description'>" + itemsFeed.description + "</p></div>";
			$(feedContent).appendTo("#xmlBlogTitle");

			var itemsArr = data.items;
			for (var i = 0; i < itemsArr.length; i++) {
				var blogData = itemsArr[i];
				var rowText = "<div class='naver_blog_item'><a class='link' target='_blank' href=" + blogData.link + ">" + 
				"<p class='title'>" + blogData.title + "</p><p class='date'>" + blogData.pubDate + "</p><p class='content'>" + blogData.description + "</p></a></div>";
				$(rowText).appendTo("#xmlBlogContent");
			}
		}

	});

});


$(window).load(function(){

	//

});