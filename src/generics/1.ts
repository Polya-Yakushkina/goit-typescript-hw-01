// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та
// повертає об'єкт з даними. Використовуйте Generics для типізації повернутих даних.
// import axios from 'axios';
// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

import axios, { AxiosResponse } from 'axios';

async function fetchData(url: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}