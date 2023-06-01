import { useEffect, useState, useMemo } from "react";
import Geocode from "react-geocode";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export function Map({ address = "Eiffel Tower", page = "fullView" }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBrlHcxG8qyw1N8vhXbBnN20ZYZsdb3FBo",
  });

  Geocode.setApiKey("AIzaSyBrlHcxG8qyw1N8vhXbBnN20ZYZsdb3FBo");
  Geocode.setLocationType("ROOFTOP");

  const [bizAddressCoordinates, setBizAddressCoordinates] = useState({
    lat: 0,
    lng: 0,
  });
  const [mapError, setMapError] = useState(null);

  const center = useMemo(
    () => ({
      lat: bizAddressCoordinates?.lat,
      lng: bizAddressCoordinates?.lng,
    }),
    [bizAddressCoordinates]
  );

  useEffect(() => {
    getCoordinates();
    async function getCoordinates() {
      try {
        let response = await Geocode.fromAddress(address);
        let coordinates = response.results[0].geometry.location;
        setBizAddressCoordinates(coordinates);
        setMapError(null);
      } catch (err) {
        setMapError(err.message);
      }
    }
  }, [address]);

  return (
    <div id="googleMap">
      {!isLoaded ? (
        <h3>Loading...</h3>
      ) : mapError && page === "fullView" ? (
        <p
          id="mapError"
          className="text-danger border border-danger rounded p-1 m-auto"
        >
          This Address is not known to Google Maps.<br></br> Please EDIT the
          card through 'My Cards' Page and enter a different Address..
        </p>
      ) : mapError && page !== "fullView" ? (
        <p
          id="mapError"
          className="text-danger border border-danger rounded p-1 m-auto"
        >
          This Address is not known to Google Maps.<br></br> Please try a
          different one..
        </p>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={16}
        >
          <Marker position={bizAddressCoordinates} />
        </GoogleMap>
      )}
    </div>
  );
}
