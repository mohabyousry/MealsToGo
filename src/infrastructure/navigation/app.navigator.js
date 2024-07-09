import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../services/restaurants/resturants.context";
import { FavouritesContextProvider } from "../../services/restaurants/favourites/favourites.context";
import { LocationContextProvider } from "../../services/restaurants/location.context";
import { SafeArea } from "../../components/safe-area.component";
import { MapScreen } from "../../features/map/map.screen";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant-outline",
  Map: "map-outline",
  Settings: "settings",
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Logout" onPress={() => onLogout()}></Button>
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Restaurants"
            component={RestaurantsNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
