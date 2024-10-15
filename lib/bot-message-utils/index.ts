import { Message } from "@/types";
import { WAIT_MESSAGE } from "@/constants";

export function updateBotMessage(messages: Message[], id: number, text: string): Message[] {
  return messages.map((msg) =>
    msg.id === id ? { ...msg, text, isLoading: false } : msg
  );
};

export function createUserMessage(text: string, id: number): Message {
  return {
    id,
    text,
    sender: "user"
  }
}

export function createWaitMessage(id: number): Message {
  return {
    ...WAIT_MESSAGE,
    id
  }
}

export function createLoadingMessage(id: number): Message {
  return {
    id,
    text: "",
    sender: "bot",
    isLoading: true
  }
}


