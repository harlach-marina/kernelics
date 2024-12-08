const BASE_URL = 'http://localhost:3001';

export const api = async (url: string, params?: RequestInit) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, params);

    return await response.json();
  } catch (error) {
    console.error(error);
  } 
};
