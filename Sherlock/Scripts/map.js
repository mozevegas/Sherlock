﻿let mappy;
let infowindow;
let messagewindow;
let newmarker;




function initMap() {
    let uluru = { lat: 27.771344, lng: -82.635745 };
    mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        mapTypeId: google.maps.MapTypeId.ROADMAP, styles:
        [{ "elementType": "geometry", "stylers": [{ "color": "#ebe3cd" }] },
            { "elementType": "labels.text.fill", "stylers": [{ "color": "#523735" }] },
            { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f1e6" }] },
            { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": 
                [{ "color": "#c9b2a6" }]
            }, { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{ "color": "#dcd2be" }] },
            { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": 
                [{ "color": "#ae9e90" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#93817c" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#a5b076" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#447530" }] }, { "featureType": "road", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#fdfcf8" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f8c967" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#e9bc62" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#e98d58" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "color": "#db8555" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#806b63" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [{ "color": "#8f7d77" }] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ebe3cd" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#b9d3c2" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#92998d" }] }]
    });
    talkToServer();
}




function initMapAuth() {

    let ulur = { lat: 27.771344, lng: -82.635745 };
    mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: ulur,
        mapTypeId: google.maps.MapTypeId.ROADMAP, styles: [{ "elementType": "geometry", "stylers": [{ "color": "#ebe3cd" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#523735" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9b2a6" }] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{ "color": "#dcd2be" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#ae9e90" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#93817c" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#a5b076" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#447530" }] }, { "featureType": "road", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#fdfcf8" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f8c967" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#e9bc62" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#e98d58" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "color": "#db8555" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#806b63" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [{ "color": "#8f7d77" }] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ebe3cd" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#b9d3c2" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#92998d" }] }]
    });

    infowindow = new google.maps.InfoWindow({
        content: document.getElementById('form')
    })

    messagewindow = new google.maps.InfoWindow({
        content: document.getElementById('message')
    });



    google.maps.event.addListener(mappy, 'click', function (event) {
        console.log('got here')
        newmarker = new google.maps.Marker({
            position: event.latLng,
            map: mappy
        });

        google.maps.event.addListener(newmarker, "click", function () {
            infowindow.open(mappy, newmarker);
        });
    });

    talkToServer();
}


function initMapSingle(latValue, longValue) {
    let ulu = { lat: latValue, lng: longValue };
    mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: ulu,
        map: mappy
    });

    let singleMarker = new google.maps.Marker({
        position: ulu,
        map: mappy
    });

}



let talkToServer = () => {

    $.ajax({
        url: '/api/LandmarksAPI',
        dataType: "json",
        success: (data) => {

            //load marker data here 

            var markers = data.map((item) => {

                // Event that closes the Info Window with a click on the map
                //google.maps.event.addListener(map, 'click', function () {
                //    infowindow.close();
                //});



                var _m = new google.maps.Marker({
                    position: { lat: item.Latitude, lng: item.Longitude },
                    title: item.Title,
                    label: item.Title,
                    icon: 'http://i.imgur.com/NBZi6ra.png'
                });
                var tempor = item.Title;
                var contentString =
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1 id="firstHeading" class="firstHeading">'+ item.Title +'</h1>' +
                    '<div id="bodytent">' + '<img src="' + item.Image1 + '" alt="' + item.Title +'" />' +
                    '<p>' + item.Description + '</p>' +
                    '<a href= "' + item.Links + '" target="_blank"> More Info...</a>' +
                    '</div>' +
                    '</div>'

                    //item.Title +
                    //'<img src="' + item.Image1 + '"></img>' +
                    //item.Description
                    ;

                let infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    pixelOffset: new google.maps.Size(0, 0),
                    maxWidth: 700,
                });

                _m.addListener("click", function () {
                    //infowindow.close();
                    infowindow.open(mappy, _m);
                });

                google.maps.event.addListener(mappy, "click", function (event) {
                    console.log('clicked')
                    infowindow.close();
                });
                return _m;

            });

            var markerCluster = new MarkerClusterer(mappy, markers,
                { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

            markers
        },
        error: (data) => {
            console.log("oops", data)
        }
    });
}


function saveData() {
    let title = escape(document.getElementById('title').value);
    let description = escape(document.getElementById('description').value);
    let userid = escape(document.getElementById('userid').value);
    let categoryid = escape(document.getElementById('categories').value);
    let latlng = newmarker.getPosition();

    //let mapdata = [{ Title: title, Address: address, Lat: latlng.lat(), Long: latlng.lng() }];
    let that = this;
    $.ajax({
        url: "/api/LandmarksAPI",
        data: JSON.stringify({
            // Those property names must match the property names of map object in the controller
            Title: title,
            Description: description,
            Latitude: latlng.lat(),
            Longitude: latlng.lng(),
            UserId: userid,
            CategoryId: parseInt(categoryid)
        }),
        contentType: "application/json",
        type: "POST",
        dataType: "json",
        success: (data) => {
            // goal: have the infoWindow availible here
            console.log('hello', data, that);
        }

    });

}

// GeoLocation
var elMap = document.getElementById('loc');                 // HTML element
var msg = 'Sorry, we were unable to get your location.';    // No location msg

if (Modernizr.geolocation) {                                // Is geo supported
    navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
    elMap.textContent = 'Checking location...';               // Say checking...
} else {                                                    // Not supported
    elMap.textContent = msg;                                  // Add manual entry
}

function success(position) {                                // Got location
    msg = '<h3>Longitude:<br>';                               // Create message
    msg += position.coords.longitude + '</h3>';               // Add longitude
    msg += '<h3>Latitude:<br>';                               // Create message
    msg += position.coords.latitude + '</h3>';                // Add latitude
    elMap.innerHTML = msg;                                    // Show location
}

function fail(msg) {                                        // Not got location
    elMap.textContent = msg;                                  // Show text input
    console.log(msg.code);                                    // Log the error
}
