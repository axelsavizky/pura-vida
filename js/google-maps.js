var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.588907, lng: -58.409978},
    scrollwheel: false,
    zoom: 10
  });

  var marker = new google.maps.Marker({
    position: {lat: -34.588907, lng: -58.409978},
    map: map
  });

  var marker = new google.maps.Marker({
    position: {lat: -34.596760, lng: -58.391836},
    map: map
  });

  var marker = new google.maps.Marker({
    position: {lat: -34.686040, lng: -58.477487},
    map: map
  });

  var marker = new google.maps.Marker({
    position: {lat: -34.694692, lng: -58.511593},
    map: map
  });

  var marker = new google.maps.Marker({
    position: {lat: -34.709509, lng: -58.515001},
    map: map
  });

  var marker = new google.maps.Marker({
    position: {lat: -34.818805, lng: -58.468180},
    map: map
  });

  var marker = new google.maps.Marker({
    position: {lat: -34.775525, lng: -58.642526},
    map: map
  });

  var marker = new google.maps.Marker({
    position: {lat: -34.457852, lng: -58.914514},
    map: map
  });
}
