import Image from 'next/image';
import BookingWidget from '@/components/home/bookingWidget';
import SectionHeader from '@/components/shared/SectionHeader';
import Destination from '@/components/home/destination';
import { HOME_QUERY } from '@/lib/graphql/queries';
import { fetchData } from '@/lib/apolloClient';
import { HomeQuery, UploadFile } from '@/gql/graphql';
import SectionGrid from '@/components/home/sectionGrid';
import ImageWithOverlayCard from '@/components/home/imageWithOverlayCard';
import { LocalePageProps } from './destination/page';

export default async function Home({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<HomeQuery>(HOME_QUERY, { locale });

  return (
    <>
      <div className='relative mb-17.5 flex h-[calc(100vh-84px+39px)] w-full md:mb-30 md:h-[calc(100vh-110px+39px)] lg:mb-39 lg:h-[calc(100vh-110px+75px)] 2xl:h-[calc(100vh-123px+75px)]'>
        <div className='relative flex h-full w-full items-end'>
          <Image
            src={data.home?.heroSection?.heroImage?.url || ''}
            alt='Rooms & Suites'
            layout='fill'
            objectFit='cover'
          />
          <div className='relative z-1 flex h-[40%] w-full items-end justify-center bg-gradient-to-t from-black via-black/70 to-transparent pb-[72px] lg:pb-[155px]'>
            <h1 className='px-5 text-center text-[22px] font-semibold text-gray-50 sm:px-7.5 sm:text-[30px] lg:px-15 lg:text-[40px]'>
              {data.home?.heroSection?.heroText}
            </h1>
          </div>
        </div>
        <BookingWidget />
      </div>
      <SectionHeader
        subtitle={data.home?.destinationText?.subtitle}
        title={data.home?.destinationText?.title}
        description={data.home?.destinationText?.description}
        id=''
      />

      {data.home?.destinationImages && (
        <Destination
          images={
            data.home?.destinationImages?.multipleImages?.filter(
              (img): img is UploadFile => img !== null,
            ) ?? []
          }
        />
      )}

      {data.home?.headerTextWithSliderBlock?.length &&
        data.home.headerTextWithSliderBlock.map((d, index) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            <SectionHeader
              subtitle={d?.sectionText?.subtitle}
              title={d?.sectionText?.title}
              description={d?.sectionText?.description}
              id=''
            />
            <ImageWithOverlayCard
              features={d?.textImageSliderBlock}
              imageFirst={index % 2 !== 0}
            />
          </div>
        ))}

      <SectionHeader
        subtitle={data.home?.wellnessText?.subtitle}
        title={data.home?.wellnessText?.title}
        description={data.home?.wellnessText?.description}
        id=''
      />

      <SectionGrid sectionGridSlider={data.home?.wellnessGridSlider ?? []} />

      {data.home?.HeaderTextWithSliderBlockTwo?.length &&
        data.home.HeaderTextWithSliderBlockTwo.map((d, index) => (
          <div key={index} className='mb-12.5 sm:mb-15 lg:mb-20'>
            <SectionHeader
              subtitle={d?.sectionText?.subtitle}
              title={d?.sectionText?.title}
              description={d?.sectionText?.description}
              id=''
            />
            <ImageWithOverlayCard
              features={d?.textImageSliderBlock}
              imageFirst={index % 2 !== 0}
            />
          </div>
        ))}

      <SectionHeader
        subtitle={data.home?.experiencesText?.subtitle}
        title={data.home?.experiencesText?.title}
        description={data.home?.experiencesText?.description}
        id=''
      />
      <SectionGrid sectionGridSlider={data.home?.experiencesGridSlider ?? []} />

      <div className='h-12.5' />
    </>
  );
}
