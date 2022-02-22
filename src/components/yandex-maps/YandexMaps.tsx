import React from 'react';
import { Clusterer, Map, Placemark } from 'react-yandex-maps';
import './YandexMaps.scss';
import { connect } from 'react-redux';
import { IState } from '../../types/state';

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
          <Placemark
            geometry={[54.310599, 48.356279]}
            options={{ preset: 'islands#blueCircleDotIcon' }}
            onClick={() => console.log('update')}
          />
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
