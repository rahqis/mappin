import React from "react";
import {useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import "./styles.css";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB9fkLxejhuftgB6DeDfqkdiKkwBwQ-OXA",
  }) 

  if (!isLoaded) return <div>
    {console.log("LOADING")}
    Loading...</div>
  return <Map/>

}

function Map(){
  return <GoogleMap zoom={10} center={{lat:44, lng: -80}} mapContainerClassName="map-container"></GoogleMap>
}


