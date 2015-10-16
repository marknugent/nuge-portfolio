function switchStyleLabel(e){$(".theme-switcher span").hide(),$(".theme-switcher span").text(e),$(".theme-switcher span").velocity("transition.expandIn",500)}function switchStyle(){0==$("link[title='light']")[0].disabled?($("link[title='light']")[0].disabled=!0,$.cookie("light_theme","no"),switchStyleLabel("dark theme")):($("link[title='light']")[0].disabled=!1,$.cookie("light_theme","yes"),switchStyleLabel("light theme"))}function addClassLabel(e,t,i){t.find(".port-catlabel-set").append('<span class="port-label label-'+i+'">'+e+"</span>")}var light_theme=!0;jQuery(document).ready(function($){if($.cookie("light_theme")){var e=$.cookie("light_theme");switchStyleLabel("no"===e?"dark theme":"light theme")}else switchStyleLabel("light theme");if($(".circle-outer").length&&($(".circle-outer").velocity("transition.expandIn",600,function(){$(".pointy").velocity({opacity:1},300,"easeInSine")}),$(".hi").velocity("transition.expandIn",{duration:500,delay:400}),$(".home-text").velocity({opacity:1,duration:600},{delay:400})),$(".resume").length&&$(".resume").velocity({opacity:1},300,"easeInSine"),$(".portfolio").length){if($(".portfolio").velocity({opacity:1},300,"easeInSine"),sessionStorage.checked_tags){$(".pnl").hide();var t=JSON.parse(sessionStorage.checked_tags);$("ul.tags input").prop("checked",!1),t.forEach(function(e){$("."+e).show(),$('input[rel="'+e+'"]').prop("checked",!0)})}$(".pnl").each(function(){var e=$(this).attr("class").split(/\s+/),t=$(this);$.each(e,function(e,i){switch(i){case"tag_ux":addClassLabel("UX",t,i);break;case"tag_visual_design":addClassLabel("visual design",t,i);break;case"tag_html_css":addClassLabel("HTML & CSS",t,i);break;case"tag_print_design":addClassLabel("print design",t,i);break;case"tag_illustration":addClassLabel("illustration",t,i)}})}),$("ul.tags label").hover(function(){var e=$(this).attr("for").slice(9);$(".label-tag_"+e).addClass("hilite")},function(){var e=$(this).attr("for").slice(9);$(".label-tag_"+e).removeClass("hilite")}),$("ul.tags label").mouseleave(function(){var e=$(this).attr("for").slice(9);$(".label-tag_"+e).removeClass("hilite"),$(".label-tag_"+e).attr("style","")}),$(".utility-bar").mouseleave(function(){$(".port-label").removeClass("hilite")}),$("ul.tags").find("input").on("click",function(){$(".filter-alert-box").velocity("slideUp",{duration:150}),$(".filter-alert-box").velocity({scaleY:0,opacity:0},{queue:!1,duration:120});var t=[],i=$(this).attr("rel").slice(4),l=this.checked;$("ul.tags").find("input:checked").each(function(){t.push($(this).attr("rel")),console.log(t),sessionStorage.setItem("checked_tags",JSON.stringify(t))}),$(".pnl").each(function(){var e=$(this),i=!1,l=e.attr("class").split(/\s+/);if($.each(l,function(e,l){t.indexOf(l)>-1&&(i=!0)}),i){if(!e.is(":visible")){var e=$(this);e.velocity("slideDown",{duration:150}),setTimeout(function(){e.velocity({scaleY:1,opacity:1},{queue:!1,duration:130})},10)}}else e.is(":visible")&&(e.velocity("slideUp",{duration:150}),e.velocity({scaleY:.6,opacity:0},{queue:!1,duration:120}))}),e=$.cookie("light_theme"),setTimeout(function(){$(".pnl:visible").length||(sessionStorage.setItem("checked_tags",[]),$(".filter-alert-box").velocity("slideDown",{duration:140}),$(".filter-alert-box").velocity({scaleY:1,opacity:1},{queue:!1,duration:140}))},250)})}var i=300,l=1200,a=500,s=$(".cd-top");$(window).scroll(function(){$(this).scrollTop()>i?s.addClass("cd-is-visible"):s.removeClass("cd-is-visible cd-fade-out"),$(this).scrollTop()>l&&s.addClass("cd-fade-out")}),s.on("click",function(e){e.preventDefault(),$("body,html").animate({scrollTop:0},a)}),$("#switch_link").bind("click",function(){$(".port-label").removeAttr("style"),event.preventDefault(),switchStyle()})});