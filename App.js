import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ActivityIndicator } from "react-native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useEffect } from "react";
import * as Location from "expo-location";
import { useFonts } from "expo-font";
import { UserLocationContext } from "./App/Context/UserLocationContext";
import Colors from "./App/Shared/Colors";
import { AuthContextProvider, useAuth } from "./App/Context/AuthContext";
import AuthScreen from "./App/Screens/Auth";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const { username } = useAuth();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontsLoaded] = useFonts({
    raleway: require("./assets/Fonts/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/Fonts/Raleway-SemiBold.ttf"),
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <AuthContextProvider>
        <UserLocationContext.Provider value={{ location, setLocation }}>
          <NavigationContainer>
            <Stack.Navigator>
              {username ? (
                <Stack.Screen
                  name="TabNavigation"
                  component={TabNavigation}
                  options={{ headerShown: false }}
                />
              ) : (
                <Stack.Screen
                  name="AuthScreen"
                  component={AuthScreen}
                  options={{ headerShown: false }}
                />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </UserLocationContext.Provider>
    </AuthContextProvider>
  );
}
