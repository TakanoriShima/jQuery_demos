/* global $*/
// udbGq8FXC6JkkSy5WBO0wRQfgIRIdUqc0vFJuIv
$(function(){
    const words = ['a', 'ai', 'i', 'ie', 'aiu'];
    
    $('input[type="search"]').on('input', () => {
        $('select').remove();
        let input_word = $('input[type="search"]').val();
        console.log(input_word);
        
        if(input_word !== ''){
            let select_words = words.filter((word) => {
                if(word.startsWith(input_word)){
                    return word;
                }
            });
            
            let select = $('<select id="words">');
            
            $.each(select_words, (index, select_word) => {
                select.append($('<option>', {text: select_word, value: select_word}));
            });
            select.prop('size', select_words.length);
            $('input[type="search"]').after(select);
        };
        
        $('#words').on('change', () => {
            // alert("a");
            // console.log("OK");
            let word = $('option:checked').val();
            $('input[type="search"]').val(word);
            $('select').remove();
        });
    });
    
    $('button').on('click', () => {
       let input_word = $('input[type="search"]').val();
       $('button').after($('<p>', {text: input_word}));
       $('input[type="search"]').val("");
    });

});