import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import { updateUser } from "../util/database";

function UserProfileScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");

      if (token) {
        const decoded = jwtDecode(token);
        console.log(decoded);
        setFullName(decoded.name || "");
        setEmail(decoded.email || "");
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true); // ⭐ Show loading state

      const token = await AsyncStorage.getItem("userToken");

      if (!token) {
        alert("Session expired. Please login again.");
        return;
      }

      const decoded = jwtDecode(token);
      const userId = decoded.id;

      const updatedToken = await updateUser(userId, { fullName });

      await AsyncStorage.setItem("userToken", updatedToken);

      const newDecoded = jwtDecode(updatedToken);
      setFullName(newDecoded.name || "");

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.inputContainer}>
        <Input
          value={fullName}
          onChangeText={setFullName}
          placeholder="Full Name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
          editable={false}
        />
      </View>

      <Pressable
        onPress={handleUpdate}
        style={({ pressed }) => [
          styles.updateButton,
          pressed && styles.updateButtonPressed,
        ]}
      >
        <Text style={styles.updateButtonText}>Update Profile</Text>
      </Pressable>
    </View>
  );
}

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 40,
    fontFamily: "PoppinBold",
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#404040",
  },
  updateButton: {
    backgroundColor: "#E5FE5A",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
    width: "60%",
    alignSelf: "center",
  },
  updateButtonPressed: {
    opacity: 0.7,
  },
  updateButtonText: {
    color: "#151517",
    fontSize: 18,
    fontWeight: "600",
  },
  loadingText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
