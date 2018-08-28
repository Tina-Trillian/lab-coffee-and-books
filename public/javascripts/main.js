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
};