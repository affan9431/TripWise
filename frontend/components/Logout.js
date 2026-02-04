import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

function Logout() {
  const navigation = useNavigation();

  async function handleLogout() {
    await AsyncStorage.removeItem("userToken");
    navigation.navigate("Login");
  }

  return (
    <Pressable style={{ marginRight: 15 }} onPress={handleLogout}>
      <Ionicons name="log-out-outline" size={24} color="#f80a0a" />
    </Pressable>
  );
}

export default Logout;
