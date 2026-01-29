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
import { logIn } from "../util/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen({ navigation }) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = async () => {
    const { email, password } = formValues;

    if (!email || !password) {
      Alert.alert("Error", "Please enter your email address and password");
      return;
    }

    try {
      const token = await logIn(formValues);

      await AsyncStorage.setItem("userToken", token);
      Alert.alert("Success", "Login successfully!");
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
      source={require("../assets/images/login-back-drop.jpg")}
      style={styles.container}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerBaseText, styles.text1]}>
            Welcome back
          </Text>
          <Text style={[styles.headerBaseText, styles.text2]}>
            Access your saved trips and continue planning.
          </Text>
        </View>

        <View style={styles.inputContainer}>
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
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            textStyle={styles.textStyle}
            onPress={onSubmit}
          >
            Log In
          </Button>
          <View style={styles.textContainer}>
            <Text style={[styles.baseText, { color: "#fff" }]}>
              Don’t have an account?
            </Text>
            <Text
              style={[
                styles.baseText,
                { color: "#5684f6", textDecorationLine: "underline" },
              ]}
              onPress={() => navigation.navigate("SignUp")}
            >
              Signup
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.93,
  },
  headerTextContainer: {
    marginTop: 200,
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
