/* introProto js */
/* Requires jQuery and Velocity plugin */

(function() {
	var $q1 = $('.q1'),
			$q2 = $('.q2'),
			$q3 = $('.q3'),
			$q4 = $('.q4'),
			$quadWrapper = $('.quadWrapper'),
			$quads = $('.quad');

			$quads.on('click.quad', function() {
				var duration1 = 500
						delay1 = 600,
						duration2 = 500,
						thisQuad = $(this);

				// Animate the selected quadrant
				thisQuad.addClass('selected').velocity({
					width: '100%',
					height: '100%'
				}, {
					duration: duration1,
					easing: 'easeOutCubic'
				});

				// Animate the text inside the quadrant
				thisQuad.find('span').velocity({
					'lineHeight': '16em',
					width: '100%',
					height: '100%'
				}, {
					duration: duration1,
					easing: 'easeOutCubic'
				}).delay(100).velocity({
					opacity: 0
				}, {
					duration: duration2,
					display: 'none'
				});

				thisQuad.find('.content').delay(100 + duration1 + duration2).velocity({
					opacity: 1
				}, {
					display: 'block',
					duration: duration2
				});

				// Animate the page container
				$quadWrapper.delay(delay1).velocity({
					width: '100%',
					height: '+=2em'
				}, {
					duration: duration2,
					easing: 'easeOutCubic'
				});
			});
}())