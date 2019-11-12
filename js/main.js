
jQuery(function($) {
	sumi_tootip(); 
		
	function sumi_tootip(){
		
		$('.tooltip').sumi_tootip({
			color : '#0b21ee',
			backgroundcolor : '#ecff19',
			complete : function(){
				console.log($(this).text());
				//alert('success');
			}
		});
		 
	}

});
