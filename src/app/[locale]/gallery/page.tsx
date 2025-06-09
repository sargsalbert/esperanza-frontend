import { GalleryQuery, UploadFile } from '@/gql/graphql';
import { fetchData } from '@/lib/apolloClient';
import { GALLERY_QUERY } from '@/lib/graphql/queries';
import { LocalePageProps } from '../destination/page';
import SectionHeader from '@/components/shared/SectionHeader';
import { DynamicGallery } from './DynamicGallery';
import { i18n } from '../../../../i18n-config';

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function Gallery({ params }: LocalePageProps) {
  const { locale } = await params;

  const data = await fetchData<GalleryQuery>(GALLERY_QUERY, { locale });

  return (
    <>
      <div className='mt-7.5 lg:mt-11 xl:mt-10.5'>
        <SectionHeader
          subtitle={data.gallery?.sectionText?.subtitle}
          title={data.gallery?.sectionText?.title}
          description={data.gallery?.sectionText?.description}
          buttonText={data.gallery?.sectionText?.buttonText}
          buttonUrl={data.gallery?.sectionText?.buttonUrl}
          newTab={data.gallery?.sectionText?.newTab}
          id=''
        />
      </div>

      <DynamicGallery
        images={
          data.gallery?.galleryImages?.multipleImages?.filter(
            (img): img is UploadFile => img !== null,
          ) ?? []
        }
      />
    </>
  );
}
