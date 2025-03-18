import { ItemProps } from '@/app/home/page';
import ItemCard from './itemCard';
import SectionHeader from './sectionHeader ';

const SectionGrid = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: ItemProps[];
}) => (
  <>
    <SectionHeader title={title} description={description} />
    <div className='mx-15 grid grid-cols-3 gap-x-[15]'>
      {items.map((item, index) => (
        <ItemCard
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          key={index}
        />
      ))}
    </div>
  </>
);

export default SectionGrid;
