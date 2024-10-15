import { Message } from "@/types";

export const INITIAL_MESSAGE: Message = { id: 1, text: "Qual CEP você deseja consultar?", sender: "bot" };
export const WAIT_MESSAGE: Message = { id: 0, text: "Só um momento, por favor", sender: "bot" };
export const NEW_SEARCH_MESSAGE: Message = { id: 0, text: "Caso queira consultar outro CEP, digite um novo CEP.", sender: "bot" };
