import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import app from "../firebase.config";

import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import Diyetlerim from "./pages/app/Diyetlerim";
import colors from "./styles/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const auth = getAuth(app);
  const [userSession, setUserSession] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserSession(!!user);
    });
  }, []);
  function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {!userSession ? (
        AuthStack()
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.green600 },
            headerTintColor: "white",
            headerRight: () => {
              return (
                <Icon
                  name="logout"
                  size={22}
                  onPress={() => {
                    signOut(auth);
                  }}
                  color={"white"}
                />
              );
            },
          }}
        >
          <Stack.Screen
            name="DiyetlerimPage"
            component={Diyetlerim}
            options={{ title: "Diyetlerim" }}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position={"top"} />
    </NavigationContainer>
  );
}
