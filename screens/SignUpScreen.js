import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";

function SignUpScreen({ navigation }) {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(formValues);

  const onChangeInputHandler = (inputType, enteredValue) => {
    setFormValues((currentValues) => {
      return { ...currentValues, [inputType]: enteredValue };
    });
  };

  return (
    <ImageBackground
      source={require("../assets/images/signup-back-drop.jpg")}
      style={styles.container}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.headerTextContainer}>
        <Text style={[styles.headerBaseText, styles.text1]}>
          Create your TripGenie account
        </Text>
        <Text style={[styles.headerBaseText, styles.text2]}>
          Save trips, access them offline, and plan smarter.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          value={formValues.fullName}
          onChangeText={(text) => onChangeInputHandler("fullName", text)}
        />
        <Input
          placeholder="Email Address"
          value={formValues.email}
          onChangeText={(text) => onChangeInputHandler("email", text)}
        />
        <Input
          placeholder="Password"
          value={formValues.password}
          onChangeText={(text) => onChangeInputHandler("password", text)}
        />
        <Input
          placeholder="Confirm Password"
          value={formValues.confirmPassword}
          onChangeText={(text) => onChangeInputHandler("confirmPassword", text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonStyle}
          textStyle={styles.textStyle}
          onPress={() => {}}
        >
          Sign Up
        </Button>
        <View style={styles.textContainer}>
          <Text style={[styles.baseText, { color: "#fff" }]}>
            Already have an account?
          </Text>
          <Text
            style={[
              styles.baseText,
              { color: "#5684f6", textDecorationLine: "underline" },
            ]}
            onPress={() => navigation.navigate("Login")}
          >
            Log In
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 1,
  },
  headerTextContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerBaseText: {
    color: "#fff",
  },
  text1: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "PoppinBold",
  },
  text2: {
    fontSize: 12.5,
    fontFamily: "PoopinItalic",
  },
  inputContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
    gap: 40,
  },
  buttonContainer: {
    marginTop: 30,
  },
  buttonStyle: {
    backgroundColor: "#E5FE5A",
    color: "#000000",
    paddingVertical: 16,
    marginHorizontal: 20,
    width: "40%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "PoppinMedium",
  },
  textContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    gap: 5,
  },
  baseText: {
    fontFamily: "PoopinItalic",
    fontSize: 16,
  },
});
