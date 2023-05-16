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
  // Dimensions,
} from "react-native";


const formState = {
  email: "",
  password: "",
};

// const { width, height } = Dimensions.get("window");

export const LoginScreen = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [form, setForm] = useState(formState);
  const [isHovered, setIsHovered] = useState(false);


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
            marginBottom: showKeyboard ? -213 : 0,

          }}
        >
          <View style={styles.content}>
          <Text style={styles.text}>
          Sign in
          </Text>
          <View style={styles.form}>
            <View style={{ marginTop: 16 }}>
              <TextInput
            style={{ ...styles.input, 
                ...(isHovered && styles.inputHovered) }}
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
                    ...(isHovered && styles.inputHovered) }}
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
                style={styles.textBtn}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textExit}>
            Don`t have a registration? Registration
          </Text>
          </View>
        </KeyboardAvoidingView>
       
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    height: 488,
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
