// Google Map API & Geocoder デモ
/* global $ */
/* global navigator */
/* global google */

// 初期画面
function initMap() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            // 現在地の緯度経度所得
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            draw_by_latlng(lat, lng);
        }
    );
}

// 住所から地図を表示
const draw_by_address = (input_address) => { 
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode(
        {
            'address':  input_address
        }, 
        function(results, status) { // 結果
            if (status === google.maps.GeocoderStatus.OK) { // ステータスがOKの場合
                let map = new google.maps.Map(document.getElementById('map'), 
                    {
                        center: results[0].geometry.location, // 地図の中心を指定
                        zoom: 15 // 地図のズームを指定
                    }
                );
                let marker = new google.maps.Marker(
                    {
                        position: results[0].geometry.location, // マーカーを立てる位置を指定
                        map: map // マーカーを立てる地図を指定
                    }
                );
                let infoWindow = new google.maps.InfoWindow(
                    { // 吹き出しの追加
                        content:"<div class='maker'>" + input_address + "</div>" // 吹き出しに表示する内容
                    }
                );

                infoWindow.open(map, marker); // 吹き出しの表示
      
                $("#address").val(input_address);
      
                let latlng = results[0].geometry.location;
                let glat = latlng.lat();
                let glng = latlng.lng();

                $("#lat").val(glat);
                $("#lng").val(glng);

            } else { // 失敗した場合
                alert(status);
            }
        }
    );
};

// 緯度経度から地図を表示
const draw_by_latlng = (input_lat, input_lng) => {
    
    let latLngInput = new google.maps.LatLng(input_lat, input_lng);
    let geocoder = new google.maps.Geocoder();
    
    geocoder.geocode(
        {
            latLng: latLngInput
        }, 
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
    
                //Mapクラスのインスタンスを生成します。
                let map = new google.maps.Map(
                    document.getElementById("map"),
                    {
                        center: results[0].geometry.location, // 地図の中心を指定
                        zoom: 15 // 地図のズームを指定
                    }
                );
    
                //表示範囲クラスのインスタンスを生成します。
                let bounds = new google.maps.LatLngBounds();
                
                //緯度・経度情報を取得します。
                let latlng = results[0].geometry.location;
                
                //住所を取得します。
                let input_address = results[0].formatted_address;
    
                //取得した緯度・経度で表示範囲を拡張します。
                bounds.extend(latlng);
    
                //地図上に緯度・経度、住所の情報を表示します。
                new google.maps.InfoWindow(
                    {
                        content: input_address
                    }
                ).open(
                    map,
                    new google.maps.Marker(
                        {
                            position: latlng,
                            map: map
                        }
                    )
                );

                $("#address").val(input_address); 

                $("#lat").val(input_lat);
                $("#lng").val(input_lng);
            }
        }
    );
};

// イベント処理
$(function(){
    $('#address_search_button').on("click", function(){
        let input_address = $("#address").val();
        draw_by_address(input_address);
    });
    
    $("#latlng_search_button").on("click", function(){
        let input_lat = $("#lat").val();
        let input_lng = $("#lng").val();
        draw_by_latlng(input_lat, input_lng);
    });
});
