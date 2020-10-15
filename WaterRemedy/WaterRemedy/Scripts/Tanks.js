jQuery(document).ready(function ($) {
    initMap2();
    //initAutocomplete2();
});
var loc2;
var nearStores2 = [];
var markers2 = [];
var stores2 = [{ "name": "Bunnings Chadstone", "lat": -37.874350, "lng": 145.092032 }, { "name": "Bunnings Oakleigh", "lat": -37.921895, "lng": 145.083060 }, { "name": "Bunnings Moorabbin", "lat": -37.942726, "lng": 145.079673 },
{ "name": "Bunnings Notting Hill", "lat": -37.897350, "lng": 145.126536 }, { "name": "Bunnings Springvale", "lat": -37.929166, "lng": 145.154345 }, { "name": "Bunnings Vermont South", "lat": -37.856680, "lng": 145.197947 },
{ "name": "Bunnings Mentone", "lat": -37.973921, "lng": 145.069452 }, { "name": "Bunnings Box Hill", "lat": -37.832931, "lng": 145.132986 }, { "name": "Bunnings Keysborough", "lat": -37.985892, "lng": 145.145946 },
{ "name": "Bunnings Hawthorn", "lat": -37.819504, "lng": 145.031367 }, { "name": "Bunnings Scoresby", "lat": -37.892286, "lng": 145.242245 }, { "name": "Bunnings Port Melbourne", "lat": -37.828624, "lng": 144.939792 },
{ "name": "Bunnings Nunawading", "lat": -37.815685, "lng": 145.166198 }, { "name": "Bunnings Collingwood", "lat": -37.805594, "lng": 144.990520 }, { "name": "Bunnings Altona", "lat": -37.842968, "lng": 144.843853 },
{ "name": "Bunnings Ringwood", "lat": -37.811389, "lng": 145.222112 }, { "name": "Bunnings Brunswick", "lat": -37.764825, "lng": 144.962707 }, { "name": "Bunnings West Footscray", "lat": -37.799149, "lng": 144.883287 },
{ "name": "Bunnings Maribyrnong", "lat": -37.772797, "lng": 144.882938 }, { "name": "Bunnings Fairfield", "lat": -37.763771, "lng": 145.022962 }];

function nearbyStores2() {
    var p2 = new google.maps.LatLng(loc2.lat, loc2.lng);
    console.log('original' + loc2.lat + loc2.lng);
    for (var i = 0; i < stores2.length; i++) {
        var p1 = new google.maps.LatLng(stores2[i].lat, stores2[i].lng);
        var distanceStr = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
        console.log(distanceStr);
        var distance = parseFloat(distanceStr);
        if (distance < 5) {
            nearStores2.push(stores2[i]);
        }
    }
    console.log(nearStores2);
}



function search() {
    var address2 = document.getElementById('pac-input2').value;
    console.log(address2);
    searchLocation(address2);
}

var googleApiKey = 'AIzaSyD8juZ2HNagjrCBrnnjuBkhccADbTfjgt8';
let map2;
var directionsService2;
var directionsRenderer2;



//function deleteSelectedShape() {
//    if (selectedShape) {
//        selectedShape.setMap(null);
//        document.getElementById('lyear').innerHTML = 0;
//        document.getElementById('savemoney').innerHTML = 0;
//    }
//    var displaybar = document.getElementById("showbar");
//    displaybar.style.display = "none";
//    document.getElementById('houseArea').value = 0;
//}

function resetMap2() {
    directionsRenderer2.setMap(null);
    DeleteMarkers();
    nearStores2 = [];
}
function DeleteMarkers() {
    for (var i = 0; i < markers2.length; i++) {
        markers2[i].setMap(null);
    }
    markers2 = [];
}
var marker2;
//给附近商店添加标记
function addMarkers2() {
    var infowindow = new google.maps.InfoWindow();
    directionsService2 = new google.maps.DirectionsService();
    directionsRenderer2 = new google.maps.DirectionsRenderer({
        map: map2,
    });

    var address2 = document.getElementById('pac-input2').value;
    //directionsRenderer.setMap(map);
    var icon2 = {
        url: '../img/2051068.png',
        scaledSize: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    if (nearStores2.length == 0) {
        alert('Please enter the correct ADDRESS');
    } else {
        for (i = 0; i < nearStores2.length; i++) {
            var pt = new google.maps.LatLng(nearStores2[i].lat, nearStores2[i].lng);
            marker2 = new google.maps.Marker({
                position: pt,
                map: map2,
                title: nearStores2[i].name,
                html: nearStores2[i].name,
                lat: nearStores2[i].lat,
                lng: nearStores2[i].lng,
                icon: icon2
            });
            markers2.push(marker2);

            google.maps.event.addListener(marker2, 'click', (function (marker2) {
                return function () {
                    directionsRenderer2.setMap(null);
                    directionsService2.route(
                        {
                            origin: address2,
                            destination: { lat: marker2.lat, lng: marker2.lng },
                            // Note that Javascript allows us to access the constant
                            // using square brackets and a string value as its
                            // "property."

                            travelMode: google.maps.TravelMode.DRIVING,
                        },
                        (response, status) => {
                            if (status == "OK") {
                                directionsRenderer2.setDirections(response);
                                directionsRenderer2.setMap(map2);
                                infowindow.setContent(marker2.title + '<br>' + response.routes[0].legs[0].distance.text + "<br>" + response.routes[0].legs[0].duration.text + " ");
                                infowindow.open(map2, marker2);
                            } else {
                                window.alert("Directions request failed due to " + status);
                            }
                        }
                    );
                }
            })
                (marker2));
        }
    }
}
function createMarker2(latlng, title) {
    var infowindow = new google.maps.InfoWindow();
    var marker2 = new google.maps.Marker({
        position: latlng,
        map: map2
    });

    google.maps.event.addListener(marker2, 'click', function () {
        infowindow.setContent(title);
        infowindow.open(map2, marker2);
    });
}

function initMap2() {
    map2 = new google.maps.Map(document.getElementById('map3'), {
        zoom: 10,
        center: { lat: -37.840935, lng: 144.946457 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true
    });
}

var address2;
var homeMarker;
function searchLocation2() {
    address2 = document.getElementById('pac-input2').value;

    var location2;
    if (address2 == "") {
        alert("Please enter the address");
    } else {
        console.log(address2);
        $.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address2}&key=${googleApiKey}`,
            function (response) {
                if (!response.results || response.results.length <= 0) {
                    console.log('cannot find the location.');
                    alert('cannot find the location.');
                    return null;
                }

                location2 = response.results[0].geometry.location;
                loc2 = location2;
                map2.setCenter(loc2);
                map2.setZoom(12);
                homeMarker = new google.maps.Marker({
                    position: loc2,
                    map: map2,
                });
                console.log(loc2);
                console.log(location2);
                nearbyStores2();
                addMarkers2();
            }
        );
        
        
    }
}

function onAdderssChange() {
        homeMarker.setMap(null);
        console.log("address changed!!!!!!!!!");
        DeleteMarkers();
        directionsRenderer2.setMap(null);
}

//google.maps.event.addDomListener(window, 'load', initMap);



//this is for search box and auto-fill

//function initAutocomplete2() {
//    const input = document.getElementById("pac-input2");
//    const searchBox = new google.maps.places.SearchBox(input);
//    map2.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//    map2.addListener("bounds_changed", () => {
//        searchBox.setBounds(map2.getBounds());
//    });
//    let markers2 = [];
//    searchBox.addListener("places_changed", () => {
//        const places = searchBox.getPlaces();

//        if (places.length == 0) {
//            return;
//        }
//        markers2.forEach(marker => {
//            marker.setMap(null);
//        });
//        markers2 = [];
//        const bounds = new google.maps.LatLngBounds();
//        places.forEach(place => {
//            if (!place.geometry) {
//                console.log("Returned place contains no geometry");
//                return;
//            }
//            const icon = {
//                url: place.icon,
//                size: new google.maps.Size(71, 71),
//                origin: new google.maps.Point(0, 0),
//                anchor: new google.maps.Point(17, 34),
//                scaledSize: new google.maps.Size(25, 25)
//            };
//            markers2.push(
//                new google.maps.Marker({
//                    map: map2,
//                    icon,
//                    title: place.name,
//                    position: place.geometry.location
//                })
//            );

//            if (place.geometry.viewport) {
//                bounds.union(place.geometry.viewport);
//            } else {
//                bounds.extend(place.geometry.location);
//            }
//        });
//        map2.fitBounds(bounds);
//    });
//}

