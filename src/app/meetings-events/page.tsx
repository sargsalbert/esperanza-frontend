import PageHeader from '@/components/shared/pageHeader';
import SectionHeader from '@/components/shared/SectionHeader';

export default async function MeetingsEvents() {
  return (
    <>
      <PageHeader imgUrl='/resort-7.jpg' title='Meetings & Events' />

      <SectionHeader
        smallTitle='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'
        title='Meetings & Events'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        showKnowMore={false}
      />

      <div className='h-12.5' />
    </>
  );
}
