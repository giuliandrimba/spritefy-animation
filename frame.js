(function($)
{
	/*
	 * Author: Giulian Drimba
	 * 
	*/
	
	$.fn.frame = function(animation_name,options)
	{
		var options = options || {};
		var el = this;

		applyOptions()

		var api = {}

		api.play = function()
		{
			if(!$(el).hasClass(animation_name))
				$(el).addClass(animation_name);

			if($(el).hasClass(animation_name+"-pause"))
				$(el).removeClass(animation_name+"-pause");

			if(!$(el).hasClass(animation_name+"-play"))
				$(el).addClass(animation_name+"-play");

			return api;
		}

		api.pause = function()
		{
			if($(el).hasClass(animation_name+"-play"))
				$(el).removeClass(animation_name+"-play");

			if(!$(el).hasClass(animation_name+"-pause"))
				$(el).addClass(animation_name+"-pause");

			return api;
		}

		api.onStart = function()
		{

		}

		api.onEnd = function()
		{

		}

		api.onIteration = function()
		{

		}

		el.get(0).addEventListener("animationstart", onAnimation, false);  
		el.get(0).addEventListener("animationend", onAnimation, false);  
		el.get(0).addEventListener("animationiteration", onAnimation, false);

		function onAnimation(e) 
		{  
			switch(e.type) 
			{
		    	case "animationstart":
		    		api.onStart();
		    		break;  
		    	case "animationend":  
		      		api.onEnd();
		      		break;  
		    	case "animationiteration":  
		      		api.onIteration();
		      		break;  
		  	}  
		} 

		function applyOptions()
		{
			if(options.duration)
			{
				applyCSS("animation-duration",options.duration.toString()+"s");
			}

			if(options.delay)
			{
				applyCSS("animation-delay",options.delay.toString()+"s");
			}

			if(options.count)
			{
				applyCSS("animation-iteration-count",options.count.toString());
			}
		}

		function applyCSS(property, value)
		{
			$(el).css("-webkit-"+property,value);
			$(el).css("-moz-"+property,value);
		}

		$.fn.animation = api;

		return api;
	}

})(jQuery)