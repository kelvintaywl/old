var portfolioTop = $('section.portfolio h1').offset().top;
var profileTop = $('section.profile h1').offset().top;
var contactTop = $('section.contact h1').offset().top;

var portfolioText = [
						{'title':'Oboero 覚えろ', 'desc':'Tackling the monstruous verb conjugations of the Japanese language, <strong>Oboero</strong> comes with a Flashcard game, quick-and-dirty dictionary search and additional help tools. A <em>responsive web app</em> built on Flask (Python).', 'tech':'Flask, Google Spreadsheet, HTML5, CSS3, jQuery', 'link':'http://oboero.pythonanywhere.com', 'image':'img/oboero_front_min.png'},
						{'title':'Flattr Framework', 'desc':'<strong>Flattr</strong> is a microsite template that was born as a result of 5 days of trial-and-error. <em>Flat, trendy and minimalistic</em>, me thinks. Source code available for <em>free</em> on request.', 'tech':'HTML5, CSS3, jQuery', 'link':'http://kelvintaywl.pythonanywhere.com/flattr', 'image':'img/flattr_min.png'},
						{'title':'Glasshouse (Private Project)', 'desc':"This helper app was built on <strong>cool technologies</strong> - Google App Script, and Express JS. User provides item IDs of <a class='text' href='http://www.taobao.com' target='_blank'>Taobao</a> products and VIOLA! Item details are pulled into the spreadsheet in a flash! Web service example in link.", 'tech':'Node JS, Google App Script, Taobao API, JSON', 'link':'http://glasshouse.ap01.aws.af.cm/items?ids=17786744129,18831348900', 'image': 'img/default_min.png'},
						{'title':'VScheduler UI', 'desc':'<strong>VScheduler UI</strong> envisions how <em>schedule management system interfaces should be designed</em> for technically-challenged administrators.</em> Interaction design inspired by Facebook UX.', 'tech':'HTML5, CSS3, jQuery', 'link':'http://vhivescheduler.s3-website-ap-southeast-1.amazonaws.com/', 'image':'img/vscheduler_min.png' },
						{'title':'Selected Past Works', 'desc':'I have created numerous Interface designs, graphics, <em>mobile applications and enterprise web applications</em> in my spare time. Visit the link below for more of these selected works.', 'tech':'Adobe Flash, Fireworks, Groovy Grails, PhoneGap', 'link':'http://kelvintaywl.s3-website-us-east-1.amazonaws.com/index2.html#/portfolio', 'image':'img/pastworks_min.png'}
]
var counter = portfolioText.length;
$(document).ready(function(){

	$('div.masthead.stickyNav').hide();
	$(window).scroll(function(){
		if($(window).scrollTop() > 250){
			$('div.masthead.stickyNav').fadeIn();
		}
		else {
			$('div.masthead.stickyNav').fadeOut();
		};

		if($(window).scrollTop() > contactTop - 250){
			$('div.stickyNav nav ul li').removeClass('active');
			$('li.contact').addClass('active');
		}
		else if($(window).scrollTop() > profileTop - 250){
			$('div.stickyNav nav ul li').removeClass('active');
			$('li.profile').addClass('active');
		}
		else if($(window).scrollTop() > portfolioTop - 250){
			$('div.stickyNav nav ul li').removeClass('active');
			$('li.portfolio').addClass('active');
		}
		else {
			$('nav ul li').removeClass('active');
		}
	});

	//init portfolio

	$('#title').text(portfolioText[0]['title']);
	$('#text').html(portfolioText[0]['desc']);
	$('#tech').text(portfolioText[0]['tech']);
	$('#link').attr('href', portfolioText[0]['link']);
	$('#img').attr('src', portfolioText[0]['image']);

	for(var i = 0; i < portfolioText.length; i++){
		$('#carousel').append('<button class="carousel" data-item="' + i + '">' + (i+1) + '</button>');
	};
	$('button.carousel').first().addClass('active');

	$('button.carousel').click(function(){
		$('button.carousel').removeClass('active');
		$(this).addClass('active');
		var counter = parseInt($(this).attr('data-item'));
		if(!isNaN(counter)){
			$('#title').text(portfolioText[counter]['title']);
			$('#text').html(portfolioText[counter]['desc']);
			$('#tech').text(portfolioText[counter]['tech']);
			$('#link').attr('href', portfolioText[counter]['link']);
			$('#img').attr('src', portfolioText[counter]['image']);
		};
	});
	//end init


	$('li.portfolio').click(function(){ $(this).scrollTo(portfolioTop-100, 800); });
	$('li.profile').click(function(){ $(this).scrollTo(profileTop-100, 800); });
	$('li.contact').click(function(){ $(this).scrollTo(contactTop-100, 800); });
	$('li.main').click(function(){ $(this).scrollTo(0, 800); })
	//navigator.geolocation.getCurrentPosition(showMap, showError);

});


function showMap(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	alert("latlong= " + latitutde + ":" + longitude);
}

function showError() {
	alert('Oops.');
}

$.fn.scrollTo = function(loc, speed){
	$('nav ul li').removeClass('active');
	$(this).addClass('active');
	var ht = parseInt(loc);
	$('body,html').animate({scrollTop: ht}, speed);

}