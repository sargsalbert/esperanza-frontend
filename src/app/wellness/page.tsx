import { sectionsGridWellness, sectionsWellness } from '@/components/api/data';
import SectionGrid from '@/components/home/sectionGrid';
import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageWithCard from '@/components/shared/imageWithCard/imageWithCard';
import Image from 'next/image';
import { TabsData } from '@/components/shared/imageWithCard/types';

export default async function Wellness() {
  return (
    <>
      <PageHeader imgUrl='/resort-55.jpg' title='Wellness' />

      <SectionHeader
        smallTitle='Elemental therapies and timeless rituals designed to reconnect body and mind'
        title='A Ritual of Renewal'
        description='A place of quiet renewal, The Spa Esperanza invites you to pause, breathe, and return to yourself. Inspired by the surrounding forest and lake, each element – from thermal rituals to tailored treatments – is designed to restore balance and deepen your connection to the present moment. Whether you come for a few hours or a full day, the experience is unhurried, natural, and deeply restorative.'
        showKnowMore={false}
      />

      <div className='mx-auto mb-12.5 grid max-w-[1480px] grid-cols-2 gap-1.5 px-5 sm:mb-15 sm:gap-2 md:px-7.5 lg:mb-20 lg:gap-3 2xl:px-15'>
        <div className='relative h-full w-full lg:aspect-7/10'>
          <Image src='/resort-777.jpg' alt='' layout='fill' objectFit='cover' />
        </div>

        <div className='flex flex-col gap-1.5 sm:gap-2 lg:gap-3'>
          <div className='relative aspect-7/5 h-1/2 w-full'>
            <Image src='/resort-999.jpg' alt='' fill objectFit='cover' />
          </div>
          <div className='relative aspect-7/5 h-1/2 w-full'>
            <Image src='/resort-3.jpg' alt='' fill objectFit='cover' />
          </div>
        </div>
      </div>

      <SectionGrid
        title='Facilities'
        description='Rooted in the natural elements of heat, air, water, and earth, our spa facilities are designed to restore balance and ease. From thermal rituals and calming hydrotherapy to light-filled spaces for movement and breath, each area invites quiet renewal. Whether you seek rest, release, or reconnection, the spa offers a gentle rhythm for body and mind.'
        items={sectionsGridWellness}
        showKnowMore={false}
      />

      {sectionsWellness.map((v, index) => (
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
      <div className='h-12.5' />
    </>
  );
}
