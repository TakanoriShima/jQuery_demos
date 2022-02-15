/* global $*/
// https://tech-dig.jp/js-modal/
$(function(){
    function popupImage() {
        
        var popup = document.getElementById('js-popup');
        var blackBg = document.getElementById('js-black-bg');
        var closeBtn = document.getElementById('js-close-btn');
        var showBtn = document.getElementById('js-show-popup');
        
        function closePopUp(elem) {
            elem.addEventListener('click', function() {
                popup.classList.toggle('is-show');
            });
        }
        
        closePopUp(blackBg);
        closePopUp(closeBtn);
        closePopUp(showBtn);
    }
    popupImage();
        
});