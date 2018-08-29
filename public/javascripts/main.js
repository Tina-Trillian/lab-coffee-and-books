

window.onload = () => {
  

  const markers = []
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {
      lat: 52.505387,
      lng: 13.37287,
  },
  });

  let center = {
    lat: undefined,
    lng: undefined
  }; 


function getPlaces() {
  axios.get("/api")
  .then( response => {
    placePlaces(response.data.places)
  })
  .catch(error => {
    next(error)
  })
}

getPlaces();


function placePlaces(Places){
    Places.forEach(function(place){
      const center = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name
      });
      markers.push(pin)
    });
}

}