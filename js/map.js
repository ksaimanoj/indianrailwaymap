// Define map locations

// Simple map
mapboxgl.accessToken = 'pk.eyJ1IjoicnVjaGlrYW5hbWJpYXIiLCJhIjoiY2ltZWpiMXNpMDB6OXUxa2swN3VqbDEyZyJ9.eBbIitymKP-QVel_NGj_Cw';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/ruchikanambiar/cinaiwi1q00p3d5m38mssgynp', //stylesheet location
  hash: true
});

// Stylez
// Place changes mapbox://styles/planemad/cijfluvvd00229tm4zavbuvno
// osmlint mapbox://styles/planemad/cijcefp3q00elbskq4cgvcivf

// Add geocoder https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md
map.addControl(new mapboxgl.Geocoder({'position':'top-right'}));

map.on('style.load', function(e) {

  // Display feature properties on hover
  map.on('mousemove', function (e) {
       map.featuresAt(e.point, {layer:'data circle locator', radius: 5}, function (err, features) {
           if (err) throw err;
           document.getElementById('feature-properties').innerHTML = JSON.stringify(features[0].properties, null, 2);
       });
   });

  // Open in JOSM on click
  map.on('click', function(e) {

    var osmIdField = {'way':'id','node':'id'}
    // var osmIdField = {'way':'_osm_way_id','node':'_osm_node_id'}

    map.featuresAt(e.point, {
      layer: ['data circle locator'],
      radius: 4
    }, function(err, features) {

      // Code lifted from https://github.com/geohacker/geojson-josm-url/blob/master/index.js
      var baseURL = "http://localhost:8111/load_object?new_layer=true&objects=";

      var prefix = Object.keys(features[0].properties).indexOf(osmIdField.node) == -1 ? 'w' : 'n';
      var osmID = features[0].properties[osmIdField.node] || features[0].properties[osmIdField.way];

      window.open(baseURL + prefix + osmID);
    });
  });

});
