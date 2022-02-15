/* global $*/
// https://zarigani-design-office.com/blog/popup/
$(function() {
  $(".pop").click(function(e) {
    e.preventDefault();
    var id = $(this).attr("href");
    $(id).fadeIn();
    $(".popupbg").fadeIn();
  });
  $(".popupbg,.close_btn").click(function() {
    $(".popup_wrapper:visible").fadeOut();
    $(".popupbg").fadeOut();
  });
});