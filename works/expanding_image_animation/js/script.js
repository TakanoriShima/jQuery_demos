/* global $*/
$(function(){
    
    const showElementAnimation = () => {
            
        let elements = $('.element');
        if(!elements) return; // 要素がなかったら処理をキャンセル
        elements.each((index, element) => {
            element.classList.remove('init');
            element.classList.add('img_appear');
        });
    }
    
    showElementAnimation();
});


