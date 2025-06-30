import { Montserrat } from 'next/font/google';
import Header from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { fetchData } from '@/lib/apolloClient';
import { GLOBAL_QUERY } from '@/lib/graphql/queries';
import { GlobalQuery } from '@/gql/graphql';
import { i18n } from '../../i18n-config';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default async function NotFound() {
  // Use default locale for global 404
  const defaultLocale = i18n.defaultLocale;

  try {
    const data = await fetchData<GlobalQuery>(GLOBAL_QUERY, {
      locale: defaultLocale,
    });

    return (
      <div
        className={`${montserrat.className} flex min-h-screen flex-col antialiased`}
      >
        <Header global={data.global} />
        <main className='flex flex-1 items-center justify-center'>
          <div className='text-center'>
            <h1 className='mb-4 text-6xl font-bold text-gray-900'>404</h1>
            <h2 className='mb-4 text-2xl font-semibold text-gray-700'>
              Page Not Found
            </h2>
            <p className='mb-8 text-gray-600'>
              The page you are looking for does not exist.
            </p>
            Go Back Home
          </div>
        </main>
        <Footer global={data.global} />
      </div>
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // Fallback without header/footer if data fetch fails
    return (
      <div
        className={`${montserrat.className} flex min-h-screen items-center justify-center antialiased`}
      >
        <div className='text-center'>
          <h1 className='mb-4 text-6xl font-bold text-gray-900'>404</h1>
          <h2 className='mb-4 text-2xl font-semibold text-gray-700'>
            Page Not Found
          </h2>
          <p className='mb-8 text-gray-600'>
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }
}
