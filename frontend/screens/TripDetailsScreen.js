import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import InfoCard from "../components/InfoCard";
import PlaceCard from "../components/PlaceCard";
import TripCard from "../components/TripCard";
import {
  getFavouriteTrip,
  makeFavouriteTrip,
  removeFavouriteTrip,
} from "../util/database";

function TripDetailsScreen({ navigation, route }) {
  const [tour, setTour] = useState();
  const [favouriteTour, setFavouriteTour] = useState(false);
  const [hotelRootTitle, setHotelRootTitle] = useState(
    "Best Stays for Your Budget",
  );

  useEffect(() => {
    async function checkIfFavourite() {
      const token = await AsyncStorage.getItem("userToken");
      const decoded = jwtDecode(token);
      const trips = await getFavouriteTrip(decoded.id);
      trips.forEach((trip) => {
        if (trip._id === tour?._id) {
          setFavouriteTour(true);
        }
      });
    }
    checkIfFavourite();
  }, [tour?._id]);

  useLayoutEffect(() => {
    const screenType = route.params?.screenType;
    const title = route.params?.item?.name;

    if (title) {
      navigation.setOptions({ title: `${title}` });
    }

    if (screenType === "IntrestedTrip") {
      setHotelRootTitle("Best Stays for you");
    }

    if (route.params?.item) {
      setTour(route.params.item);
    }

    if (screenType === "favourite") {
      const parent = navigation.getParent();
      parent?.setOptions({ headerShown: false });
    }

    return () => {
      const parent = navigation.getParent();
      if (screenType === "favourite") {
        parent?.setOptions({
          headerShown: true,
        });
      }
    };
  }, [navigation, route.params]);

  // TODO: ERROR is trip and intrestedtrip are in diffrent place so the tour id is undefined that why from intresredtrip it not save the trip.
  const favouriteTripHandler = async () => {
    const newsFavourite = !favouriteTour;
    setFavouriteTour(newsFavourite);

    const token = await AsyncStorage.getItem("userToken");
    const decoded = jwtDecode(token);
    if (newsFavourite) {
      await makeFavouriteTrip(decoded.id, tour._id);
    } else {
      await removeFavouriteTrip(decoded.id, tour._id);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: tour?.image }} style={styles.photo} />
          <Text style={styles.text}>{tour?.name}</Text>
          <Pressable style={styles.heartIcon} onPress={favouriteTripHandler}>
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
          <Text style={styles.bestStayTitle}>{hotelRootTitle}</Text>
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
        onPress={() => navigation.navigate("TripDayToDay", { tour })}
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
