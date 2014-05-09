/* introProto js */
/* Requires jQuery and Velocity plugin */

(function() {
	var $q1 = $('.q1'),
			$q2 = $('.q2'),
			$q3 = $('.q3'),
			$q4 = $('.q4'),
			$quadContainer = $('.quadWrapper'),
			$quads = $('.quad');

			$quads.on('mouseenter.quad', function(){
				$quads.removeClass('quadActive');
				$(this).velocity({
					width: "+=5em",
					height: "+=5em"
				}).addClass('quadActive');
				$(this).find('.desc').velocity({
					'lineHeight': '+=5em',
					'width': '+=5em'
				})
				$quads.not(this).velocity({
					width: "-=5em",
					height: "-=5em"
				})
			}).on('mouseleave.quad', function() {
				$(this).velocity('reverse');
				$(this).find('.desc').velocity('reverse');
				$quads.not(this).velocity('reverse');
			});
}())