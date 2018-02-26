function modal(remote,data){
	var content = $.get(remote,function(responseTxt,statusTxt,xhr){
		if(statusTxt=="success"){
			$('#modal').show();
			$('body').css('overflow','hidden').css('padding-right','17px');
		} else if(statusTxt=="error"){
			throw 'cannot load modal';
		};
	});
	if (data != null) {
		for (var i in data){
			content.replace(new RegExp('$' + i + '$', 'g'),data[i]);
		};
	};
	$('.modal-content').html(content);
}
