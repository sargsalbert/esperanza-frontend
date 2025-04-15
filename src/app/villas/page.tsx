import { sectionsVillas } from '@/components/home/data';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/villas/imageWithCard';

export default async function Villas() {
  return (
    <>
      <PageHeader imgUrl='/resort-7.jpg' title='THE PRINTING AND TYPESETTING' />

      <SectionHeader
        smallTitle='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'
        title='VILLAS'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        showKnowMore={false}
      />

      {sectionsVillas.map((v, index) => (
        <div key={v.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs}
            imageFirst={index % 2 !== 0}
            primaryButton={{
              text: 'Check Availability',
            }}
          />
        </div>
      ))}
      <div className='h-12.5' />
    </>
  );
}
