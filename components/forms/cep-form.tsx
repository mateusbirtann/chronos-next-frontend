import React from "react";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from "@/components/ui/button";

interface CepFormProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: () => void;
}

export function CepForm({ inputMessage, setInputMessage, handleSendMessage }: CepFormProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-2">
      <div className="flex items-center space-x-2">
        <ChatInput
          className="flex-grow z-10"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Digite o CEP..."
          onKeyPress={handleKeyPress}
          inputMode="numeric"
        />
        <Button onClick={handleSendMessage}>Buscar</Button>
      </div>
    </div>
  );
}
