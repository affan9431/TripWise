import React from "react";
import { Pressable, Text, View } from "react-native";

function Button({ children, style, textStyle, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={style}>
        <Text style={textStyle}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;
