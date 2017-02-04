$(document).ready(function(){
	// 搜索框
	$("#search-icon").click(function(){
		$('#search-box').addClass('scale');
	});
	$("#close-icon").click(function(){
		$('#search-box').removeClass('scale');
	});
	// 导航栏下拉
	$("header nav li").hover(function(){
		$(this).children(".submenu").slideDown();
	},function(){
		$(this).children(".submenu").slideUp();
	});

	//课程列表
	//hover显示 
	$(".lesson-list ul li").hover(function(){
		console.log();
		$(this).children(".lesson-infor").css("height",175);
		$(this).find("p").slideDown();
		$(this).find(".zhongji").fadeIn();
		$(this).find(".learn-number").fadeIn();
		$(this).find(".lessonicon-box").css("bottom",-2);
	},function(){
		$(this).children(".lesson-infor").css("height",88);
		$(this).find("p").slideUp();
		$(this).find(".zhongji").fadeOut();
		$(this).find(".learn-number").fadeOut();
		$(this).find(".lessonicon-box").css("bottom",4);
	});
	// 块状和列表切换
	$('.kuai-icon').click(function(){
		$('#changeid').removeClass();
		$('#changeid').addClass('lesson-list');
		localStorage.listtype="lesson-list";
	})
	$('.previewMode .list-icon').click(function(){
		$('#changeid').removeClass();
		$('#changeid').addClass('lesson-list2');
		localStorage.listtype="lesson-list2";
		console.log(localStorage.listtype);
	})
	// 
	if(localStorage.listtype){
		$('#changeid').removeClass();
		$('#changeid').addClass(localStorage.listtype);
	}
})