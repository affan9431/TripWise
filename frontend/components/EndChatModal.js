import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

function EndChatModal({ visible, onClose, onEndChat }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <Pressable style={styles.actionButton} onPress={onEndChat}>
            <Ionicons name="trash-outline" size={20} color="#FF4C4C" />
            <Text style={styles.actionText}>End Chat</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}

export default EndChatModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#1E1E20",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  actionText: {
    color: "#FF4C4C",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "600",
  },
});
