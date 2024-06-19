import React from "react";
import { CompactRestaurantInfo } from "./restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurants }) => (
  <CompactRestaurantInfo isMap restaurants={restaurants} />
);
