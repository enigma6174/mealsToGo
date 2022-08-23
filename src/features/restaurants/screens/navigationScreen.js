import React from "react";
import { RestaurantScreen } from "./restaurantScreen";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const RESTAURANTS = "Restaurants";
const MAPS = "Maps";
const SETTINGS = "Settings";

const ICON = {
  restaurant: "restaurant",
  restaurantOutline: "restaurant-outline",
  map: "map",
  mapOutline: "map-outline",
  settings: "settings",
  settingsOutline: "settings-outline",
};

const Restaurants = () => {
  return <RestaurantScreen />;
};

const Maps = () => {
  return (
    <View style={styles.default}>
      <Text>Maps!</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={styles.default}>
      <Text>Settings!</Text>
    </View>
  );
};

const screenOptionsHandler = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === RESTAURANTS) {
      iconName = focused ? ICON.restaurant : ICON.restaurantOutline;
    } else if (route.name === MAPS) {
      iconName = focused ? ICON.map : ICON.mapOutline;
    } else if (route.name === SETTINGS) {
      iconName = focused ? ICON.settings : ICON.settingsOutline;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptionsHandler}
      tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
    >
      <Tab.Screen name={RESTAURANTS} component={Restaurants} />
      <Tab.Screen name={MAPS} component={Maps} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
