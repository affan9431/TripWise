import { useLayoutEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TripCard from "../components/TripCard";
import { trips } from "../data/tripData";

function IntrestedTripScreen({ navigation, route }) {
  const [title, setTitle] = useState();
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular in {title}</Text>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id.toString()}
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
});
