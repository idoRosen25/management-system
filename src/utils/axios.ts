import axios, { AxiosError } from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const config = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params: { [key: string]: string | string[] }) => {
    let result = '';
    const filteredParams = Object.entries(params).filter(
      ([, value]) =>
        value !== undefined && value !== null && value?.length !== 0,
    );

    filteredParams.map(([key, value], index) => {
      if (Array.isArray(value)) {
        const getValue = value.join(`&${key}=`);
        return index === 0
          ? (result = `${key}=${getValue}`)
          : (result = result + `&${key}=${getValue}`);
      } else {
        return index === 0
          ? (result = `${key}=${value}`)
          : (result = result + `&${key}=${value}`);
      }
    });
    return result;
  },
};

const http = axios.create(config);

export const getAxiosErrorMessage = (err: AxiosError) => {
  return (
    (err as AxiosError<{ message?: string }>)?.response?.data?.message || ''
  );
};

export function pauseExecution(
  milliseconds: number,
  withError: boolean = false,
) {
  return new Promise((resolve, error) => {
    setTimeout(withError ? error : resolve, milliseconds);
  });
}

export { http as axios };
