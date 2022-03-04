import React from 'react';
import {
  Clusterer, Map, Placemark, YMaps, YMapsApi,
} from 'react-yandex-maps';
import './YandexMaps.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ICity, ICityMarker, listOfCities } from '../../constants/fake-data/cities';
import { changeLocationDataAction } from '../../redux/actions/OrderInfoAction';
import { orderInfoSelector } from '../../selectors/orderInfoSelector';
import { EMPTY_ARRAY } from '../../constants/common';

const YandexMaps = () => {
  const { location } = useSelector(orderInfoSelector);
  const dispatch = useDispatch();

  const handleMarkerClick = (markerName: string, markerCoords: number[], markerCity: string, markerCityCoords: number[]) => {
    dispatch(changeLocationDataAction(markerCity, markerCityCoords, 'city'));
    dispatch(changeLocationDataAction(markerName, markerCoords, 'marker'));
  };

  const cities = ['Москва', 'Санкт-Петербург'];

  const handleOnLoadMap = (maps: YMapsApi) => {
    cities.forEach((city) => {
      maps.geocode(city, { results: 1 })
        .then((response: any) => {
          const mark = response.geoObjects.get(0);
          const coords = mark.geometry.getCoordinates();
          console.log(coords);
        });
    });
  };

  return (
    <section className="maps">
      <header className="maps__header">Выбрать на карте:</header>
      <main>
        <YMaps
          query={{
            ns: 'use-load-option',
            apikey: '70daecdb-7319-4705-83ef-c1f61e7799a7',
            load: 'geocode',
          }}
        >
          <Map
            onLoad={handleOnLoadMap}
            state={{
              center: location.markerCoords === EMPTY_ARRAY ? location.cityCoords : location.markerCoords,
              zoom: location.markerCoords === EMPTY_ARRAY ? 9 : 14,
            }}
            height="45vh"
            width="100%"
            modules={['geocode']}
          >
            <Clusterer options={{ preset: 'islands#darkGreenClusterIcons' }}>
              {listOfCities.map((city: ICity) => (
                city.markers.map((marker: ICityMarker, index: number) => (
                  <Placemark
                    geometry={marker.coordinates}
                    options={{ preset: 'islands#darkGreenCircleDotIcon' }}
                    onClick={() => handleMarkerClick(marker.street, marker.coordinates, city.name, city.coordinates)}
                    key={`marker-${index}`}
                  />
                ))
              ))}
            </Clusterer>
          </Map>
        </YMaps>
      </main>
    </section>
  );
};

export default YandexMaps;
