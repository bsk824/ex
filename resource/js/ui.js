var win = $(window);
var html = $('html');

win.resize(function(){
	fontSize();
});

function fontSize() {
	var baseW = 320 / 62.5;
	var winW = win.width();
	if (winW <= 600) {
		var fontSize = winW / baseW;
		html.css('font-size', Math.floor(fontSize*100)/100 + '%');
	} else { 
		html.css('');
	}
}
fontSize();