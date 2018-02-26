function modal(remote,data){
	var modalContent = $.get(remote,function(responseTxt,statusTxt,xhr){
		if(statusTxt=="success"){
			if (data != null) {
				console.log(1)
				for (var i in data){
					console.log(2)
					responseTxt.replace(new RegExp('$' + i + '$', 'g'),data[i]);
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
