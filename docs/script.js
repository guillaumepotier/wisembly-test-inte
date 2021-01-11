$(document).ready(function() {
    
    // Header
    
    $('#anonyme-switch').click(function() {
         $(this).toggleClass('visible');
    });
    
    $('#menu-hamb').click(function() {
       $(this).toggleClass('active'); 
    });
    
    // Content
    
    $('#img-fullscreen').click(function() {
       $('#lightbox').addClass('active'); 
    });
    
    $('#opinion-button').click(function() {
       $('#opinion-content').toggleClass('open'); 
    });
    
    $('.opinion-smiley').click(function() {
        $('.opinion-smiley').removeClass('selected');
        $(this).addClass('selected');
        var opinionUrl = $(this).css('background-image');
        $('#opinion-button').css('background-image', opinionUrl);
        setTimeout(function(){
            $('#opinion-content').toggleClass('open');
        }, 500);
    });
    
    // Tab bar
    
    $('.tab-element').click(function() {
        $('.tab-element').removeClass('selected');
        $(this).addClass('selected');
        
        var linePosition = $(this).index();
        $('#tab-bar-line').css('left', 'calc(100% / 3 * ' + linePosition + ')');
    });
    
});