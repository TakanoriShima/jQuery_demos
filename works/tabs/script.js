$(function() {
  $('.tab_btn').on('click', function(event) {
    $('.tab_item').removeClass("is-active-item");
    $($(this).attr("href")).addClass("is-active-item");

    //以下２行を追加
    $('.tab_btn').removeClass('is-active-btn');
    $(this).addClass('is-active-btn');
    //https://www.ilovex.co.jp/blog/system/softwaredevelopment/post-27.html
    return false;
  });
});

