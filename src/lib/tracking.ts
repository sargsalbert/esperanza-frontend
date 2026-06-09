type BookingTrackingParams = {
  buttonText?: string;
  buttonLocation?: string;
  destinationUrl?: string;
};

export const trackConversion = ({
  buttonText = '',
  buttonLocation = '',
  destinationUrl = '',
}: BookingTrackingParams) => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'booking_click',
    booking_action: 'check_availability',
    booking_button_text: buttonText,
    booking_button_location: buttonLocation,
    booking_destination_url: destinationUrl,
    page_url: window.location.href,
    page_path: window.location.pathname,
  });
};
