/* global $*/
$(function(){
        
    // 全sectionオブジェクト取得    
    let sections = $('section');
    // 表示画面の高さを取得
    const window_height = $(window).height();
    
    // 初期化。初期画面に見えているsectionオブジェクトのみ表示
    $.each(sections, (index, section) => {
        // 注目しているsectionオブジェクトのオフセット取得
        let offset = $(section).offset();
        // そのsectionオブジェクトが表示領域にあるならば
        if(window_height > offset.top){
            // 表示
            $(section).css({'opacity': '1'});
        }else{
            // 非表示
            $(section).css({'opacity': '0'});
        }    
    });
    
    // スクロールしたときの処理
    $(window).scroll(function(){
        // 現在のスクロール量を取得
        let scroll_top = $(this).scrollTop();
        console.log("スクロール量: " + scroll_top + 'px');
    
        // 1つ1つのsectionオブジェクトに対しての処理
        $.each(sections, (index, section) => {
            // 注目しているsectionオブジェクトのオフセット値取得
            let offset = $(section).offset();
            // そのsectionオブジェクトが出現してほしい位置にあるならば
            // 500は微調整
            if(offset.top < scroll_top + 700){
                // 300msかけてアニメーションでふわっと出現
                $(section).animate({'opacity': '1'}, 200);
            }
        });
    
    });
    
});