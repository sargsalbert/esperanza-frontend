import { sectionsDining } from '@/components/api/data';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { TabsData } from '@/components/shared/imageWithCard/types';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';

export default async function Villas() {
  return (
    <>
      <PageHeader imgUrl='/resort-4.jpg' title='Dining' />

      <SectionHeader
        smallTitle='A culinary experience rooted in nature '
        title='Beyond the Table'
        description='At Esperanza Lake Resort, dining is guided by the seasons and defined by simplicity. Across two distinct restaurants, the focus is on pure ingredients, clean flavours, and thoughtful preparation – served in settings that invite you to pause and savour. More than a meal, each experience is designed to take you on a journey beyond – through place, memory, and quiet discovery.'
        showKnowMore={false}
      />

      {sectionsDining.map((v, index) => (
        <div key={v.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs as TabsData[]}
            imageFirst={index % 2 !== 0}
            primaryButton={{
              text: 'Reserve',
            }}
            secondaryButton={{
              text: 'Menu',
            }}
          />
        </div>
      ))}

      <div className='h-12.5' />
    </>
  );
}
