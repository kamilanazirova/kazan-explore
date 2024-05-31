import React, { useState } from 'react';
import { YMaps, Map, Polyline  } from 'react-yandex-maps';

const YandexMap: React.FC = () => {
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [startPoint, setStartPoint] = useState<string>('');
  const [endPoint, setEndPoint] = useState<string>('');
  const [route, setRoute] = useState<any>(null);

  const handleRouteBuild = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mapInstance) return;

    const geocode = async (address: string) => {
      const res = await mapInstance?.geocode(address);
      const coords = res.geoObjects.get(0).geometry.getCoordinates();
      return coords;
    };

    try {
      const startCoords = await geocode(startPoint);
      const endCoords = await geocode(endPoint);
      const multiRoute = new mapInstance.multiRouter.MultiRoute({
        referencePoints: [startCoords, endCoords],
        params: { results: 1 }
      }, { boundsAutoApply: true });

      setRoute(multiRoute);
      mapInstance.geoObjects.removeAll();
      mapInstance.geoObjects.add(multiRoute);
    } catch (error) {
      console.error('Error building route:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleRouteBuild}>
        <div>
          <label>Start Point: </label>
          <input type="text" value={startPoint} onChange={(e) => setStartPoint(e.target.value)} />
        </div>
        <div>
          <label>End Point: </label>
          <input type="text" value={endPoint} onChange={(e) => setEndPoint(e.target.value)} />
        </div>
        <button type="submit">Build Route</button>
      </form>

      <YMaps query={{ lang: 'en_US' }}>
        <div style={{ marginTop: '50px', width: '1200px', height: '500px' }}>
          <Map 
            defaultState={{ center: [55.798551, 49.106324], zoom: 12 }} 
            width="100%" 
            height="400px" 
            instanceRef={setMapInstance}
          >
            {route && <Polyline geometry={route.geometry.getCoordinates()} options={{ strokeColor: '#000', strokeWidth: 4 }} />}
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default YandexMap;
