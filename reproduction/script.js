$(document).ready(function() {
    
    $('#anonyme-switch').click(function() {
         $(this).toggleClass('visible');
    });
    
    $('#menu-hamb').click(function() {
       $(this).toggleClass('active'); 
    });
    
    $('#img-fullscreen').click(function() {
       $('#lightbox').addClass('active'); 
    });
    
    $('#opinion-button').click(function() {
       $('#opinion-content').toggleClass('open'); 
    });
    
    $('.tab-element').click(function() {
        $('.tab-element').removeClass('selected');
        $(this).addClass('selected');
        
        var linePosition = $(this).index();
        $('#tab-bar-line').css('left', 'calc(100% / 3 * ' + linePosition + ')');
    });
    
});