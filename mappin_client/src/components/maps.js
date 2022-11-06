import React from "react";
import { useState, useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./styles.css";
// import fetchEvents from "fetchEvents";
export default function Maps() {
  const [lat, setLat] = useState();
  const [lng, setlng] = useState();
  const [area, setArea] = useState();
  const [areaCount, setAreaCount] = useState();
  const [city, setCity] = useState("Chapel+Hill");
  const [events, setEvents] = useState();

  let serpSearch =
    "https://serpapi.com/search.json?engine=google_events&q=Events+near+";
  let serpAPI =
    "&api_key=6795b3bfbe28cc6626ccac39f71080321c76e9b41688da8bd2388002a2b73b8d";
  useEffect(() => {
    let tempLat;
    let tempLng;

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
        tempLat = data.location.lat;
        tempLng = data.location.lng;
      })
      .then(() => {
        fetch(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            tempLat +
            "," +
            tempLng +
            "&key=AIzaSyB9fkLxejhuftgB6DeDfqkdiKkwBwQ-OXA"
        )
          .then((response) => response.json())
          .then((data) => {
            //console.log(data.results);
            if (data) {
              let arr = data.results[0].formatted_address
                .split(", ")[1]
                .split(" ");
              setArea(arr);
              setAreaCount(arr.length);
            }
          });
      })
      .then(() => {
        let c = "";
        for (let i = 0; i < areaCount; i++) {
          c += area[i];
          if (i != areaCount - 1) c += "+";
        }
        setCity(c);
      })
      .then(() => {
        let url;
        if (city != undefined) url = "http://localhost:9000/" + city;
        else url = "http://localhost:9000/Chapel+Hill";

        console.log(url);
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setEvents(data);
          });
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
