import { formatDistanceToNowStrict, parseISO } from 'date-fns';

const isoDateFormat =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;

function isIsoDateString(value: unknown): boolean {
  return !!value && typeof value === 'string' && isoDateFormat.test(value);
}

export function handleDates(body: { [key: string]: unknown }) {
  if (body === null || body === undefined || typeof body !== 'object')
    return body;

  for (const key of Object.keys(body)) {
    const value = body[key];

    if (isIsoDateString(value)) {
      body[key] = parseISO(value as string);
    } else if (typeof value === 'object')
      handleDates(value as { [key: string]: unknown });
  }
}

export const getTimeDistanceFromNow = (date: Date) => {
  const distanceFrom = formatDistanceToNowStrict(date).split(' ');
  const rtl = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
    style: 'short',
  });
  return rtl.format(
    -distanceFrom[0],
    distanceFrom[1] as Intl.RelativeTimeFormatUnit,
  );
};
