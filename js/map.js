// Simple map
mapboxgl.accessToken = 'pk.eyJ1IjoicnVjaGlrYW5hbWJpYXIiLCJhIjoiY2ltZWpiMXNpMDB6OXUxa2swN3VqbDEyZyJ9.eBbIitymKP-QVel_NGj_Cw';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/ruchikanambiar/cinaiwi1q00p3d5m38mssgynp', //stylesheet location
  hash: true
});

// Add geocoder https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md
// map.addControl(new mapboxgl.Geocoder({'position':'top-right'}));

map.on('style.load', function(e) {
  // Do interactive things.
});
