import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

const GlobeWidget = () => {
  const globeEl = useRef();
  const [location, setLocation] = useState(null);

  // Получаем геолокацию
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            altitude: 0.1, // уменьшил высоту маркера
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation({
            lat: 55.7558,
            lng: 37.6173,
            altitude: 0.1,
          });
        }
      );
    } else {
      setLocation({
        lat: 55.7558,
        lng: 37.6173,
        altitude: 0.1,
      });
    }
  }, []);

  return (
    <div className="globe-container">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={false}
        animateIn={true}
        pointOfView={location || { lat: 0, lng: 0, altitude: 1.5 }}
        pointsData={location ? [location] : []}
        pointColor={() => "#3dc80a"}
        pointRadius={3.5}
        pointAltitude={0}
        pointResolution={16}
        width={60}
        height={60}
        onGlobeReady={() => {
          if (globeEl.current && location) {
            globeEl.current.pointOfView(
              {
                lat: location.lat,
                lng: location.lng,
                altitude: 1.5,
              },
              1000
            );

            const controls = globeEl.current.controls();
            controls.autoRotate = true;
            controls.autoRotateSpeed = 1.5;
            controls.enableZoom = false;
            controls.enableRotate = false;
          }
        }}
        pointLabel={() => "Your location"}
        // Добавляем свечение точки
        rendererConfig={{
          postProcessing: {
            glow: {
              strength: 2.5,
              radius: 0.42,
            },
          },
        }}
      />
    </div>
  );
};

export default GlobeWidget;
