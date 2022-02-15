/* global $*/
$(function(){
    
    let interval_id;
    let input_string;
    let color_gradation_unit;
    
    $('#input_string').val('abcdefghijklmnopqrstuvwxyz');
    
    $('#show_button').on('click', function(){
        console.log("animation start");
        input_string = $('#input_string').val();
        color_gradation_unit = Math.floor(256.0 / input_string.length);
        console.log(color_gradation_unit);
        $('#input_string').val("");
        interval_id = setInterval(text_animation, 100);
    });
    
    let count = 0;
    const text_animation = () => {
        
        let word = input_string.substr(count, 1);
        let span = $('<span>');
        let rgb = "rgb(" + count * color_gradation_unit  + "," + count * color_gradation_unit + "," + count * color_gradation_unit + ")";
        span.text(word).css("color", rgb);
        $('#word').append(span);
        console.log(count);
        count++;
        if(count == input_string.length){
            clearInterval(interval_id);
            console.log("animation stop");
        }
    }
    
});