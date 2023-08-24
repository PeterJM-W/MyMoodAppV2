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

let customFonts = {
    'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wghtcopy.ttf')
};

const appIcon = require("../assets/clipscopy.jpg");

export default class Login extends Component{
  
    constructor(props) {
      console.log("OOO")
        super(props);
        this.state = {
          email: "",
          password: "",
          fontsLoaded: false,
          userSignedIn: false
        };
      }
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }
      
    render(){
      console.log(this.state.fontsLoaded)
        //if (this.state.fontsLoaded)
         {
        return(
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
                <Image source = {require('../assets/clipscopy.jpg')} style = {styles.appIcon} />
                <Text style={styles.appTitleText}>
                  My Mood
                </Text>
                <TextInput style={styles.emailTextinput} placeholder = {'Enter Email'} placeholderTextColor={'white'} autoFocus/>
                <TextInput style={styles.passwordTextinput} placeholder = {'Enter Password'} placeholderTextColor={'white'} secureTextEntry/>
                <TouchableOpacity 
                  style={[styles.button, { marginTop: 20 }]}
                  onPress={() => this.signIn(email, password)} >
                  <Text style={styles.buttonText}>
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {this.props.navigation.navigate("RegisterScreen")
                  console.log("Register")
                  }} >
                    <Text style={styles.buttonTextNewUser}>
                      Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }
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
    width: RFValue(125),
    height: RFValue(125),
    resizeMode: "contain",
    marginBottom: RFValue(20),
  },
  appTitleText: {
    color: "black",
    textAlign: "center",
    fontSize: RFValue(40),
    fontFamily: "Montserrat",
    marginBottom: RFValue(20),
    fontWeight: "bolder"
  },
  emailTextinput: {
    width: RFValue(250),
    height: RFValue(50),
    padding: RFValue(10),
    borderColor: "#000000",
    borderWidth: RFValue(4),
    marginBottom: RFValue(20),
    fontSize: RFValue(15),
    color: "#FFFFFF",
    backgroundColor: "#15193c",
    fontFamily: "Montserrat"
  },
  passwordTextinput: {
    width: RFValue(250),
    height: RFValue(50),
    padding: RFValue(10),
    borderColor: "#000000",
    borderWidth: RFValue(4),
    marginBottom: RFValue(20),
    fontSize: RFValue(15),
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
    borderRadius: RFValue(10),
    backgroundColor: "white",
    marginBottom: RFValue(20)
  },
  buttonText: {
    fontSize: RFValue(24),
    color: "blue",
    fontFamily: "Montserrat"
  },
  buttonTextNewUser: {
    fontSize: RFValue(24),
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    textDecorationLine: 'underline'
  }
});

  