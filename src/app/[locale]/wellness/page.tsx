import SectionGrid from '@/components/home/sectionGrid';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { fetchData } from '@/lib/apolloClient';
import { UploadFile, WellnessQuery } from '@/gql/graphql';
import { WELLNESS_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import ImageGridTree from '@/components/home/imageGridTree';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';
import { notFound } from 'next/navigation';
import ModalOffer from '@/components/home/modalOffer';

export async function generateMetadata({ params }: LocalePageProps) {
  return generateSeoMetadata<WellnessQuery>(WELLNESS_QUERY, params, (data) => ({
    title: data.wellness?.seo?.metaTitle,
    description: data.wellness?.seo?.metaDescription,
    image: data.wellness?.seo?.shareImage?.url,
  }));
}

export default async function Wellness({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<WellnessQuery>(WELLNESS_QUERY, { locale });

  if (!data.wellness) return notFound();

  return (
    <>
      {!data.wellness?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data.wellness?.heroSection?.heroImage}
          title={data.wellness?.heroSection?.heroText}
        />
      )}

      <div className='h-12.5' />
    </>
  );
}
