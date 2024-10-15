import { CepRequest, CepResponse } from "@/types";
import { postRequest } from "@/requests/index";

export async function fetchCep(body: CepRequest) {
  const response = await postRequest<CepRequest, CepResponse>('/fetch_cep', body)

  if (!response.ok) {
    throw new Error('Falha ao buscar CEP');
  }

  return response.data
}