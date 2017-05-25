﻿let mappy;
let infowindow;
let messagewindow;
let newmarker;




function initMap() {
    let uluru = { lat: 27.761767, lng: -82.650683 };
    mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    talkToServer();
}




function initMapAuth() {

    let ulur = { lat: 27.761767, lng: -82.650683 };
    mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: ulur
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



                var _m = new google.maps.Marker({
                    position: { lat: item.Latitude, lng: item.Longitude },
                    title: item.Title,
                    label: item.Title,
                });

                var contentString =
                    item.Description +
                    '<img src="' + item.Image1 + '"></img>'
                    ;

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                _m.addListener("click", function () {
                    infowindow.open(mappy, _m);
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
            console.log('hello', data)
        }

    });

}