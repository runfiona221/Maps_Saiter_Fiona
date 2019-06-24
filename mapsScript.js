var map;

function initMap() {
    var centerCoords = {
        lng: -83.1141,
        lat: 40.085357
      };

    map = new google.maps.Map(
        document.getElementById('map'), {
            center: centerCoords,
            zoom: 13,
            mapTypeId: 'satellite'
        }
    );

    var cornMarker = new google.maps.Marker({
        position: {
            lng: -83.088,
            lat: 40.07952
        },
        map: map,
        icon: 'http://maps.google.com/mapfiles/kml/pal2/icon4.png',
        title: 'Field of Corn'
    });

    var facePark = new google.maps.Marker({
      position: {
        lng:  -83.075182,
        lat: 40.158024
      },
      map: map,
      icon: 'http://maps.google.com/mapfiles/kml/pal2/icon4.png',
      title: 'Scioto Park'
    });

    var bunnyPark = new google.maps.Marker({
      position: {
        lng: -83.162089,
        lat: 40.08638
      },
      map: map,
      icon: 'http://maps.google.com/mapfiles/kml/pal2/icon4.png',
      title: 'Ballantrae Community Park'
    });

    var riverDeckMarker = new google.maps.Marker({
      position: {
        lng: -82.633587,
        lat: 39.735502
      },
      map: map,
      icon: 'http://maps.google.com/mapfiles/kml/pal2/icon4.png',
      title: 'Riverway Kiwanis Park'
    })


    var waterMarker = new google.maps.Marker({
        position: {
            lng: -83.120943,
            lat: 40.101097
        },
        map: map,
        icon: 'http://maps.google.com/mapfiles/kml/pal3/icon19.png',
        title: 'Indian Run Falls'
    });

    var waterFall2Marker = new google.maps.Marker({
      position: {
        lng: -83.109948,
        lat: 40.066606
      },
      map: map,
      icon: 'http://maps.google.com/mapfiles/kml/pal3/icon19.png',
      title: 'Hayden Falls'
    });

    // event listeners
    var marker = new google.maps.Marker({
        position: centerCoords,
        map: map,
        title: 'Click to zoom'
    });

    marker.addListener('click', function() {
        map.setCenter(marker.getPosition());
    });

    cornMarker.addListener('click', function() {
        map.setCenter(cornMarker.getPosition());
    });

    waterMarker.addListener('click', function() {
        map.setCenter(waterMarker.getPosition());
    });

    // add marker where user clicks
    map.addListener('click', function(event) {
        placeMarker(map, event.latLng);
    });

    function placeMarker(map, location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });

        var infowindow = new google.maps.InfoWindow({
            content: 'Latitude: ' + location.lat() +
                '<br>Longitude: ' + location.lng()
        });

        infowindow.open(map, marker);
    }
}
