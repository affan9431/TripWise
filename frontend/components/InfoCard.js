import { StyleSheet, Text, View } from "react-native";

function InfoCard({ title, text }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.baseText, styles.title]}>{title}</Text>
      <Text style={[styles.baseText, styles.text]}>{text}</Text>
    </View>
  );
}

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: "#1E1E1E",
    gap: 5,
  },
  baseText: {
    fontFamily: "PoppinBold",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 10,
  },
  text: {
    fontSize: 15,
  },
});
