import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Input({
  value,
  onChangeText,
  placeholder,
  style,
  onTogglePassword,
  secureTextEntry,
  autoCorrect = true,
  isPassword = false,
  editable = true,
}) {
  return (
    <View>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={autoCorrect}
        editable={editable}
      />
      {isPassword && (
        <Pressable onPress={onTogglePassword} style={styles.iconContainer}>
          <Ionicons
            name={secureTextEntry ? "eye-off" : "eye"}
            size={24}
            color="#fff"
          />
        </Pressable>
      )}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
    width: "90%",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5FE5A",
    width: "100%",
    color: "#fff",
    fontSize: 16,
    paddingRight: 40, // Make space for the icon
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
});
