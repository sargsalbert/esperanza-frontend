import SectionGrid from '@/components/sectionGrid';
import ImageWithOverlayCard from '@/components/imageWithOverlayCard';

export type ItemProps = {
  imageUrl: string; // Changed from url to imageUrl to match the prop type
  title: string;
  description: string;
};

export const items: ItemProps[] = [
  {
    imageUrl: '/resort-1.jpg',
    title: 'Sauna',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha․',
  },
  {
    imageUrl: '/resort-2.jpg',
    title: 'Pool',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha․',
  },
  {
    imageUrl: '/resort-3.jpg',
    title: 'TREATMENT ROOM',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha․',
  },
];

export default async function Home() {
  return (
    <>
      <ImageWithOverlayCard
        title='Villas'
        description='Lorem ipsum is simply dummy text of the printing and typesetting industry.'
        image='/resort-5.jpg'
      />
      <SectionGrid
        title='SPA'
        description='Relax and unwind at our luxurious spa.'
        items={items}
      />
    </>
  );
}
