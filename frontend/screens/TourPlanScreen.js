import { useState } from "react";
import {
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Intrest from "../components/Intrest";
import RangeInput from "../components/RangeInput";
import TripDurationInput from "../components/TripDurationInput";
import { tripStyleData } from "../data/intrestData";
import { filterTrip } from "../util/database";

export default function TourPlanScreen({ navigation }) {
  const [tourPlanData, setTourPlanData] = useState({
    budgetPrice: 0,
    tripDuration: 4,
    startDate: "2026-01-22",
    tripStyle: "",
    groupSize: "1",
  });

  const [title, setTitle] = useState("");
  const [isLoading, setIsloading] = useState(false);

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

  async function onSubmit() {
    try {
      const { budgetPrice, tripStyle, groupSize, startDate } = tourPlanData;
      let budgetPriceInInr = Math.round(budgetPrice * 91.66);
      const newDate = new Date();
      newDate.setHours(0, 0, 0, 0);
      const selectedDate = new Date(startDate);
      selectedDate.setHours(0, 0, 0, 0);

      if (!budgetPrice) {
        Alert.alert(
          "Almost There ✨",
          "Set your travel budget to unlock your personalized trip experience.",
        );
        return;
      }

      if (newDate.getTime() >= selectedDate.getTime()) {
        Alert.alert(
          "Date Not Available",
          "Please choose a future date to start your journey.",
        );
        return;
      }

      if (!tripStyle) {
        Alert.alert(
          "One Last Step ✈️",
          "Choose your preferred trip style so we can craft the perfect journey for you.",
        );
        return;
      }

      setIsloading(true);
      const trips = await filterTrip(budgetPriceInInr, tripStyle, groupSize);
      navigation.navigate("TripScreen", { trips });
    } catch (error) {
      Alert.alert("Failed", "Something went wrong! Please try again.");
    } finally {
      setIsloading(false);
    }
  }

  if (isLoading) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>Loading...</Text>
      </View>
    );
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
            intrestData={tripStyleData}
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
  fallBackContainer: {
    flex: 1,
    backgroundColor: "#151517",
    justifyContent: "center",
    alignItems: "center",
  },
  fallBackText: {
    color: "#fff",
    fontSize: 20,
  },
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
