var map;
var center;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(-34.628907, -58.639978),
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoom: 10
  });

  // Create the DIV to hold the control and call the CenterControl() constructor
  // passing in this DIV.
  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map, center);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);

  var image = {url: "img/logo-marker.png", scaledSize: new google.maps.Size(40, 40), origin: new google.maps.Point(0, 0)};

  var latLngs = [new google.maps.LatLng(-34.686040, -58.477487), new google.maps.LatLng(-34.694692, -58.511593),
                 new google.maps.LatLng(-34.818805, -58.468180), new google.maps.LatLng(-34.596760, -58.391836),
                 new google.maps.LatLng(-34.588907, -58.409978), new google.maps.LatLng(-34.709509, -58.515001),
                 new google.maps.LatLng(-34.457852, -58.914514), new google.maps.LatLng(-34.775525, -58.642526)];

  $.each(latLngs, function(index, latlng) {
     var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: image
     });
  });

  $('.list-group-item').click(function(event) {
     event.preventDefault();
     $(this).siblings().removeClass("active");
     $(this).addClass("active");
     var position = $(this).attr('data-position');
     map.panTo(latLngs[position]);
     smoothZoom(map, 16, map.getZoom());
  });

    // the smooth zoom function
   function smoothZoom (map, max, cnt) {
       if (cnt >= max) {
               return;
           }
       else {
           z = google.maps.event.addListener(map, 'zoom_changed', function(event){
               google.maps.event.removeListener(z);
               smoothZoom(map, max, cnt + 1);
           });
           setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
       }
   }

   function CenterControl(controlDiv, map) {

     // Set CSS for the control border.
     var controlUI = document.createElement('div');
     controlUI.style.backgroundColor = '#fff';
     controlUI.style.border = '2px solid #fff';
     controlUI.style.borderRadius = '3px';
     controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
     controlUI.style.cursor = 'pointer';
     controlUI.style.marginBottom = '22px';
     controlUI.style.textAlign = 'center';
     controlDiv.appendChild(controlUI);

     // Set CSS for the control interior.
     var controlText = document.createElement('div');
     controlText.style.color = 'rgb(25,25,25)';
     controlText.style.fontSize = '16px';
     controlText.style.lineHeight = '38px';
     controlText.style.paddingLeft = '5px';
     controlText.style.paddingRight = '5px';
     controlText.innerHTML = 'Centrar mapa';
     controlUI.appendChild(controlText);

     controlUI.addEventListener('click', function() {
        map.setCenter(new google.maps.LatLng(-34.628907, -58.639978));
        map.setZoom(10);
        $('.list-group').children().removeClass("active");
     });
   }
}
