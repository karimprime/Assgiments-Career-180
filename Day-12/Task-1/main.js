// Function to initialize the map
function initMap() {
    // Check if the Geolocation API is supported
    if (navigator.geolocation) {
        // Get user's current position
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Create the map centered at user's location
                const map = new google.maps.Map(document.getElementById("map"), {
                    center: userLocation,
                    zoom: 14,
                });

                // Place a marker at user's location
                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "You are here!",
                });
            },
            () => {
                handleLocationError(true);
            }
        );
    } else {
        // If Geolocation API is not supported
        handleLocationError(false);
    }
}

// Function to handle errors
function handleLocationError(browserHasGeolocation) {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -30.328714, lng: 31.744292 }, // Default location
        zoom: 6,
    });

    // Display an error message
    new google.maps.InfoWindow({
        content: browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation.",
        position: { lat: -34.397, lng: 150.644 },
    }).open(map);
}
