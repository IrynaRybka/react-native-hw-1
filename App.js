import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  View,
  Platform,
} from "react-native";

import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

const imageBG = require("./images/PhotoBG.jpg");

export default function App() {

  return (
    <View style={styles.container} >
      <ImageBackground style={styles.image} source={imageBG}>
        {/* <RegistrationScreen /> */}
        <LoginScreen/>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: Platform.OS === "android" ? "flex-end" : "center",
  },
});
