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
    
});