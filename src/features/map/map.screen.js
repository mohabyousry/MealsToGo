import React, { useContext, useState, useEffect } from "react";
import { Marker, Callout } from "react-native-maps";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "./components/search.component";
import { LocationContext } from "../../services/restaurants/location.context";
import { RestaurantsContext } from "../../services/restaurants/resturants.context";
import { MapCallout } from "./components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurants) => {
          return (
            <Marker
              key={restaurants.name}
              title={restaurants.name}
              coordinate={{
                latitude: restaurants.geometry.location.lat,
                longitude: restaurants.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantsDetail", {
                    restaurants: restaurants,
                  })
                }
              >
                <MapCallout restaurants={restaurants} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
