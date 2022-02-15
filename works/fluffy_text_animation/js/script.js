/* global $*/
$(function(){
    
    let count = 0;
    
    const word = 'ふわっとテキストアニメーション';
    console.log(word);
    
    const text_animation = () => {
        
        console.log((count + 1) + "回目: count=" + count + '/' + "word.length=" + word.length);
        
        let moji = word.substr(count, 1);

        if(count <= word.length){
            let span = $('<span>').text(moji).addClass('init');
        
            $('h1').append(span);
        }
        
        
        if(count !== 0){
            $('h1 span').eq(count - 1).removeClass('init').addClass("text_appear");
        }

        if(count === word.length){
            clearInterval(interval_id);
        }
        
        count++;
    }

    const interval_id =  setInterval(text_animation, 100);
    
});


