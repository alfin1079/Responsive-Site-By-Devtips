$(function(){
	smoothScrool(1000);
	workbelt();
	workLoad();
})

// SmoothScrool function is applied from the document ready function
function smoothScrool(duration){
	$('a[href^="#"]').on('click',function(event){
		var target = $( $(this).attr('href'));

		if(target.length){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

function workbelt(){
	$(".thumb-unit").click(function(){
		$(".work-belt").css('left','-100%');
		$('.work-container').show();
	});

	$(".work-return").click(function(){
		$(".work-belt").css('left','0%');
		$('.work-container').hide(800); 
	});
}

function workLoad(){
	$.ajaxSetup({ cache: false });

	$(".thumb-unit").click(function(){
		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			folder = $(this).data(folder),
			newHTML = '/work/'+newFolder+'.html';
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
	});
}

