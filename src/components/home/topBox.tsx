'use client';

import TopSection from './topSection';
import BookingWidget from './bookingWidget';
import {
  ComponentSharedBookingWidgetInput,
  ComponentSharedHeroSection,
} from '@/gql/graphql';
import { useViewportHeight } from '@/hooks/useViewportHeight';

type TopBoxProps = {
  heroSection?: ComponentSharedHeroSection | null;
  bookingWidget?: ComponentSharedBookingWidgetInput | null;
};

export default function TopBox({ heroSection, bookingWidget }: TopBoxProps) {
  useViewportHeight();
  return (
    <div className='relative mb-17.5 flex h-[calc(var(--vh,1vh)*100-143px)] w-full md:mb-30 md:h-[calc(var(--vh,1vh)*100-179px)] lg:mb-39 lg:h-[calc(var(--vh,1vh)*100-225px)] 2xl:h-[calc(var(--vh,1vh)*100-238px)]'>
      <TopSection
        url={heroSection?.heroImage?.url}
        title={heroSection?.heroText}
      />
      <BookingWidget data={bookingWidget} />
    </div>
  );
}
