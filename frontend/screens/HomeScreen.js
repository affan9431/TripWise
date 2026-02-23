import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import Intrest from "../components/Intrest";
import Slider from "../components/Slider";
import { useChat } from "../contexts/ChatContext";
import { intrestData } from "../data/intrestData";

function HomeScreen({ navigation }) {
  const { activeChat } = useChat();
  return (
    <View style={styles.container}>
      <Slider />

      <Intrest
        title="Explore By Interest"
        intrestData={intrestData}
        onPress={(item) => {
          navigation.navigate("IntrestedTrip", { category: item.title });
        }}
      />

      {/* Floating Chat Button */}
      <Pressable
        style={styles.chatButton}
        onPress={() => navigation.navigate("ChatScreen")}
      >
        <Ionicons name="chatbubble-ellipses" size={24} color="#464545" />
      </Pressable>
      {activeChat && <View style={styles.active}></View>}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
  },
  chatButton: {
    position: "absolute",
    bottom: 120,
    right: 20,
    backgroundColor: "#E5FE5A",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6, // Android shadow
  },
  active: {
    position: "absolute",
    bottom: 170,
    right: 30,
    backgroundColor: "#ff0000",
    width: 15,
    height: 15,
    borderRadius: 7.5,
  },
});
