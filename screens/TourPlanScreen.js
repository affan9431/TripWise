import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  ScrollView,
} from "react-native";
import RangeInput from "../components/RangeInput";
import TripDurationInput from "../components/TripDurationInput";
import { useState } from "react";
import Input from "../components/Input";
import Intrest from "../components/Intrest";
import { intrestData } from "../data/intrestData";
import Button from "../components/Button";

export default function TourPlanScreen() {
  const [tourPlanData, setTourPlanData] = useState({
    budgetPrice: 0,
    tripDuration: 4,
    startDate: "22/1/2026",
    tripStyle: "Adventure",
    groupSize: "1",
  });

  const [title, setTitle] = useState("");

  function tourPlanDataHandler(inputType, enteredValue) {
    setTourPlanData((prev) => {
      return { ...prev, [inputType]: enteredValue };
    });
  }

  function addTripDurationHandler() {
    setTourPlanData((prev) => {
      return { ...prev, tripDuration: prev.tripDuration + 1 };
    });
  }
  function removeTripDurationHandler() {
    if (tourPlanData.tripDuration > 1) {
      setTourPlanData((prev) => {
        return {
          ...prev,
          tripDuration: prev.tripDuration - 1,
        };
      });
    } else {
      Alert.alert("Warning!", "Trip Duration can't be 0.");
    }
  }

  function onChangeDateHandler(value) {
    setTourPlanData((prev) => {
      return { ...prev, startDate: value };
    });
  }

  function onChangeGroupSizeHandler(value) {
    setTourPlanData((prev) => {
      return { ...prev, groupSize: value };
    });
  }

  function onSubmit() {
    console.log("SENDIND DATA TO BACKEND...");
    console.log(tourPlanData);
  }

  return (
    <ImageBackground
      source={require("../assets/images/tour-plan-backdrop.jpg")}
      style={styles.container}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerBaseText, styles.text1]}>
            Plan your trip by budget
          </Text>
          <Text style={[styles.headerBaseText, styles.text2]}>
            Tell us your budget and time. We'll handle the rest.
          </Text>
        </View>
        <View>
          <RangeInput
            budgetPrice={tourPlanData.budgetPrice}
            setBugdetPrice={(text) => tourPlanDataHandler("budgetPrice", text)}
          />
          <TripDurationInput
            tripDuration={tourPlanData.tripDuration}
            onAddHandler={addTripDurationHandler}
            onRemoveHandler={removeTripDurationHandler}
          />
          <View>
            <Text style={styles.labelText}>Start Date</Text>
            <Input
              value={tourPlanData.startDate}
              placeholder={tourPlanData.startDate}
              style={styles.inputContainerStyle}
              onChangeText={(text) => onChangeDateHandler(text)}
            />
          </View>
          <Intrest
            title="Trip Style"
            intrestData={intrestData}
            style={{
              borderWidth: 3,
              borderColor: "#E5FE5A",
            }}
            selectedTitle={title}
            onPress={(item) => {
              tourPlanDataHandler("tripStyle", item.title);
              setTitle(item.title);
            }}
          />
          <View>
            <Text style={styles.labelText}>Group Size</Text>
            <Input
              value={tourPlanData.groupSize}
              placeholder={tourPlanData.groupSize}
              style={styles.inputContainerStyle}
              onChangeText={(text) => onChangeGroupSizeHandler(text)}
            />
          </View>
        </View>
        <Button
          style={styles.buttonStyle}
          textStyle={styles.textStyle}
          onPress={onSubmit}
        >
          Find Feasible Trips
        </Button>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  backgroundImage: {
    opacity: 0.5,
  },
  headerTextContainer: {
    marginTop: 10,
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
    fontSize: 12,
    fontFamily: "PoopinItalic",
  },
  inputContainerStyle: {
    padding: 10,
    margin: 30,
    width: 300,
  },
  labelText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "PoppinSemiBold",
    marginLeft: 30,
    marginTop: 20,
    marginBottom: -20,
  },
  buttonStyle: {
    backgroundColor: "#E5FE5A",
    color: "#000000",
    paddingVertical: 16,
    marginHorizontal: 50,
    borderRadius: 50,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "PoppinSemiBold",
  },
});
