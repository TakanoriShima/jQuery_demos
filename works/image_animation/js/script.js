/* global $*/
$(function(){
    
    // テキストアニメーション
    const words = $('h1').text();
    $('h1').text('');
    
    let count = 1;
    const text_animation = () => {
        const word = words.substr(0, count);
        count++;
        $('h1').text(word);
        if(count > words.length){
            clearInterval(text_timer);
        }
    };
    
    // 秒数アニメーション
    const text_timer = setInterval(text_animation, 100);
    
    let sec = 0;
    const timer = () => {
        sec++;
        $('p span').text(sec);
    };
    
    setInterval(timer, 1000);
    
    
    // 画像アニメーション1（fadein/fadeout）
    const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
    
    let ff_count = 1;
    
    // 例1
    // const fadein_fadeout = () => {
    //     $('#fadein_fadeout img').animate({'opacity': 0}, 1000, () => {
    //         $('#fadein_fadeout img').prop('src', images[ff_count]);
    //         $('#fadein_fadeout img').animate({'opacity': 1});
    //         ff_count++;
    //         if(ff_count === images.length){
    //             ff_count = 0;
    //         }
    //     });
    // };
    
    // 例2
    // const fadein_fadeout2 = () => {
    //     new Promise((resolve, reject) => {
    //         $('#fadein_fadeout img').animate({'opacity': 0}, 1000, () => { resolve(); });
    //     }).then(() => {
    //         return new Promise((resolve, reject) => {
    //             $('#fadein_fadeout img').prop('src', images[ff_count]);
    //             resolve();
    //         });
    //     }).then(() => {
    //         new Promise((resolve, reject) => {
    //             $('#fadein_fadeout img').animate({'opacity': 1}, () => {
    //                 ff_count++;
    //                 if(ff_count === images.length){
    //                     ff_count = 0;
    //                 }
    //             });
    //         });
    //     });
    // };
    
    // 例3
    const fadein_fadeout3 = () => {
        $.when(
            $('#fadein_fadeout img').animate({'opacity': 0}, 1000)
        ).done( 
            () => {
                $('#fadein_fadeout img').prop('src', images[ff_count]);
            }
        ).done(
            () => {
                $('#fadein_fadeout img').animate({'opacity': 1});
            }    
        ).done(
            () => {
                ff_count++;
                if(ff_count === images.length){
                    ff_count = 0;
                }
            }
        );
    };
    
    setInterval(fadein_fadeout3, 5000);

    // 画像アニメーション2(slider)
    $.each(images, (index, image) => {
        $('#slider').append($('<img>', {src: image}));
    });
    
    $('#slider img').eq(1).css('margin-left', '-500px');
    $('#slider img').eq(2).css('margin-left', '-500px');
    
    let s_count = 0;
    // 例1
    // const slider = () => {
    //     new Promise((resolve, reject) => {
    //         $('#slider img').eq(s_count % 3).animate({marginLeft: '500px'}, 2000, () => { resolve() });
    //         $('#slider img').eq((s_count + 1) % 3).animate({marginLeft: '0px'}, 2000,  () => { resolve() });
    //     })
    //     .then(() => {
    //         return new Promise((resolve, reject) =>{
    //             $('#slider img').eq(s_count % 3).css('margin-left', '-500px');
    //             resolve();
    //         });
    //     })
    //     .then((resolve, reject) => { 
    //         return new Promise((resolve, reject) =>{
    //             s_count++;
    //             console.log(s_count);
    //             resolve();
    //         });
    //     });
    // };
    
    // 例2
    const slider2 = () => {
        $.when(

            $('#slider img').eq(s_count % 3).animate({marginLeft: '500'}, 2000),
            $('#slider img').eq((s_count + 1) % 3).animate({marginLeft: '0px'}, 2000),
            console.log('a')
        ).done(
            () => {
                $('#slider img').eq(s_count % 3).css('margin-left', '-500px');
                console.log('b');
            }
        ).done(
            () => {
                s_count++;
                console.log('s_count = ' + s_count);
            }
        );
    };
    
    setInterval(slider2, 5000);

});