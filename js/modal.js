function modal(remote,data){
	var modalContent = $.get(remote,function(responseTxt,statusTxt,xhr){
		if(statusTxt=="success"){
			$('#modal').show();
			$('body').css('overflow','hidden').css('padding-right','17px');
		} else if(statusTxt=="error"){
			throw 'cannot load modal';
		};
	});
	alert(modalContent);
	if (data != null) {
		for (var i in data){
			modalContent.replace(new RegExp('$' + i + '$', 'g'),data[i]);
		};
	};
	$('.modal-content').html(modalContent);
}
