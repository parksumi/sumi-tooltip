(function($){
 
  $.fn.sumi_tootip = function(options){
     
    //Set the option
    var settings = $.extend({
      color: '#000',
	  backgroundcolor : '#000'
    },options);
         
    // Start your custom code
    return this.each(function(){
         
		var $this = $(this);

		$this.hover(function(e) {

			$this.append('<span class="sumi_tootip"></span>');

			var pageX = e.pageX 
			var pageY = e.pageY

			$('.sumi_tootip').css({
				'top': pageY + 10,
				'left': pageX + 10
			});
			
			var url = $this.attr('href')

			$.get(url, function(result){
				var title =  $(result).filter('meta[property="og:title"]').attr('content');
				var desc =  $(result).filter('meta[property="og:description"]').attr('content');
				var img =  $(result).filter('meta[property="og:image"]').attr('content');

				console.log(title);

				var html= '<p class="img"><img src="'+img+'"/></p>'
				html += '<h1>'+title+'</h1>'
				html += '<p class="desc">'+desc+'</p>'

				$('.sumi_tootip').html(html)
			});

			// Create callback function when the feed is completely loaded
			if($.isFunction(settings.complete)){
				settings.complete.apply($this);
			}

		}, function() {
			$('.sumi_tootip').remove();
		});
				 
    });
  }    
 
})(jQuery);
      