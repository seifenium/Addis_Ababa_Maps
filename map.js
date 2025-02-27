// Initialize the map
var map = L.map('map').setView([9.005401, 38.763611], 14);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([9.005401, 38.763611]).addTo(map);
marker.bindPopup("<b>Addis Ababa</b>").openPopup();

// Add a polygon (Unity Park)
var polygon = L.polygon([
    [9.015, 38.75],
    [9.02, 38.75],
    [9.02, 38.76],
    [9.015, 38.76],
    [9.015, 38.75]
]).addTo(map);
polygon.bindPopup("Unity Park");

// Add another polygon (Parking Lot)
var parking = L.polygon([
    [9.01, 38.77],
    [9.015, 38.77],
    [9.015, 38.775],
    [9.01, 38.775],
    [9.01, 38.77]
]).addTo(map);
parking.bindPopup("Addis Ababa Parking Lot");
