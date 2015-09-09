(function($) {
  $.expr[":"].onScreen = function(elem) {
    var $window = $(window);
    var viewport_top = $window.scrollTop();
    var viewport_height = $window.height();
    var viewport_bottom = viewport_top + viewport_height;
    var $elem = $(elem);
    var top = $elem.offset().top;
    var height = $elem.height();
    var bottom = top + height;

    return (top >= viewport_top && top < viewport_bottom) ||
           (bottom > viewport_top && bottom <= viewport_bottom) ||
           (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
  };
})(jQuery);

(function($) {
jQuery(document).ready(function($) {
	jQuery('#scrolltop a').click(function(event) {
		event.preventDefault();
		$('body,html').animate({
		scrollTop: 0
		}, 1200);
		return false;
	});
}); // END ready
})(jQuery);