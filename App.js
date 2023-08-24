import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack";

import DrawerNavigator from "./navigation/DrawerNavigator";
import Login from "./screens/Login";
import RegisterScreen from "./screens/RegisterScreen";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";


const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="Login"  screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
    <Stack.Screen name="Dashboard" component={DrawerNavigator}/>
    <Stack.Screen name="Login" component = {Login}/>
    <Stack.Screen name = "RegisterScreen" component = {RegisterScreen}/>
  </Stack.Navigator>)
}

export default function App() {
  console.log("OOO")
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>)

}

