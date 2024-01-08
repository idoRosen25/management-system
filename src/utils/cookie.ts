export function getCookie(name: RegExpMatchArray | null) {
  return (
    (name = (document.cookie + ';').match(new RegExp(name + '=.*;'))) &&
    name[0].split(/=|;/)[1]
  );
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; path=/; expires=${new Date(0).toUTCString()}`;
}

export function setCookie(name: string, value: string | number, days?: number) {
  deleteCookie(name);

  const e = new Date();
  e.setDate(e.getDate() + (days || 365));
  document.cookie =
    name + '=' + value + ';expires=' + e.toUTCString() + ';path=/';
}
