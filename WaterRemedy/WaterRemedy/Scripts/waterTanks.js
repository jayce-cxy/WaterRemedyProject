jQuery(document).ready(function ($) {
    initMap();
    initAutocomplete();
});
var loc;
var nearStores = [];
var markers = [];
var stores = [{ "name": "Bunnings Chadstone", "lat": -37.874350, "lng": 145.092032 }, { "name": "Bunnings Oakleigh", "lat": -37.921895, "lng": 145.083060 }, { "name": "Bunnings Moorabbin", "lat": -37.942726, "lng": 145.079673 },
{ "name": "Bunnings Notting Hill", "lat": -37.897350, "lng": 145.126536 }, { "name": "Bunnings Springvale", "lat": -37.929166, "lng": 145.154345 }, { "name": "Bunnings Vermont South", "lat": -37.856680, "lng": 145.197947 },
{ "name": "Bunnings Mentone", "lat": -37.973921, "lng": 145.069452 }, { "name": "Bunnings Box Hill", "lat": -37.832931, "lng": 145.132986 }, { "name": "Bunnings Keysborough", "lat": -37.985892, "lng": 145.145946 },
{ "name": "Bunnings Hawthorn", "lat": -37.819504, "lng": 145.031367 }, { "name": "Bunnings Scoresby", "lat": -37.892286, "lng": 145.242245 }, { "name": "Bunnings Port Melbourne", "lat": -37.828624, "lng": 144.939792 },
{ "name": "Bunnings Nunawading", "lat": -37.815685, "lng": 145.166198 }, { "name": "Bunnings Collingwood", "lat": -37.805594, "lng": 144.990520 }, { "name": "Bunnings Altona", "lat": -37.842968, "lng": 144.843853 },
{ "name": "Bunnings Ringwood", "lat": -37.811389, "lng": 145.222112 }, { "name": "Bunnings Brunswick", "lat": -37.764825, "lng": 144.962707 }, { "name": "Bunnings West Footscray", "lat": -37.799149, "lng": 144.883287 },
{ "name": "Bunnings Maribyrnong", "lat": -37.772797, "lng": 144.882938 }, { "name": "Bunnings Fairfield", "lat": -37.763771, "lng": 145.022962 }];

function nearbyStores() {
    var p2 = new google.maps.LatLng(loc.lat, loc.lng);
    console.log('original' + loc.lat + loc.lng);
    for (var i = 0; i < stores.length; i++) {
        var p1 = new google.maps.LatLng(stores[i].lat, stores[i].lng);
        var distanceStr = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
        console.log(distanceStr);
        var distance = parseFloat(distanceStr);
        if (distance < 5) {
            nearStores.push(stores[i]);
        }
    }
    console.log(nearStores);
}



function search() {
    var address = document.getElementById('pac-input').value;
    console.log(address);
    searchLocation(address);
}

var googleApiKey = 'AIzaSyD8juZ2HNagjrCBrnnjuBkhccADbTfjgt8';
let map;
var drawingManager;
var selectedShape;
var directionsService;
var directionsRenderer;


function clearSelection() {
    if (selectedShape) {
        selectedShape.setEditable(false);
        selectedShape = null;
    }
}

function setSelection(shape) {
    clearSelection();
    selectedShape = shape;
    shape.setEditable(true);
    //selectColor(shape.get('fillColor') || shape.get('strokeColor'));
}

function deleteSelectedShape() {
    if (selectedShape) {
        selectedShape.setMap(null);
        document.getElementById('lyear').innerHTML = 0;
        document.getElementById('savemoney').innerHTML = 0;
    }
    var displaybar = document.getElementById("showbar");
    displaybar.style.display = "none";
    document.getElementById('houseArea').value = 0;
}

function resetMap() {
    directionsRenderer.setMap(null);
    DeleteMarkers();
    nearStores = [];
}
function DeleteMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}
var marker;
//给附近商店添加标记
function addMarkers() {
    var infowindow = new google.maps.InfoWindow();
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
    });

    var address = document.getElementById('pac-input').value;
    //directionsRenderer.setMap(map);
    var icon = {
        url: '../img/2051068.png',
        scaledSize: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
    //var rendererOptions = {
    //    map: map,
    //    suppressMarkers: true
    //}
    if (nearStores.length == 0) {
        alert('Please enter the correct ADDRESS');
    } else {
        for (i = 0; i < nearStores.length; i++) {
            var pt = new google.maps.LatLng(nearStores[i].lat, nearStores[i].lng);
            marker = new google.maps.Marker({
                position: pt,
                map,
                title: nearStores[i].name,
                html: nearStores[i].name,
                lat: nearStores[i].lat,
                lng: nearStores[i].lng,
                icon: icon
            });
            markers.push(marker);
            //google.maps.event.addListener(marker, 'click', (function (marker, i) {
            //    return function () {
            //        infowindow.setContent(marker.html);
            //        infowindow.open(map, marker);
            //    }
            //})
            //    (marker, i));
            google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                    directionsRenderer.setMap(null);
                    directionsService.route(
                        {
                            origin: address,
                            destination: { lat: marker.lat, lng: marker.lng },
                            // Note that Javascript allows us to access the constant
                            // using square brackets and a string value as its
                            // "property."

                            travelMode: google.maps.TravelMode.DRIVING,
                        },
                        (response, status) => {
                            if (status == "OK") {
                                directionsRenderer.setDirections(response);
                                directionsRenderer.setMap(map);
                                infowindow.setContent(marker.title + '<br>' + response.routes[0].legs[0].distance.text + "<br>" + response.routes[0].legs[0].duration.text + " ");
                                infowindow.open(map, marker);
                            } else {
                                window.alert("Directions request failed due to " + status);
                            }
                        }
                    );
                }
            })
                (marker));
        }//zaizhe
    }
}
function createMarker(latlng, title) {
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(title);
        infowindow.open(map, marker);
    });
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: -37.840935, lng: 144.946457 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true
    });



    //new google.maps.Marker({
    //    position: { lat: -37.920021, lng: 145.085681 },
    //    map: map,
    //});

    var polyOptions = {
        strokeWeight: 0,
        fillOpacity: 0.45,
        editable: true
    };
    // Creates a drawing manager attached to the map that allows the user to draw
    // markers, lines, and shapes.
    //drawingManager = new google.maps.drawing.DrawingManager({
    //    drawingMode: google.maps.drawing.OverlayType.Marker,
    //    drawingControlOptions: {
    //        position: google.maps.ControlPosition.TOP_RIGHT,
    //        drawingModes: [
    //            google.maps.drawing.OverlayType.POLYLINE
    //        ]
    //    },
    //    polylineOptions: {
    //        editable: true,
    //        strokeColor: '#1E90FF'
    //    },
    //    map: map
    //});

    //google.maps.event.addListener(drawingManager, 'overlaycomplete', function (e) {
    //    if (e.type != google.maps.drawing.OverlayType.MARKER) {
    //        drawingManager.setDrawingMode(null);
    //        var newShape = e.overlay;
    //        newShape.type = e.type;
    //        google.maps.event.addListener(newShape, 'click', function () {
    //            setSelection(newShape);

    //        });
    //        var area = google.maps.geometry.spherical.computeArea(newShape.getPath());
    //        document.getElementById('houseArea').value = area;

    //        setSelection(newShape);


    //    }
    //});

    // Clear the current selection when the drawing mode is changed, or when the
    // map is clicked.
    //google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);
    //google.maps.event.addListener(map, 'click', clearSelection);
    //google.maps.event.addDomListener(document.getElementById('delete-button'), 'click', deleteSelectedShape);

    //buildColorPalette();
}
//function addMarker(location) {
//    var marker = new google.maps.Marker({
//        position: location,
//        map: map
//    });
//}

//function focusMarker(location) {
//    map.setCenter(location);
//    map.setZoom(15);
//}
var address;
function searchLocation() {
    address = document.getElementById('pac-input').value;

    var location;
    if (address == "") {
        alert("Please enter the address");
    } else {
        console.log(address);
        $.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApiKey}`,
            function (response) {
                if (!response.results || response.results.length <= 0) {
                    console.log('cannot find the location.');
                    alert('cannot find the location.');
                    return null;
                }

                location = response.results[0].geometry.location;
                loc = location;
                console.log(loc);
                console.log(location);
                nearbyStores();
                addMarkers();
            }
        );
        map.setZoom(12);
        map.setCenter(loc);
    }
}
//google.maps.event.addDomListener(window, 'load', initMap);



//this is for search box and auto-fill

function initAutocomplete() {
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });
    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        // Clear out the old markers.
        markers.forEach(marker => {
            marker.setMap(null);
        });
        markers = [];
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach(place => {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

