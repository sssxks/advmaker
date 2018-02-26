function modal(remote,data){
	var modalContent = $.get(remote,function(responseTxt,statusTxt,xhr){
		if(statusTxt=="success"){
			if (data != null) {
				for (var i in data){
					console.log'\$' + i + '\$');
					console.log(data[i]);
					responseTxt.replace(new RegExp('\$' + i + '\$', 'g'),data[i]);
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
