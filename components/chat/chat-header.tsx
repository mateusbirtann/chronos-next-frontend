export function ChatHeader() {
  return (
    <>
      <h1 className="text-2xl font-bold text-left w-full">Chronos Frontend CEP Search</h1>
      <span className="text-sm text-left w-full">
        Este é um projeto de frontend que consome a API do ViaCEP através do Assistant API da OpenAI.
      </span>
      <span className="text-sm text-left w-full">
        A aplicação permite ao usuário inserir um CEP e receber informações detalhadas sobre o endereço correspondente.
      </span>
      <span className="text-sm text-left w-full">
        Para utilizar, basta digitar o CEP no campo abaixo e clicar em &quot;Buscar&quot;.
      </span>
    </>
  );
}
