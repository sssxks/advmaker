function modal(remote,data){
	var modalContent = $.get(remote,function(responseTxt,statusTxt,xhr){
		if(statusTxt=="success"){
			if (data != null) {
				for (var i in data){
					console.log('_' + i + ':' + data[i]);
					responseTxt.replace(new RegExp('_' + i, 'g'), data[i]);
				};
			};
			console.log(responseTxt);
			$('.modal-content').html(responseTxt);
			$('#modal').show();
			$('body').css('overflow','hidden').css('padding-right','17px');
			
		} else if(statusTxt=="error"){
			throw 'cannot load modal';
		};
	});	
}
$(document).ready(function(){
	$('.close,#button-ok').click(function (){
		$('#modal').hide();
		$('body').css('overflow','auto').css('padding-right','0');
	});
});
