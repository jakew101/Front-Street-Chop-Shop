
import { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ReviewList from '../ReviewList/ReviewList';
import Hours from '../Hours/Hours';


// Set map size and center
const containerStyle = {
  width: '100%',
  height: '400px'
};

const initialCenter = {
  lat: 38.951618,
  lng: -84.283852
};


// Add libraries outside of LoadScript
const libraries = ['places'];

function Location() {
  const [center, setCenter] = useState(initialCenter);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [openinghours, setOpeninghours] = useState({});
  const mapRef = useRef(null); // reference to the map instance uses useRef to maintain a stable reference across renderings


  // onLoad function triggers after map is loaded and passed in as a prop to the GoogleMap component
  // passed empty dependency array so that it only runs once
  const onLoad = useCallback((map) => {
    mapRef.current = map;
    const service = new window.google.maps.places.PlacesService(map);

    const request = {
      query: 'Front Street Chop Shop, New Richmond, OH',
      fields: ['place_id', 'geometry', 'opening_hours'],
    };

    // uses findPlaceFromQuery to search for front street chop shop and sets the center and marker position
    // stores the first result in the results array and passes it to the getDetails function
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]) {
        const place = results[0];
        const placeId = place.place_id;
        const location = place.geometry.location;


        // passing in objects to setCenter and setMarkerPosition to update the center and marker states
        setCenter({ lat: location.lat(), lng: location.lng() });
        setMarkerPosition({ lat: location.lat(), lng: location.lng() });


        // getDetails function takes in the placeId and uses it to get the details needed for the hours and reviews
        service.getDetails({ placeId: placeId }, (placeDetails, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setOpeninghours(placeDetails.opening_hours);
            console.log(placeDetails.opening_hours);
            // filter reviews with rating >= 4 and store in filteredReviews (will only return 5 reviews from the api)
            const filteredReviews = placeDetails.reviews.filter((review) => review.rating >= 4);
            setReviews(filteredReviews);
            console.log(filteredReviews);
          } else {
            console.error('Failed to fetch place details: ' + status);
          }
        });
      } else {
        console.error('Place search failed for the following reason: ' + status);
      }
    });
  }, []);


  // LoadScript component to load google maps api and necessary props (defined above) for the GoogleMap component
  return (
    <div>
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <GoogleMap
        id="location"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
      >
        {markerPosition && (
          <Marker position={markerPosition} title="226 Front Street, New Richmond, OH" />
        )}
      </GoogleMap>
    </LoadScript>

    {/* Pass reviews to ReviewList.js */}
    <ReviewList reviews={reviews} /> 
    {/* Pass hours to Hours.js */}
    <Hours hours={openinghours} />

    </div>
  );
}

export default Location;
