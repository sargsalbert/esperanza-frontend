import { itemExperiences, sectionsExperience } from '@/components/api/data';
import SectionGrid from '@/components/home/sectionGrid';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import { TabsData } from '@/components/shared/imageWithCard/types';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';

export default async function Experiences() {
  return (
    <>
      <PageHeader imgUrl='/resort-5.jpg' title='Experiences' />

      <SectionHeader
        smallTitle='The rhythm of nature, the luxury of time'
        title='Explore Esperanza'
        description='Time moves differently here. Whether active or unhurried, each experience at Esperanza Lake Resort is an invitation to reconnect – with the elements, with yourself, and with the quiet simplicity of being present. From lakefront moments and forest trails to gentle movement and open-air cinema nights, the pace is set by nature – and the rhythm is entirely your own.'
        showKnowMore={false}
      />

      {sectionsExperience.map((v, index) => (
        <div key={v.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs as TabsData[]}
            imageFirst={index % 2 !== 0}
            primaryButton={{
              text: 'Book',
            }}
            secondaryButton={{
              text: 'Menu',
            }}
          />
        </div>
      ))}

      <SectionGrid items={itemExperiences} />

      <div className='h-12.5' />
    </>
  );
}
