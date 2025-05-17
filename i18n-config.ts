export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'lao'],
  localeDetection: false,
} as const;

export type Locale = (typeof i18n)['locales'][number];
