import { i18n } from '../../../i18n-config';

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function Home() {
  return (
    <>
      <h1>TEST</h1>
      <div className='h-12.5' />
    </>
  );
}
