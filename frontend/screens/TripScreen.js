import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import TripCard from "../components/TripCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";

function TripScreen({ navigation, route }) {
  const [trips, setTrips] = useState();

  useLayoutEffect(() => {
    // Hide TAB header
    const parent = navigation.getParent();
    parent?.setOptions({ headerShown: false });

    return () => {
      // Show TAB header again when leaving
      parent?.setOptions({ headerShown: true });
    };
  }, [navigation]);

  useEffect(() => {
    if (route.params) {
      setTrips(route.params.trips);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={[styles.headerBaseText, styles.text1]}>
          Trips that fit your budget
        </Text>
        <Text style={[styles.headerBaseText, styles.text2]}>
          Based on your budget, time, and travel style.
        </Text>
      </View>
      <View>
        <FlatList
          data={trips}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <TripCard
              item={item}
              screenType="tour"
              onPress={() => {
                navigation.navigate("TripDetails", { item });
              }}
            />
          )}
          contentContainerStyle={{ paddingBottom: 220 }}
        />
      </View>
    </View>
  );
}

export default TripScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
  },
  headerTextContainer: {
    marginTop: 30,
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
});
