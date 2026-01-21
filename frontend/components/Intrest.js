import { View, Text, StyleSheet } from "react-native";
import IntrestCard from "./IntrestCard";

function Intrest({ title, intrestData, onPress, style, selectedTitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <IntrestCard
        intrestData={intrestData}
        onPress={onPress}
        style={style}
        selectedTitle={selectedTitle}
      />
    </View>
  );
}

export default Intrest;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "PoppinSemiBold",
    marginBottom: 12,
  },
});
