var light_theme = true;


jQuery(document).ready(function($){

	// make sure the light mode/dark mode label is correct
	if ($.cookie("light_theme")) {
		var light_theme = $.cookie("light_theme");
		if (light_theme === 'no') {
    		switchStyleLabel('dark theme');
    	} else {
    		switchStyleLabel('light theme');
    	}
    }  else switchStyleLabel('light theme');

    if ($('.circle-outer').length) {  // if we're on the home page, animate...
    	$('.circle-outer').velocity("transition.expandIn", 600, function(){
    		$('.pointy').velocity({ 
    			opacity: 1
    		}, 300, "easeInSine");
    	});
 	  	$('.hi').velocity("transition.expandIn", {
    		duration: 500,
    		delay: 400
   		} 
    	); 
    	$('.home-text').velocity(
    	{
    		opacity: 1,
    		duration: 600
    	}, {
    		delay: 400 
    	}
    	);
    } // end if

    if ($('.resume').length) {
		$('.resume').velocity({ 
    			opacity: 1
    		}, 300, "easeInSine");
    }

	if ($('.portfolio').length){   // if we're on the portfolio page...
		
		$('.portfolio').velocity({ 
    			opacity: 1
    		}, 300, "easeInSine");

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
					case 'tag_visual_design': 
						addClassLabel('visual design', thisPnl, thisClass);
						break;
					case 'tag_html_css':
						addClassLabel('HTML & CSS', thisPnl, thisClass);
						break;
					case 'tag_print_design': 
						addClassLabel('print design', thisPnl, thisClass);
						break;
					case 'tag_illustration': 
						addClassLabel('illustration', thisPnl, thisClass);
						break;
					} // switch
				});
			});

		$('ul.tags label').hover(function(){
			var this_tag = $(this).attr('for').slice(9);
			$('.label-tag_' + this_tag).addClass('hilite');
	//		alert('hovering .label-tag_' + this_tag);
		}, function() {
			var this_tag = $(this).attr('for').slice(9);
			$('.label-tag_' + this_tag).removeClass('hilite');
		});
		$('ul.tags label').mouseleave(function(){
			var this_tag = $(this).attr('for').slice(9);
			$('.label-tag_' + this_tag).removeClass('hilite');
			$('.label-tag_' + this_tag).attr("style", "");
		});
		$('.utility-bar').mouseleave(function(){
			$('.port-label').removeClass('hilite');
		})
	//	$('.pnl').hover(function(){
	//		$('.port-label').removeClass('hilite');
	//	})

		// here's the click handler for each filter checkbox.

		$('ul.tags').find('input').on('click', function () {

			$('.filter-alert-box').velocity("slideUp", { duration: 150 });
			$('.filter-alert-box').velocity({
      			scaleY: 0,
      			opacity: 0
			    }, {
			      queue: false,
			      duration: 120
			    });	

			var checked_tags = [];

			var this_tag = $(this).attr('rel').slice(4);
			var turnedOn= this.checked;

			$('ul.tags').find('input:checked').each(function () {
				checked_tags.push($(this).attr('rel'));
				console.log(checked_tags);
				sessionStorage.setItem("checked_tags", JSON.stringify(checked_tags));
			});

//			console.log ('sessionStorage: ' + sessionStorage.getItem("checked_tags"));

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
						//	$('.label-tag_' + this_tag).velocity('transition.shrinkIn', 600);
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
			
			light_theme = $.cookie("light_theme");
/*			
			getting rid of the tag-pulse-on-click. bye

			var tagCalloutFore = "";
			var tagCalloutBg = "";
			if (light_theme === 'no') {
				// dark
				tagCalloutFore = '#fff';
				tagCalloutBg = '#6d7369'
			} else {
				// light
				tagCalloutFore = '#111';
				tagCalloutBg = '#cecece' 
			}

			if (turnedOn) {
				// pulse all the tag labels corresponding to the checkbox just checked
				$('.label-tag_' + this_tag).velocity({
		//				scaleX: 1.06, 
		//				scaleY: 1.06,
						color: tagCalloutFore,
						backgroundColor: tagCalloutBg
					}, {
						duration: 120,
						delay: 15
					}
					).velocity("reverse", { duration: 350 });
				} // end if turned on
*/
			setTimeout(function(){
				if (!$('.pnl:visible').length) {
					sessionStorage.setItem("checked_tags", []);
					//	alert('everything is invisible!!')
					//	$('.filter-alert-box').velocity('transition.flipYIn');
					$('.filter-alert-box').velocity("slideDown", { duration: 140 });
					$('.filter-alert-box').velocity({
		      			scaleY: 1,
		      			opacity: 1
					    }, {
					      queue: false,
					      duration: 140
					    });	
					}
				}, 250);
				

		}); // end click function for tag checkboxes
	} // end if on portfolio page

	// back to top button/script courtesy http://codyhouse.co/gem/back-to-top/
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 500,
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
		$('.port-label').removeAttr('style');
		event.preventDefault();
		switchStyle();
	});

}); // documnent ready function

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
 		switchStyleLabel('dark theme');
	} else {
		$("link[title='light']")[0].disabled = false;
		$.cookie("light_theme", 'yes');
		switchStyleLabel('light theme');
	}
}

function addClassLabel (label, thisElement, specificName) {
	thisElement.find('.port-catlabel-set').append('<span class="port-label label-' + specificName + '">' + label + '</span>');
}


// style switcher



