(function() {
    var map = L.map('map').setView([51.505, 15.09], 4);
    L.tileLayer('https://api.mapbox.com/v4/klepov.p06088j4/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2xlcG92IiwiYSI6ImNpanZvOTZ0ajAwNGl3OGphcnQwdzVweG4ifQ.jCM8K6R_MxlX92wgz0IMqw', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'klepov.p06088j4',
        accessToken: 'pk.eyJ1Ijoia2xlcG92IiwiYSI6ImNpanZvOTZ0ajAwNGl3OGphcnQwdzVweG4ifQ.jCM8K6R_MxlX92wgz0IMqw'
    }).addTo(map);
    console.log('hi')
}())
