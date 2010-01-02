(function($) {

// .removeAttr('foo bar')
var removeAttr = $.fn.removeAttr;
$.fn.removeAttr = function(attrs) {
	var elems = this;
	$.each(attrs.split(/\s+/), function(i, attr) {
		removeAttr.call(elems, attr);
	});

	return elems;
};

// get all radios in a set
$.fn.radio = function() {
	var radios = [],
		radio = this[0],
		name = radio.name,
		form = radio.form;

	if (!radio) {
		// do nothing
	} else  if (!name) {
		radios = [radio];
	} else if (form) {
		radios = $(form).find('[name=' + name + ']');
	} else {
		radios = $('[name=' + name + ']', radio.ownerDocument).filter(function() {
			return !this.form;
		});
	}

	return this.pushStack(radios);
}

})(jQuery);
