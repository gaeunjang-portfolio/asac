$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#header').addClass('header_bg');
    } else {
        $('#header').removeClass('header_bg');
    }
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 7000) {
        $('.graph_box').addClass('graph_ani');
    } else {
        $('.graph_box').removeClass('graph_ani');
    }
});

