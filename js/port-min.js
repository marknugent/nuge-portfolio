jQuery(document).ready(function($){var o=300,l=1200,s=700,c=$(".cd-top");$(window).scroll(function(){$(this).scrollTop()>300?c.addClass("cd-is-visible"):c.removeClass("cd-is-visible cd-fade-out"),$(this).scrollTop()>1200&&c.addClass("cd-fade-out")}),c.on("click",function(o){o.preventDefault(),$("body,html").animate({scrollTop:0},700)})});