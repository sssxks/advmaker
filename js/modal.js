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
			$('#modal').show();
			$('.modal-content').addClass('animated filpInX')
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).removeClass('animated filpInX');
				});
			$('body').css('overflow','hidden').css('padding-right','17px');
			
			$('.close,#button-ok').off();
			$('.close,#button-ok').on('click',function (){
				console.log('hidden modal');
				$('#modal').hide();
				$('.modal-content').addClass('animated filpOutX')
					.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animated filpOutX');
					});
				$('body').css('overflow','auto').css('padding-right','0');
			});
		} else if(statusTxt=="error"){
			throw 'cannot load modal';
		};
	});	
}
/*$(document).ready(function(){
	
});*/
