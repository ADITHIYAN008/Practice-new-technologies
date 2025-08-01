import { View, Text, Alert, TouchableOpacity, StyleSheet } from "react-native";

import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";

const SpecialTabButton = () => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Alert.alert("Special Tab Button Pressed");
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styels.button}
      activeOpacity={0.85}
    >
      <Ionicons name="add-circle" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styels = StyleSheet.create({
  button: {
    position: "absolute",
    top: -20,
    left: "50%",
    transform: [{ translateX: -40 }],
    backgroundColor: "#4F46E5",
    borderRadius: 24,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
});

export default SpecialTabButton;
