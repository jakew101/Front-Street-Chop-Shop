
import { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ReviewList from '../ReviewList/ReviewList';
import Hours from '../Hours/Hours';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const initialCenter = {
  lat: 38.951618,
  lng: -84.283852
};

const libraries = ['places'];

function Location() {
  const [center, setCenter] = useState(initialCenter);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [openinghours, setOpeninghours] = useState({});
  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
    const service = new window.google.maps.places.PlacesService(map);

    const request = {
      query: 'Front Street Chop Shop, New Richmond, OH',
      fields: ['place_id', 'geometry', 'opening_hours'],
    };

    service.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]) {
        const place = results[0];
        const placeId = place.place_id;
        const location = place.geometry.location;

        setCenter({ lat: location.lat(), lng: location.lng() });
        setMarkerPosition({ lat: location.lat(), lng: location.lng() });

        service.getDetails({ placeId: placeId }, (placeDetails, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setOpeninghours(placeDetails.opening_hours);
            console.log(placeDetails.opening_hours);
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

    
    <ReviewList reviews={reviews} />
    <Hours hours={openinghours} />

    </div>
  );
}

export default Location;
