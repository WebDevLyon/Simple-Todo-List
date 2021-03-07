$(function () {
	$(".block2").hide();
	$(".block1").hover(
		function () {
			$(".block2").show();
		},
		function () {
			$(".block2").hide();
		}
	);
	$('#color').keydown(function(){
		$('.block1').css('background-color', '#000')
	});
	$('#color').keyup(function(){
		$('.block1').css('background-color', 'blue')
	})
});
