var light_theme = true;

function switchStyleLabel(labelText) {
	$('.theme-switcher span').hide();
	$('.theme-switcher span').text(labelText);
	$('.theme-switcher span').velocity("transition.expandIn", 500);
}

function switchStyle() {
//	console.log('firing switch_style()');
	if ($("link[title='light']")[0].disabled == false) { // light theme, switch to dark
		$("link[title='light']")[0].disabled = true;
  		$.cookie("light_theme", 'no');
 // 		$elements.velocity("callout.bounce");
 		switchStyleLabel('dark mode');
	} else {
		$("link[title='light']")[0].disabled = false;
		$.cookie("light_theme", 'yes');
		switchStyleLabel('light mode');
	}
}

function addClassLabel (label, thisElement, specificName) {
	thisElement.find('.port-catlabel-set').append('<span class="port-label label-' + specificName + '">' + label + '</span>');
}

jQuery(document).ready(function($){

	// make sure the light mode/dark mode label is correct
	if ($.cookie("light_theme")) {
		var light_theme = $.cookie("light_theme");
		if (light_theme === 'no') {
    		$('.theme-switcher span').text('dark mode');
    	}
    } 

	if ($('.portfolio').length){   // if we're on the portfolio page...
		
		if (sessionStorage['checked_tags']) {
			$('.pnl').hide();
			var initial_checked_tags = JSON.parse(sessionStorage['checked_tags']);
			$('ul.tags input').prop('checked', false);
			initial_checked_tags.forEach(function(item) {
				$('.'+item).show();
				$('input[rel="' + item + '"]').prop('checked', true);
			});
		}

		$('.pnl').each(function() {
			// add tag labels for each tag class
			var classList = $(this).attr('class').split(/\s+/);
			var thisPnl = $(this);
			$.each(classList, function(key, thisClass) {
				switch (thisClass) {
					case 'tag_ux': 
						addClassLabel('UX', thisPnl, thisClass);
						break;
					case 'tag_html_css':
						addClassLabel('HTML & CSS', thisPnl, thisClass);
						break;
					case 'tag_visual_design': 
						addClassLabel('visual design', thisPnl, thisClass);
						break;
					case 'tag_print_design': 
						addClassLabel('print design', thisPnl, thisClass);
						break;
					} // switch
				});
			});

		// here's the click handler for each filter checkbox
		$('ul.tags').find('input').on('click', function () {

			var checked_tags = [];

			this_tag = $(this).attr('rel');

			$('ul.tags').find('input:checked').each(function () {
				checked_tags.push(this_tag);
//				console.log(checked_tags);
				sessionStorage.setItem("checked_tags", JSON.stringify(checked_tags));
			});

			$('.pnl').each(function() {
				var thisObj = $(this);
				var matchClass = false;
				var classList = thisObj.attr('class').split(/\s+/);
				$.each(classList, function(key, thisClass) {
					if (checked_tags.indexOf(thisClass) > -1) {
						matchClass = true;
					//	console.log('matchClass is true on ' + thisClass);
					}
				});
				if (matchClass) {
					if (!thisObj.is(":visible")) {
						// make visible
						var thisObj = $(this);
						thisObj.velocity("slideDown", { duration: 150 });
						setTimeout(function() {
							thisObj.velocity({
				      			scaleY: 1,
				      			opacity: 1,
							    }, {
							      queue: false,
							      duration: 130,
							    });	
							}, 10);
					}
					
				} else {
					if (thisObj.is(":visible")) {
						// make invisible

						thisObj.velocity("slideUp", { duration: 150 });
						thisObj.velocity({
			      			scaleY: .6,
			      			opacity: 0
						    }, {
						      queue: false,
						      duration: 120
						    });	
					}
				}
	        });

		});
	}

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 600,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	$('#switch_link').bind("click", function() {
		event.preventDefault();
		switchStyle();
	});

});


// style switcher



