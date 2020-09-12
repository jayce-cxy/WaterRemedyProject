jQuery(document).ready(function ($) {
    initMap();
    initAutocomplete();
});

function search() {
    var address = document.getElementById('area').value;
    console.log(address);
    searchLocation(address);
}

var googleApiKey = 'AIzaSyD8juZ2HNagjrCBrnnjuBkhccADbTfjgt8';
let map;
var drawingManager;
var selectedShape;

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
    }
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

    var polyOptions = {
        strokeWeight: 0,
        fillOpacity: 0.45,
        editable: true
    };
    // Creates a drawing manager attached to the map that allows the user to draw
    // markers, lines, and shapes.
    drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.Marker,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT,
            drawingModes: [
                google.maps.drawing.OverlayType.POLYLINE
            ]
        },
        polylineOptions: {
            editable: true,
            strokeColor: '#1E90FF'
        },
        //rectangleOptions: polyOptions,
        //circleOptions: polyOptions,
        //polygonOptions: polyOptions,
        map: map
    });

    google.maps.event.addListener(drawingManager, 'overlaycomplete', function (e) {
        if (e.type != google.maps.drawing.OverlayType.MARKER) {
            // Switch back to non-drawing mode after drawing a shape.
            drawingManager.setDrawingMode(null);

            // Add an event listener that selects the newly-drawn shape when the user
            // mouses down on it.
            var newShape = e.overlay;
            newShape.type = e.type;
            google.maps.event.addListener(newShape, 'click', function () {
                setSelection(newShape);

            });
            var area = google.maps.geometry.spherical.computeArea(newShape.getPath());
            alert(area);

            setSelection(newShape);


        }
    });

    // Clear the current selection when the drawing mode is changed, or when the
    // map is clicked.
    google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);
    google.maps.event.addListener(map, 'click', clearSelection);
    google.maps.event.addDomListener(document.getElementById('delete-button'), 'click', deleteSelectedShape);

    //buildColorPalette();
}
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function focusMarker(location) {
    map.setCenter(location);
    map.setZoom(15);
}
function searchLocation(address) {
    $.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApiKey}`,
        function (response) {
            if (!response.results || response.results.length <= 0) {
                console.log('cannot find the location.');
                return null;
            }

            var location = response.results[0].geometry.location;

            addMarker(location);
            focusMarker(location);
        }
    );
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

