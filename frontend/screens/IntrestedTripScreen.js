import { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TripCard from "../components/TripCard";
import { getIntrestedTrips } from "../util/database";

function IntrestedTripScreen({ navigation, route }) {
  const [title, setTitle] = useState();
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    const parent = navigation.getParent();
    parent?.setOptions({ headerShown: false });

    const routeTitle = route.params && route.params.category;
    setTitle(routeTitle);
    navigation.setOptions({ title: routeTitle });

    return () => {
      parent?.setOptions({ headerShown: true });
    };
  }, []);

  useEffect(() => {
    async function fetchIntrestedTrips() {
      try {
        setIsLoading(true);
        const data = await getIntrestedTrips(title);
        setTrips(data);
        console.log("End");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchIntrestedTrips();
  }, [title]);

  if (isLoading) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular in {title}</Text>
      {trips.length > 0 ? (
        <FlatList
          data={trips}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <TripCard
              item={item}
              screenType="intrest"
              onPress={() => {
                navigation.navigate("TripDetails", { item });
              }}
            />
          )}
          contentContainerStyle={{ paddingBottom: 220 }}
        />
      ) : (
        <View style={styles.fallBackContainer}>
          <Text style={styles.fallBackText}>
            No trips available in this category.
          </Text>
        </View>
      )}
    </View>
  );
}

// TODO: Update trip data according to the title

export default IntrestedTripScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "PoppinSemiBold",
    marginTop: 20,
    textAlign: "center",
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
