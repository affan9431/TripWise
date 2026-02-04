import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getFavouriteTrip } from "../util/database";
import { jwtDecode } from "jwt-decode";
import TripCard from "../components/TripCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

function FovuriteTripScreen({ navigation }) {
  const [favouriteTrips, setFavouriteTrips] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function fetchFavouriteTrips() {
        try {
          setIsloading(true);
          const token = await AsyncStorage.getItem("userToken");
          const decoded = jwtDecode(token);
          const trips = await getFavouriteTrip(decoded.id);
          setFavouriteTrips(trips);
          setIsloading(false);
        } catch (error) {
          setIsloading(false);
          console.log(error);
        }
      }
      fetchFavouriteTrips();
    }, []),
  );

  if (isLoading) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Trips You Love 💖</Text>
      </View>
      <FlatList
        data={favouriteTrips}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <TripCard
            item={item}
            screenType="favourite"
            onPress={() => {
              navigation.navigate("TripDetails", {
                item,
                screenType: "favourite",
              });
            }}
          />
        )}
        contentContainerStyle={{ paddingBottom: 220 }}
      />
    </View>
  );
}

export default FovuriteTripScreen;

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
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "PoppinBold",
  },
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
});
