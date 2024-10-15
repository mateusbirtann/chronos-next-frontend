export interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  isLoading?: boolean;
}

export interface CepResponse {
  content: string;
}

export type CepRequest = {
  content: string
}