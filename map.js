// Initialize the map with WGS 84 coordinates
const map = L.map('map').setView([9.005401, 38.763611], 14); // Center on Addis Ababa

// Add a base map (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example land parcel data (replace with your actual GeoJSON or spatial data)
const landParcels = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "SubCity": "Bole",
                "Owner": "John Doe",
                "Area_m2": 2500
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [38.76, 9.00], // Bottom-left corner
                        [38.77, 9.00], // Bottom-right corner
                        [38.77, 9.01], // Top-right corner
                        [38.76, 9.01], // Top-left corner
                        [38.76, 9.00]  // Close the polygon
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "SubCity": "Kirkos",
                "Owner": "Jane Smith",
                "Area_m2": 1800
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [38.75, 9.02], // Bottom-left corner
                        [38.76, 9.02], // Bottom-right corner
                        [38.76, 9.03], // Top-right corner
                        [38.75, 9.03], // Top-left corner
                        [38.75, 9.02]  // Close the polygon
                    ]
                ]
            }
        }
    ]
};

// Add land parcel boundaries to the map
L.geoJSON(landParcels, {
    style: {
        color: 'blue', // Boundary color
        weight: 2, // Boundary thickness
        fillOpacity: 0.1 // Fill opacity
    },
    onEachFeature: function (feature, layer) {
        // Add a pop-up with property details
        const popupContent = `
            <strong>SubCity:</strong> ${feature.properties.SubCity}<br>
            <strong>Owner:</strong> ${feature.properties.Owner}<br>
            <strong>Area:</strong> ${feature.properties.Area_m2} m²
        `;
        layer.bindPopup(popupContent);
    }
}).addTo(map);
