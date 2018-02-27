function modal(remote,data){
	var modalContent = $.get(remote,function(responseTxt,statusTxt,xhr){
		if(statusTxt=="success"){
			if (data != null) {
				for (var i in data){
					console.log('_' + i + ':' + data[i]);
					responseTxt.split('_' + i).join(data[i]);
				};
			};
			console.log(responseTxt);
			$('.modal-content').html(responseTxt);
			$('#modal').fadeIn(1000);
			$('.modal-content').addClass('animated flipInX')
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).removeClass('animated flipInX');
				});
			$('body').css('overflow','hidden').css('padding-right','17px');
			
			$('.close,#button-ok').off();
			$('.close,#button-ok').on('click',function (){
				$('.modal-content').addClass('animated flipOutX')
					.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animated flipOutX');
						$('body').css('overflow','auto').css('padding-right','0');
					});
				$('#modal').fadeOut(1000);
			});
		} else if(statusTxt=="error"){
			throw 'cannot load modal';
		};
	});	
}
/*$(document).ready(function(){
	
});*/
