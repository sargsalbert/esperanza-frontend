import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { TabsData } from '@/components/shared/imageWithCard/types';
import { sectionsVillas } from '@/components/api/data';

export default async function Villas() {
  return (
    <>
      <PageHeader imgUrl='/resort-7.jpg' title='Villas' />

      <SectionHeader
        smallTitle='Exclusive private villas designed for complete immersion in nature'
        title='Private Heavens in Nature'
        description='For those seeking more space, more privacy, and a deeper sense of stillness, our villas offer an elevated escape experience. Thoughtfully designed and surrounded by nature, each one blends refined comfort with the beauty of the outdoors – ideal for longer stays and effortless living. Whether gathering with family and friends or retreating in quiet, the villas are a secluded extension of the Esperanza experience – calm, spacious, and deeply restorative.'
        showKnowMore={false}
      />

      {sectionsVillas.map((v, index) => (
        <div key={v.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs as TabsData[]}
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
