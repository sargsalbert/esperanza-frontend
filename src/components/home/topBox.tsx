'use client';

import { useViewportHeight } from '@/hooks/useViewportHeight';
import TopSection from './topSection';
import BookingWidget from './bookingWidget';
import {
  ComponentSharedBookingWidgetInput,
  ComponentSharedHeroSection,
} from '@/gql/graphql';

type TopBoxProps = {
  heroSection?: ComponentSharedHeroSection | null;
  bookingWidget?: ComponentSharedBookingWidgetInput | null;
};

export default function TopBox({ heroSection, bookingWidget }: TopBoxProps) {
  useViewportHeight();

  return (
    <div
      style={{
        maxHeight: 'calc(var(--vh, 1vh) * 100 - 143px)',
      }}
      className='relative mb-17.5 flex w-full md:mb-30 md:h-[calc(100dvh-179px)] lg:mb-39 lg:h-[calc(100dvh-225px)] 2xl:h-[calc(100dvh-238px)]'
    >
      <TopSection
        url={heroSection?.heroImage?.url}
        title={heroSection?.heroText}
      />
      <BookingWidget data={bookingWidget} />
    </div>
  );
}
