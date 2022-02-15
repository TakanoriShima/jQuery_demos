/* global $*/
// jquery は slim 版では動かない
$(function(){
    $('.popup').hide();
      
    $('#open').on('click', () => {
      $('.popup').fadeIn();
    });
    
    $('#close').on('click', () => {
      $('.popup').fadeOut();
    });
});