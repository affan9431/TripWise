import { useLayoutEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InfoCard from "../components/InfoCard";
import TripCard from "../components/TripCard";
import PlaceCard from "../components/PlaceCard";

function TripDetailsScreen({ navigation, route }) {
  const [tour, setTour] = useState();
  const [favouriteTour, setFavouriteTour] = useState(false);

  useLayoutEffect(() => {
    const title = route.params.item.name;
    setTour(route.params.item);
    navigation.setOptions({ title: `${title}` });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: tour?.image }} style={styles.photo} />
          <Text style={styles.text}>{tour?.name}</Text>
          <Pressable
            style={styles.heartIcon}
            onPress={() => setFavouriteTour(!favouriteTour)}
          >
            <Ionicons
              name={favouriteTour ? "heart" : "heart-outline"}
              size={24}
              color="#151517"
            />
          </Pressable>
        </View>
        <View style={styles.infoContainer}>
          <InfoCard title="Total Distance" text="26Km" />
          <InfoCard title="Avg Temp" text="12 °C" />
          <InfoCard title="Sunset" text="06 Pm" />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{tour?.description}</Text>
        </View>
        <View>
          <Text style={styles.bestStayTitle}>Best Stays for Your Budget</Text>
          <View>
            {tour?.hotels?.map((item) => (
              <TripCard
                key={item.hotelName}
                item={item}
                screenType="hotels"
                onPress={() => {
                  // navigation.navigate("TripDetails", { item });
                  // Alert.alert("Success", "Now redirect to next screen");
                  console.log(item);
                }}
              />
            ))}
          </View>
        </View>
        <View style={styles.placesContainer}>
          <Text style={styles.placeTitleText}>Places Worth Visiting</Text>
          <View>
            <FlatList
              data={tour?.places}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 120 }}
              keyExtractor={(item) => item.placeName}
              renderItem={({ item }) => (
                <PlaceCard
                  item={item}
                  onPress={() => {
                    console.log("Work");
                  }}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={styles.fixedFooter}
        onPress={() => navigation.navigate("TripDayToDay")}
      >
        <Text style={styles.fixedFooterText}>Day To Day Plan</Text>
      </Pressable>
    </View>
  );
}

export default TripDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
  },
  imageContainer: {
    margin: 20,
    borderRadius: 40,
  },
  photo: {
    width: "100%",
    height: 230,
    resizeMode: "cover",
    borderRadius: 20,
  },
  text: {
    position: "absolute",
    bottom: 0,
    left: 20,
    color: "#fff",
    fontFamily: "PoppinBold",
    fontSize: 30,
  },
  heartIcon: {
    position: "absolute",
    bottom: 10,
    right: 20,
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  descriptionContainer: {
    margin: 20,
    marginTop: 30,
  },
  descriptionText: {
    color: "#fff",
    fontFamily: "PoppinMedium",
  },
  bestStayTitle: {
    margin: 20,
    fontSize: 19,
    color: "#fff",
    fontFamily: "PoppinBold",
  },
  placesContainer: {
    marginTop: 30,
  },
  placeTitleText: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 19,
    color: "#fff",
    fontFamily: "PoppinBold",
  },
  fixedFooter: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Transparent black
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  fixedFooterText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PoppinBold",
    textAlign: "center",
  },
});
