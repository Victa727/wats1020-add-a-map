/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/


$( document ).ready(function() {

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
  
  var mymap = L.map('mapid').setView([46.878, -121.857],11);

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:
  
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.mapbox-streets-v7',
    accessToken: 'pk.eyJ1IjoidmljdGE3MjciLCJhIjoiY2l5cGVrcWViMDAwaTJxbTQ1djlnNXYyOSJ9.Ye7V4mA-zL1_COWgi4nPow'
  }).addTo(mymap);
  
  
  var imageUrl = 'img/carousel/Mount_Rainier_and_lake_reflection.jpg',
    imageBounds = [[46.878, -121.877], [46.95, -121.98]];

L.imageOverlay(imageUrl, imageBounds).addTo(mymap);
  
  
// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

  var marker = L.marker([46.878, -121.857]).addTo(mymap);

var popup = L.popup()
    .setLatLng([46.878, -121.857])
    .setContent("Mount Rainer")
    .openOn(mymap);
  
var marker2 = L.marker([46.8800, -121.7269]).addTo(mymap);

var popup2 = L.popup()
    .setLatLng([46.8800, -121.7269])
    .setContent("Mount Rainer National Park")
    .openOn(mymap);
  
var marker3 = L.marker([46.8497, -121.8242]).addTo(mymap);

var popup3 = L.popup()
    .setLatLng([46.8497, -121.8242])
    .setContent("Puyallup Glacier")
    .openOn(mymap);

  
  
  
});  
