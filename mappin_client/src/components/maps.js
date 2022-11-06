import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./styles.css";

export default function Maps() {
  const [lat, setLat] = useState();
  const [lng, setlng] = useState();
  const [Data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB9fkLxejhuftgB6DeDfqkdiKkwBwQ-OXA",
      {
        method: "POST"
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.location);
        setLat(data.location.lat);
        setlng(data.location.lng);
        setData(data);
      });
  }, []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB9fkLxejhuftgB6DeDfqkdiKkwBwQ-OXA"
  });

  if (!isLoaded)
    return (
      <div>
        {console.log("LOADING")}
        Loading...
      </div>
    );
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: lat, lng: lng }}
      mapContainerClassName='map-container'
    ></GoogleMap>
  );
}

function Map() {
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 0, lng: 0 }}
      mapContainerClassName='map-container'
    ></GoogleMap>
  );
}
