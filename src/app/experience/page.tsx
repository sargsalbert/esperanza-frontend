import { items2, sectionsExperience } from '@/components/home/data';
import SectionGrid from '@/components/home/sectionGrid';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';

export default async function Experience() {
  return (
    <>
      <PageHeader imgUrl='/resort-5.jpg' title='Experiences' />

      <SectionHeader
        smallTitle='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'
        title='Experiences'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        showKnowMore={false}
      />

      {sectionsExperience.map((v, index) => (
        <div key={v.id} className='mb-12.5 sm:mb-15 lg:mb-20'>
          <ImageWithCard
            title={v.title}
            features={v.features}
            tabs={v.tabs}
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

      <SectionGrid items={items2} />

      <div className='h-12.5' />
    </>
  );
}
