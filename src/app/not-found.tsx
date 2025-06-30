import { Montserrat } from 'next/font/google';
import Header from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { fetchData } from '@/lib/apolloClient';
import { GLOBAL_QUERY } from '@/lib/graphql/queries';
import { GlobalQuery } from '@/gql/graphql';
import { i18n } from '../../i18n-config';
import LocaleLink from '@/components/shared/LocaleLink';

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
        <main className='flex flex-1 items-center justify-center py-12 lg:py-16'>
          <div className='text-center'>
            <h1 className='mb-4 text-5xl font-bold text-gray-900'>404</h1>
            <h2 className='mb-4 text-2xl font-semibold text-gray-700'>
              Page Not Found
            </h2>
            <p className='mb-8 text-gray-600'>
              The page you are looking for does not exist.
            </p>

            <LocaleLink
              href='/'
              className='flex h-9 min-w-63 cursor-pointer items-center justify-center rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-center text-sm font-medium text-gray-50 md:h-10.5 md:min-w-38 lg:h-9.5 xl:h-12.5 xl:text-base 2xl:min-w-60 2xl:border-3'
            >
              Go Back Home
            </LocaleLink>
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
        <div className='py-12 text-center lg:py-16'>
          <h1 className='mb-4 text-5xl font-bold text-gray-900'>404</h1>
          <h2 className='mb-4 text-2xl font-semibold text-gray-700'>
            Page Not Found
          </h2>
          <p className='mb-8 text-gray-600'>
            The page you are looking for does not exist.
          </p>
          <LocaleLink
            href='/'
            className='flex h-9 min-w-63 cursor-pointer items-center justify-center rounded-full border-2 border-gray-800 bg-gray-800 px-5 py-1 text-center text-sm font-medium text-gray-50 md:h-10.5 md:min-w-38 lg:h-9.5 xl:h-12.5 xl:text-base 2xl:min-w-60 2xl:border-3'
          >
            Go Back Home
          </LocaleLink>
        </div>
      </div>
    );
  }
}
