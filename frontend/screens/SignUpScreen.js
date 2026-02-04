import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signUp } from "../util/database";

function SignUpScreen({ navigation }) {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const onSubmit = async () => {
    const { fullName, email, password, confirmPassword } = formValues;

    // Check if any field is empty
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Check if passwords match
    if (confirmPassword !== password) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const token = await signUp(formValues);

      await AsyncStorage.setItem("userToken", token);
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Failed", JSON.stringify(error));
    }
  };

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
      <ScrollView>
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
            secureTextEntry={showPassword}
            autoCorrect={false}
            isPassword={true}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />
          <Input
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            onChangeText={(text) =>
              onChangeInputHandler("confirmPassword", text)
            }
            secureTextEntry={showConfirmPassword}
            autoCorrect={false}
            isPassword={true}
            onTogglePassword={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            textStyle={styles.textStyle}
            onPress={onSubmit}
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
      </ScrollView>
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
