type PostRequestResponse<T> = { ok: boolean; status: number; data: T };

export const postRequest = async <T = Record<string, any>, K = Record<string, any>>(
  endpoint: string,
  body: T,
): Promise<PostRequestResponse<K>> => {

  const initialOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${process.env.NEXT_PUBLIC_CHRONOS_API_URL}${endpoint}`, initialOptions);

  const data = await response.json();

  return { ok: response.ok, status: response.status, data };
};