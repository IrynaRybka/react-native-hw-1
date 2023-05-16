if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import Reactotron from "reactotron-react-native";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  View,
  Platform,
} from "react-native";

import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

const imageBG = require("./images/PhotoBG.jpg");

Reactotron.log("HELLO WORLD")

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{...styles.container, fontFamily: "Roboto_400Regular" }} >
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
