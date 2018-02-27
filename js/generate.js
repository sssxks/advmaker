$(document).ready(function(){
	$('.generate').click(function(){
		var output = {
				criteria:{}
			};
		if (document.getElementById("st_display").checked) {
			output.display = {};
			var title = document.getElementById("st_title").value
			if (title == null || title == '') {
				modal('modal/generate-error.htm',{
					reason:'未输入标题'
				})
			}
		var outputJSON = JSON.stringify(output);
		modal('modal/generate-success.htm',{
			path: 'dsa',
			code: 'asd'});
	});
});
