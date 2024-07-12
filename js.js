function initMap() {
    var options = {
        zoom: 8,
        center: { lat: 43.212030, lng:  27.900408 }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
}