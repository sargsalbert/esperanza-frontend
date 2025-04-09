'use client';
import { useEffect, useRef } from 'react';

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      //   script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBClg9cxA11EPVdMsa4Xad6AuSETnTd7Y4&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      window.initMap = initMap;
    };

    // Initialize the map
    const initMap = () => {
      if (!mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 54.60493742949877, lng: 24.7470733550466 },
        zoom: 15,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        cameraControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        zoomControl: true,
        // scaleControl: true,
      });
    };

    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initMap();
    }

    return () => {
      delete window.initMap;
    };
  }, []);

  return <div ref={mapRef} className='h-full w-full overflow-hidden' />;
}
