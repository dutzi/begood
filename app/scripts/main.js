'use strict';

console.log('\'Allo \'Allo!');

$(document).ready(function () {
	function hideModal() {
		$('.bg_modal-container').removeClass('u-show');
	}

	$('.bg_modal-backdrop').on('click', hideModal);
	$('.bg_modal-closeBtn').on('click', hideModal);

	$('.video-container .video').on('click', function (e) {
		$('.bg_modal-container').addClass('u-show');
		var bgColor = $(e.currentTarget).css('background-color');

		$('.bg_modal-text').css({
			display: 'none'
		});

		$('.bg_modal-video').css({
			backgroundColor: bgColor,
			display: 'block'
		});

		onResize();
	});

	$('.logo').on('click', function () {
		$('.bg_modal-container').addClass('u-show');

		$('.bg_modal-text').css({
			display: 'block'
		}).html($('#aboutText').html());

		$('.bg_modal-video').css({
			display: 'none'
		});

		onResize();
	});

	function onResize() {
		var ratio = 0.7;
		var width = window.innerWidth * ratio;
		var height = window.innerHeight * ratio;
		var size = Math.min(width, height);

		$('.bg_modal').css({
			width: size,
			height: size,
			marginLeft: -size / 2,
			marginTop: -size / 2
		});
	}

	$(window).on('resize', onResize);
});
