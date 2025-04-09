'use client';
import { useEffect, useRef } from 'react';

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.initMap = () => {
      if (!mapRef.current) return;

      const google = window.google;
      if (!google || !google.maps) return;

      new google.maps.Map(mapRef.current, {
        center: { lat: 54.60534713902967, lng: 24.747201746021133 },
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        cameraControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        zoomControl: true,
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBClg9cxA11EPVdMsa4Xad6AuSETnTd7Y4&callback=initMap`;
      //   script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      window.initMap();
    }

    return () => {
      window.initMap = undefined as never;
    };
  }, []);

  return <div ref={mapRef} className='h-full w-full overflow-hidden' />;
}

// Properly type the Google Maps API
declare global {
  interface Window {
    initMap: (() => void) | undefined;
    google:
      | {
          maps: {
            Map: new (
              element: HTMLElement,
              options: {
                center: { lat: number; lng: number };
                zoom: number;
                mapTypeId?: unknown;
                streetViewControl?: boolean;
                mapTypeControl?: boolean;
                fullscreenControl?: boolean;
                scrollwheel?: boolean;
                zoomControl?: boolean;
                scaleControl?: boolean;
                cameraControl?: boolean;
              },
            ) => unknown;
            MapTypeId: {
              ROADMAP: unknown;
              SATELLITE: unknown;
              HYBRID: unknown;
              TERRAIN: unknown;
            };
          };
        }
      | undefined;
  }
}
