'use client';
import { useEffect, useRef } from 'react';
import { mapStyles } from './map-styles';

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const centerLocation = { lat: 54.605162428451145, lng: 24.74728891534038 };

  useEffect(() => {
    window.initMap = () => {
      if (!mapRef.current) return;

      const google = window.google;
      if (!google || !google.maps) return;

      const map = new google.maps.Map(mapRef.current, {
        center: centerLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        cameraControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        zoomControl: true,
        styles: mapStyles,
      });

      new google.maps.Marker({
        position: centerLocation,
        map: map,
        // icon: {
        //   url: '/logoMap.jpg', // Replace with your logo path
        //   //   scaledSize: new google.maps.Size(40, 40), // Adjust size as needed
        //   origin: new google.maps.Point(0, 0),
        //   anchor: new google.maps.Point(60, 66), // Center the marker on the position
        // },
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
                styles?: unknown;
              },
            ) => unknown;

            Marker: new (options: {
              position: { lat: number; lng: number };
              map: unknown;
              icon?: {
                url: string;
                scaledSize?: unknown;
                origin?: unknown;
                anchor?: unknown;
              };
              title?: string;
            }) => unknown;
            Size: new (width: number, height: number) => unknown;
            Point: new (x: number, y: number) => unknown;

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
