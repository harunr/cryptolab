
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea').focus(function () {
		        if (this.value == this.defaultValue) {
		            this.value = ''
		        }
		    }).blur(function () {
		        if (!this.value) {
		            this.value = this.defaultValue;
		        }
		    })
		// Ends input common focus and blur for value.
        
        $('.category-toggle').click(function(){
            $('#object-categories #category-dd-menu').fadeToggle();
            console.log("clicked");
        })
        $('.tribe-bar-active').click(function(){
            $('.tribe-bar-views-option-month').fadeToggle();
        })
        $('#tribe-bar-collapse-toggle').click(function(){
            $(this).toggleClass('tribe-bar-filters-open');
            $('.tribe-bar-filters').toggle();
         })
     if($("#tribe-bar-date").length)  {
        $("#tribe-bar-date").datepicker();
     } 
        
        
      
        
         // Search Toggle Open
    $('.search-toggle').click(function () {
        $('#big-search').toggleClass('hidden');
    });

    // Search Toggle Close
    $('#close').click(function () {
        $('#big-search').toggleClass('hidden');
    });

    // Search Toggle Close
    $('#contact-author').click(function () {
        $('#modal-contact-author-container').toggleClass('hidden');
    });

    // Category Toggle Open
    $('.category-toggle').click(function () {
        $('#category-dd-menu').toggleClass('hidden');
        $(this).toggleClass('close');
    });
        
           // Mobile nav
    $('.mobile-nav-icon').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('close');
        $('#mobile-nav').toggleClass('hidden');
    });
       
       // add class on body
        
        $(window).scroll(function () {
            if ($(window).scrollTop() > $('#nav').outerHeight()) return $('body').addClass('scroll');
            $('body').removeClass('scroll');
        });

		
		
	})// End ready function.


})(jQuery)
