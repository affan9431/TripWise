import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const RangeInput = ({ budgetPrice, setBugdetPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.baseText]}>Your Budget</Text>
      <Text style={[styles.baseText, styles.text]}>
        ${Math.round(budgetPrice)}
      </Text>
      <Text style={[styles.baseText, styles.text]}>
        Rs {Math.round(budgetPrice * 91.66)}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5000}
        value={budgetPrice}
        onValueChange={setBugdetPrice}
        minimumTrackTintColor="#E5FE5A"
        maximumTrackTintColor="#E5FE5A"
        thumbTintColor="#E5FE5A"
      />
      <Text style={[styles.baseText, styles.text1]}>
        This helps us find realistic trips.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#E5FE5A",
    padding: 20,
    margin: 30,
    borderRadius: 10,
  },
  baseText: {
    fontSize: 15,
    color: "#ffff",
    fontFamily: "PoopinItalic",
  },
  text: {
    marginBottom: 20,
    marginTop: 6,
  },
  slider: {
    width: 300,
    height: 40,
    position: "absolute",
    top: 70,
  },
  text1: {
    marginTop: -10,
  },
});

export default RangeInput;
