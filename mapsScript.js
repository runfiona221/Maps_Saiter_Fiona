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
            lng: -83.123822,
            lat: 40.085357
        },
        map: map,
        icon: 'http://maps.google.com/mapfiles/kml/pal2/icon4.png',
        title: 'Field of Corn'
    });

    var cornImgWindow = new google.maps.InfoWindow({
            content: '<img src="https://lh5.googleusercontent.com/p/AF1QipM4ASZJ_iixLj-hBVTogquaj9q1270o2rg6kleg=s681-k-no">'
        });

        cornMarker.addListener('click', function() {
            cornImgWindow.open(map, cornMarker);
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

    var faceParkWindow = new google.maps.InfoWindow({
      content: '<img src="https://s3-media2.fl.yelpcdn.com/bphoto/rWNCFebsEirY0-BzHUPNWg/l.jpg">'
    });

    facePark.addListener('click', function() {
      faceParkWindow.open(map, facePark);
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

    var bunnyParkWindow = new google.maps.InfoWindow({
      content: '<img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/3c/42/a9/20160725-114056-largejpg.jpg">'
    });
      bunnyPark.addListener('click', function() {
          bunnyParkWindow.open(map, bunnyPark);
      });

    var riverDeckMarker = new google.maps.Marker({
      position: {
        lng: -82.633587,
        lat: 39.735502
      },
      map: map,
      icon: 'http://maps.google.com/mapfiles/kml/pal2/icon4.png',
      title: 'Riverway Kiwanis Park'
    });

    var riverDeckMarkerWindow = new google.maps.InfoWindow({
      content: '<img src="https://www.columbus.gov/uploadedImages/Columbus/Departments/Recreation_and_Parks/Park/Riverway-Kiwanis-Park-Image.png">'
    });

      riverDeckMarker.addListener('click', function() {
        riverDeckMarkerWindow.open(map, riverDeckMarker);
      });


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

    var waterFall2MarkerWindow = new google.maps.InfoWindow({
      content: '<"img src="https://i.ytimg.com/vi/6PHuuj6f2DY/maxresdefault.jpg">'
    });

    waterFall2Marker.addListener('click', function() {
      waterFall2MarkerWindow.open(map, waterFall2Marker);
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

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        var picturewindow = new google.maps.InfoWindow({
            content: '<img src="http://maps.google.com/mapfiles/kml/pal3/icon29.png">'
        });

        marker.addListener('mouseover', function() {
            picturewindow.open(map, marker);
        });

        marker.addListener('mouseout', function() {
            picturewindow.close(map, marker);
        });

    }
}
