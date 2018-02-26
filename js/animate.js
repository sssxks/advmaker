$(document).ready(function(){
	//加载动画
	$('#content').addClass('animated fadeInUp')
		.css('-webkit-animation-duration','0.5s')
		.css('animation-duration','0.5s')
		.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('animated fadeInUp');
			$(this).attr('style','');
		});
	$('#header').slideDown(450);
	//提示框
	$('body').tooltip({
		track: true
	});
	
	$('#st_display').click(function (){
		//var value = document.getElementById('display_or_do_not').checked;
		$('#c_display').toggle(350);
	});
	
	$('#st_root').click(function(){
		var value = document.getElementById('st_root').checked;
		$('#i_root').fadeToggle(500);
		if (value) {
			$('#parent').fadeToggle(250,function(){
				$('#background').fadeToggle(250);
			});
		} else {
			$('#background').fadeToggle(250,function(){
				$('#parent').fadeToggle(250);
			});
		};
	});
	
	$('#st_reward').click(function(){
		//var value = document.getElementById('has_reward_or_do_not').checked;
		$('#c_reward').toggle(350);
	});
	
});



