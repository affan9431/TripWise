import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function IntrestCard({ intrestData, onPress, style, selectedTitle }) {
  return (
    <View>
      <FlatList
        data={intrestData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onPress(item)}
            style={[styles.container, item.title === selectedTitle && style]}
          >
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default IntrestCard;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    marginRight: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    position: "absolute",
    bottom: 3,
    fontSize: 14,
    fontFamily: "PoppinSemiBold",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
