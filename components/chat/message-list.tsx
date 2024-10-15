import React from "react";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat/chat-bubble";
import MessageLoading from "@/components/ui/chat/message-loading";
import { Message } from "@/types";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <ChatMessageList className="w-full flex-grow overflow-y-auto my-4 sm:my-6">
      {messages.map((message) => (
      <ChatBubble
        key={message.id}
        variant={message.sender === "bot" ? "received" : "sent"}
        className="max-w-[80%] sm:max-w-[70%] md:max-w-[60%]"
      >
        <ChatBubbleAvatar
          fallback={message.sender === "bot" ? "B" : "U"}
        />
        <ChatBubbleMessage isLoading={message.isLoading}>
          {message.isLoading ? <MessageLoading /> : message.text}
        </ChatBubbleMessage>
      </ChatBubble>
    ))}
    </ChatMessageList>
  );
}