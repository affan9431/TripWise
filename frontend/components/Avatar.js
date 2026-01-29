import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { jwtDecode } from "jwt-decode";

function Avatar() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const userToken = await AsyncStorage.getItem("userToken");

        if (userToken) {
          const decoded = jwtDecode(userToken);
          setUserInfo(decoded);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    getUserInfo();
  }, []);

  // Function to get initials from name
  const getInitials = (name) => {
    if (!name) return "?";

    const nameParts = name.trim().split(" ");

    if (nameParts.length >= 2) {
      // If we have first and last name
      return (
        nameParts[0][0] + nameParts[nameParts.length - 1][0]
      ).toUpperCase();
    } else {
      // If we only have first name, take first 2 letters
      return name.substring(0, 2).toUpperCase();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarCircle}>
        <Text style={styles.initialsText}>
          {userInfo ? getInitials(userInfo.name) : "?"}
        </Text>
      </View>
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
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4A90E2", // Change to your preferred color
    justifyContent: "center",
    alignItems: "center",
  },
  initialsText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
