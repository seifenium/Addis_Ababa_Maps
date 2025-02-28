// Add interactivity to the map (example using Leaflet.js)
document.addEventListener('DOMContentLoaded', function () {
  const map = L.map('map').setView([51.505, -0.09], 13); // Default coordinates

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker
  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Sample Land Parcel')
    .openPopup();
});
