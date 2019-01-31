window.onload = function() {
	var textarea = document.querySelector('textarea');

	textarea.addEventListener('keydown', autosize);

	function autosize() {
		var el = this;
		setTimeout(function() {
			el.style.cssText = 'height:auto; padding:5';
			// for box-sizing other than "content-box" use:
			// el.style.cssText = '-moz-box-sizing:content-box';
			el.style.cssText = 'height:' + el.scrollHeight + 'px';
		}, 0);
	}
};