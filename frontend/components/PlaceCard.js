import { Image, StyleSheet, Text, View, Pressable } from "react-native";

function PlaceCard({ item, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* Background Image */}
      <Image
        source={{ uri: item?.placeImage }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Badge (Top Right) */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item?.crowdLevel}</Text>
      </View>

      {/* Info Container */}
      <View style={styles.infoContainer}>
        <Text style={styles.placeName} numberOfLines={2}>
          {item?.placeName}
        </Text>
        <View style={styles.detailsRow}>
          <Text style={styles.detailText}>⏱ {item?.timeNeeded}</Text>
        </View>
        <Text style={styles.addressText} numberOfLines={1}>
          📍 {item?.address}
        </Text>
        {item?.ticketPrice > 0 && (
          <Text style={styles.priceText}>
            ₹{item?.ticketPrice.toLocaleString()}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

export default PlaceCard;

const styles = StyleSheet.create({
  card: {
    width: 220,
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 12,
    marginVertical: 10,
    position: "relative",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    backgroundColor: "#1a1a1a",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  badge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#E5FE5A",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#151517",
    fontFamily: "PoppinMedium",
  },
  infoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: 16,
  },
  placeName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    fontFamily: "PoppinBold",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  detailText: {
    fontSize: 13,
    color: "#E5FE5A",
    fontFamily: "PoppinMedium",
  },
  addressText: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 8,
    fontFamily: "Poppins",
  },
  priceText: {
    fontSize: 14,
    color: "#E5FE5A",
    fontWeight: "600",
    fontFamily: "PoppinMedium",
  },
});
