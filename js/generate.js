$(document).ready(function(){
	$('.generate').click(function(){
		var output = {};
		if (document.getElementById("st_display").checked) {
			output.display = {};
			
			var title = document.getElementById("st_title").value;
			if (!title) {
				modal('modal/generate-error.htm',{
					reason:'未输入标题'
				});
				return;
			};
			//尝试将JSON转换为对象，若失败则保持不变.
			try {
				title = JSON.parse(title);
			} catch(err) {};
			output.display.title = title;
			
			var description = document.getElementById("st_description").value;
			try {
				description = JSON.parse(description);
			} catch(err) {};
			output.display.description = description;
			
			var icon = {
				item: document.getElementById("st_icon_item").value,
				data: Number(document.getElementById("st_icon_data").value) ?
					Number(document.getElementById("st_icon_data").value) :
					0
				};
			if (!icon.item){
				modal('modal/generate-error.htm',{
					reason:'未输入图标的物品ID'
				});
				return;
			}
			output.display.icon = icon;
			
			var frame = document.getElementById("st_frame").value;
			output.display.frame = frame;
			
			if (document.getElementById("st_root").checked) {
				var background = document.getElementById("st_background").value;
				if (background) {
					output.display.background = background;
				};
			} else {
				var parent = document.getElementById("st_parent").value;
				if (!parent) {
					modal('modal/generate-error.htm',{
						reason:'未输入父进度'
					});
					return;
				};
				output.display.parent = parent;
			};
			
			var hidden = document.getElementById("st_hidden").checked;
			output.display.hidden = hidden;
			
			var show_toast = document.getElementById("st_show_toast").checked;
			output.display.show_toast = show_toast;
			
			var announce_to_chat = document.getElementById("st_announce_to_chat").checked;
			output.display.announce_to_chat = announce_to_chat;
		};
		
		output
		
		var namespace = document.getElementById("st_namespace").value;
		if (!namespace) {
			modal('modal/generate-error.htm',{
				reason:'未输入命名空间'
			});
			return;
		};
		var name = document.getElementById("st_name").value;
		if (!name) {
			modal('modal/generate-error.htm',{
				reason:'未输入名称'
			});
			return;
		};
		output = JSON.stringify(output);
		
		var temp = [];
  		for (var i = 0; i <= output.length; i += 83) {
    	    		temp.push(output.slice(temp, temp + 83));
  		}
  		output = temp.join("<br>");
		console.log(output);
		
		modal('modal/generate-success.htm',{
			path: '你的存档/data/advancements/' + namespace + '/',
			name: name,
			code: output});
	});
});
