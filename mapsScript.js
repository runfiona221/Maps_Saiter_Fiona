var map;

function initMap() {
    var centerCoords = {
        lng: -83.114203,
        lat: 40.099513
      };

    map = new google.maps.Map(
        document.getElementById('map'), {
            center: centerCoords,
            zoom: 12,
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

      var griggsReservoirMarker = new google.maps.Marker({
        position: {
          lng: -83.090764,
          lat: 40.016472
        },
        map: map,
        icon: 'http://maps.google.com/mapfiles/kml/pal3/icon19.png',
        title: 'Griggs Reservoir Park'
      });

      var griggsReservoirMarkerWindow = new google.maps.InfoWindow({
        content: '<img src="https://i.pinimg.com/originals/92/e2/69/92e2693ddcf96544eca0878c5c780efd.jpg",  style="width: 70%; height: 70%">'
      });
      griggsReservoirMarker.addListener('click', function() {
        griggsReservoirMarkerWindow.open(map, griggsReservoirMarker);
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

      var dublinSpringsMarker = new google.maps.Marker({
        position: {
          lng: -83.11231,
          lat: 40.099444
        },
        map: map,
        icon: 'http://maps.google.com/mapfiles/kml/pal2/icon4.png',
        title: 'Dublin Springs'
      });

      var dublinSpringsMarkerWindow = new google.maps.InfoWindow({
        content: '<img src="https://dublinohiousa.gov/dev/dev/wp-content/uploads/2015/06/dublin-springs-open.png">'
      });

      dublinSpringsMarker.addListener('click', function() {
        dublinSpringsMarkerWindow.open(map, dublinSpringsMarker);
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

    var waterMarkerWindow = new google.maps.InfoWindow({
      content: '<img src="https://farm5.static.flickr.com/4865/45651267604_65266e88bf_b.jpg" style="width: 70%; height: 70%">'
    });

    waterMarker.addListener('click', function() {
      waterMarkerWindow.open(map, waterMarker);
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
      content: '<img src="https://farm8.static.flickr.com/7839/40056182473_3ab29cf687_b.jpg", style="width: 70%; height: 70%">'
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
            content: '<img src="http://maps.google.com/mapfiles/kml/pal4/icon47.png">'
        });

        marker.addListener('mouseover', function() {
            picturewindow.open(map, marker);
        });

        marker.addListener('mouseout', function() {
            picturewindow.close(map, marker);
        });

    }
}
