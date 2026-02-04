import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  getFavouriteTrip,
  makeFavouriteTrip,
  removeFavouriteTrip,
} from "../util/database";
import { jwtDecode } from "jwt-decode";

function TripCard({ item, onPress, screenType }) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    async function checkIfFavourite() {
      const token = await AsyncStorage.getItem("userToken");
      const decoded = jwtDecode(token);
      const trips = await getFavouriteTrip(decoded.id);
      trips.forEach((trip) => {
        if (trip._id === item._id) {
          setIsFavourite(true);
        }
      });
    }
    checkIfFavourite();
  }, [item._id]);

  const name = item.name || item.hotelName;
  const image = item.image || item.hotelImage;
  const description = item.tripStyle || item.hotelDescription;

  const price = item.estimatedCost
    ? `₹${item.estimatedCost.toLocaleString()} • 5 days`
    : `₹${item.estimatedCostPerNight?.toLocaleString()}/night`;

  const showBuffer = item.bufferCost !== undefined;

  const favouriteTripHandler = async () => {
    const newsFavourite = !isFavourite;
    setIsFavourite(newsFavourite);

    const token = await AsyncStorage.getItem("userToken");
    const decoded = jwtDecode(token);
    if (newsFavourite) {
      await makeFavouriteTrip(decoded.id, item._id);
    } else {
      await removeFavouriteTrip(decoded.id, item._id);
    }
  };

  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* Main Content Container */}
      <View style={styles.contentContainer}>
        {/* Image */}
        <View style={styles.imageContainer}>
          {/* {screenType === "hotels" && (
            <View style={styles.badges}>
              <Text style={styles.badgesText}>Basic</Text>
            </View>
          )} */}
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Trip/Hotel Details */}
        <View style={styles.detailsContainer}>
          <Text
            style={[
              styles.tripName,
              screenType === "hotels" && { fontSize: 15 },
            ]}
          >
            {name}
          </Text>
          <Text style={styles.price}>{price}</Text>

          {showBuffer && (
            <Text style={styles.buffer}>
              ₹{item.bufferCost.toLocaleString()} buffer
            </Text>
          )}

          <Text style={styles.tripStyle} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </View>

      {/* Icons Container */}
      {screenType === "tour" && (
        <View style={styles.iconsContainer}>
          {/* Heart Icon - Top Right */}
          <Pressable style={styles.heartIcon}>
            <Ionicons
              name={isFavourite ? "heart" : "heart-outline"}
              size={24}
              color="#E5FE5A"
              onPress={favouriteTripHandler}
            />
          </Pressable>

          {/* Arrow Icon - Bottom Right */}
          <Pressable style={styles.arrowIcon} onPress={onPress}>
            <Ionicons name="arrow-forward" size={24} color="#E5FE5A" />
          </Pressable>
        </View>
      )}
    </Pressable>
  );
}

export default TripCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5FE5A",
    marginHorizontal: 24,
    marginVertical: 10,
    position: "relative",
  },
  contentContainer: {
    flexDirection: "row",
    gap: -2,
  },
  imageContainer: {
    width: 150,
    height: 120,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "80%",
    height: "100%",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  tripName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "PoppinBold",
  },
  price: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "PoppinMedium",
  },
  buffer: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "Poppins",
  },
  tripStyle: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "Poppins",
    marginTop: 4,
  },
  iconsContainer: {
    position: "absolute",
    right: 8,
    top: 8,
    bottom: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  heartIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5FE5A",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#E5FE5A",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  badges: {
    width: "40%",
    position: "absolute",
    top: 7,
    left: 7,
    backgroundColor: "#54CE8E",
    padding: 10,
    zIndex: 1000,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  badgesText: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "PoppinMedium",
  },
});
