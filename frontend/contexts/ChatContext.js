import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

function ChatContextProvider({ children }) {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hi! I’m your travel assistant ✈️", sender: "bot" },
  ]);
  const [activeChat, setActiveChat] = useState(false);
  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        activeChat,
        setActiveChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatContextProvider");
  }
  return context;
}

export { ChatContextProvider, useChat };
