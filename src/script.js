
var personCoordinates = [40.186156,-8.416319];
var deiCoordinates = [40.186513, -8.416024];

/*
var map = L.map('map').setView(personCoordinates, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker(deiCoordinates).addTo(map);  // DEI

var circle = L.circleMarker(personCoordinates, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 4
}).addTo(map);
*/

/*var popup = L.popup()
    .setLatLng([40.186087, -8.415570])
    .setContent("I am a standalone popup.")
    .openOn(map);*/

var map;
var personCoordinates;
var deiCoordinates = [40.186513, -8.416024];
var Level = 0;
// var marker = L.marker(deiCoordinates).addTo(map);  // DEI
var circle;
function updateLevel() {
    const upLevel = document.getElementById('Level');
    Level = parseInt(Level + 1)
    upLevel.innerText = Level;
}

function increment_down() {
    personCoordinates[0] = parseFloat((personCoordinates[0] - 0.00003).toFixed(6));
    map.setView(personCoordinates, 17);
    circle.setLatLng(personCoordinates);

    console.log(personCoordinates);

    updateLevel();
    // map.removeLayer(circle);
    /*circle = L.circle(personCoordinates, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10
    }).addTo(map);*/
}

function increment_up() {
    personCoordinates[0] = parseFloat((personCoordinates[0] + 0.00003).toFixed(6));
    map.setView(personCoordinates, 17);
    circle.setLatLng(personCoordinates);

    console.log(personCoordinates);
    updateLevel();
}

function increment_right() {
    personCoordinates[1] = parseFloat((personCoordinates[1] + 0.00003).toFixed(6));
    circle.setLatLng(personCoordinates);
    map.setView(personCoordinates, 17);

    console.log(personCoordinates);
    updateLevel();
}

function increment_left() {
    personCoordinates[1] = parseFloat((personCoordinates[1] - 0.00003).toFixed(6));
    circle.setLatLng(personCoordinates);
    map.setView(personCoordinates, 17);

    console.log(personCoordinates);
    updateLevel();
}

/*
// display level
const upLevel = document.getElementById('Level');
upLevel.innerText = Level;
*/
/*
Request the user's current location. If the user allows it, you will get back a position object.
*/
/*
navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    // Show a map centered at latitude / longitude.
    personCoordinates = [latitude, longitude];
    // console.log(personCoordinates);

    if (map === undefined) {
        map = L.map('map').setView(personCoordinates, 17);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
    if (circle === undefined) {
        circle = L.circleMarker(personCoordinates, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 4
        }).addTo(map);
    }

});*/


/*
Request the ability to watch user's current location. If the user allows it, you will get back continuous updates of the user's position.
*/
const watchId = navigator.geolocation.watchPosition(position => {
    const { latitude, longitude } = position.coords;
    console.log("RUNNING");
    // Show a map centered at latitude / longitude.
    personCoordinates = [latitude, longitude];
    console.log(personCoordinates);

    if (map === undefined) {
        map = L.map('map').setView(personCoordinates, 17);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
    if (circle === undefined) {
        circle = L.circleMarker(personCoordinates, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 4
        }).addTo(map);
    }
    // display level
    const upLevel = document.getElementById('Level');
    upLevel.innerText = Level;
});
