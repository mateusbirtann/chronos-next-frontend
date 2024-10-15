import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CepResponse } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCepResponse(data: CepResponse): string {
  if (!data.content) {
    return "CEP não encontrado. Por favor, verifique o CEP e tente novamente por favor.";
  }
  return data.content;
};