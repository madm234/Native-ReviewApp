import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { globalStyles } from "./styles/globalStyle";

const getFonts = () =>
  Font.loadAsync({
    nunito: require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={globalStyles.container}>
        <Home />
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  // },
});