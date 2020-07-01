let pos;
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;

// Handle a geolocation error
function handleLocationError(browserHasGeolocation, infoWindow) {
  // Set default location to Sydney, Australia
  pos = { lat: 43.0731, lng: -89.4012 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: Number($("#distance option:selected").val()),
  });
  // Display an InfoWindow at the map center
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Geolocation permissions denied. Using default location."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
  currentInfoWindow = infoWindow;
  getNearbyPlaces(pos);
}
// Perform a Places Nearby Search Request
function getNearbyPlaces(position) {
  let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: "dog park",
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}
// Handle the results (up to 20) of the Nearby Search
function nearbyCallback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results);
  }
}
// Set markers at the location of each place result
function createMarkers(places) {
  places.forEach((place) => {
    let marker = new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name,
    });
    // Add click listener to each marker
    google.maps.event.addListener(marker, "click", () => {
      let request = {
        placeId: place.place_id,
        fields: [
          "name",
          "formatted_address",
          "geometry",
          "rating",
          "website",
          "photos",
          "place_id",
        ],
      };
      /* Only fetch the details of a place when the user clicks on a marker.
       * If we fetch the details for all place results as soon as we get
       * the search response, we will hit API rate limits. */
      service.getDetails(request, (placeResult, status) => {
        showDetails(placeResult, marker, status);
        console.log(`This is the place ID: ${request.placeId}`);
        console.log(`This is the places info: ${JSON.stringify(placeResult)}`);
        console.log(`This is the places info: ${placeResult.name}`);
        console.log(`This is the places info: ${placeResult.rating}`);
        const parkData = {
          parkID: request.placeId, //figure out what we are calling these columns
          name: placeResult.name,
          address: placeResult.formatted_address,
          rating: placeResult.rating,
          popularity: 0,
        };
        returnParkData(parkData.parkID);
        $.ajax("/maps/api", {
          type: "POST",
          data: parkData,
        }).then(function() {
          console.log(`New park added to table`);
        });
      });
    });
    // Adjust the map bounds to include the location of this marker
    //bounds.extend(place.geometry.location);
  });
  /* Once all the markers have been placed, adjust the bounds of the map to
   * show all the markers within the visible area. */
  //map.fitBounds(bounds);
}
// Builds an InfoWindow to display details above the marker
function showDetails(placeResult, marker, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    let placeInfowindow = new google.maps.InfoWindow();
    placeInfowindow.setContent(
      "<div><h4><strong>" +
        placeResult.name +
        "</strong></h4>" +
        "<h4>Rating: " +
        placeResult.rating +
        "</h4>" +
        `<a href="/dashboard/${placeResult.place_id}" id="thread" data-id='${placeResult.place_id}' class="btn btn-primary btn-block">Go to thread</a>` +
        "</div>"
    );
    placeInfowindow.open(marker.map, marker);
    currentInfoWindow.close();
    currentInfoWindow = placeInfowindow;
    //showPanel(placeResult);
  } else {
    console.log("showDetails failed: " + status);
  }
}
function threads(element) {
  var park_id = $(element).data("id");
  $.ajax("/threads/api", {
    type: "POST",
    data: { park_id: park_id },
  }).then(function(data) {
    console.log(`New thread added to table`);
    console.log(data);
  });
}
function returnParkData(something) {
  console.log(something);
}
$(".thread_submit").on("click", function(event) {
  event.preventDefault();
  console.log("hi");
  var park_id = $(this).data("id");
  var newThread = {
    ParkId: park_id,
    text: $("#new-thread").val(),
  };
  $.ajax("/newthread/api", {
    type: "POST",
    data: newThread,
  }).then(function(data) {
    console.log("You have successfully created a new thread");
    console.log(data);
    location.reload();
  });
});
$("#filter").on("click", function(event) {
  event.preventDefault();
  console.log("hello world");
  console.log($("#distance option:selected").val());
  initMap();
});

$(".thread_submit1").on("click", function(){
  console.log("hi")
  var park_id = $(this).data("id");
  console.log(park_id)
  console.log("hi");
  var park_id = $(this).data("id");
  var newThread = {
    ParkId: park_id,
    text: $("#new-thread").val(),
  };
  $.ajax("/newthread/api", {
    type: "POST",
    data: newThread,
  }).then(function(data) {
    console.log("You have successfully created a new thread");
    console.log(data);
    location.reload();
  });
})
