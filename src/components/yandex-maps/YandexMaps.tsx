import React, { FC } from 'react';
import {
  Clusterer, Map, Placemark, YMaps,
} from 'react-yandex-maps';
import './YandexMaps.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../../types/state';
import { ICity, ICityMarker, listOfCities } from '../../constants/cities';
import { changeLocationDataAction } from '../../redux/actions/OrderLocationAction';

interface IYandexMapsProps {
  cityCoords: number[],
  changeLocationData: (name: string, coords: number[], key: string) => void,
}

const YandexMaps: FC<IYandexMapsProps> = ({ cityCoords, changeLocationData }) => {
  const handleMarkerClick = (markerName: string, markerCoords: number[], markerCity: string, markerCityCoords: number[]) => {
    changeLocationData(markerCity, markerCityCoords, 'city');
    changeLocationData(markerName, markerCoords, 'marker');
  };

  return (
    <section className="maps">
      <header className="maps__header">Выбрать на карте:</header>
      <main>
        <YMaps>
          <Map
            state={{ center: cityCoords, zoom: 9 }}
            height="45vh"
            width="100%"
          >
            <Clusterer>
              {listOfCities.map((city: ICity) => (
                city.markers.map((marker: ICityMarker, index: number) => (
                  <Placemark
                    geometry={marker.coordinates}
                    options={{ preset: 'islands#blueCircleDotIcon' }}
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

export default connect(
  (state: IState) => ({
    cityCoords: state.orderLocation.cityCoords,
  }),
  (dispatch) => ({
    changeLocationData: bindActionCreators(changeLocationDataAction, dispatch),
  }),
)(YandexMaps);
