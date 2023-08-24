import React, { Component } from "react";
import Login from "../screens/Login";
import RegisterScreen from "../screens/RegisterScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default class DrawerNavigator extends Component{
    render(){
        console.log("IN")
        return(
            <Drawer.Navigator
            screenOptions={{
                headerShown: false, 
                drawerActiveTintColor: "blue",
                drawerInactiveTintColor: "green",
                itemStyle: { marginVertical: 5 }
              }}
            >
                <Drawer.Screen name = "Login" component = {Login} />
            </Drawer.Navigator>
        )
    }
}