import { Image, StyleSheet, Text, View } from "react-native";

function Avatar() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/profile.jpg")}
        style={{ width: 40, height: 40, borderRadius: 25 }}
      />
    </View>
  );
}

export default Avatar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
    alignItems: "center",
    gap: 10,
  },
});
