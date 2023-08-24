import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert, 
  TouchableOpacity,
  Text
} from "react-native";

import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
    'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wghtcopy.ttf')
};
const appIcon = require("../assets/clipscopy.jpg")

export default class RegisterScreen extends Component{
    constructor(props) {
        console.log("Constructor")
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
            fontsLoaded: false
        };
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({
            fontsLoaded: true
        });
    };

    componentDidMount() {
        this._loadFontsAsync();
    };

    render(){
        console.log("Fonts " + this.state.fontsLoaded)
        if(this.state.fontsLoaded){
            SplashScreen.hideAsync();
            const { email, password, confirm_password, first_name, last_name} = this.state;

        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <Text style = {styles.appTitleText}>
                        Create Account
                    </Text>
                    <Image source = {appIcon} style = {styles.appIcon}>
                    </Image>
            </View>
        )}
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ddc6ab",
      alignItems: "center",
      justifyContent: "center"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appIcon: {
      width: RFValue(200),
      height: RFValue(200),
      resizeMode: "contain",
      marginBottom: RFValue(20)
    },
    appTitleText: {
      color: "black",
      textAlign: "center",
      fontSize: RFValue(40),
      fontFamily: "Montserrat",
      marginBottom: RFValue(20)
    },
    textinput: {
      width: RFValue(250),
      height: RFValue(50),
      padding: RFValue(10),
      borderColor: "#FFFFFF",
      borderWidth: RFValue(4),
      borderRadius: RFValue(10),
      fontSize: RFValue(20),
      color: "#FFFFFF",
      backgroundColor: "#15193c",
      fontFamily: "Montserrat"
    },
    button: {
      width: RFValue(250),
      height: RFValue(50),
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderRadius: RFValue(30),
      backgroundColor: "white",
      marginBottom: RFValue(20)
    },
    buttonText: {
      fontSize: RFValue(24),
      color: "#15193c",
      fontFamily: "Montserrat"
    },
    buttonTextNewUser: {
      fontSize: RFValue(12),
      color: "#FFFFFF",
      fontFamily: "Montserrat",
      textDecorationLine: 'underline'
    }
  });
  