var criteriaList = [];

var trigger = {
	name: '某条件',
	id: 233,
	type: 'impossible',
	condition: {}
};
var group = {
	name: '某组',
	id: 233,
	triggers: [trigger]
};

function Trigger(type) {
	function getTriggerNum(){
		var triggerNum = 0;
		for (var i_index in criteriaList) {
			var i = criteriaList[i_index];
			triggerNum +=(i.triggers.length);
		};
		return triggerNum;
	};
	this.name = '条件 ' + (getTriggerNum() + 1); //唯一的，并可设置
	this.id = getTriggerNum() + 1; //唯一的，取决于已经有的 trigger 数量，仅用于标识
	if (type != null){
		this.type = type;
	} else {
		this.type = trigger.type;
	};
	this.condition = trigger.condition;
};
function Group(){
	this.name = '组 ' + (criteriaList.length + 1); //唯一的，并可设置
	this.id = criteriaList.length + 1;//唯一的，取决于已经有的 group 数量，仅用于标识
	this.triggers = [];
};

function getGroupById(id) {
	for (var i in criteriaList) {
		var check = criteriaList[i];
		if (id == check.id){
			return check;
		};
	};
	return null;
};

$(document).ready(function (){
	$('#addGroup').click(function (){
		//创建对象
		var newGroup = new Group();
		var newTrigger = new Trigger();
		//添加对象至列表
		newGroup.triggers.push(newTrigger);
		criteriaList.push(newGroup);
		//添加元素
		$('#c_addGroup').before('<div id="group_'+ newGroup.id + '" class="group"></div>');
		$('#group_' + newGroup.id).append('<p class="group_title">' + newGroup.name + '</p>')
			.append('<p id="trigger_' + newTrigger.id + '" class="trigger" style="display:none;">' + newTrigger.name + '</p>')
			.append('<p class="trigger"><a id="addTrigger_' + newGroup.id +'" class="addTrigger" href="javascript:void(0);" style="display:none">添加条件</a></p>');
		$('#trigger_' + newTrigger.id).fadeIn(300);
		$('#addTrigger_' + newGroup.id).fadeIn(300);
		//更新监听
		$('.addTrigger').off();
		$('.addTrigger').on('click',function(){
			var newTrigger = new Trigger();
			getGroupById(Number($(this).attr('id').split('_')[1])).triggers.push(newTrigger);
			$(this).parent().before('<p id="trigger_' + newTrigger.id + '" class="trigger" style="display:none;">' + newTrigger.name + '</p>');
			$('#trigger_' + newTrigger.id).fadeIn(300);
		});
	});
});