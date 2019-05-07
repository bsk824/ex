$(window).resize(function(){
	fontSize();
});

function fontSize() {
	var winW = $(window).width();
	if (winW <= 560) {
		var fontSize = winW / 5.76;
		$('html').css('font-size', Math.floor(fontSize*100)/100 + '%');
	} else {
		$('html').css('font-size','62.5%');
	}
}
fontSize();
var slideObj = {};
function topSlide() {
	var obj = 'topSlide';
	var slide = new Swiper('.' + obj + ' .slide', {
		loop: true,
		speed: 500,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: '.' + obj + ' .slideNext',
			prevEl: '.' + obj + ' .slidePrev',
		},
		pagination: {
			el: '.' + obj + ' .slidePage',
			clickable: true,
			renderBullet: function (index, className) {
				return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
			}
		}
	});
	slideObj.topSlide = slide;
}
function mdSlide() {
	var obj = 'mdSlide';
	var slide = new Swiper('.' + obj + ' .slide', {
		speed: 500,
		slidesPerView: 2,
		slidesPerColumn: 2,
		slidesPerGroup: 2,
		pagination: {
			el: '.' + obj + ' .swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.' + obj + ' .slideNext',
			prevEl: '.' + obj + ' .slidePrev',
		}
	});
	slideObj.mdSlide = slide;
}
// 쿠키 설정
function setCookie(name, value, expiredays) {
	var today = new Date();
	today.setDate( today.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";"
}

// 쿠키 가져오기
function getCookie(key) {
	var cook = document.cookie + ";";
	var idx = cook.indexOf(key, 0);
	var val = "";

	if(idx != -1) {
		cook = cook.substring(idx, cook.length);
		begin = cook.indexOf("=", 0) + 1;
		end = cook.indexOf(";", begin);
		val = unescape( cook.substring(begin, end) );
	}
	return val;
}
