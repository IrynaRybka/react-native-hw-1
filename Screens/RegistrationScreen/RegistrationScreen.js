import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  // Dimensions,
} from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";
import Union from "../../images/Union.svg";

const formState = {
  login: "",
  email: "",
  password: "",
};

// const { width, height } = Dimensions.get("window");

export const RegistrationScreen = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [form, setForm] = useState(formState);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  const [isHovered, setIsHovered] = useState(false);

  if (!fontsLoaded) {
    return null;
  }
  const handleHoverIn = () => {
    setIsHovered(true);
    setShowKeyboard(true)
  };

  const handleHoverOut = () => {
    setIsHovered(false);
    setShowKeyboard(false)
  };


  const keyboardHidden = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmitBtn = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
    setForm(formState);
    console.log(form);
  };

  const loginData = (value) => {
    setForm((prevState) => ({ ...prevState, login: value }));
  };
  const emailData = (value) => {
    setForm((prevState) => ({ ...prevState, email: value }));
  };
  const passwordData = (value) => {
    setForm((prevState) => ({ ...prevState, password: value }));
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHidden}>
      <View style={styles.layout}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={{
            ...styles.container,
            marginBottom: showKeyboard ? -178 : 0,

          }}
        >
          <View style={styles.content}>
          <Text style={{ ...styles.text, fontFamily: "Roboto_400Regular" }}>
            Registration
          </Text>
          <View style={styles.form}>
            <View>
              <TextInput
                style={{ ...styles.input, 
                  ...(isHovered && styles.inputHovered), fontFamily: "Roboto_400Regular", }}
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                onFocus={handleHoverIn}
                onBlur={handleHoverOut}
                onChangeText={loginData}
                value={form.login}
              />
            </View>

            <View style={{ marginTop: 16 }}>
              <TextInput
                style={{ ...styles.input, 
                  ...(isHovered && styles.inputHovered), fontFamily: "Roboto_400Regular", }}
                placeholder="Email"
                placeholderTextColor="#BDBDBD"
                onFocus={handleHoverIn}
                onBlur={handleHoverOut}
                onChangeText={emailData}
                value={form.email}
              />
            </View>

            <View style={{ marginTop: 16 }}>
              <TextInput
                style={{ ...styles.input, 
                  ...(isHovered && styles.inputHovered), fontFamily: "Roboto_400Regular", }}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#BDBDBD"
                onFocus={handleHoverIn}
                onBlur={handleHoverOut}
                onChangeText={passwordData}
                value={form.password}
              />
            </View>

            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.9}
              onPress={onSubmitBtn}
            >
              <Text
                style={{ ...styles.textBtn, fontFamily: "Roboto_400Regular" }}
              >
                Registration
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ ...styles.textExit, fontFamily: "Roboto_400Regular" }}>
            Already have an account? Exit
          </Text>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.divImg}>
          <Pressable style={styles.btnAdd}>
            <Union style={styles.svg} width={13} height={13} fill="#FF6C00" />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    height: 549,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

  },
  divImg: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    left: "35%",
  },
  btnAdd: {
    borderRadius: 50,
    position: "absolute",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    width: 25,
    height: 25,
    right: -12,
    bottom: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    fontWeight: 500,
  },
  form: {
    marginHorizontal: 16,
    marginTop: 33,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",

    color: '#212121',

    height: 50,
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputHovered: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
  btn: {
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    ...Platform.select({
      ios: {
        backgroundColor: `#dc143c`,
      },
      android: {
        backgroundColor: "#FF6C00",
      },
      default: {
        backgroundColor: "#FF6C00",
      },
    }),
  },
  textBtn: {
    fontSize: 16,
    color: "#fff",
   
  },
  textExit: {
    marginTop: 16,
    textAlign: "center",
    
  },
});
