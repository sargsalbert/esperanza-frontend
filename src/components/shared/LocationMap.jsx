'use client';
import { useEffect, useRef, useState } from 'react';
import { mapStyles } from './map-styles';
import Image from 'next/image';

export default function LocationMap() {
  const mapRef = useRef();
  const infoWindowRef = useRef();
  const markerRef = useRef();
  const mapInstanceRef = useRef();
  const centerLocation = { lat: 54.605162428451145, lng: 24.74728891534038 };
  const locationName = 'ESPERANZA'; // You can customize this name
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });

  // Function to calculate and update the marker position
  const updateMarkerPosition = () => {
    if (
      showInfoWindow &&
      mapInstanceRef.current &&
      markerRef.current &&
      mapRef.current &&
      window.google
    ) {
      const map = mapInstanceRef.current;
      const marker = markerRef.current;

      // Convert to pixel position
      const scale = Math.pow(2, map.getZoom());
      const projection = map.getProjection();

      // Check if projection is available (sometimes not ready immediately)
      if (!projection) return;

      const bounds = map.getBounds();
      // Check if bounds is available (sometimes not ready immediately)
      if (!bounds) return;

      const nw = new window.google.maps.LatLng(
        bounds.getNorthEast().lat(),
        bounds.getSouthWest().lng(),
      );

      const worldCoordNW = projection.fromLatLngToPoint(nw);
      const worldCoord = projection.fromLatLngToPoint(marker.getPosition());

      // Calculate pixel offset
      const pixelOffset = new window.google.maps.Point(
        Math.floor((worldCoord.x - worldCoordNW.x) * scale),
        Math.floor((worldCoord.y - worldCoordNW.y) * scale),
      );

      // Update position state
      setMarkerPosition({
        x: pixelOffset.x,
        y: pixelOffset.y,
      });
    }
  };

  // Handle outside clicks
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        infoWindowRef.current &&
        !infoWindowRef.current.contains(event.target) &&
        showInfoWindow
      ) {
        setShowInfoWindow(false);
      }
    }

    // Add event listener when the info window is shown
    if (showInfoWindow) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showInfoWindow]);

  // Update position when info window is shown
  useEffect(() => {
    if (showInfoWindow) {
      // Small delay to ensure map has rendered properly
      setTimeout(updateMarkerPosition, 10);
    }
  }, [showInfoWindow]);

  // Set up window resize handler
  useEffect(() => {
    // Function to handle resize events
    const handleResize = () => {
      if (showInfoWindow) {
        updateMarkerPosition();
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showInfoWindow]);

  useEffect(() => {
    window.initMap = () => {
      if (!mapRef.current) return;

      const google = window.google;
      if (!google || !google.maps) return;

      // Setup the map
      const map = new google.maps.Map(mapRef.current, {
        center: centerLocation,
        zoom: 7,
        minZoom: 2, // Set minimum zoom level (maximum zoom out)
        maxZoom: 18, // Optional: Set maximum zoom level (maximum zoom in)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        cameraControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        zoomControl: true,
        styles: mapStyles,
      });

      // Store map instance in ref for position calculations
      mapInstanceRef.current = map;

      // Add marker
      const marker = new google.maps.Marker({
        position: centerLocation,
        map: map,
        title: locationName,
        icon: {
          url: `${window.location.origin}/AA.png`,
          scaledSize: new google.maps.Size(58, 72), // Updated size to match your AA.png dimensions
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(29, 36), // Updated anchor point to center the marker (half of width and height)
        },
      });

      // Store marker in ref for position calculations
      markerRef.current = marker;

      // Make marker clickable and show info window
      marker.addListener('click', (e) => {
        // Stop event propagation to prevent map click from closing the info window immediately
        if (e && typeof e.stop === 'function') {
          e.stop();
        }
        setShowInfoWindow(true);
      });

      // Add click listener to map to close info window when clicking anywhere on the map
      map.addListener('click', () => {
        if (showInfoWindow) {
          setShowInfoWindow(false);
        }
      });

      // Listen for zoom changes
      map.addListener('zoom_changed', updateMarkerPosition);

      // Listen for center changes (panning)
      map.addListener('center_changed', updateMarkerPosition);

      // Listen for bounds changes (includes both zoom and pan)
      map.addListener('bounds_changed', updateMarkerPosition);

      // Listen for idle (when map stops moving)
      map.addListener('idle', updateMarkerPosition);
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBClg9cxA11EPVdMsa4Xad6AuSETnTd7Y4&callback=initMap`;
      //   script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else if (window.google && window.google.maps) {
      window.initMap();
    }

    return () => {
      window.initMap = undefined;
    };
  }, []);

  return (
    <div className='relative h-full w-full'>
      <div ref={mapRef} className='h-full w-full overflow-hidden' />

      {showInfoWindow && (
        <div
          ref={infoWindowRef}
          className='absolute cursor-pointer overflow-hidden bg-white'
          style={{
            width: '240px',
            height: '180px',
            position: 'absolute',
            left: `${markerPosition.x - 120}px`, // Center horizontally relative to marker
            top: `${markerPosition.y - 155}px`, // Position above the marker (adjust for infoWindow height)
            zIndex: 100,
          }}
          onClick={() => {
            // Open Google Maps with the location
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${centerLocation.lat},${centerLocation.lng}`;
            window.open(googleMapsUrl, '_blank');
            setShowInfoWindow(false);
          }}
        >
          <div className='flex flex-col'>
            <div className='relative h-[130px] w-full'>
              <Image
                src='/forMap.jpg'
                alt={locationName}
                fill
                className='object-cover'
              />
            </div>
            <h2 className='flex h-[50px] items-center justify-center bg-gray-700 text-center text-xl text-gray-50'>
              {locationName}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
