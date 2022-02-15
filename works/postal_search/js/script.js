/* global $*/
$(function(){
    
    // 指定された郵便番号で住所を取得する
    // 郵便番号取得
    // https://api-doc.postcode-jp.com/#e0cee72981
    // let apiKey = 'udbGq8FXC6JkkSy5WBO0wRQfgIRIdUqc0vFJuIv';
    // let parameters = '?apiKey=' + apiKey;
    
    $('input[name="zipcode"]').on('input', () => {
        let input_val = $('input[name="zipcode"]').val();
        // console.log(input_val);
        let url = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + input_val + '&limit=1';
        
        if(input_val.length >= 5){
            $('input[name="address"]').val("");
            $.ajax(
              {
                url, url,
                type: 'get',
                dataType: 'jsonp'
              }
            ).done((data) => {
              // console.log(data);
              if (data.results) { 
                let address = data.results[0]['address1'] + data.results[0]['address2'] + data.results[0]['address3'];
                $('input[name="address"]').val(address);
              } else {
                // alert('該当データが見つかりません');
              }
            }).fail((data) => {
                  // alert('通信に失敗しました');
            });
        }
    });
});