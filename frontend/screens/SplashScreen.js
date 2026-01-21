import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

function SplashScreen({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/SplashScreen.png")}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.logoText}>TripWise</Text>
        <Text style={[styles.baseText, styles.text1]}>
          Explore Cities, Create Lasting Memories
        </Text>
        <Text style={[styles.baseText, styles.text2]}>
          Discover hidden gems and create unforgettable moments around the world
        </Text>
      </View>
      <View>
        <Button
          style={styles.buttonStyle}
          textStyle={styles.btnText}
          onPress={handleGetStarted}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
    marginTop: 24,
    alignSelf: "center",
  },
  textContainer: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    gap: 15,
  },
  baseText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  logoText: {
    fontSize: 48,
    // fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "Akronim",
  },
  text1: {
    fontSize: 22,
    fontFamily: "PoppinMedium",
  },
  text2: {
    fontSize: 14,
    fontFamily: "PoppinLight",
  },
  buttonStyle: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 50,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "PoppinMedium",
  },
});
