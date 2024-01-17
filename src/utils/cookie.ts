import { cookies } from 'next/headers';

export function getCookie(name: string) {
  return cookies().get(name);
}

export function deleteCookie(name: string) {
  cookies().delete(name);
}

export function setCookie(name: string, value: string | number, days?: number) {
  deleteCookie(name);

  const e = new Date();
  e.setDate(e.getDate() + (days || 365));
  cookies().set(name, `${value}`, { expires: e.getTime() });
}
