// solution obtained from https://stackoverflow.com/questions/13110763/is-leaflet-a-good-tool-for-non-map-images

var map = L.map('map', {
    maxZoom: 24,
    minZoom: 0,
    crs: L.CRS.Simple
});

map.setMaxBounds(new L.LatLngBounds([0,600], [600,0]));
map.setView([300,300], 1)

var imageUrl = './map.jpg'
var imageBounds = [[500,100],[100,500]];

L.imageOverlay(imageUrl, imageBounds, {
    attribution: '<a href="https://www.reddit.com/r/Eldenring/comments/tygn11/high_quality_elden_ring_map_all_grace_sites/">/u/Eziolambo from Reddit<a>'
}).addTo(map);

