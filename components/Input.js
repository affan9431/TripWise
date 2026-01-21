import { StyleSheet, TextInput, View } from "react-native";

function Input({ value, onChangeText, placeholder, style }) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="#fff"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5FE5A",
    width: "90%",
    color: "#fff",
    fontSize: 16,
  },
});
