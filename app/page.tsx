"use client";

import React, { useState } from "react";
import { CepForm } from "@/components/forms/cep-form";
import { Message } from "@/types";
import { INITIAL_MESSAGE, NEW_SEARCH_MESSAGE } from "@/constants";
import { createUserMessage, createWaitMessage, createLoadingMessage } from "@/lib/bot-message-utils";
import { MessageList } from "@/components/chat/message-list";
import { fetchCep } from "@/requests/cep";
import { formatCepResponse } from "@/lib/utils";
import { ChatHeader } from "@/components/chat/chat-header";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputMessage, setInputMessage] = useState("");

  const createNewSearchMessage = (id: number): Message => ({
    ...NEW_SEARCH_MESSAGE,
    id
  });

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessages = [
      createUserMessage(inputMessage, messages.length + 1),
      createWaitMessage(messages.length + 2),
      createLoadingMessage(messages.length + 3)
    ];

    setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    setInputMessage("");

    const botResponses = await handleCepRequest(inputMessage, newMessages[2].id);
    setMessages((prevMessages) => [
      ...prevMessages.slice(0, -1),
      ...botResponses
    ]);
  };

  async function handleCepRequest(cep: string, loadingMessageId: number): Promise<Message[]> {
    try {
      const data = await fetchCep({ content: cep });
      const responseText = formatCepResponse(data);
      return [
        { id: loadingMessageId, text: responseText, sender: "bot" },
        createNewSearchMessage(loadingMessageId + 1)
      ];
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
      return [{ id: loadingMessageId, text: "Desculpe, ocorreu um erro ao consultar o CEP. Tente novamente por favor.", sender: "bot" }];
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[80vh] px-4 sm:px-6 md:px-10 my-10 max-w-6xl mx-auto gap-2">
      <ChatHeader />
      <div className="flex flex-col min-h-[80vh] w-full border rounded">
        <MessageList messages={messages} />
        <CepForm
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}
