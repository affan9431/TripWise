import { Ionicons } from "@expo/vector-icons";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import EndChatModal from "../components/EndChatModal";
import { useChat } from "../contexts/ChatContext";
import { chatbotResponse } from "../util/database";

function ChatScreen({ navigation }) {
  const { messages, setMessages, setActiveChat } = useChat();
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isEndingChat = useRef(false);
  const flatListRef = useRef();

  useLayoutEffect(() => {
    const parent = navigation.getParent();
    parent?.setOptions({ headerShown: false });

    return () => {
      parent?.setOptions({ headerShown: true });
    };
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      if (messages.length <= 1) {
        return; // allow exit if no real conversation
      }

      e.preventDefault(); // stop default back action

      Alert.alert(
        "Close Conversation?",
        "Your chat with TripWise AI will be closed.",
        [
          {
            text: "Continue Chat",
            style: "cancel",
            onPress: () => {
              setIsOpen(false);
            },
          },
          {
            text: `${isEndingChat.current ? "End Chat" : "Close Chat"}`,
            style: "destructive",
            onPress: () => {
              if (isEndingChat.current === true) {
                setMessages([
                  {
                    id: "1",
                    text: "Hi! I’m your travel assistant ✈️",
                    sender: "bot",
                  },
                ]);
                setActiveChat(false);
                isEndingChat.current = false;
                navigation.dispatch(e.data.action);
              } else {
                navigation.dispatch(e.data.action);
              }
            },
          },
        ],
      );
    });

    return unsubscribe;
  }, [navigation, messages]);

  const sendMessageHandler = async () => {
    if (!inputText.trim()) return;

    Keyboard.dismiss(); // ✅ Close keyboard

    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setActiveChat(true);
    setIsLoading(true);

    try {
      const botReply = await chatbotResponse(inputText, messages);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "_bot",
          text: botReply,
          sender: "bot",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "_error",
          text: "Something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
    }

    setIsLoading(false);
  };

  const endChatHandler = () => {
    isEndingChat.current = true;
    navigation.goBack();
  };

  console.log(isEndingChat);

  const renderItem = ({ item }) => {
    const isUser = item.sender === "user";

    return (
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.botMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContainer1}>
          <Ionicons name="chatbubble-ellipses" size={24} color="#fff" />
          <Text style={styles.headerTitle}>TripWise AI</Text>
        </View>
        <Pressable onPress={() => setIsOpen(true)}>
          <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
        </Pressable>
      </View>

      {isOpen && (
        <EndChatModal
          visible={isOpen}
          onClose={() => setIsOpen(false)}
          onEndChat={endChatHandler}
        />
      )}

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 15 }}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />
      {/* <Button
        style={styles.endChatButton}
        textStyle={styles.textStyle}
        onPress={endChatHandler}
      >
        End Chat
      </Button> */}

      {/* AI Thinking Indicator */}
      {isLoading && (
        <View style={[styles.messageContainer, styles.botMessage]}>
          <Text style={styles.messageText}>TripWise AI is thinking...</Text>
        </View>
      )}

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ask about your next adventure..."
          placeholderTextColor="#999"
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
        />
        <Pressable style={styles.sendButton} onPress={sendMessageHandler}>
          <Ionicons name="send" size={20} color="#fff" />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
    paddingBottom: 100,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headerContainer1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  messageContainer: {
    padding: 12,
    borderRadius: 18,
    marginVertical: 6,
    maxWidth: "75%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#6C63FF",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2A2A2D",
  },
  messageText: {
    color: "#fff",
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#333",
  },
  input: {
    flex: 1,
    backgroundColor: "#2A2A2D",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: "#fff",
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#6C63FF",
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  endChatButton: {
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#FF4C4C",
    width: 300,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "PoppinSemiBold",
  },
});
