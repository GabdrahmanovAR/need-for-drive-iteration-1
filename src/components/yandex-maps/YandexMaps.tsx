import React from 'react';
import { Clusterer, Map, Placemark } from 'react-yandex-maps';
import './YandexMaps.scss';
import { connect } from 'react-redux';
import { IState } from '../../types/state';
import { ICity, ICityMarker, listOfCities } from '../../constants/cities';

interface IProps {
  cityCoords: number[],
}

const YandexMaps = ({ cityCoords }: IProps) => (
  <section className="maps">
    <header className="maps__header">Выбрать на карте:</header>
    <main>
      <Map
        state={{ center: cityCoords, zoom: 9 }}
        height={350}
        width={600}
      >
        <Clusterer>
          {listOfCities.map((city: ICity) => (
            city.markers.map((marker: ICityMarker, index: number) => (
              <Placemark
                geometry={marker.coordinates}
                options={{ preset: 'islands#blueCircleDotIcon' }}
                onClick={() => console.log('update')}
                key={`marker-${index}`}
              />
            ))
          ))}
        </Clusterer>
      </Map>
    </main>
  </section>
);

export default connect(
  (state: IState) => ({
    cityCoords: state.orderLocation.cityCoords,
  }),
)(YandexMaps);
