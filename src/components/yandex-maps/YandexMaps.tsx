import React from 'react';
import { Map } from 'react-yandex-maps';
import './YandexMaps.scss';

const YandexMaps = () => (
  <section className="maps">
    <header className="maps__header">Выбрать на карте:</header>
    <main>
      <Map defaultState={{ center: [54.314192, 48.403132], zoom: 9 }} height={350} width={600} />
    </main>
  </section>
);

export default YandexMaps;
