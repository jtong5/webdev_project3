function initMap() {
  var el = document.getElementById('map');
  var myLocation = new google.maps.LatLng(41.83722703444006, -87.62717306673116); // IIT John T. Rettaliata Engineering Center coordinates
  
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    zoomControl: true,  // add in zoom control
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER // change position of zoom control
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: {
      url: 'images/thumbs-up.png', // add custom icon
      scaledSize: new google.maps.Size(40, 40) // adjust the size of icon 
    }
  });

  var contentString = '<h1>John T. Rettaliata Engineering Center</h1><p>The engineering building of IIT. Home to the students and faculty of Armour College of Engineering.</p>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
  
  // adding section location
  var secondLocation = new google.maps.LatLng(41.83584739993229, -87.62837311364608); // Hermann Hall

  var secondMarker = new google.maps.Marker({
    position: secondLocation,
    map: myMap,
    animation: google.maps.Animation.DROP, // Drop animation for the icon
    icon: {
      url: 'images/thumbs-up.png',
      scaledSize: new google.maps.Size(40, 40)
    }
  });

  var secondInfoWindow = new google.maps.InfoWindow({
    content: '<h1>Hermann Hall</h1><p>A building that has the largest auditorium at IIT.</p>'
  });

  google.maps.event.addListener(secondMarker, 'mouseover', function() {
    secondInfoWindow.open(myMap, secondMarker);
  });
  
  // add custom street view
  var streetViewControl = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
    position: myLocation,
    pov: { heading: 165, pitch: 0 }
  });
  
  myMap.setStreetView(streetViewControl);
}