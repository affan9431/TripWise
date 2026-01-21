import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TripDurationInput({ tripDuration, onAddHandler, onRemoveHandler }) {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Trip Duration</Text>
      </View>
      <View style={styles.iconContainer}>
        <Pressable
          onPress={onRemoveHandler}
          style={{
            borderRightWidth: 1,
            borderRightColor: "#E5FE5A",
          }}
        >
          <Ionicons name="remove" size={30} color="#E5FE5A" />
        </Pressable>
        <Text style={styles.text}>{tripDuration} Days</Text>
        <Pressable
          onPress={onAddHandler}
          style={{ borderLeftWidth: 1, borderLeftColor: "#E5FE5A" }}
        >
          <Ionicons name="add" size={30} color="#E5FE5A" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: "#E5FE5A",
    padding: 10,
    margin: 30,
    borderRadius: 10,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5FE5A",
  },
  titleText: {
    fontSize: 15,
    color: "#ffff",
    fontFamily: "PoopinItalic",
    marginBottom: 4,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#E5FE5A",
    width: "50%",
    margin: "auto",
    borderRadius: 7,
  },
  text: {
    fontSize: 15,
    color: "#ffffff",
  },
});

export default TripDurationInput;
