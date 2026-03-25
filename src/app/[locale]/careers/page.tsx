/* eslint-disable @typescript-eslint/no-explicit-any */
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import { LocalePageProps } from '../destination/page';
import { notFound } from 'next/navigation';
import { fetchStrapiData } from '@/lib/fetchStrapiData';
import { generateSeoMetadata } from '@/lib/seo/generateMetadata';
import Accordion from '@/components/shared/Accordion';
import CareersForm from './CareersForm';

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  return generateSeoMetadata('career', params, (data: any) => ({
    title: data?.seo?.metaTitle,
    description: data?.seo?.metaDescription,
    image: data?.seo?.shareImage?.url
      ? {
          url: data.seo.shareImage.url,
          width: 1200,
          height: 630,
          alt: data?.seo?.metaTitle,
        }
      : undefined,
    canonicalUrl: `/${locale}/careers/`,
  }));
}

export default async function Careers({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchStrapiData('career', locale);

  console.log(data, 'dddddddd');

  if (!data) return notFound();

  return (
    <>
      {!data?.heroSection?.hideThisBlock && (
        <PageHeader
          heroImage={data?.heroSection?.heroImage}
          title={data?.heroSection?.heroText}
        />
      )}

      {!data?.headerSectionGridSlider?.hideThisBlock && (
        <div className='mb-7.5 sm:mb-12.5'>
          <SectionHeader
            subtitle={data?.headerSectionGridSlider?.subtitle}
            title={data?.headerSectionGridSlider?.title}
            description={data?.headerSectionGridSlider?.description}
            buttonText={data?.headerSectionGridSlider?.buttonText}
            buttonUrl={data?.headerSectionGridSlider?.buttonUrl}
            newTab={data?.headerSectionGridSlider?.newTab}
            id=''
          />
        </div>
      )}

      {!data?.headerVacanciesAccordion?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.headerVacanciesAccordion?.subtitle}
          title={data?.headerVacanciesAccordion?.title}
          description={data?.headerVacanciesAccordion?.description}
          buttonText={data?.headerVacanciesAccordion?.buttonText}
          buttonUrl={data?.headerVacanciesAccordion?.buttonUrl}
          newTab={data?.headerVacanciesAccordion?.newTab}
          id=''
        />
      )}

      <div className='mb-12.5 sm:mb-15 lg:mb-20'>
        <Accordion data={data?.vacanciesAccordion} />
      </div>

      {!data?.headerApplyForm?.hideThisBlock && (
        <SectionHeader
          subtitle={data?.headerApplyForm?.subtitle}
          title={data?.headerApplyForm?.title}
          description={data?.headerApplyForm?.description}
          buttonText={data?.headerApplyForm?.buttonText}
          buttonUrl={data?.headerApplyForm?.buttonUrl}
          newTab={data?.headerApplyForm?.newTab}
          id=''
        />
      )}

      <CareersForm data={data} />

      <div className='h-12.5' />
    </>
  );
}
